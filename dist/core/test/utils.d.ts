import { BigNumber, ethers } from "ethers";
export declare function setUSDCBalance(address: string, balance: BigNumber): Promise<void>;
export declare function setBaseUsdcBalance(address: string, balance: BigNumber): Promise<void>;
export declare function setAlpSaveBalance(address: string, balance: number): Promise<void>;
export declare function setAlpLargeBalance(address: string, balance: number): Promise<void>;
export declare function setAlpSaveL1LockedValue(value: BigNumber): Promise<void>;
export declare function getTestProvider(network: "poly" | "eth" | "base"): ethers.providers.StaticJsonRpcProvider;
export declare const oneUSDC: BigNumber;
