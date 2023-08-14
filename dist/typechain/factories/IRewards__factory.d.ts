import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRewards, IRewardsInterface } from "../IRewards";
export declare class IRewards__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "comet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldAccrue";
            readonly type: "bool";
        }];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "comet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getRewardOwed";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "owed";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CometStructs.RewardOwed";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRewards;
}
