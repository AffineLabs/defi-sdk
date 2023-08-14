import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC721A__IERC721Receiver, ERC721A__IERC721ReceiverInterface } from "../ERC721A__IERC721Receiver";
export declare class ERC721A__IERC721Receiver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
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
    static createInterface(): ERC721A__IERC721ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721A__IERC721Receiver;
}
