// @ts-check
import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import * as abiDecoder from "abi-decoder";
import * as usdcJson from "./smart_contracts/usdc.json";
import * as vaultJson from "./smart_contracts/dummyvault.json";
import * as typedefs from "./typedefs.js";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK";

/**
 * @typedef {typedefs.TxnReceipt} TxnReceipt
 */

/**
 * @typedef {typedefs.UserBalance} UserBalance
 */

class Account {
  /**
   * Creates an alpine account object
   * @param {String} network the name of the network. The default is kovan.
   */
  constructor(network = "kovan") {
    // the api key is public
    // @ts-ignore
    this.magic = new Magic("pk_test_4BC74945EEEA1A8A", { network });
    this.etherscanProvider = new ethers.providers.EtherscanProvider(network);
    abiDecoder.addABI(vaultJson.abi);
    abiDecoder.addABI(usdcJson.abi);
    this.connected = false;
  }

  /**
   * connect the user account to magic's sdk. In particular,
   * login with with magic, get provider, signer and set up
   * the smart contracts.
   * @param {String} email user's email address
   */
  async connect(email) {
    if (!(await this.isConnected())) {
      await this.magic.auth.loginWithMagicLink({ email });
    }
    // case: the user is logged in
    // @ts-ignore
    this.provider = new ethers.providers.Web3Provider(this.magic.rpcProvider);
    this.signer = this.provider.getSigner();
    this.userAddress = await this.signer.getAddress();
    this.usdcContract = new ethers.Contract(usdcJson.address, usdcJson.abi, this.signer);
    this.connected = true;
  }

  /**
   * disconnect a user from the magic provider
   */
  async disconnect() {
    await this.magic.user.logout();
    this.signer = null;
    this.connected = false;
  }

  /**
   * check if a user is connected to the magic provider
   * @returns {Promise<boolean>} whether the user is connected to the magic provider
   */
  async isConnected() {
    const status = await this.magic.user.isLoggedIn();
    return status;
  }

  /**
   * check if a user is connected to the magic provider
   * @deprecated Use `isConnected` instead
   * @returns {Promise<boolean>} whether the user is connected to the magic provider
   */
  async isLoggedIn() {
    const status = await this.magic.user.isLoggedIn();
    return status;
  }

  /**
   * get the user's public address
   * @returns {Promise<String>} user's public address
   */
  async getUserAddress() {
    await this._checkInvariants();
    return this.userAddress;
  }

  /**
   * get transaction history of the user with alpine smart contracts
   * @returns {Promise<TxnReceipt[]>} an array of parsed transaction history
   * of the user
   */
  async getTransactionHistory() {
    await this._checkInvariants();
    const txHistory = await this.etherscanProvider.getHistory(this.userAddress);
    const parsedTxHistory = [];
    for (const tx of txHistory) {
      const ticker = this._getContractTicker(tx.to);
      // filter by outgoing transactions that were sent to alpine contracts
      if (ticker !== "unknown") {
        const receipt = await this.provider.getTransactionReceipt(tx.hash);
        const parsedTx = this._parseTransaction(tx, receipt);
        parsedTx["ticker"] = ticker;
        parsedTx["status"] = 1;
        parsedTxHistory.push(parsedTx);
      }
    }
    return parsedTxHistory;
  }

  /**
   * gets user's current balance at the vault.
   * @param {ethers.Contract} contract a known smart contract.
   * @returns {Promise<UserBalance>} user balance as both usdc
   * and token denominated values.
   */
  async getUserBalance(contract) {
    await this._checkInvariants(contract.address);
    // the returned amounts are in micro units
    // need to divide them by 10^6 to convert to usdc and alpTokens
    if (contract.address === usdcJson.address) {
      const balance = await contract.balanceOf(this.userAddress);
      return { balanceUSDC: this._toUnit(balance) };
    } else{
      const [balanceMUSDC, balanceMToken] = await contract.balanceOf(this.userAddress);
      return {
        balanceUSDC: this._toUnit(balanceMToken),
        balanceToken: this._toUnit(balanceMToken)
      };
    }
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amountUSDC transaction amount in usdc
   * @param {boolean} dryrun If set to true, will do a dry run and return estimated
   * gas cost in eth
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async approve(to, amountUSDC, dryrun=false) {
    await this._checkInvariants(to);
    // convert to micro usdc
    const amount = this._toMicroUnit(amountUSDC);
    if (amount.isNegative()) {
      throw new Error("amount cannot be negative.");
    }
    const response = this._call(this.usdcContract, "approve", [to, amount], dryrun);
    return response;
  }

  /**
   * deposit usdc to a vault, and get alp tokens in return
   * @param {ethers.Contract} contract the vault to deposit usdc to
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} dryrun If set to true, will do a dry run and return estimated
   * gas cost in eth
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async buyToken(contract, amountUSDC, dryrun=false) {
    await this._checkInvariants(contract.address);
    const amount = this._toMicroUnit(amountUSDC);
    if (amount.isNegative()) {
      throw new Error("amount cannot be negative.");
    }
    const walletBalance = await this.usdcContract.balanceOf(this.userAddress);
    // wallet balance < amount to buy
    if (walletBalance.lt(amount)) {
      throw new Error(
        `Insuffient balance at user wallet. Balance: ${this._toUnit(
          walletBalance
        )}, Requested to buy: ${amountUSDC}`
      );
    }
    // check if user has sufficient allowance
    const allowance = await this.usdcContract.allowance(this.userAddress, contract.address);
    // allowance < amount
    if (allowance.lt(amount)) {
      throw new Error(
        `Insufficient allowance. Allowance: ${this._toUnit(
          allowance
        )}, Required: ${amountUSDC}${+". Call approve() to increase the allowance."}`
      );
    }
    const receipt = await this._call(contract, "deposit", [
      this.userAddress,
      amount,
    ], dryrun);
    return receipt;
  }

  /**
   * sell alp token and withdraw usdc from a vault (to user's wallet by default)
   * @param {ethers.Contract} contract the vault to withdraw usdc from
   * @param {String} amountUSDC amount in usdc
   * @param {String} to receipient address
  * @param {boolean} dryrun If set to true, will do a dry run and return estimated
   * gas cost in eth
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async sellToken(contract, amountUSDC, to = this.userAddress, dryrun=false) {
    await this._checkInvariants(contract.address);
    const amount = this._toMicroUnit(amountUSDC);
    if (amount.isNegative()) {
      throw new Error("amount cannot be negative.");
    }
    const balance = this._toMicroUnit(
      (await this.getUserBalance(contract)).balanceUSDC
    );

    // balance at vault < amount requested to sell
    if (balance.lt(amount)) {
      throw new Error(
        `${
          "Insuffient balance at user's vault account." + " Balance: "
        }${balance},` + ` Requested to sell: ${this._toUnit(amount)}`
      );
    }
    const sellReceipt = this._call(contract, "withdraw", [to, amount], dryrun);
    return sellReceipt;
  }

  /**
   * transfer usdc from user's wallet to another wallet
   * @param {String} to receipient address
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} dryrun If set to true, will do a dry run and return estimated
   * gas cost in eth
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async transfer(to, amountUSDC, dryrun=false) {
    await this._checkInvariants(to);
    const amount = this._toMicroUnit(amountUSDC);
    const balance = this._toMicroUnit(
      (await this.getUserBalance(this.usdcContract)).balanceUSDC
    );

    // balance at wallet < amount requested to transfer
    if (balance.lt(amount)) {
      throw new Error(
        `${"Insuffient balance at user's wallet." + " Balance: "}${balance},` +
          ` Requested to transfer: ${this._toUnit(amount)}`
      );
    }
    const receipt = this._call(this.usdcContract, "transfer", [to, amount], dryrun);
    return receipt;
  }

  // private methods

  /**
   * check the class invariants
   * @param {String} address
   */
  async _checkInvariants(address = null) {
    if (!(await this.isConnected())) {
      throw new Error("Aborted. The user is not logged in.");
    }
    if (!this.connected) {
      throw new Error("Aborted. Account is not connected to magic. Call connect() first.");
    }
    // verify that address is a valid ethereum address
    if (address !== null) {
      // will throw an error if the address is invalid
      ethers.utils.getAddress(address);
    }
  }

  /**
   * call a smart contract method with arguments
   * @param {ethers.Contract} contract smart contract
   * @param {String} method the method name
   * @param {Array} args the arguments to the method
   * @param {boolean} dryrun If set to true, will do a dry run and return estimated
   * gas cost in eth
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async _call(contract, method, args, dryrun) {
    // connect the smart contract with this user's signer
    const signer = contract.connect(this.signer);
    // do a dryrun and return estimated cost
    if(dryrun){
      // call the smart contract method using javascript's apply() fn
      const gasEstimate = await signer.estimateGas[method].apply(null, args);
      return ethers.utils.formatEther(gasEstimate);
    } else{
      const tx = await signer[method].apply(null, args);
      const receipt = await tx.wait();
      // tx's timestamp could be empty, so get it from the block
      tx.timestamp = (
        await this.provider.getBlock(receipt.blockNumber)
      ).timestamp;
      return this._parseTransaction(tx, receipt);
    }
  }

  /**
   * parse blockchain response for a transaction
   * @param {ethers.providers.TransactionResponse} tx transaction response
   * @param {ethers.providers.TransactionReceipt} receipt transaction block
   * parse a transaction if its sent to an alpine contract
   * @returns {TxnReceipt} the parsed receipt of the transaction
   */
  _parseTransaction(tx, receipt) {
    const method = abiDecoder.decodeMethod(tx.data);
    const amount = ethers.BigNumber.from(method.params[1].value);
    // convert smart contract method names to app's method names
    const methodDict = {
      deposit: "buy",
      withdraw: "sell",
      transfer: "transfer",
      approve: "approve",
    };
    return {
      method: methodDict[method.name],
      amountUSDC: String(ethers.utils.formatUnits(amount, 6)),
      timestamp: tx.timestamp,
      gasPrice: String(ethers.utils.formatEther(tx.gasPrice)),
      txnCost: String(
        ethers.utils.formatEther(tx.gasPrice.mul(receipt.cumulativeGasUsed))
      ),
      contractAddress: tx.to,
      txnHash: tx.hash,
      blockNumber: receipt.blockNumber,
    };
  }

  /**
   * converts a unit amount to equivalent micro unit amount
   * @param {string} amount an amount in unit eg. usdc.
   * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
   */
  _toMicroUnit(amount) {
    return ethers.utils.parseUnits(amount, 6);
  }

  /**
   * converts a micro unit amount to equivalent unit amount
   * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
   * @returns {string} equivalent amount in unit.
   */
  _toUnit(amount) {
    return String(ethers.utils.formatUnits(amount, 6));
  }

  /**
   * find ticker for alpine and usdc contract addresses
   * @param {String} address
   * @returns {String} contract ticker for alpine and usdc 
   * contracts, and unknown otherwise
   */
  _getContractTicker(address) {
    switch(address.toLowerCase()){
      case vaultJson.address.toLowerCase(): return "alpSave";
      case usdcJson.address.toLowerCase(): return "usdc";
      default:
        return "unknown";
    }
  }
}
export { Account };
