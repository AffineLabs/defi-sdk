import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeripheryImmutableState, IPeripheryImmutableStateInterface } from "../IPeripheryImmutableState";
export declare class IPeripheryImmutableState__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "WETH9";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPeripheryImmutableStateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeripheryImmutableState;
}
