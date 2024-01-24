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
  productAllocation,
} from "../core/types";
import { portfolioSell, portfolioPurchase } from "../core/portfolio";
import { AlpineDeFiSDK, init } from "../core";
import { AlpineProduct } from "../core/types";
import * as productActions from "../core/product";
import { setSimulationMode } from "../core/cache";
import * as lockedWithdrawal from "../core/singleStrategy";
import { AllowedChainId, AllowedWallet, IConnectAccount, MetamaskError } from "../types/account";
import { DEFAULT_WALLET, getChainIdFromRaw, NETWORK_PARAMS, WALLETCONNECT_PROJECT_ID } from "../core/constants";
import {
  getEmergencyWithdrawalQueueTransfers,
  getUserEmergencyWithdrawalQueueRequests,
  txHasEnqueueEvent,
  vaultWithdrawableAssetAmount,
} from "../core/ewqueue";
import { getWeb3Provider, initMagic } from "./wallets";
import Provider, { UniversalProvider } from "@walletconnect/universal-provider";

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
  walletConnectProvider?: Provider;
  web3ModalInstance?: import("@web3modal/standalone").Web3Modal;

  /**
   * Creates an alpine account object
   */
  // constructor() {
  // }

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
    // get wallet provider based on wallet type
    let walletProvider: ethers.providers.Web3Provider | undefined;
    if (walletType === "magic" && email) {
      const { magic, provider } = await initMagic({ email, testMode: Boolean(shouldRunMagicTestMode), chainId });

      if (magic) this.magic = magic;
      walletProvider = provider;
    } else {
      walletProvider = await getWeb3Provider(walletType, chainId, this.walletConnectProvider, this.web3ModalInstance);
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
    else if (walletType === "walletConnect" && this.walletConnectProvider) {
      /**
       * we need to disconnect the wallet connect provider to close provider session
       * or this will cause the wallet connect provider to connect to the same session
       * when the user tries to connect again, For more info,
       * see: https://docs.walletconnect.com/2.0/specs/clients/sign/client-api
       */
      await this.walletConnectProvider.disconnect();
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

  async getChainId(walletType: AllowedWallet): Promise<string | undefined> {
    /**
     * `provider?.send("eth_chainId", [])` doesn't work for magic, but it works for other wallets
     * also, this.walletProvider is undefined when the user is not connected
     */
    if (walletType !== "magic" && this.selectedChainId) {
      const provider = await getWeb3Provider(
        walletType,
        this.selectedChainId,
        this.walletConnectProvider,
        this.web3ModalInstance,
      );
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

  setWalletConnectProvider(provider: Provider) {
    this.walletConnectProvider = provider;
  }

  getWalletConnectProvider(): Provider | undefined {
    return this.walletConnectProvider;
  }

  // setWeb3ModalInstance(web3ModalInstance: import("@web3modal/standalone").Web3Modal) {
  //   this.web3ModalInstance = web3ModalInstance;
  // }

  /**
   * This method will switch the wallet to the given chain id
   */
  async switchWalletToAllowedNetwork(walletType: AllowedWallet, chainId: AllowedChainId): Promise<void> {
    if (!window.ethereum && walletType === "metamask") {
      throw new Error("Metamask is not installed!");
    } else if (walletType === "walletConnect" && this.walletConnectProvider) {
      // case - user is using walletConnect
      // await this.walletConnectProvider.request({
      //   method: "wallet_switchEthereumChain",
      //   params: [{ chainId: _chain }],
      // });
      this.walletConnectProvider.setDefaultChain(`eip155:${chainId}`);
      this.selectedChainId = chainId;
      let _signer: ethers.Signer | undefined;

      if (this.walletProvider) {
        _signer = this.walletProvider.getSigner();
      }

      if (!_signer) {
        // find signer from the provider
        this.walletProvider = new ethers.providers.Web3Provider(this.walletConnectProvider);
        _signer = this.walletProvider.getSigner();
      }

      this.signer = _signer;
      return await init(_signer, this.biconomy, chainId);
    }

    const _provider = await getWeb3Provider(walletType, chainId, this.walletConnectProvider, this.web3ModalInstance);

    if (!_provider) {
      throw new Error("Provider is not available");
    }
    try {
      await _provider.send("wallet_switchEthereumChain", [{ chainId: getChainIdFromRaw(chainId) }]);
    } catch (error: unknown) {
      const err = error as MetamaskError;
      console.error("Error on switching ethereum chain", error);

      console.log("Error", err.code, {
        chainId,
        chainIdRaw: getChainIdFromRaw(chainId),
        NETWORK_PARAM: NETWORK_PARAMS[chainId],
        IS_USING_FORKED_MAINNET: process.env.IS_USING_FORKED_MAINNET,
        FORKED_NODE_URL_FOR_MATIC: process.env.FORKED_NODE_URL_FOR_MATIC,
      });

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
      return init(this.signer, this.biconomy, this.selectedChainId);
    }
  }

  async initWalletConnectProvider(web3Modal: import("@web3modal/standalone").Web3Modal) {
    // "@web3modal/standalone" is an ESM module, so we can't import it at the top of the file
    // also, there's issue with bundling it with Next.js, that's why we're initializing it on FE and importing it here
    // for more, visit - https://nextjs.org/docs/advanced-features/compiler#module-transpilation
    if (web3Modal) {
      this.web3ModalInstance = web3Modal;
    } else if (!this.web3ModalInstance) {
      throw new Error("Web3 modal instance is not initialized");
    }

    // Initialize Universal Provider
    const universalProvider = await UniversalProvider.init({
      // logger: "debug",
      projectId: WALLETCONNECT_PROJECT_ID,
      metadata: {
        name: "Affine DeFi",
        description: "Affine DeFi",
        url: "https://affinedefi.com",
        icons: [process.env.APP_LOGO_URL ?? ""],
      },
    }).catch((err: Error) => {
      console.error("Error on initializing wallet connect provider", err);
    });

    // Open modal on `display_uri` event
    universalProvider?.on("display_uri", async (uri?: string) => {
      this.web3ModalInstance?.openModal({ uri });
    });

    universalProvider?.on("session_delete", () => {
      console.log("session ended");
    });

    if (!universalProvider) {
      console.log("No provider found!!!");
      return;
    }
    this.setWalletConnectProvider(universalProvider);

    if (universalProvider?.session && this.walletType === "walletConnect") {
      this.walletConnectProvider = universalProvider;
      this.walletProvider = new ethers.providers.Web3Provider(universalProvider);
      this.signer = this.walletProvider.getSigner();
      this.userAddress = await this.signer.getAddress();
    }
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
