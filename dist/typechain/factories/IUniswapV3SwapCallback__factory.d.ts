import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3SwapCallback, IUniswapV3SwapCallbackInterface } from "../IUniswapV3SwapCallback";
export declare class IUniswapV3SwapCallback__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "amount0Delta";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "amount1Delta";
            readonly type: "int256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "uniswapV3SwapCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3SwapCallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3SwapCallback;
}
