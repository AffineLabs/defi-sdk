import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlashLoanRecipient, IFlashLoanRecipientInterface } from "../IFlashLoanRecipient";
export declare class IFlashLoanRecipient__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "feeAmounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "receiveFlashLoan";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFlashLoanRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashLoanRecipient;
}
