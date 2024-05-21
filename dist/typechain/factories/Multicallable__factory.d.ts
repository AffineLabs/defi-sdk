import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Multicallable, MulticallableInterface } from "../Multicallable";
export declare class Multicallable__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MulticallableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Multicallable;
}
