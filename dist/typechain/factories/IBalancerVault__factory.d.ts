import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBalancerVault, IBalancerVaultInterface } from "../IBalancerVault";
export declare class IBalancerVault__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IFlashLoanRecipient";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "contract ERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "flashLoan";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBalancerVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBalancerVault;
}
