import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMinter, IMinterInterface } from "../IMinter";
export declare class IMinter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "gauge";
            readonly type: "address";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMinter;
}
