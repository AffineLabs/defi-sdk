import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMakerAdapter, IMakerAdapterInterface } from "../IMakerAdapter";
export declare class IMakerAdapter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "usr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }];
        readonly name: "exit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "urn";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "usr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }];
        readonly name: "join";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMakerAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMakerAdapter;
}
