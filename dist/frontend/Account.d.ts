import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer, SSVWithdrawalRequestInfo, productAllocation } from "../core/types";
import { AlpineProduct } from "../core/types";
import { AllowedChainId, AllowedWallet, IConnectAccount } from "../types/account";
import Provider from "@walletconnect/universal-provider";
declare class Account {
    magic: Magic;
    signer: ethers.Signer;
    biconomy: ethers.providers.Web3Provider;
    userAddress?: string;
    walletType?: AllowedWallet;
    walletProvider?: ethers.providers.Web3Provider;
    gas: boolean;
    selectedChainId?: AllowedChainId;
    walletConnectProvider?: Provider;
    web3ModalInstance?: import("@web3modal/standalone").Web3Modal;
    /**
     * Creates an alpine account object
     */
    /**
     * connect the user account to magic's sdk. In particular,
     * login with with magic, get provider, signer and set up
     * the smart contracts.
     * @param email user's email address
     */
    connect({ walletType, email, shouldRunMagicTestMode, getMessage, verify, chainId, }: IConnectAccount): Promise<void>;
    setSimulationMode(mode: boolean): Promise<void>;
    private initBiconomy;
    /**
     * Disconnect a user from the magic provider
     */
    disconnect(walletType: AllowedWallet): Promise<void>;
    /**
     * Check if a user is connected to the magic provider
     * @returns Whether the user is connected to the magic provider
     */
    isConnected(walletType: string | undefined, chainId: AllowedChainId): boolean;
    /**
     * get the user's public address
     * @returns user's public address
     */
    getUserAddress(): Promise<string | undefined>;
    setGasMode(useGas: boolean): Promise<void>;
    isMaxUSDCApproved(product: AlpineProduct): Promise<boolean>;
    /**
     * approve outgoing transaction with another wallet or smart contract for
     * the specified amount
     * @param {String} to the receipient address
     * @param {String} amountUSDC transaction amount in usdc
     */
    approve(to: AlpineProduct, amountUSDC?: string): Promise<import("../core/types").DryRunReceipt | import("../core/types").FullTxReceipt>;
    portfolioSell(allocations: productAllocation, amount: number): Promise<import("../core/types").GasInfo | import("../core/types").SmallTxReceipt>;
    portfolioPurchase(alloctions: productAllocation, amount: number): Promise<import("../core/types").GasInfo | import("../core/types").SmallTxReceipt>;
    buyProduct(product: AlpineProduct, amount: number): Promise<import("../core/types").DryRunReceipt | import("../core/types").FullTxReceipt>;
    sellProduct(product: AlpineProduct, amount: number): Promise<import("../core/types").DryRunReceipt | import("../core/types").FullTxReceipt>;
    /**
     * Transfer usdc from user's wallet to another wallet
     * @param  to receipient address
     * @param amountUSDC amount in usdc
     * @param gas If set to true, the user pays gas. If false, we do a transaction via biconomy
     */
    transfer(to: string, amountUSDC: string): Promise<import("../core/types").GasInfo | import("../core/types").SmallTxReceipt>;
    /**
     * Mint USDC token to a wallet
     * @param {String} to receipient address
     * @param {number} amountUSDC amount in usdc
     */
    mintUSDCTokens(to: string, amountUSDC: number): Promise<import("../core/types").GasInfo | import("../core/types").SmallTxReceipt>;
    getUserEmergencyWithdrawalQueueRequests(product: AlpineProduct): Promise<EmergencyWithdrawalQueueRequest[]>;
    vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<string>;
    txHasEnqueueEvent(txHash: string): Promise<boolean>;
    getEmergencyWithdrawalQueueTransfers(product: AlpineProduct): Promise<EmergencyWithdrawalQueueTransfer[]>;
    isLoggedInToMagic(): Promise<boolean>;
    getChainId(walletType: AllowedWallet): Promise<string | undefined>;
    isConnectedToTheGivenChainId(walletType: AllowedWallet, chainId: AllowedChainId): Promise<boolean>;
    setWalletConnectProvider(provider: Provider): void;
    getWalletConnectProvider(): Provider | undefined;
    /**
     * This method will switch the wallet to the given chain id
     */
    switchWalletToAllowedNetwork(walletType: AllowedWallet, chainId: AllowedChainId): Promise<void>;
    initWalletConnectProvider(web3Modal: import("@web3modal/standalone").Web3Modal): Promise<void>;
    isStrategyLiquid(): Promise<any>;
    getWithdrawalRequest(): Promise<SSVWithdrawalRequestInfo[]>;
    redeemWithdrawalRequest(reqInfo: SSVWithdrawalRequestInfo): Promise<any>;
    getTotalWithdrawableAssets(): Promise<number>;
    lastEpochBeginUTCTime(): Promise<number>;
}
declare class ReadAccount {
    userAddress: string;
    chainId: AllowedChainId;
    constructor(userAddress: string, chainId: AllowedChainId);
    init(): Promise<void>;
    /**
     * get the current best estimate for gas price
     * @returns {Promise<String>} the best estimate for gas price in eth
     */
    getGasPrice(): Promise<string>;
    getGasBalance(): Promise<string>;
    getTokenInfo(product: AlpineProduct | "usdc"): Promise<import("../core/types").TokenInfo>;
}
export { Account, ReadAccount };
