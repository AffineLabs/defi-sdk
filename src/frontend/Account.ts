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
import { DEFAULT_WALLET, getChainIdFromRaw, NETWORK_PARAMS, WITHDRAW_SLIPPAGE_BY_PRODUCT } from "../core/constants";
import {
  getEmergencyWithdrawalQueueTransfers,
  getUserEmergencyWithdrawalQueueRequests,
  txHasEnqueueEvent,
  vaultWithdrawableAssetAmount,
} from "../core/ewqueue";
import { getWeb3Provider, initMagic } from "./wallets";

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
    provider,
  }: IConnectAccount): Promise<ethers.providers.Web3Provider | undefined> {
    // get wallet provider based on wallet type
    let walletProvider: ethers.providers.Web3Provider | undefined;
    if (walletType === "magic" && email) {
      const { magic, provider } = await initMagic({ email, testMode: Boolean(shouldRunMagicTestMode), chainId });

      if (magic) this.magic = magic;
      walletProvider = provider;
    } else if (walletType === "walletConnect" && provider) {
      walletProvider = new ethers.providers.Web3Provider(provider);
    } else if (["metamask", "coinbase"].includes(walletType)) {
      walletProvider = await getWeb3Provider(walletType, chainId);
    }

    if (!walletProvider) {
      throw new Error("Wallet provider is not available");
    }

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

    // FE needs to initialize the contracts or chainId is changed
    return walletProvider;
  }

  /**
   * This method initializes the contracts for the user, this should be called
   * after the user is connected to the wallet, or the chainId is changed
   * @param chainId AllowedChainId - chain id
   * @param address string - user's address
   */
  async initContracts(chainId: AllowedChainId, provider: ethers.providers.Web3Provider) {
    const signer = provider.getSigner();
    await init(signer, this.biconomy, chainId);
  }

  async setSimulationMode(mode: boolean) {
    return setSimulationMode(mode);
  }

  /**
   * Disconnect a user from the magic provider
   */
  async disconnect(walletType: AllowedWallet): Promise<void> {
    if (walletType === "magic" && this.magic?.user) await this.magic.user.logout();
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
    const slippages = { ...WITHDRAW_SLIPPAGE_BY_PRODUCT };
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
  async isApproved(product: AlpineProduct, amount?: number, tokenAddress?: string): Promise<boolean> {
    return AlpineDeFiSDK.isApproved(product, amount, tokenAddress);
  }

  /**
   * approve outgoing transaction with another wallet or smart contract for
   * the specified amount
   * @param {String} to the receipient address
   * @param {String} amount transaction amount
   */
  approve(to: AlpineProduct, amount?: string, tokenAddress?: string) {
    return AlpineDeFiSDK.approve(to, amount, tokenAddress);
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
    if (!["magic", "walletConnect"].includes(walletType) && this.selectedChainId) {
      // case - user is connected to the wallet except magic and walletConnect
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
  async switchWalletToAllowedNetwork(
    walletType: AllowedWallet,
    chainId: AllowedChainId,
    provider?: ethers.providers.ExternalProvider,
  ): Promise<void> {
    if (!window.ethereum && walletType === "metamask") {
      throw new Error("Metamask is not installed!");
    }

    const _provider = provider
      ? new ethers.providers.Web3Provider(provider)
      : this.walletProvider ?? (await getWeb3Provider(walletType, chainId));

    if (!_provider) {
      throw new Error("Provider is not available");
    }
    try {
      await _provider.send("wallet_switchEthereumChain", [{ chainId: getChainIdFromRaw(chainId) }]);
    } catch (error: unknown) {
      const err = error as MetamaskError;
      console.warn("Error on switching ethereum chain", error);

      try {
        if (err.code === 4902) {
          /**
           * case - 4902 indicates that the chain has not been added to MetaMask.
           * @see https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
           */
          await _provider.send("wallet_addEthereumChain", [
            { ...NETWORK_PARAMS[chainId], chainId: getChainIdFromRaw(chainId) },
          ]);
        }
      } catch (error) {
        console.warn("Error on adding ethereum chain", error);
      }
    }

    if (chainId !== this.selectedChainId && _provider) {
      this.signer = _provider.getSigner();
      this.selectedChainId = chainId;
    }

    return init(this.signer, this.biconomy, chainId);
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

  async getTokenInfo(product: AlpineProduct | "usdc" | "weth", tokenAddress?: string) {
    return productActions.getTokenInfo(product, tokenAddress);
  }
}

export { Account };
