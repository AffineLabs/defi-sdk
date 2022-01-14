import { Magic } from "magic-sdk";
import { EthNetworkName } from "@magic-sdk/types";
import { ethers } from "ethers";
import { Signer } from "@ethersproject/abstract-signer";
import * as abiDecoder from "abi-decoder";
import * as typedefs from "./types.js";
import { AlpineDeFiSDK as alpsdk } from "./AlpineDeFiSDK.js";

export interface TxnReceipt {
  method: string;
  amount: string;
  timestamp: number;
  gasPrice: string;
  txnCost: string;
  contractAddress: string;
  txnHash: string;
  blockNumber: number;
  ticker: string;
  status: boolean;
}

export interface UserBalance {
  balanceToken: string;
  balanceUSDC: string;
}

export class Account {
  magic: Magic;
  etherscanProvider: ethers.providers.EtherscanProvider;
  contracts: typedefs.AlpineContracts;
  connected: boolean;
  signer: Signer;
  provider: ethers.providers.Web3Provider;
  userAddress: string;

  /**
   * Creates an alpine account object
   * @param {String} network the name of the network. The default is kovan.
   */
  constructor(network: EthNetworkName = "kovan") {
    // the api key is public
    this.magic = new Magic("pk_live_1EF4B8FEB56F7AA4", { network });
    this.etherscanProvider = new ethers.providers.EtherscanProvider(
      network,
      "XPRXXVT4ADKQF69MMIX6TH7MW1IVJ936BR"
    );
    this.contracts = alpsdk.getAllContracts(network);
    // add each contract's abi to the abi decoder
    Object.values(this.contracts).map((contract) =>
      abiDecoder.addABI(contract.abi)
    );
    this.connected = false;
  }

  /**
   * connect the user account to magic's sdk. In particular,
   * login with with magic, get provider, signer and set up
   * the smart contracts.
   * @param {String} email user's email address
   */
  async connect(email: string) {
    if (!(await this.isConnected())) {
      await this.magic.auth.loginWithMagicLink({
        email,
      });
    }
    // case: the user is logged in
    this.provider = new ethers.providers.Web3Provider(
      this.magic.rpcProvider as unknown as ethers.providers.ExternalProvider
    );
    this.signer = this.provider.getSigner();
    this.userAddress = await this.signer.getAddress();
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
  async isConnected(): Promise<boolean> {
    const status = await this.magic.user.isLoggedIn();
    return status;
  }

  /**
   * check if a user is connected to the magic provider
   * @deprecated Use `isConnected` instead
   * @returns {Promise<boolean>} whether the user is connected to the magic provider
   */
  async isLoggedIn(): Promise<boolean> {
    const status = await this.magic.user.isLoggedIn();
    return status;
  }

  /**
   * get the user's public address
   * @returns {Promise<String>} user's public address
   */
  async getUserAddress(): Promise<string> {
    await this._checkInvariants();
    return this.userAddress;
  }

  /**
   * get transaction history of the user with alpine smart contracts
   * @returns {Promise<TxnReceipt[]>} an array of parsed transaction history
   * of the user
   */
  async getTransactionHistory(): Promise<TxnReceipt[]> {
    await this._checkInvariants();
    const txHistory = await this.etherscanProvider.getHistory(this.userAddress);
    const parsedTxHistory = [];
    for (const tx of txHistory) {
      const ticker = this._getContractTicker(tx.to || "");
      // filter by outgoing transactions that were sent to alpine contracts
      if (ticker !== "unknown") {
        const receipt = await this.provider.getTransactionReceipt(tx.hash);
        const parsedTx = await this._parseTransaction(tx, receipt);
        parsedTx.ticker = ticker;
        parsedTx.status = true;
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
  async getUserBalance(contract: ethers.Contract): Promise<UserBalance> {
    await this._checkInvariants(contract.address);
    // the returned amounts are in micro units
    // need to divide them by 10^6 to convert to usdc and alpTokens
    const balance = await contract.balanceOf(this.userAddress);
    if (contract.address == this.contracts.usdc.address) {
      return {
        balanceUSDC: this._toUnit(balance),
        balanceToken: this._toUnit(balance),
      };
    } else {
      const tokenPrice = ethers.BigNumber.from(
        await alpsdk.getTokenPrice(contract)
      );
      return {
        balanceUSDC: this._toUnit(balance.mul(tokenPrice)),
        balanceToken: this._toUnit(balance),
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
  async approve(
    to: string,
    amountUSDC: string,
    dryrun: boolean = false
  ): Promise<TxnReceipt | string> {
    await this._checkInvariants(to);
    // convert to micro usdc
    const amount = this._toMicroUnit(amountUSDC);
    if (amount.isNegative() || amount.isZero()) {
      throw new Error("amount must be positive.");
    }
    const usdcContract = this.contracts.usdc.connect(this.signer);
    const response = this._blockchainCall(
      usdcContract,
      "approve",
      [to, amount],
      dryrun
    );
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
  async buyToken(
    contract: ethers.Contract,
    amountUSDC: string,
    dryrun: boolean = false
  ): Promise<TxnReceipt | string> {
    await this._checkInvariants(contract.address);
    const amount = this._toMicroUnit(amountUSDC);
    if (amount.isNegative() || amount.isZero()) {
      throw new Error("amount must be positive.");
    }
    const walletBalance = await this.contracts.usdc.balanceOf(this.userAddress);
    // wallet balance < amount to buy
    if (walletBalance.lt(amount)) {
      throw new Error(
        `Insuffient balance at user wallet. Balance: ${this._toUnit(
          walletBalance
        )}, Requested to buy: ${amountUSDC}`
      );
    }
    // check if user has sufficient allowance
    const allowance = await this.contracts.usdc.allowance(
      this.userAddress,
      contract.address
    );
    // allowance < amount
    if (allowance.lt(amount)) {
      const ticker = await contract.symbol();
      throw new Error(
        `Insufficient allowance. Allowance: ${this._toUnit(
          allowance
        )} USDC, Required: ${amountUSDC} USDC. ` +
          "Call approve() to increase the allowance."
      );
    }
    const receipt = await this._blockchainCall(
      contract,
      "deposit",
      [this.userAddress, amount],
      dryrun
    );
    return receipt;
  }

  /**
   * sell alp token and withdraw usdc from a vault (to user's wallet by default)
   * @param {ethers.Contract} contract the vault to withdraw usdc from
   * @param {String} amountUSDC amount in usdc to sell
   * @param {String} to receipient address
   * @param {boolean} dryrun If set to true, will do a dry run and return estimated
   * gas cost in eth
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async sellToken(
    contract: ethers.Contract,
    amountUSDC: string,
    to: string = this.userAddress,
    dryrun: boolean = false
  ): Promise<TxnReceipt | string> {
    await this._checkInvariants(contract.address);
    const tokenPrice = ethers.BigNumber.from(
      await alpsdk.getTokenPrice(contract)
    );
    const amount = this._toMicroUnit(amountUSDC).div(tokenPrice);
    if (amount.isNegative() || amount.isZero()) {
      throw new Error("amount must be positive.");
    }
    const balance = this._toMicroUnit(
      (await this.getUserBalance(contract)).balanceToken
    );

    // balance at vault < amount requested to sell
    if (balance.lt(amount)) {
      const ticker = await contract.symbol();
      throw new Error(
        "Insufficient token balance. " +
          `Balance: ${this._toUnit(balance)} ${ticker},` +
          `Requested to sell: ${this._toUnit(amount)} ${ticker},`
      );
    }
    const sellReceipt = this._blockchainCall(
      contract,
      "withdraw",
      [to, amount],
      dryrun
    );
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
  async transfer(
    to: string,
    amountUSDC: string,
    dryrun: boolean = false
  ): Promise<TxnReceipt | string> {
    await this._checkInvariants(to);
    const amount = this._toMicroUnit(amountUSDC);

    if (amount.isNegative() || amount.isZero()) {
      throw new Error("amount must be positive.");
    }

    const balance = this._toMicroUnit(
      (await this.getUserBalance(this.contracts.usdc)).balanceUSDC
    );

    // balance at wallet < amount requested to transfer
    if (balance.lt(amount)) {
      throw new Error(
        "Insuffient balance at user's wallet. " +
          `Balance: ${this._toUnit(balance)}, ` +
          `Requested to transfer: ${this._toUnit(amount)}`
      );
    }
    const usdcContract = this.contracts.usdc.connect(this.signer);
    const receipt = this._blockchainCall(
      usdcContract,
      "transfer",
      [to, amount],
      dryrun
    );
    return receipt;
  }

  // private methods

  /**
   * check the class invariants
   * @param {String} address
   */
  async _checkInvariants(address: string = "") {
    if (!this.connected || !this.isConnected()) {
      throw new Error(
        "Aborted. Account is not connected to magic. Call connect() first."
      );
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
  async _blockchainCall(
    contract: ethers.Contract,
    method: string,
    args: Array<any>,
    dryrun: boolean
  ): Promise<TxnReceipt | string> {
    // connect the smart contract with this user's signer
    contract = contract.connect(this.signer);
    // do a dryrun and return estimated cost
    if (dryrun) {
      // call the smart contract method using javascript's apply() fn
      const gasEstimate = await contract.estimateGas[method].apply(null, args);
      const gasPrice = await this.provider.getGasPrice();
      return ethers.utils.formatEther(gasEstimate.mul(gasPrice));
    } else {
      const tx = await contract[method].apply(null, args);
      const receipt = await tx.wait();
      // tx's timestamp could be empty, so get it from the block
      tx.timestamp = (
        await this.provider.getBlock(receipt.blockNumber)
      ).timestamp;
      return await this._parseTransaction(tx, receipt);
    }
  }

  /**
   * parse blockchain response for a transaction
   * @param {ethers.providers.TransactionResponse} tx transaction response
   * @param {ethers.providers.TransactionReceipt} receipt transaction block
   * parse a transaction if its sent to an alpine contract
   * @returns {Promise<TxnReceipt>} the parsed receipt of the transaction
   */
  async _parseTransaction(
    tx: ethers.providers.TransactionResponse,
    receipt: ethers.providers.TransactionReceipt
  ): Promise<TxnReceipt> {
    const method = abiDecoder.decodeMethod(tx.data);
    let amount = ethers.BigNumber.from(method.params[1].value);
    // for withdraw method of the smart contract, amount is in tokens, so
    // convert that to usdc
    if (method.name === "withdraw") {
      const contract = this.contracts[this._getContractTicker(tx.to)];
      const tokenPrice = ethers.BigNumber.from(
        await alpsdk.getTokenPrice(contract)
      );
      amount = amount.mul(tokenPrice);
    }
    // convert smart contract method names to app's method names
    const methodDict = {
      deposit: "buy",
      withdraw: "sell",
      transfer: "transfer",
      approve: "approve",
    };

    return {
      method: methodDict[method.name],
      amount: String(ethers.utils.formatUnits(amount, 6)),
      timestamp: tx.timestamp,
      gasPrice: String(ethers.utils.formatEther(tx.gasPrice)),
      txnCost: String(
        ethers.utils.formatEther(
          (tx.gasPrice || ethers.BigNumber.from(0)).mul(
            receipt.cumulativeGasUsed
          )
        )
      ),
      contractAddress: tx.to || "",
      txnHash: tx.hash,
      blockNumber: receipt.blockNumber,
      status: true,
      ticker: this._getContractTicker(tx.to || ""),
    };
  }

  /**
   * converts a unit amount to equivalent micro unit amount
   * @param {string} amount an amount in unit eg. usdc.
   * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
   */
  _toMicroUnit(amount: string): ethers.BigNumber {
    return ethers.utils.parseUnits(amount, 6);
  }

  /**
   * converts a micro unit amount to equivalent unit amount
   * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
   * @returns {string} equivalent amount in unit.
   */
  _toUnit(amount: ethers.BigNumber): string {
    return String(ethers.utils.formatUnits(amount, 6));
  }

  /**
   * find ticker for alpine and usdc contract addresses
   * @param {String} address
   * @returns {String} contract ticker for alpine and usdc
   * contracts, and unknown otherwise
   */
  _getContractTicker(address: string): string {
    switch (address.toLowerCase()) {
      case this.contracts.alpSave.address.toLowerCase():
        return "alpSave";
      case this.contracts.alpBal.address.toLowerCase():
        return "alpBal";
      case this.contracts.alpAggr.address.toLowerCase():
        return "alpAggr";
      case this.contracts.usdc.address.toLowerCase():
        return "usdc";
      default:
        return "unknown";
    }
  }
}
