import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC721TokenReceiver, ERC721TokenReceiverInterface } from "../ERC721TokenReceiver";
export declare class ERC721TokenReceiver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC721TokenReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721TokenReceiver;
}
