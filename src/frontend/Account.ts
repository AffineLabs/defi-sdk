import { Magic } from "magic-sdk";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";
// import detectEthereumProvider from "@metamask/detect-provider";

import {
  EmergencyWithdrawalQueueRequest,
  EmergencyWithdrawalQueueTransfer,
  SSVWithdrawalRequestInfo,
  WithdrawSlippageByProduct,
  productAllocation,
} from "../core/types";
import { portfolioSell, portfolioPurchase } from "../core/portfolio";
import { AlpineDeFiSDK, init } from "../core";
import { AlpineProduct } from "../core/types";
import * as productActions from "../core/product";
import { setSimulationMode } from "../core/cache";
import * as lockedWithdrawal from "../core/singleStrategy";
import { AllowedChainId, AllowedWallet, IConnectAccount, MetamaskError } from "../types/account";
import {
  ALLOWED_CHAIN_IDS,
  DEFAULT_WALLET,
  getChainIdFromRaw,
  NETWORK_PARAMS,
  WALLETCONNECT_PROJECT_ID,
  WITHDRAW_SLIPPAGE_BY_PRODUCT,
} from "../core/constants";
import {
  getEmergencyWithdrawalQueueTransfers,
  getUserEmergencyWithdrawalQueueRequests,
  txHasEnqueueEvent,
  vaultWithdrawableAssetAmount,
} from "../core/ewqueue";
import { getWeb3Provider, initMagic } from "./wallets";
import { Web3Modal } from "@web3modal/ethers5/dist/types/src/client";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5";

class Account {
  magic!: Magic;
  signer!: ethers.Signer;
  biconomy!: ethers.providers.Web3Provider;
  userAddress?: string;
  walletType?: AllowedWallet = DEFAULT_WALLET;
  walletProvider?: ethers.providers.Web3Provider;
  // if true, send regular transaction, if false, use biconomy
  gas = false;
  selectedChainId?: AllowedChainId;
  web3ModalInstance?: Web3Modal;

  /**
   * connect the user account to wallet provider and initialize
   * the smart contracts.
   * @param {IConnectAccount} options - the options to connect the account
   * 
   * @returns {Promise<void>} a promise that resolves when the account is connected
   * 
   * @example
   * ```typescript
   * const account = new Account();
   * account.initWeb3Modal(); // initialize web3modal
   * await account.connect({
   *  walletType: "metamask",
   *  chainId: 1,
   * });
   * ```
   */
  async connect({
    walletType,
    email,
    shouldRunMagicTestMode,
    getMessage,
    verify,
    chainId,
  }: IConnectAccount): Promise<void> {
    // get wallet provider based on wallet type
    let walletProvider: ethers.providers.Web3Provider | undefined;
    if (walletType === "magic" && email) {
      const { magic, provider } = await initMagic({ email, testMode: Boolean(shouldRunMagicTestMode), chainId });

      if (magic) this.magic = magic;
      walletProvider = provider;
    } else {
      walletProvider = await getWeb3Provider(walletType, chainId, this.web3ModalInstance);
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
    await init(this.signer, this.biconomy, chainId);
    console.timeEnd("init-contracts");
  }

  async initContracts(chainId: AllowedChainId, address?: string) {
    if (!address && !this.signer) {
      throw new Error("Address or signer is required to initialize contracts, try calling connect() first");
    }

    await init(this.signer ?? address, this.biconomy, chainId);
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
    else if (walletType === "walletConnect" && this.web3ModalInstance) {
      /**
       * we need to disconnect the wallet connect provider to close provider session
       * or this will cause the wallet connect provider to connect to the same session
       * when the user tries to connect again, For more info,
       * see: https://docs.walletconnect.com/2.0/specs/clients/sign/client-api
       */
      await this.web3ModalInstance.disconnect();
      if (typeof window !== "undefined") {
        // clear local storage to remove the wallet connect session + pairings
        window.localStorage.clear();
      }
    }
    this.userAddress = undefined;
    this.walletType = undefined;
    this.selectedChainId = undefined;
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

  getWithdrawSlippageByProduct(product: AlpineProduct) {
    const slippages = {...WITHDRAW_SLIPPAGE_BY_PRODUCT};
    return slippages[product];
  }

  async setGasMode(useGas: boolean) {
    // this.biconomy is created upon connection and will always exist
    this.gas = useGas;
    const biconomyProvider = useGas ? undefined : this.biconomy;
    return init(this.signer, biconomyProvider, this.selectedChainId);
  }

  /**
   * It checks if the user has approved the outgoing transaction, amount is optional.
   * If the 'amount' is not present, it checks if the user has approved the max amount (BigNumber.maxUint256 / 2)
   * @returns {Promise<boolean>} boolean indicating whether the user has approved the outgoing transaction
   */
  async isApproved(product: AlpineProduct, amount?: number): Promise<boolean> {
    return AlpineDeFiSDK.isApproved(product, amount);
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amountUSDC transaction amount in usdc
   */
  approve(to: AlpineProduct, amountUSDC?: string) {
    return AlpineDeFiSDK.approve(to, amountUSDC);
  }

  portfolioSell(allocations: productAllocation, amount: number) {
    return portfolioSell(allocations, amount);
  }

  portfolioPurchase(alloctions: productAllocation, amount: number) {
    return portfolioPurchase(alloctions, amount);
  }

  buyProduct(product: AlpineProduct, amount: number) {
    return productActions.buyProduct(product, amount);
  }

  sellProduct(product: AlpineProduct, amount: number) {
    return productActions.sellProduct(product, amount);
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

  async mintAffinePass() {
    return AlpineDeFiSDK.mint();
  }

  async mintWhitelistAffinePass(proof: string[]) {
    return AlpineDeFiSDK.mintWhitelist(proof);
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

  async getChainId(walletType: AllowedWallet): Promise<string | number | undefined> {
    /**
     * `provider?.send("eth_chainId", [])` doesn't work for magic, but it works for other wallets
     * also, this.walletProvider is undefined when the user is not connected
     */
    if (walletType === "walletConnect") {
      return this.web3ModalInstance?.getChainId();
    } else if (walletType !== "magic" && this.selectedChainId) {
      const provider = await getWeb3Provider(walletType, this.selectedChainId, this.web3ModalInstance);

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
    if (!window.ethereum && walletType === "metamask") {
      throw new Error("Metamask is not installed!");
    }
    if (walletType === "walletConnect" && !this.web3ModalInstance) {
      this.initWeb3Modal();
    }

    const _provider = await getWeb3Provider(walletType, chainId, this.web3ModalInstance);

    if (!_provider) {
      throw new Error("Provider is not available");
    }
    try {
      await _provider.send("wallet_switchEthereumChain", [{ chainId: getChainIdFromRaw(chainId) }]);
    } catch (error: unknown) {
      const err = error as MetamaskError;
      console.warn("Error on switching ethereum chain", error);

      if (err.code === 4902) {
        /**
         * case - 4902 indicates that the chain has not been added to MetaMask.
         * @see https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
         */
        await _provider.send("wallet_addEthereumChain", [
          { ...NETWORK_PARAMS[chainId], chainId: getChainIdFromRaw(chainId) },
        ]);
      }
    }

    if (chainId !== this.selectedChainId && _provider) {
      this.signer = _provider.getSigner();
      this.selectedChainId = chainId;
      return init(this.signer, this.biconomy, chainId);
    }
  }

  /**
   * Initiates the web3modal instance.
   * @returns {Web3Modal} the web3modal instance
   *
   * @remarks
   * This needs to be called before calling Account.connect() to initialize the web3modal instance
   *
   * @example
   * ```typescript
   * const account = new Account();
   * account.initWeb3Modal();
   * ```
   */
  initWeb3Modal(): Web3Modal | undefined {
    if (this.web3ModalInstance) {
      // case - we already have an instance of Web3Modal
      return this.web3ModalInstance;
    }

    // Initialize Web3Modal
    const modal = createWeb3Modal({
      ethersConfig: defaultConfig({
        metadata: {
          description: "Connect to your favorite wallet",
          name: "Affine DeFi",
          url: "https://affinedefi.com",
          icons: ["https://affinedefi.com/favicon.ico"],
        },
      }),
      chains: Object.keys(NETWORK_PARAMS).filter(chain => ALLOWED_CHAIN_IDS.includes(Number(chain))).map(chainId => ({
        chainId: Number(chainId),
        name: NETWORK_PARAMS[Number(chainId)].chainName,
        currency: NETWORK_PARAMS[Number(chainId)].nativeCurrency.symbol,
        rpcUrl: NETWORK_PARAMS[Number(chainId)].rpcUrls[0],
        explorerUrl: NETWORK_PARAMS[Number(chainId)].blockExplorerUrls?.[0] ?? "",
      })),
      projectId: WALLETCONNECT_PROJECT_ID,
    });

    this.web3ModalInstance = modal;

    return modal;
  }

  /// Single strategy locked withdrawal request

  async isStrategyLiquid() {
    return lockedWithdrawal.isLiquidToWithdraw();
  }

  async getWithdrawalRequest() {
    return lockedWithdrawal.getWithdrawalRequest();
  }

  async redeemWithdrawalRequest(reqInfo: SSVWithdrawalRequestInfo) {
    return lockedWithdrawal.redeemWithdrawRequest(reqInfo);
  }

  async getTotalWithdrawableAssets() {
    return lockedWithdrawal.getAssets();
  }

  async lastEpochBeginUTCTime(): Promise<number> {
    return lockedWithdrawal.epochStartTime();
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

  async saleIsActive(): Promise<boolean> {
    return AlpineDeFiSDK.saleIsActive();
  }

  async whitelistSaleIsActive(): Promise<boolean> {
    return AlpineDeFiSDK.whitelistSaleIsActive();
  }

  async isWhitelisted(address: string, proof: string[]): Promise<boolean> {
    return AlpineDeFiSDK.isWhitelisted(address, proof);
  }

  async mint() {
    return AlpineDeFiSDK.mint();
  }

  async mintWhitelist(proof: string[]) {
    return AlpineDeFiSDK.mintWhitelist(proof);
  }

  async getTokenInfo(product: AlpineProduct | "usdc" | "weth") {
    return productActions.getTokenInfo(product);
  }
}

export { Account };
