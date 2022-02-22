import { Magic } from "magic-sdk";
import { EthNetworkName } from "@magic-sdk/types";
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";
import {
  TransactionResponse,
  TransactionReceipt,
} from "@ethersproject/abstract-provider";

import axios from "axios";
import { Signer } from "@ethersproject/abstract-signer";
import detectEthereumProvider from "@metamask/detect-provider";

import { AlpineContracts } from "./types";
import { AlpineDeFiSDK } from ".";

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

//docs.polygonscan.com/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
interface PolygonScanAPIResponse {
  blockNumber: string;
  blockHash: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  txreceipt_status: string;
  gasUsed: string;
  confirmations: string;
}

const DEFAULT_WALLET = "magic";

class Account {
  magic: Magic;
  contracts: AlpineContracts;
  signer: Signer;
  provider: ethers.providers.Web3Provider;
  biconomy: ethers.providers.Web3Provider;
  polygonscanApiKey: string;
  userAddress: string;
  walletType: string;

  /**
   * Creates an alpine account object
   * @param network the name of the network. Supports `mainnet` and `kovan` and `mumbai`
   */
  constructor(network: EthNetworkName | string = "kovan") {
    // the api key is public
    if (network.toLowerCase() === "mumbai") {
      const customNodeOptions = {
        rpcUrl:
          "https://polygon-mumbai.g.alchemy.com/v2/TeRjoE-o4Y1bws12B3OFtAr8pywW-23w",
        chainId: 80001,
      };
      this.magic = new Magic("pk_live_1EF4B8FEB56F7AA4", {
        network: customNodeOptions,
      });
      this.magic.network = "matic"; // TODO: why is this needed?
    } else {
      this.magic = new Magic("pk_live_1EF4B8FEB56F7AA4", {
        network: network as EthNetworkName,
      });
    }

    this.polygonscanApiKey = "7DHSDECZBDA4VHMEGHNK1T6CXIAUEVRAP2";
  }
  /**
   * connect the user account to magic's sdk. In particular,
   * login with with magic, get provider, signer and set up
   * the smart contracts.
   * @param email user's email address
   * @param walletType The type of wallet (metamask or magic)
   */
  async connect(email: string, walletType: string = DEFAULT_WALLET) {
    if (await this.isConnected(walletType)) return;

    this.walletType = walletType;
    if (walletType === "magic") {
      await this.magic.auth.loginWithMagicLink({ email });
    } else if (walletType === "metamask") {
      await this._checkIfMetamaskAvailable();
      // we know that window.ethereum exists here
      const metamaskProvider = new ethers.providers.Web3Provider(
        window.ethereum
      );
      // MetaMask requires requesting permission to connect users accounts
      await metamaskProvider.send("eth_requestAccounts", []);
    }

    const rawProvider =
      walletType === "magic"
        ? (this.magic
            .rpcProvider as unknown as ethers.providers.ExternalProvider)
        : window.ethereum;
    this.provider = new ethers.providers.Web3Provider(rawProvider);
    this.signer = this.provider.getSigner();
    this.userAddress = await this.signer.getAddress();

    const biconomyRaw = new Biconomy(this.provider, {
      apiKey: "M4hdEfQhs.60f473cf-c78f-4658-8a02-153241eff1b2",
      debug: true,
      strictMode: true,
    });

    this.contracts = await this.getAllContracts();

    return new Promise((resolve, reject) => {
      biconomyRaw
        .onEvent(biconomyRaw.READY, () => {
          // Initialize your dapp here like getting user accounts etc
          this.biconomy = new ethers.providers.Web3Provider(biconomyRaw);
          resolve(null);
        })
        .onEvent(biconomyRaw.ERROR, (error, message) => {
          reject(message);
        });
    });
  }

  /**
   * Disconnect a user from the magic provider
   */
  async disconnect() {
    // Nothing to disconnect in the metamask case (we just clear the previous userAddress)
    if (this.walletType === "magic") await this.magic.user.logout();
    this.signer = undefined;
    this.userAddress = undefined;
  }

  /**
   * Check if a user is connected to the magic provider
   * @returns Whether the user is connected to the magic provider
   */
  async isConnected(walletType: string = DEFAULT_WALLET): Promise<boolean> {
    // We set the user address to undefined when disconnecting
    // Also if the user refreshes the page then all of the state set in the constructor is wiped away
    // wallet type needs to be matched also
    return this.userAddress !== undefined && this.walletType !== undefined && this.walletType === walletType;
  }

  /**
   * This function throws if the window.ethereum object cannot be found
   */
  async _checkIfMetamaskAvailable() {
    if (typeof window === undefined || typeof window.ethereum === undefined) {
      throw new Error("MetaMask is unavailable!!");
    }

    const provider = await detectEthereumProvider();

    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    // for more - https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
    if (provider !== window.ethereum) {
      throw new Error("User might have multiple wallets installed");
    }
  }

  /**
   * check if a user is connected to the magic provider
   * @deprecated Use `isConnected` instead
   * @returns whether the user is connected to the magic provider
   */
  async isLoggedIn(): Promise<boolean> {
    return this.isConnected();
  }

  /**
   * get the user's public address
   * @returns user's public address
   */
  async getUserAddress(): Promise<string> {
    return this.userAddress;
  }

  /**
   * get all supported contracts in the alpine protocol
   * @returns {AlpineContracts} an object with all alpine contracts. Currently has
   * `usdc`, `alpSave`.
   */

  async getAllContracts(): Promise<AlpineContracts> {
    return AlpineDeFiSDK.getAllContracts(this.provider);
  }

  /**
   * get the current best estimate for gas price
   * @returns {Promise<String>} the best estimate for gas price in eth
   */
  async getGasPrice(): Promise<string> {
    return AlpineDeFiSDK.getGasPrice(this.provider);
  }

  /**
   * Get current usdc price of an alpine token. If there's 0 token in circulation
   * returns null.
   * @param {ethers.Contract} contract an alpine contract
   * @returns {Promise<String>} current token price
   */
  async getTokenPrice(contract: ethers.Contract): Promise<string> {
    // total value in micro usdc locked in the contract
    const tvlUSDC = await contract.globalTVL();
    // number of circulating micro tokens
    const numTokens = await contract.totalSupply();
    if (numTokens.isZero()) {
      return "0";
    } else {
      const price = tvlUSDC.div(numTokens);
      return price.toString();
    }
  }

  /**
   * get transaction history of the user with alpine smart contracts
   * @param {Number} page the page number
   * @param {Number} offset number of transanctions in the page
   * @param {String} sort `asc` or `desc`; sorts the transactions in ascending or decensing order
   *                      default is `desc`.
   * @returns {Promise<Array<TxnReceipt>>} An array of user transaction receipts
   **/
  /* // @returns {Promise<TxnReceipt[]>} an array of parsed transaction history
   * of the user
   */
  async getTransactionHistory(
    page: number,
    offset: number,
    sort: string = "desc"
  ): Promise<Array<TxnReceipt>> {
    const polygonscanUrl =
      "https://api-testnet.polygonscan.com/api?module=account&action=txlist" +
      `&address=${this.userAddress}` +
      "&startblock=0&endblock=99999999" +
      `&page=${page}&offset=${offset}&sort=${sort}` +
      `&apikey=${this.polygonscanApiKey}`;

    let data = [] as Array<PolygonScanAPIResponse>;
    data = (await axios.get(polygonscanUrl)).data.result;
    const parsedTxHistory: Array<TxnReceipt> = [];

    for (const tx of data) {
      const ticker = this._getContractTicker(tx.to);
      // filter by outgoing transactions that were sent to alpine contracts
      if (ticker === "unknown") continue;

      // fake TransactionResponse constructed from polygonscan data
      const fakeTx = {
        to: tx.to,
        data: tx.input,
        timestamp: Number(tx.timeStamp),
        hash: tx.hash,
        gasPrice: ethers.BigNumber.from(tx.gasPrice),
      } as TransactionResponse;

      const fakeReceipt = {
        gasUsed: tx.gasUsed,
        blockNumber: Number(tx.blockNumber),
      } as unknown as TransactionReceipt;

      const parsedTx = await this._parseTransaction(fakeTx, fakeReceipt);
      parsedTxHistory.push(parsedTx);
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
    // the returned amounts are in micro units
    // need to divide them by 10^6 to convert to usdc and alpTokens
    const balance = await contract.balanceOf(this.userAddress);
    if (contract.address == this.contracts.usdc.address) {
      return {
        balanceUSDC: this._toUnit(balance),
        balanceToken: this._toUnit(balance),
      };
    } else {
      let tokenPrice = await this.getTokenPrice(contract);
      // no token in circulation, so assume the price is 0
      if (tokenPrice == null) {
        tokenPrice = "0";
      }
      return {
        balanceUSDC: this._toUnit(
          balance.mul(ethers.BigNumber.from(tokenPrice))
        ),
        balanceToken: this._toUnit(balance),
      };
    }
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amountUSDC transaction amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async approve(
    to: string,
    amountUSDC: string,
    gas: boolean = true
  ): Promise<string> {
    // convert to micro usdc
    const amount = this._toMicroUnit(amountUSDC);

    const usdcContract = this.contracts.usdc.connect(this.signer);
    const response = this._blockchainCall(
      usdcContract,
      "approve",
      [to, amount],
      gas
    );
    return response;
  }

  /**
   * deposit usdc to a vault, and get alp tokens in return
   * @param {ethers.Contract} contract the vault to deposit usdc to
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async buyToken(
    contract: ethers.Contract,
    amountUSDC: string,
    gas: boolean = true
  ): Promise<string> {
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
      [amount],
      gas
    );
    return receipt;
  }

  /**
   * sell alp token and withdraw usdc from a vault (to user's wallet by default)
   * @param {ethers.Contract} contract the vault to withdraw usdc from
   * @param {String} amountUSDC amount in usdc to sell
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async sellToken(
    contract: ethers.Contract,
    amountUSDC: string,
    gas: boolean = true
  ): Promise<string> {
    const tokenPrice = ethers.BigNumber.from(
      await this.getTokenPrice(contract)
    );
    const amount = this._toMicroUnit(amountUSDC);

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
      [amount],
      gas
    );
    return sellReceipt;
  }

  /**
   * transfer usdc from user's wallet to another wallet
   * @param {String} to receipient address
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<string>} a transaction receipt from the blockchain
   */
  async transfer(
    to: string,
    amountUSDC: string,
    gas: boolean = true
  ): Promise<string> {
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
      gas
    );
    return receipt;
  }

  /**
   * Mint USDC token to a wallet
   * @param {String} to receipient address
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async mintUSDCTokens(
    to: string,
    amountUSDC: string,
    gas: boolean = true
  ): Promise<TxnReceipt | string> {
    const amount = this._toMicroUnit(amountUSDC);

    if (amount.isNegative() || amount.isZero()) {
      throw new Error("amount must be positive.");
    }

    const usdcContract = this.contracts.usdc.connect(this.signer);
    const receipt = this._blockchainCall(
      usdcContract,
      "mint",
      [to, amount],
      gas
    );
    return receipt;
  }

  // private methods

  /**
   * call a smart contract method with arguments
   * @param {ethers.Contract} contract smart contract
   * @param {String} method the method name
   * @param {Array} args the arguments to the method
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<String>} a transaction receipt from the blockchain
   */
  async _blockchainCall(
    contract: ethers.Contract,
    method: string,
    args: Array<any>,
    gas: boolean
  ): Promise<string> {
    // connect the smart contract with this user's signer
    contract = contract.connect(this.signer);

    if (!gas) {
      contract = this.contracts.relayer.connect(this.signer);
      console.log({ contract });

      const biconomy = this.biconomy;
      console.log({ biconomy });

      console.log({ method }, args);
      const { data } = await contract.populateTransaction[method](...args);

      console.log({ data });
      const txParams = {
        data,
        to: this.contracts.relayer.address,
        from: this.userAddress,
        signatureType: "EIP712_SIGN",
      };
      console.log({ txParams });

      // Biconomy team note: Ethers does not allow providing custom options while sending transaction
      // See comment from CTO of biconomy: https://github.com/ethers-io/ethers.js/discussions/1313#discussioncomment-399944
      // Also See https://ethereumbuilders.gitbooks.io/guide/content/en/ethereum_json_rpc.html#eth_sendtransaction
      // Signature type is not an expected field in the object passed into the array
      // Biconomy reads this field and passes on your transaction
      try {
        const tx = await biconomy.send("eth_sendTransaction", [txParams]);
        console.log(`Transaction hash ${tx}`);
        return tx;

        // Wait for tx to be mined
        // biconomy.once(tx, (transaction) => {
        //   console.log(transaction);
        //   return "success";
        // });
      } catch (err) {
        console.error("send err: ", err);
        return err;
      }
    }

    const tx = await contract[method].apply(null, args);
    const receipt = await tx.wait();
    // tx's timestamp could be empty, so get it from the block
    tx.timestamp = (
      await this.provider.getBlock(receipt.blockNumber)
    ).timestamp;
    return "success";
  }

  /**
   * parse blockchain response for a transaction
   * @param {TransactionResponse} tx transaction response
   * @param {TransactionReceipt} receipt transaction block
   * parse a transaction if its sent to an alpine contract
   * @returns {Promise<TxnReceipt>} the parsed receipt of the transaction
   */
  async _parseTransaction(
    tx: TransactionResponse,
    receipt: TransactionReceipt
  ): Promise<TxnReceipt> {
    const contract = this.contracts[this._getContractTicker(tx.to)];
    const { data, value } = tx;
    const txDescription = contract.interface.parseTransaction({ data, value });
    const { name } = txDescription;

    // Deposit uses "amountToken", withdraw uses "shares", while transfer/approve use "amount"
    let amount =
      txDescription.args.amountToken ||
      txDescription.args.amount ||
      txDescription.args.shares;
    amount = ethers.BigNumber.from(amount);
    // for withdraw method of the smart contract, amount is in tokens, so
    // convert that to usdc
    if (name === "withdraw") {
      const tokenPrice = ethers.BigNumber.from(
        await this.getTokenPrice(contract)
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
      method: methodDict[txDescription.name],
      amount: String(ethers.utils.formatUnits(amount, 6)),
      timestamp: tx.timestamp,
      gasPrice: String(ethers.utils.formatEther(tx.gasPrice)),
      txnCost: String(
        ethers.utils.formatEther(tx.gasPrice.mul(receipt.gasUsed))
      ),
      contractAddress: tx.to,
      txnHash: tx.hash,
      blockNumber: receipt.blockNumber,
      status: true,
      ticker: this._getContractTicker(tx.to),
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
      case this.contracts.usdc.address.toLowerCase():
        return "usdc";
      default:
        return "unknown";
    }
  }
}
export { Account };
