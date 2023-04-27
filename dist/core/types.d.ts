import { Forwarder, L2Vault, Router, TwoAssetBasket, EmergencyWithdrawalQueue, Vault } from "../typechain";
import { ethers } from "ethers";
export interface GasInfo {
    txnCost: string;
    gasPrice: string;
}
export interface DryRunReceipt extends GasInfo {
    alpFee: string;
    alpFeePercent: string;
    dollarAmount: string;
    tokenAmount: string;
}
export interface FullTxReceipt extends DryRunReceipt, SmallTxReceipt {
}
export interface SmallTxReceipt extends GasInfo {
    blockNumber: string;
    txnHash: string;
}
export declare const alpineProducts: readonly ["alpSave", "alpLarge", "ethEarn", "ethWethEarn"];
export type AlpineProduct = typeof alpineProducts[number];
export declare const polygonProducts: readonly ["alpSave", "alpLarge"];
export type PolygonProduct = typeof polygonProducts[number];
export type productAmounts = {
    [key in PolygonProduct]?: string;
};
export type productBalances = {
    [key in PolygonProduct]: ethers.BigNumber;
};
export type productAllocation = {
    [key in PolygonProduct]: number;
};
export interface BothContracts {
    usdc: ethers.Contract;
}
export interface PolygonContracts extends BothContracts {
    alpSave: L2Vault;
    alpLarge: TwoAssetBasket;
    forwarder: Forwarder;
    router: Router;
    ewQueue: EmergencyWithdrawalQueue;
}
export interface EthContracts extends BothContracts {
    ethEarn: Vault;
    ethWethEarn: Vault;
    weth: ethers.Contract;
    router: Router;
}
export interface AlpineContracts extends PolygonContracts, EthContracts {
}
export interface TokenInfo {
    amount: string;
    price: string;
    equity: string;
}
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
    balanceUSDC: string;
}
export interface EmergencyWithdrawalQueueRequest {
    pos: number;
    shares: string;
    sharesValueInAsset: string;
}
export interface EmergencyWithdrawalQueueTransfer {
    shares: string;
    sharesValueInAsset: string;
    txHash: string;
    timestamp: Date;
}
