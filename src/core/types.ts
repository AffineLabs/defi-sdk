import {
  Forwarder,
  L2Vault,
  Router,
  TwoAssetBasket,
  EmergencyWithdrawalQueue,
  Vault,
  StrategyVault,
  WithdrawalEscrow,
  AffineGenesis,
  AffinePass,
  AffinePassBridge,
  VaultV2,
  AffineReStaking,
} from "../typechain";
import { ethers } from "ethers";

export interface GasInfo {
  txnCost: string;
  gasPrice: string;
}

export interface BasicReceiptInfo {
  alpFee: string;
  alpFeePercent: string;
  dollarAmount: string;
  tokenAmount: string;
}

export interface DryRunReceipt extends BasicReceiptInfo, GasInfo {}
export interface FullTxReceipt extends DryRunReceipt, SmallTxReceipt {}

export interface SmallTxReceipt extends GasInfo {
  blockNumber: string;
  txnHash: string;
}

export const alpineProducts = [
  "alpSave",
  "alpLarge",
  "ethEarn",
  "ethWethEarn",
  "ssvEthUSDEarn",
  "degen",
  "polygonDegen",
  "ethLeverage",
  "polygonLeverage",
  "baseUsdEarn",
  "baseLeverage",
  "polygonLevMaticX",
  "polygon6xLevMaticX",
  "affineReStaking",
] as const;
export type AlpineProduct = typeof alpineProducts[number];

export const polygonProducts = ["alpSave", "alpLarge", "polygonDegen"] as const;
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
  weth: ethers.Contract;
  router: Router;
}

export interface PolygonContracts extends BothContracts {
  alpSave: L2Vault;
  alpLarge: TwoAssetBasket;
  forwarder: Forwarder;
  ewQueue: EmergencyWithdrawalQueue;
  polygonDegen: StrategyVault;
  polygonLeverage?: Vault;
  affineGenesis?: AffineGenesis;
  affinePass?: AffinePass;
  affinePassBridgePolygon?: AffinePassBridge;
  polygonLevMaticX?: Vault;
  polygon6xLevMaticX?: Vault;
  matic: ethers.Contract;
}

export interface EthContracts extends BothContracts {
  ethEarn: Vault;
  ethWethEarn: Vault;
  ssvEthUSDEarn: StrategyVault;
  withdrawalEscrow: WithdrawalEscrow;
  degen: Vault;
  ethLeverage?: Vault;
  affinePassBridgeEthereum?: AffinePassBridge;
  affineReStaking?: AffineReStaking;
}

export interface BaseContracts extends BothContracts {
  baseUsdEarn?: VaultV2;
  baseLeverage: VaultV2;
}

export interface AlpineContracts extends PolygonContracts, EthContracts, BaseContracts {}

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
  token: string;
  value: string;
  claimed: boolean;
  claimable: boolean;
}

export type WithdrawSlippage = {
  max?: number;
  avg?: number;
};

export type WithdrawSlippageByProduct = {
  [key in AlpineProduct]: WithdrawSlippage;
};
