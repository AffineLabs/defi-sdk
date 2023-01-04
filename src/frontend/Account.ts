import { Magic } from "magic-sdk";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";
// import detectEthereumProvider from "@metamask/detect-provider";

import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer, productAllocation } from "../core/types";
import { portfolioSell, portfolioPurchase } from "../core/portfolio";
import { AlpineDeFiSDK, init } from "../core";
import { AlpineProduct, AlpineContracts } from "../core/types";
import * as productActions from "../core/product";
import { setSimulationMode } from "../core/cache";
import { AllowedChainId, AllowedWallet, IConnectAccount, MetamaskError } from "../types/account";
import { DEFAULT_RAW_CHAIN_ID, DEFAULT_WALLET, getChainIdFromRaw, NETWORK_PARAMS } from "../core/constants";
import {
  getEmergencyWithdrawalQueueTransfers,
  getUserEmergencyWithdrawalQueueRequests,
  txHasEnqueueEvent,
  vaultWithdrawableAssetAmount,
} from "../core/ewqueue";
import { getWeb3Provider, initMagic } from "./wallets";
import WalletConnectProvider from "@walletconnect/web3-provider";

class Account {
  magic!: Magic;
  signer!: ethers.Signer;
  biconomy!: ethers.providers.Web3Provider;
  userAddress?: string;
  walletType: AllowedWallet = DEFAULT_WALLET;
  walletProvider?: ethers.providers.Web3Provider;
  // if true, send regular transaction, if false, use biconomy
  gas = false;
  selectedChainId: AllowedChainId = DEFAULT_RAW_CHAIN_ID;

  /**
   * Creates an alpine account object
   */
  // constructor() {}

  /**
   * connect the user account to magic's sdk. In particular,
   * login with with magic, get provider, signer and set up
   * the smart contracts.
   * @param email user's email address
   */
  async connect({
    walletType,
    email,
    shouldRunMagicTestMode,
    getMessage,
    verify,
    chainId,
  }: IConnectAccount): Promise<void> {
    console.log("connected: ", this.isConnected(walletType, chainId));
    if (this.isConnected(walletType, chainId)) return;

    // get wallet provider based on wallet type
    let walletProvider: ethers.providers.Web3Provider | undefined;
    if (walletType === "magic" && email) {
      const { magic, provider } = await initMagic({ email, testMode: Boolean(shouldRunMagicTestMode), chainId });

      if (magic) this.magic = magic;
      walletProvider = provider;
    } else {
      walletProvider = await getWeb3Provider(walletType, chainId);
    }

    if (!walletProvider) return;

    // One day biconomy will be activated again
    // await this.initBiconomy(walletProvider);

    this.walletProvider = walletProvider;
    this.signer = walletProvider.getSigner();
    this.userAddress = await this.signer.getAddress();
    this.walletType = walletType;
    this.selectedChainId = chainId;

    if (getMessage && verify) {
      // case - user's wallet needs to be verified with nonce
      try {
        const _message = await getMessage(this.userAddress);
        const _signedMessage = await this.signer.signMessage(_message);
        await verify(_signedMessage, this.userAddress);
      } catch (error: unknown) {
        const err = error as MetamaskError;
        // case - user is not verified, should disconnect
        if (this.isConnected(walletType, this.selectedChainId)) await this.disconnect(walletType);
        throw new Error(err?.message ?? "Verification failed!");
      }
    }

    console.time("init-contracts");
    await init(this.signer, this.biconomy, undefined, chainId);
    console.timeEnd("init-contracts");
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
  async disconnect(walletType: AllowedWallet): Promise<void> {
    if (walletType === "magic" && this.magic?.user) await this.magic.user.logout();
    if (walletType === "walletConnect" && this.walletProvider) {
      /**
       * we need to disconnect the wallet connect provider to close provider session
       * or this will cause the wallet connect provider to connect to the same session
       * when the user tries to connect again, For more info,
       * see: https://docs.walletconnect.com/1.0/quick-start/dapps/web3-provider#provider-methods
       */
      const walletConnectProvider = this.walletProvider.provider as WalletConnectProvider;
      await walletConnectProvider.disconnect();
    }
    this.userAddress = undefined;
  }

  /**
   * Check if a user is connected to the magic provider
   * @returns Whether the user is connected to the magic provider
   */
  isConnected(walletType: string = DEFAULT_WALLET, chainId: AllowedChainId): boolean {
    return Boolean(this.userAddress) && walletType === this.walletType && this.selectedChainId === chainId;
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
    return init(this.signer, biconomyProvider, undefined, this.selectedChainId);
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amountUSDC transaction amount in usdc
   */
  approve(to: keyof AlpineContracts, amountUSDC: string) {
    return AlpineDeFiSDK.approve(to, amountUSDC);
  }

  portfolioSell(allocations: productAllocation, amount: number) {
    return portfolioSell(allocations, amount);
  }

  portfolioPurchase(alloctions: productAllocation, amount: number) {
    return portfolioPurchase(alloctions, amount);
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

  async getUserEmergencyWithdrawalQueueRequests(product: AlpineProduct): Promise<EmergencyWithdrawalQueueRequest[]> {
    return getUserEmergencyWithdrawalQueueRequests(product);
  }

  async vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<string> {
    return vaultWithdrawableAssetAmount(product);
  }

  async txHasEnqueueEvent(txHash: string): Promise<boolean> {
    return txHasEnqueueEvent(txHash);
  }

  async getEmergencyWithdrawalQueueTransfers(product: AlpineProduct): Promise<EmergencyWithdrawalQueueTransfer[]> {
    return getEmergencyWithdrawalQueueTransfers(product);
  }

  async isLoggedInToMagic(): Promise<boolean> {
    return this.magic?.user ? await this.magic.user.isLoggedIn() : false;
  }

  async getChainId(walletType: AllowedWallet): Promise<string | undefined> {
    /**
     * `provider?.send("eth_chainId", [])` doesn't work for magic, but it works for other wallets
     * also, this.walletProvider is undefined when the user is not connected
     */
    if (walletType !== "magic") {
      const provider = await getWeb3Provider(walletType, this.selectedChainId);
      return await provider?.send("eth_chainId", []);
    } else if (this.walletProvider) {
      const { chainId } = await this.walletProvider.getNetwork();
      return chainId.toString();
    }
    return;
  }

  async isConnectedToTheGivenChainId(walletType: AllowedWallet, chainId: AllowedChainId): Promise<boolean> {
    return (await this.getChainId(walletType)) === chainId.toString();
  }

  /**
   * This method will switch the wallet to the given chain id
   */
  async switchWalletToAllowedNetwork(walletType: AllowedWallet, chainId: AllowedChainId): Promise<void> {
    if (!window.ethereum && this.walletType === "metamask") {
      throw new Error("Metamask is not installed!");
    }

    const _provider = await getWeb3Provider(walletType, chainId);

    if (!_provider) {
      throw new Error("Provider is not available");
    }
    try {
      await _provider.send("wallet_switchEthereumChain", [{ chainId: getChainIdFromRaw(chainId) }]);
    } catch (error: unknown) {
      const err = error as MetamaskError;
      console.error("Error on switching ethereum chain", error);

      if (err.code === 4902) {
        /**
         * case - 4902 indicates that the chain has not been added to MetaMask.
         * @see https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
         */
        await _provider.send("wallet_addEthereumChain", [
          { ...NETWORK_PARAMS[chainId], chainId: getChainIdFromRaw(chainId) },
        ]);
      } else {
        throw new Error(err.message);
      }
    }

    if (chainId !== this.selectedChainId && _provider) {
      this.signer = _provider.getSigner();
      this.selectedChainId = chainId;
      return init(this.signer, this.biconomy, undefined, this.selectedChainId);
    }
  }
}

class ReadAccount {
  userAddress: string;
  chainId: AllowedChainId;

  constructor(userAddress: string, chainId: AllowedChainId) {
    this.userAddress = userAddress;
    this.chainId = chainId;
  }

  async init() {
    return init(this.userAddress, undefined, undefined, this.chainId);
  }
  /**
   * get the current best estimate for gas price
   * @returns {Promise<String>} the best estimate for gas price in eth
   */
  async getGasPrice(): Promise<string> {
    return AlpineDeFiSDK.getGasPrice();
  }
  async getGasBalance() {
    return AlpineDeFiSDK.getGasBalance();
  }

  async getTokenInfo(product: AlpineProduct | "usdc") {
    return productActions.getTokenInfo(product);
  }
}

export { Account, ReadAccount };
