import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICropper, ICropperInterface } from "../ICropper";
export declare class ICropper__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "crop";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "usr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }];
        readonly name: "exit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "crop";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "flux";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "ilk";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "u";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "v";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "w";
            readonly type: "address";
        }, {
            readonly internalType: "int256";
            readonly name: "dink";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "dart";
            readonly type: "int256";
        }];
        readonly name: "frob";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "crop";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "usr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }];
        readonly name: "join";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "u";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "rad";
            readonly type: "uint256";
        }];
        readonly name: "move";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "proxy";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "urn";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ICropperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICropper;
}
