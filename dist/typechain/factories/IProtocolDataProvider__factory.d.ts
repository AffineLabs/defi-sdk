import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProtocolDataProvider, IProtocolDataProviderInterface } from "../IProtocolDataProvider";
export declare class IProtocolDataProvider__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ADDRESSES_PROVIDER";
        readonly outputs: readonly [{
            readonly internalType: "contract ILendingPoolAddressesProvider";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllATokens";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "tokenAddress";
                readonly type: "address";
            }];
            readonly internalType: "struct IProtocolDataProvider.TokenData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllReservesTokens";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "tokenAddress";
                readonly type: "address";
            }];
            readonly internalType: "struct IProtocolDataProvider.TokenData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getReserveConfigurationData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "decimals";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "ltv";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidationThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidationBonus";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reserveFactor";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "usageAsCollateralEnabled";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "borrowingEnabled";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "stableBorrowRateEnabled";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isActive";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isFrozen";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getReserveData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "availableLiquidity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalStableDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalVariableDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidityRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "variableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "averageStableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidityIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "variableBorrowIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint40";
            readonly name: "lastUpdateTimestamp";
            readonly type: "uint40";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getReserveTokensAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "aTokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "stableDebtTokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "variableDebtTokenAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserReserveData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "currentATokenBalance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentStableDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentVariableDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "principalStableDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "scaledVariableDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidityRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint40";
            readonly name: "stableRateLastUpdated";
            readonly type: "uint40";
        }, {
            readonly internalType: "bool";
            readonly name: "usageAsCollateralEnabled";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IProtocolDataProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolDataProvider;
}
