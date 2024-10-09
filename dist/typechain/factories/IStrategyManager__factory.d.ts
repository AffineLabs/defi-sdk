import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStrategyManager, IStrategyManagerInterface } from "../IStrategyManager";
export declare class IStrategyManager__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "depositIntoStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IStrategyManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStrategyManager;
}
