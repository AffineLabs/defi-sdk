import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DetailedShare, DetailedShareInterface } from "../DetailedShare";
export declare class DetailedShare__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "detailedPrice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "num";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DetailedShare.Number";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "detailedTVL";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "num";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DetailedShare.Number";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "detailedTotalSupply";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "num";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DetailedShare.Number";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DetailedShareInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DetailedShare;
}
