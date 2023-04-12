import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPoolInitializer, IPoolInitializerInterface } from "../IPoolInitializer";
export declare class IPoolInitializer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token1";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }];
        readonly name: "createAndInitializePoolIfNecessary";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IPoolInitializerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPoolInitializer;
}
