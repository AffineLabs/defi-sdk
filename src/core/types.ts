import { ERC20, Forwarder, L2Vault, TwoAssetBasket } from "../typechain";

export interface GasInfo {
  txnCost: string;
  txnCostUSD: string;
}
export interface DryRunReceipt extends GasInfo {
  alpFee: string;
  alpFeePercent: string;
  dollarAmount: string;
  tokenAmount: string;
}
export interface FullTxReceipt extends DryRunReceipt, SmallTxReceipt {}

export interface SmallTxReceipt extends GasInfo {
  blockNumber: string;
  txnHash: string;
}

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

export type AlpineContracts = {
  alpSave: L2Vault;
  alpLarge: TwoAssetBasket;
  forwarder: Forwarder;
  usdc: ERC20;
};
export interface TokenInfo {
  amount: string; // in base unit
  price: string; // dollars / 1 base unit of token
  equity: string; // in dollars
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
