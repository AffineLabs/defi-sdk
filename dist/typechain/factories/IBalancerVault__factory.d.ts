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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }];
        readonly name: "getPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "enum IBalancerVault.PoolSpecialization";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }];
        readonly name: "getPoolTokens";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balances";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastChangeBlock";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IBalancerVault.SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "poolId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "assetInIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "assetOutIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IBalancerVault.BatchSwapStep[]";
            readonly name: "swaps";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "assets";
            readonly type: "address[]";
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
        readonly name: "queryBatchSwap";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "assetDeltas";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
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
        }, {
            readonly internalType: "uint256";
            readonly name: "limit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IBalancerVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBalancerVault;
}
