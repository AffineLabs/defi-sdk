import { BigNumber, ethers } from "ethers";
export declare function setUSDCBalance(address: string, balance: BigNumber): Promise<void>;
export declare function setAlpSaveBalance(address: string, balance: number): Promise<void>;
export declare function setAlpLargeBalance(address: string, balance: number): Promise<void>;
export declare function setAlpSaveL1LockedValue(value: BigNumber): Promise<void>;
export declare function getTestProvider(network: "poly" | "eth"): ethers.providers.StaticJsonRpcProvider;
