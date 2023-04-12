import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWormhole, IWormholeInterface } from "../IWormhole";
export declare class IWormhole__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }];
        readonly name: "nextSequence";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "encodedVM";
            readonly type: "bytes";
        }];
        readonly name: "parseAndVerifyVM";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "version";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "timestamp";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "nonce";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "emitterChainId";
                readonly type: "uint16";
            }, {
                readonly internalType: "bytes32";
                readonly name: "emitterAddress";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "sequence";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint8";
                readonly name: "consistencyLevel";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes";
                readonly name: "payload";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint32";
                readonly name: "guardianSetIndex";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "guardianIndex";
                    readonly type: "uint8";
                }];
                readonly internalType: "struct IWormhole.Signature[]";
                readonly name: "signatures";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "bytes32";
                readonly name: "hash";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct IWormhole.VM";
            readonly name: "vm";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }, {
            readonly internalType: "string";
            readonly name: "reason";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "nonce";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint8";
            readonly name: "consistencyLevel";
            readonly type: "uint8";
        }];
        readonly name: "publishMessage";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "sequence";
            readonly type: "uint64";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IWormholeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWormhole;
}
