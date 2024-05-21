import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { I3CrvMetaPoolZap, I3CrvMetaPoolZapInterface } from "../I3CrvMetaPoolZap";
export declare class I3CrvMetaPoolZap__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "depositAmounts";
            readonly type: "uint256[4]";
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
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "amounts";
            readonly type: "uint256[4]";
        }, {
            readonly internalType: "bool";
            readonly name: "deposit";
            readonly type: "bool";
        }];
        readonly name: "calc_token_amount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "int128";
            readonly name: "index";
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
            readonly internalType: "address";
            readonly name: "_pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "_amounts";
            readonly type: "uint256[4]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxBurnAmount";
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
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "burnAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "int128";
            readonly name: "index";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
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
    static createInterface(): I3CrvMetaPoolZapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): I3CrvMetaPoolZap;
}
