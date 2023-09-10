import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { NftGate, NftGateInterface } from "../NftGate";
export declare class NftGate__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "accessNft";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC721";
            readonly name: "";
            readonly type: "address";
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
        readonly inputs: readonly [{
            readonly internalType: "contract ERC721";
            readonly name: "_accessNft";
            readonly type: "address";
        }];
        readonly name: "setAccessNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_needNftToDeposit";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_nftDiscountActive";
            readonly type: "bool";
        }];
        readonly name: "setNftProperties";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_newFee";
            readonly type: "uint16";
        }];
        readonly name: "setWithdrawalFeeWithNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdrawalFeeWithNft";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): NftGateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NftGate;
}
