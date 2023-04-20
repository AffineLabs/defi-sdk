import {
  Forwarder,
  L2Vault,
  Router,
  TwoAssetBasket,
  EmergencyWithdrawalQueue,
  Vault,
  StrategyVault,
  WithdrawalEscrow,
} from "../typechain";
import { ethers } from "ethers";

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

export const alpineProducts = ["alpSave", "alpLarge", "ethEarn", "ethWethEarn", "ssvEthUSDEarn"] as const;
export type AlpineProduct = typeof alpineProducts[number];

export const polygonProducts = ["alpSave", "alpLarge"] as const;
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
  ssvEthUSDEarn: StrategyVault;
  withdrawalEscrow: WithdrawalEscrow;
  router: Router;
}

export interface AlpineContracts extends PolygonContracts, EthContracts {}

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

export interface SSVWithdrawalRequestInfo {
  epoch: number;
  token: number;
  value: number;
  claimed: boolean;
  claimable: boolean;
}
