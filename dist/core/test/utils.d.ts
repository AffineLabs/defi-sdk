import { ethers } from "ethers";
export declare function setUSDCBalance(address: string, balance: number): Promise<void>;
export declare function setAlpSaveBalance(address: string, balance: number): Promise<void>;
export declare function setAlpLargeBalance(address: string, balance: number): Promise<void>;
export declare function setAlpSaveL1LockedValue(value: number): Promise<void>;
export declare function getTestProvider(network: "poly" | "eth"): ethers.providers.StaticJsonRpcProvider;
