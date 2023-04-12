import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseStrategy, BaseStrategyInterface } from "../../src/BaseStrategy";
export declare class BaseStrategy__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BaseStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseStrategy;
}
