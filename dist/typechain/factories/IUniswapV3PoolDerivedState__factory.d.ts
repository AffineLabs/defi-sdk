import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolDerivedState, IUniswapV3PoolDerivedStateInterface } from "../IUniswapV3PoolDerivedState";
export declare class IUniswapV3PoolDerivedState__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "secondsAgos";
            readonly type: "uint32[]";
        }];
        readonly name: "observe";
        readonly outputs: readonly [{
            readonly internalType: "int56[]";
            readonly name: "tickCumulatives";
            readonly type: "int56[]";
        }, {
            readonly internalType: "uint160[]";
            readonly name: "secondsPerLiquidityCumulativeX128s";
            readonly type: "uint160[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }];
        readonly name: "snapshotCumulativesInside";
        readonly outputs: readonly [{
            readonly internalType: "int56";
            readonly name: "tickCumulativeInside";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "secondsPerLiquidityInsideX128";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint32";
            readonly name: "secondsInside";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3PoolDerivedStateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolDerivedState;
}
