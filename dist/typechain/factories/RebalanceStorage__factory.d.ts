import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RebalanceStorage, RebalanceStorageInterface } from "../RebalanceStorage";
export declare class RebalanceStorage__factory {
    static readonly abi: readonly [{
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
        readonly name: "rebalanceModule";
        readonly outputs: readonly [{
            readonly internalType: "contract RebalanceModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_rebalanceModule";
            readonly type: "address";
        }];
        readonly name: "setRebalanceModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RebalanceStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RebalanceStorage;
}
