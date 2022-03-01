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

import { AlpineDeFiSDK, AlpineContracts, types } from "../core";

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
  constructor(network: EthNetworkName | string = "kovan", addressbookVersion = "latest") {
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
    this.walletType = undefined;
  }

  /**
   * Check if a user is connected to the magic provider
   * @returns Whether the user is connected to the magic provider
   */
  async isConnected(walletType: string = DEFAULT_WALLET): Promise<boolean> {
    // We set the user address to undefined when disconnecting
    // Also if the user refreshes the page then all of the state set in the constructor is wiped away
    // wallet type needs to be matched also
    return (
      this.userAddress !== undefined &&
      this.walletType !== undefined &&
      this.walletType === walletType
    );
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

  async getAllContracts(addressbookVersion: string): Promise<AlpineContracts> {
    return AlpineDeFiSDK.getAllContracts(this.provider, addressbookVersion);
  }

  /**
   * get the current best estimate for gas price
   * @returns {Promise<String>} the best estimate for gas price in eth
   */
  async getGasPrice(): Promise<string> {
    return AlpineDeFiSDK.getGasPrice(this.provider);
  }

  /**
   * get transaction history of the user with alpine smart contracts
   * @param {Number} page the page number
   * @param {Number} offset number of transanctions in the page
   * @param {String} sort `asc` or `desc`; sorts the transactions in ascending or decensing order
   *                      default is `desc`.
   * @returns An array of user transaction receipts
   **/
  async getTransactionHistory(
    page: number,
    offset: number,
    sort: string = "desc"
  ): Promise<Array<types.TxnReceipt>> {
    return AlpineDeFiSDK.getTransactionHistory(
      this.provider,
      this.userAddress,
      this.polygonscanApiKey,
      page,
      offset,
      sort
    );
  }

  /**
   * gets user's current balance at the vault.
   * @param {ethers.Contract} contract a known smart contract.
   * @returns user balance as both usdc
   * and token denominated values.
   */
  async getUserBalance(contract: ethers.Contract): Promise<types.UserBalance> {
    return AlpineDeFiSDK.getUserBalance(this.userAddress, contract);
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amountUSDC transaction amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   */
  async approve(to: string, amountUSDC: string, gas: boolean = true) {
    const biconomy = gas ? undefined : this.biconomy;
    return AlpineDeFiSDK.approve(this.signer, biconomy, to, amountUSDC);
  }

  /**
   * Deposit usdc to a vault, and get alp tokens in return
   * @param {ethers.Contract} contract the vault to deposit usdc to
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   */
  async buyToken(
    contract: ethers.Contract,
    amountUSDC: string,
    gas: boolean = true
  ) {
    const biconomy = gas ? undefined : this.biconomy;
    return AlpineDeFiSDK.buyToken(contract, this.signer, biconomy, amountUSDC);
  }

  async sellToken(
    contract: ethers.Contract,
    amountUSDC: string,
    gas: boolean = true
  ) {
    const biconomy = gas ? undefined : this.biconomy;
    return AlpineDeFiSDK.sellToken(contract, this.signer, biconomy, amountUSDC);
  }

  /**
   * Transfer usdc from user's wallet to another wallet
   * @param  to receipient address
   * @param amountUSDC amount in usdc
   * @param gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   */
  async transfer(to: string, amountUSDC: string, gas: boolean = true) {
    const biconomy = gas ? undefined : this.biconomy;
    return AlpineDeFiSDK.transfer(
      this.contracts.usdc,
      this.signer,
      biconomy,
      to,
      amountUSDC
    );
  }

  /**
   * Mint USDC token to a wallet
   * @param {String} to receipient address
   * @param {String} amountUSDC amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   * @returns {Promise<TxnReceipt|String>} a transaction receipt from the blockchain
   */
  async mintUSDCTokens(to: string, amountUSDC: string, gas: boolean = true) {
    const biconomy = gas ? undefined : this.biconomy;
    return AlpineDeFiSDK.mintUSDC(
      this.contracts.usdc,
      this.signer,
      biconomy,
      to,
      amountUSDC
    );
  }
}

export { Account };
