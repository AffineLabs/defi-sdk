import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDelegationManager, IDelegationManagerInterface } from "../IDelegationManager";
export declare class IDelegationManager__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "staker";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "delegatedTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "withdrawer";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "startBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "address[]";
                readonly name: "strategies";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "shares";
                readonly type: "uint256[]";
            }];
            readonly internalType: "struct WithdrawalInfo[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address[][]";
            readonly name: "";
            readonly type: "address[][]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "";
            readonly type: "bool[]";
        }];
        readonly name: "completeQueuedWithdrawals";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiry";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ApproverSignatureAndExpiryParams";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "delegateTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address[]";
                readonly name: "strategies";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "shares";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }];
            readonly internalType: "struct QueuedWithdrawalParams[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly name: "queueWithdrawals";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDelegationManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDelegationManager;
}
