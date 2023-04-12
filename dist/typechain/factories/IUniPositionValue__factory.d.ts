import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniPositionValue, IUniPositionValueInterface } from "../IUniPositionValue";
export declare class IUniPositionValue__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract INonfungiblePositionManager";
            readonly name: "positionManager";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "fees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract INonfungiblePositionManager";
            readonly name: "positionManager";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint160";
            readonly name: "sqrtRatioX96";
            readonly type: "uint160";
        }];
        readonly name: "principal";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract INonfungiblePositionManager";
            readonly name: "positionManager";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint160";
            readonly name: "sqrtRatioX96";
            readonly type: "uint160";
        }];
        readonly name: "total";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniPositionValueInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniPositionValue;
}
