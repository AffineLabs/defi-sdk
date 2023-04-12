import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRootChainManager, IRootChainManagerInterface } from "../IRootChainManager";
export declare class IRootChainManager__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rootToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "depositData";
            readonly type: "bytes";
        }];
        readonly name: "depositFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "exit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IRootChainManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRootChainManager;
}
