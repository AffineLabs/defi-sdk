import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC4626RouterBase, ERC4626RouterBaseInterface } from "../ERC4626RouterBase";
export declare class ERC4626RouterBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "MaxAmountError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MaxSharesError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinAmountError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinSharesError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC4626";
            readonly name: "vault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minSharesOut";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "sharesOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC4626";
            readonly name: "vault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxAmountIn";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC4626";
            readonly name: "vault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountOut";
            readonly type: "uint256";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC4626";
            readonly name: "vault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSharesOut";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "sharesOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ERC4626RouterBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626RouterBase;
}
