import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBalancerQueries, IBalancerQueriesInterface } from "../IBalancerQueries";
export declare class IBalancerQueries__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "poolId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "enum IBalancerVault.SwapKind";
                readonly name: "kind";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "assetIn";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "assetOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IBalancerVault.SingleSwap";
            readonly name: "singleSwap";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "fromInternalBalance";
                readonly type: "bool";
            }, {
                readonly internalType: "address payable";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "toInternalBalance";
                readonly type: "bool";
            }];
            readonly internalType: "struct IBalancerVault.FundManagement";
            readonly name: "funds";
            readonly type: "tuple";
        }];
        readonly name: "querySwap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBalancerQueriesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBalancerQueries;
}
