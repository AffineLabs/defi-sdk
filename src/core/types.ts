import { ethers } from "ethers";

export interface DryRunReceipt {
  txnCost: string;
  txnCostUSD: string;
  alpFee: string;
  alpFeePercent: string;
  dollarAmount: string;
  tokenAmount: string;
}
// This is metadata passed to the _blockChainCall for transactions where the user is buying or selling a basket (
// (e.g. alpSave or alpLarge)
export interface TxMetaData {
  // the dollar amount being bought or sold
  dollarAmount: string;
  // the amount of the basket token being bought or sold
  tokenAmount: string;
}

export interface SmallTxReceipt {
  blockNumber: string;
  txnHash: string;
}

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

type ContractName = "usdc" | "forwarder" | AlpineProduct;
export type AlpineContracts = {
  [key in ContractName]: ethers.Contract;
};

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
