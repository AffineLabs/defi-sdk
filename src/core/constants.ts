import { ethers } from "ethers";
import { AllowedChainId } from "../types/account";

export const DEFAULT_WALLET = "magic";

// The chain id is a hexadecimal string preceeded by "0x"
export const DEFAULT_RAW_CHAIN_ID: AllowedChainId = process.env.CHAIN_ID
  ? (parseInt(process.env.CHAIN_ID) as AllowedChainId)
  : 80001;
// export const DEFAULT_CHAIN_ID = `0x${Number(rawId).toString(16)}`;
export function getChainIdFromRaw(chainId: AllowedChainId = DEFAULT_RAW_CHAIN_ID): string {
  return `0x${Number(chainId).toString(16)}`;
}

export const NETWORK_TYPE: "mumbai" | "mainnet" =
  process.env.NEXT_PUBLIC_NETWORK_TYPE === "mainnet" ? "mainnet" : "mumbai";

export const MAX_UINT = ethers.BigNumber.from(2).pow(256).sub(1);
