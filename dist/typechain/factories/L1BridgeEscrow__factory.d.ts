import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { L1BridgeEscrow, L1BridgeEscrowInterface } from "../L1BridgeEscrow";
export declare class L1BridgeEscrow__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract L1Vault";
            readonly name: "_vault";
            readonly type: "address";
        }, {
            readonly internalType: "contract IRootChainManager";
            readonly name: "_manager";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "TransferToVault";
        readonly type: "event";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "exitProof";
            readonly type: "bytes";
        }];
        readonly name: "clearFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "exitProof";
            readonly type: "bytes";
        }];
        readonly name: "rescueFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rootChainManager";
        readonly outputs: readonly [{
            readonly internalType: "contract IRootChainManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vault";
        readonly outputs: readonly [{
            readonly internalType: "contract L1Vault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wormholeRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): L1BridgeEscrowInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1BridgeEscrow;
}
