import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { HarvestStorage, HarvestStorageInterface } from "../HarvestStorage";
export declare class HarvestStorage__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "PerformanceFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "accumulatedPerformanceFee";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governance";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "performanceFeeBps";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "_newFeeBps";
            readonly type: "uint128";
        }];
        readonly name: "setPerformanceFeeBps";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): HarvestStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HarvestStorage;
}
