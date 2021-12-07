// @ts-check
import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import * as abiDecoder from "abi-decoder";
import * as usdcJson from "./smart_contracts/usdc.json";
import * as vaultJson from "./smart_contracts/dummyvault.json";
import * as typedefs from "./typedefs.js";

/**
 * @typedef {typedefs.TxnReceipt} TxnReceipt
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
    this.magic = new Magic("pk_test_4BC74945EEEA1A8A", { network: network });
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
   * disconnect a user from magic provider
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
   * get user's public address
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
      // filter by transactions that were sent to alpine contracts
      if (
        tx.to.toLowerCase() === vaultJson.address.toLowerCase() ||
        tx.to.toLowerCase() === usdcJson.address.toLowerCase()
      ) {
        const receipt = await this.provider.getTransactionReceipt(tx.hash);
        const parsedTx = this._parseTransaction(tx, receipt);
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
    await this._checkInvariants(contract);
    // the returned amounts are in micro units
    // need to divide them by 10^6 to convert to usdc and alpTokens
    const balance = await contract.balanceOf(this.userAddress);

    // contract returns only usdc balance
    if (contract.address === usdcJson.address) {
      return { balanceUSDC: this._toUnit(balance) };
    }

    const [, balanceMToken] = balance;
    const balanceToken = this._toUnit(balanceMToken);
    return {
      balanceUSDC: balanceToken, // the price of each alpToken is 1 for now
      balanceToken,
    };
  }

  /**
   * approve to transfer amountUSDC from user's wallet to contract
   * @param {ethers.Contract} contract the contract to transfer to
   * @param {String} amountUSDC amount in usdc to approve
   * @returns {Promise<TxnReceipt>} a receipt from the blockchain
   */
  async approveTransfer(contract, amountUSDC) {
    await this._checkInvariants(contract);
    // convert to micro usdc
    const amount = this._toMicroUnit(amountUSDC);
    const response = await this._approve(contract.address, amount);
    return response;
  }

  /**
   * deposit usdc to a vault
   * @param {ethers.Contract} contract the vault to deposit usdc to
   * @param {String} amountUSDC amount in usdc
   * @returns {Promise<TxnReceipt>} a receipt from the blockchain
   */
  async deposit(contract, amountUSDC) {
    await this._checkInvariants(contract);
    const amount = this._toMicroUnit(amountUSDC);
    const walletBalance = await this.usdcContract.balanceOf(this.userAddress);
    // wallet balance < amount to deposit
    if (walletBalance.lt(amount)) {
      throw new Error(
        `Insuffient balance at user wallet. Balance: ${this._toUnit(
          walletBalance,
        )}, Requested to deposit: ${amountUSDC}`,
      );
    }
    // check if user has sufficient allowance
    const allowance = await this.usdcContract.allowance(this.userAddress, contract.address);
    // allowance < amount
    if (allowance.lt(amount)) {
      throw new Error(
        `Insufficient allowance. Allowance: ${this._toUnit(
          allowance,
        )}, Required: ${amountUSDC}${+". Call approveTransfer() to increase the allowance."}`,
      );
    }
    const deposit = await this._deposit(contract, amount);
    return deposit;
  }

  /**
   * withdraw usdc from a vault
   * @param {ethers.Contract} contract the vault to withdraw usdc from
   * @param {String} amountUSDC amount in usdc
   * @returns {Promise<TxnReceipt>} a receipt from the blockchain
   */
  async withdraw(contract, amountUSDC) {
    await this._checkInvariants(contract);
    const amount = this._toMicroUnit(amountUSDC);
    const balance = await this.getUserBalance(contract);
    const balanceMUSDC = this._toMicroUnit(balance.balanceUSDC);

    // balance at vault < amount requested to withdraw
    if (balanceMUSDC.lt(amount)) {
      throw new Error(
        `${"Insuffient balance at user's vault account." + " Balance: "}${balance.balanceUSDC},` +
          ` Requested to withdraw: ${this._toUnit(amount)}`,
      );
    }
    const withdraw = await this._withdraw(contract, amount);
    return withdraw;
  }

  // private methods

  /**
   * check the class invariants
   * @param {ethers.Contract} contract
   */
  async _checkInvariants(contract = null) {
    if (!(await this.isConnected())) {
      throw new Error("Aborted. The user is not logged in.");
    }
    if (!this.connected) {
      throw new Error("Aborted. Account is not connected to magic. Call connect() first.");
    }
    if (contract !== null && !this._isTrustedContract(contract)) {
      throw new Error(`Aborted. Unknown contract: ${contract.address}`);
    }
  }

  /**
   * @param {ethers.providers.TransactionResponse} tx transaction response
   * @param {ethers.providers.TransactionReceipt} receipt transaction receipt
   * parse a transaction if its sent to an alpine contract
   * @returns {TxnReceipt} the parsed receipt of the transaction
   */
  _parseTransaction(tx, receipt) {
    const method = abiDecoder.decodeMethod(tx.data);
    const amount = ethers.BigNumber.from(method.params[1].value);
    return {
      method: method.name,
      amountUSDC: String(ethers.utils.formatUnits(amount, 6)),
      timestamp: tx.timestamp,
      gasPrice: String(ethers.utils.formatEther(tx.gasPrice)),
      txnFee: String(ethers.utils.formatEther(tx.gasPrice.mul(receipt.gasUsed))),
      contract: tx.to,
      txnHash: tx.hash,
      blockNumber: receipt.blockNumber,
    };
  }

  /**
   * check that the given contract is a trusted contract.
   * @param {ethers.Contract} contract the contract to test
   * @returns {boolean} whether the contract can be trusted
   */
  _isTrustedContract(contract) {
    return (
      contract.address.toLowerCase() === usdcJson.address.toLowerCase() ||
      contract.address.toLowerCase() === vaultJson.address.toLowerCase()
    );
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
   * call deposit with amount on a smart contract for the current user.
   * @param {ethers.Contract} contract an ethers smart contract object
   * @param {ethers.BigNumber} amount the amount to deposit
   * @returns {Promise<TxnReceipt>} returns a transaction receipt from
   * the blockchain
   */
  async _deposit(contract, amount) {
    const contractWithSigner = contract.connect(this.signer);
    const tx = await contractWithSigner.deposit(this.userAddress, amount);
    const receipt = await tx.wait();
    return this._parseTransaction(tx, receipt);
  }

  /**
   * call withdraw with amount on a smart contract for the current user.
   * @param {ethers.Contract} contract an ethers smart contract object
   * @param {ethers.BigNumber} amount the amount to withdraw
   * @returns {Promise<TxnReceipt>} returns a transaction receipt from
   * the blockchain
   */
  async _withdraw(contract, amount) {
    const contractWithSigner = contract.connect(this.signer);
    const tx = await contractWithSigner.withdraw(this.userAddress, amount);
    const receipt = await tx.wait();
    return this._parseTransaction(tx, receipt);
  }

  /**
   * call approve with amount on the usdc contract for the given contract address.
   * @param {string} contractAddress the receipient contract address
   * @param {ethers.BigNumber} amount the amount to approve
   * @returns {Promise<TxnReceipt>} returns a transaction receipt from
   * the blockchain
   */
  async _approve(contractAddress, amount) {
    const tx = await this.usdcContract.approve(contractAddress, amount);
    const receipt = await tx.wait();
    return this._parseTransaction(tx, receipt);
  }
}
export { Account };
