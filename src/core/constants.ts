import { ethers } from "ethers";
import { AllowedChainId, NetworkParams } from "../types/account";

export const DEFAULT_WALLET = "magic";

// The chain id is a hexadecimal string preceeded by "0x"
export const DEFAULT_RAW_CHAIN_ID: AllowedChainId = process.env.CHAIN_ID
  ? (parseInt(process.env.CHAIN_ID) as AllowedChainId)
  : 80001;

export function getChainIdFromRaw(chainId: AllowedChainId = DEFAULT_RAW_CHAIN_ID): string {
  return `0x${Number(chainId).toString(16)}`;
}

export const NETWORK_TYPE: "testnet" | "mainnet" =
  process.env.NEXT_PUBLIC_NETWORK_TYPE === "mainnet" ? "mainnet" : "testnet";

export const ALLOWED_CHAIN_IDS: AllowedChainId[] = NETWORK_TYPE === "mainnet" ? [1, 137] : [5, 80001];

export const MAX_UINT = ethers.BigNumber.from(2).pow(256).sub(1);

export const WALLETCONNECT_PROJECT_ID = process.env.WALLETCONNECT_PROJECT_ID;

export const NETWORK_PARAMS: { [index: number]: NetworkParams } = {
  1: {
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth"],
    blockExplorerUrls: ["https://etherscan.io"],
  },
  5: {
    chainName: "Goerli Testnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
    blockExplorerUrls: ["https://goerli.etherscan.io"],
  },
  137: {
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://polygonscan.com"],
  },
  80001: {
    chainName: "Polygon Mumbai Testnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
  },
};
