import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICurvePool, ICurvePoolInterface } from "../ICurvePool";
export declare class ICurvePool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256[2]";
            readonly name: "depositAmounts";
            readonly type: "uint256[2]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minMintAmount";
            readonly type: "uint256";
        }];
        readonly name: "add_liquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_token_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "int128";
            readonly name: "i";
            readonly type: "int128";
        }];
        readonly name: "calc_withdraw_one_coin";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int128";
            readonly name: "x";
            readonly type: "int128";
        }, {
            readonly internalType: "int128";
            readonly name: "y";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "dx";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "min_dy";
            readonly type: "uint256";
        }];
        readonly name: "exchange";
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
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dx";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "min_dy";
            readonly type: "uint256";
        }];
        readonly name: "exchange";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "get_virtual_price";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lp_token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[2]";
            readonly name: "_amounts";
            readonly type: "uint256[2]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_max_burn_amount";
            readonly type: "uint256";
        }];
        readonly name: "remove_liquidity_imbalance";
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
            readonly name: "_burn_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "int128";
            readonly name: "i";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "_min_amount";
            readonly type: "uint256";
        }];
        readonly name: "remove_liquidity_one_coin";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ICurvePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICurvePool;
}
