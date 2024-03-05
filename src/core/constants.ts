import { BigNumber, ethers } from "ethers";
import { AllowedChainId, NetworkParams } from "../types/account";
import { WithdrawSlippageByProduct } from "./types";

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

export const MAX_APPROVAL_AMOUNT: BigNumber = ethers.constants.MaxUint256;

export const WALLETCONNECT_PROJECT_ID = process.env.WALLETCONNECT_PROJECT_ID || "demo-project-id";

export const IS_USING_FORKED_MAINNET: boolean = process.env.IS_USING_FORKED_MAINNET === "true";

export const FORKED_NODE_URL_FOR_ETH = process.env.FORKED_NODE_URL_FOR_ETH || "";

export const FORKED_NODE_URL_FOR_MATIC = process.env.FORKED_NODE_URL_FOR_MATIC || "";

export const FORKED_NODE_URL_FOR_BASE = process.env.FORKED_NODE_URL_FOR_BASE || "";

export const CCIP_NETWORK_SELECTOR = {
  1: `5009297550715157269`,
  137: `4051577828743386545`,
};

/**
 * We will use this to show the slippage for the withdraw/ sell of the product/ baskets.
 * * Note: Please add the slippage here if you want to include a new product.
 */
export const WITHDRAW_SLIPPAGE_BY_PRODUCT: WithdrawSlippageByProduct = {
  ethLeverage: {
    max: 1,
    avg: 0.4,
  },
  ethEarn: {
    max: 1,
    avg: 0.5,
  },
  alpLarge: {
    max: 1,
    avg: 0.5,
  },
  ethWethEarn: {
    max: 1,
    avg: 0.5,
  },
  alpSave: {},
  degen: {},
  polygonDegen: {},
  polygonLeverage: {},
  baseUsdEarn: {},
  baseLeverage: {},
  ssvEthUSDEarn: {},
  polygonLevMaticX: {},
  affineReStaking: {},
};

export const NETWORK_PARAMS: { [index: number]: NetworkParams } = {
  1: {
    chainName: `Ethereum Mainnet${IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls:
      IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_ETH ? [FORKED_NODE_URL_FOR_ETH] : ["https://rpc.ankr.com/eth"],
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
    chainName: `Polygon Mainnet${IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls:
      IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_MATIC ? [FORKED_NODE_URL_FOR_MATIC] : ["https://polygon-rpc.com"],
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
  8453: {
    chainName: `Base Protocol Mainnet${IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls:
      IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_BASE ? [FORKED_NODE_URL_FOR_BASE] : ["https://mainnet.base.org"],
    blockExplorerUrls: ["https://basescan.org"],
  },
  84531: {
    chainName: "Base Goerli",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.base.org"],
    blockExplorerUrls: ["https://goerli.basescan.org"],
  },
};
