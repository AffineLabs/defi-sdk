import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolOwnerActions, IUniswapV3PoolOwnerActionsInterface } from "../IUniswapV3PoolOwnerActions";
export declare class IUniswapV3PoolOwnerActions__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount0Requested";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount1Requested";
            readonly type: "uint128";
        }];
        readonly name: "collectProtocol";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "amount0";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount1";
            readonly type: "uint128";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "feeProtocol0";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "feeProtocol1";
            readonly type: "uint8";
        }];
        readonly name: "setFeeProtocol";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3PoolOwnerActionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolOwnerActions;
}
