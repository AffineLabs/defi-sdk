import { BigNumber } from "ethers";
import { AllowedChainId, NetworkParams } from "../types/account";
export declare const DEFAULT_WALLET = "magic";
export declare const DEFAULT_RAW_CHAIN_ID: AllowedChainId;
export declare function getChainIdFromRaw(chainId?: AllowedChainId): string;
export declare const NETWORK_TYPE: "testnet" | "mainnet";
export declare const ALLOWED_CHAIN_IDS: AllowedChainId[];
export declare const MAX_UINT: BigNumber;
export declare const MAX_APPROVAL_AMOUNT: BigNumber;
export declare const WALLETCONNECT_PROJECT_ID: string;
export declare const NETWORK_PARAMS: {
    [index: number]: NetworkParams;
};
