import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStEth, IStEthInterface } from "../IStEth";
export declare class IStEth__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_referral";
            readonly type: "address";
        }];
        readonly name: "submit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IStEthInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStEth;
}
