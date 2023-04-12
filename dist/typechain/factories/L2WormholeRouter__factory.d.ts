import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { L2WormholeRouter, L2WormholeRouterInterface } from "../L2WormholeRouter";
export declare class L2WormholeRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract L2Vault";
            readonly name: "_vault";
            readonly type: "address";
        }, {
            readonly internalType: "contract IWormhole";
            readonly name: "_wormhole";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "consistencyLevel";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governance";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nextValidNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "otherLayerWormholeId";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "receiveFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "receiveTVL";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "reportFundTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "requestFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_consistencyLevel";
            readonly type: "uint8";
        }];
        readonly name: "setConsistencyLevel";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vault";
        readonly outputs: readonly [{
            readonly internalType: "contract BaseVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wormhole";
        readonly outputs: readonly [{
            readonly internalType: "contract IWormhole";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): L2WormholeRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L2WormholeRouter;
}
