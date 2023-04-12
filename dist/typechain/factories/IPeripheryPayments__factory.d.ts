import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeripheryPayments, IPeripheryPaymentsInterface } from "../IPeripheryPayments";
export declare class IPeripheryPayments__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "refundETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountMinimum";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "sweepToken";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountMinimum";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "unwrapWETH9";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IPeripheryPaymentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeripheryPayments;
}
