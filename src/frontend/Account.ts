import { Magic, MagicSDKAdditionalConfiguration } from "magic-sdk";
// @ts-ignore
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

import { AlpineDeFiSDK, types, init } from "../core";
import { AlpineProduct } from "../core/types";
import * as productActions from "../core/product";
import { setSimulationMode, PROVIDER } from "../core/cache";

const DEFAULT_WALLET = "magic";

class Account {
  magic?: Magic;
  signer!: ethers.Signer;
  biconomy!: ethers.providers.Web3Provider;
  userAddress?: string;
  walletType: "magic" | "metamask" = DEFAULT_WALLET;
  magicDidToken: string | null = null;
  // if true, send regular transaction, if false, use biconomy
  gas: boolean = false;

  /**
   * Creates an alpine account object
   */
  constructor() {}

  /**
   * connect the user account to magic's sdk. In particular,
   * login with with magic, get provider, signer and set up
   * the smart contracts.
   * @param email user's email address
   * @param walletType The type of wallet (metamask or magic)
   * @param network the name of the (polygon) network.
   */
  async connect(
    email: string,
    walletType: "magic" | "metamask" = DEFAULT_WALLET,
    network: "mainnet" | "mumbai" = "mumbai",
    shouldRunMagicTestMode?: boolean,
  ): Promise<string | null> {
    if (await this.isConnected(walletType)) return this.magicDidToken;
    this.walletType = walletType;

    const customNodeOptions = {
      rpcUrl: PROVIDER.connection.url,
      chainId: 80001,
    };

    const magicOptions: MagicSDKAdditionalConfiguration = {
      network: customNodeOptions,
    };

    if (shouldRunMagicTestMode) {
      magicOptions.testMode = true;
    }

    // the magic api key is public
    this.magic = new Magic(process.env.MAGIC_API_KEY || "", magicOptions);

    // Users will be connected to magic no matter what 'walletType' is
    console.time("login-with-magic");
    this.magicDidToken = await this.magic.auth.loginWithMagicLink({ email });
    console.timeEnd("login-with-magic");

    let walletProvider = new ethers.providers.Web3Provider(
      this.magic.rpcProvider as unknown as ethers.providers.ExternalProvider,
    );

    if (walletType === "metamask") {
      await this._checkIfMetamaskAvailable();
      // we know that window.ethereum exists here
      const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
      // MetaMask requires requesting permission to connect users accounts
      await metamaskProvider.send("eth_requestAccounts", []);
      walletProvider = metamaskProvider;
    }

    this.signer = walletProvider.getSigner();

    console.time("signer-get-address");
    this.userAddress = await this.signer.getAddress();
    console.timeEnd("signer-get-address");

    // console.time("init-Biconomy");
    // await this.initBiconomy(walletProvider);
    // console.timeEnd("init-Biconomy");

    console.time("init-contracts");
    await init(this.signer, this.biconomy);
    console.timeEnd("init-contracts");

    return this.magicDidToken;
  }
  async setSimulationMode(mode: boolean) {
    return setSimulationMode(mode);
  }

  private async initBiconomy(provider: ethers.providers.Web3Provider) {
    const biconomyRaw = new Biconomy(provider, {
      apiKey: "M4hdEfQhs.60f473cf-c78f-4658-8a02-153241eff1b2",
      debug: true,
      strictMode: true,
    });

    return new Promise((resolve, reject) => {
      biconomyRaw
        .onEvent(biconomyRaw.READY, () => {
          // set the biconomy provider
          this.biconomy = new ethers.providers.Web3Provider(biconomyRaw);
          resolve(null);
        })
        .onEvent(biconomyRaw.ERROR, (error: Error, message: string) => {
          reject(message);
        });
    });
  }

  /**
   * Disconnect a user from the magic provider
   */
  async disconnect(): Promise<void> {
    if (this.magic && (await this.magic.user.isLoggedIn())) await this.magic.user.logout();
    this.magicDidToken = null;
  }

  /**
   * Check if a user is connected to the magic provider
   * @returns Whether the user is connected to the magic provider
   */
  async isConnected(walletType: string = DEFAULT_WALLET): Promise<boolean> {
    return this.magicDidToken !== null;
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
   * get the user's public address
   * @returns user's public address
   */
  async getUserAddress() {
    return this.userAddress;
  }

  async setGasMode(useGas: boolean) {
    // this.biconomy is created upon connection and will always exist
    this.gas = useGas;
    const biconomyProvider = useGas ? undefined : this.biconomy;
    return init(this.signer, biconomyProvider);
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amountUSDC transaction amount in usdc
   * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   */
  approve(to: AlpineProduct, amountUSDC: string) {
    return AlpineDeFiSDK.approve(to, amountUSDC);
  }

  buyProduct(product: AlpineProduct, dollarAmount: number) {
    return productActions.buyProduct(product, dollarAmount);
  }

  sellProduct(product: AlpineProduct, dollarAmount: number) {
    return productActions.sellProduct(product, dollarAmount);
  }

  /**
   * Transfer usdc from user's wallet to another wallet
   * @param  to receipient address
   * @param amountUSDC amount in usdc
   * @param gas If set to true, the user pays gas. If false, we do a transaction via biconomy
   */
  async transfer(to: string, amountUSDC: string) {
    return AlpineDeFiSDK.transfer(to, amountUSDC);
  }

  /**
   * Mint USDC token to a wallet
   * @param {String} to receipient address
   * @param {number} amountUSDC amount in usdc
   */
  async mintUSDCTokens(to: string, amountUSDC: number) {
    return AlpineDeFiSDK.mintUSDC(to, amountUSDC);
  }

  getMagicDidToken(): string | null {
    return this.magicDidToken;
  }

  async generateMagicDidToken(): Promise<string | undefined> {
    const didToken = await this.magic?.user.generateIdToken();

    if (didToken) this.magicDidToken = didToken;

    return didToken;
  }

  async isLoggedInToMagic(): Promise<boolean> {
    return this.magic ? await this.magic.user.isLoggedIn() : false;
  }
}

class ReadAccount {
  userAddress: string;
  constructor(userAddress: string) {
    this.userAddress = userAddress;
  }

  async init() {
    return init(this.userAddress, undefined);
  }
  /**
   * get the current best estimate for gas price
   * @returns {Promise<String>} the best estimate for gas price in eth
   */
  async getGasPrice(): Promise<string> {
    return AlpineDeFiSDK.getGasPrice();
  }
  async getMaticBalance() {
    return AlpineDeFiSDK.getMaticBalance();
  }

  async getTokenInfo(product: AlpineProduct | "usdc") {
    return productActions.getTokenInfo(product);
  }
}

export { Account, ReadAccount };
