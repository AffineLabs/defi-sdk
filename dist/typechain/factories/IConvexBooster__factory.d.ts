import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConvexBooster, IConvexBoosterInterface } from "../IConvexBooster";
export declare class IConvexBooster__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "crv";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_stake";
            readonly type: "bool";
        }];
        readonly name: "depositAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }];
        readonly name: "poolInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "lptoken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gauge";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "crvRewards";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "stash";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "shutdown";
                readonly type: "bool";
            }];
            readonly internalType: "struct IConvexBooster.PoolInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IConvexBoosterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConvexBooster;
}
