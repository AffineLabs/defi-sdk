import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IChildERC20, IChildERC20Interface } from "../IChildERC20";
export declare class IChildERC20__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IChildERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IChildERC20;
}
