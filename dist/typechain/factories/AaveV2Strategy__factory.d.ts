import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AaveV2Strategy, AaveV2StrategyInterface } from "../AaveV2Strategy";
export declare class AaveV2Strategy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract AffineVault";
            readonly name: "_vault";
            readonly type: "address";
        }, {
            readonly internalType: "contract ILendingPool";
            readonly name: "_lendingPool";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "aToken";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "asset";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "balanceOfAsset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "divest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "invest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lendingPool";
        readonly outputs: readonly [{
            readonly internalType: "contract ILendingPool";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "sweep";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalLockedValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vault";
        readonly outputs: readonly [{
            readonly internalType: "contract AffineVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AaveV2StrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AaveV2Strategy;
}
