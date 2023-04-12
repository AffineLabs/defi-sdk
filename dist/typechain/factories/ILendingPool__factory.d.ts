import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILendingPool, ILendingPoolInterface } from "../ILendingPool";
export declare class ILendingPool__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "borrowRateMode";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "borrowRate";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "referral";
            readonly type: "uint16";
        }];
        readonly name: "Borrow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "referral";
            readonly type: "uint16";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "initiator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "premium";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "FlashLoan";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collateralAsset";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "debtAsset";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "debtToCover";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidatedCollateralAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "liquidator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "receiveAToken";
            readonly type: "bool";
        }];
        readonly name: "LiquidationCall";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "RebalanceStableBorrowRate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "repayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Repay";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidityRate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "variableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidityIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "variableBorrowIndex";
            readonly type: "uint256";
        }];
        readonly name: "ReserveDataUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "ReserveUsedAsCollateralDisabled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "ReserveUsedAsCollateralEnabled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rateMode";
            readonly type: "uint256";
        }];
        readonly name: "Swap";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "interestRateMode";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "referralCode";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }];
        readonly name: "borrow";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balanceFromAfter";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balanceToBefore";
            readonly type: "uint256";
        }];
        readonly name: "finalizeTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiverAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "modes";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "params";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint16";
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "flashLoan";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAddressesProvider";
        readonly outputs: readonly [{
            readonly internalType: "contract ILendingPoolAddressesProvider";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getConfiguration";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "data";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.ReserveConfigurationMap";
            readonly name: "";
            readonly type: "tuple";
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
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "data";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.ReserveConfigurationMap";
                readonly name: "configuration";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint128";
                readonly name: "liquidityIndex";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "variableBorrowIndex";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "currentLiquidityRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "currentVariableBorrowRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "currentStableBorrowRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint40";
                readonly name: "lastUpdateTimestamp";
                readonly type: "uint40";
            }, {
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
            }, {
                readonly internalType: "address";
                readonly name: "interestRateStrategyAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint8";
                readonly name: "id";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.ReserveData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getReserveNormalizedIncome";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getReserveNormalizedVariableDebt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getReservesList";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserAccountData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalCollateralETH";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalDebtETH";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "availableBorrowsETH";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentLiquidationThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "ltv";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "healthFactor";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserConfiguration";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "data";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.UserConfigurationMap";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "aTokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "stableDebtAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "variableDebtAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "interestRateStrategyAddress";
            readonly type: "address";
        }];
        readonly name: "initReserve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "debtAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "debtToCover";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "receiveAToken";
            readonly type: "bool";
        }];
        readonly name: "liquidationCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
        readonly name: "rebalanceStableBorrowRate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "rateMode";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }];
        readonly name: "repay";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "configuration";
            readonly type: "uint256";
        }];
        readonly name: "setConfiguration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "val";
            readonly type: "bool";
        }];
        readonly name: "setPause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rateStrategyAddress";
            readonly type: "address";
        }];
        readonly name: "setReserveInterestRateStrategyAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "useAsCollateral";
            readonly type: "bool";
        }];
        readonly name: "setUserUseReserveAsCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "rateMode";
            readonly type: "uint256";
        }];
        readonly name: "swapBorrowRateMode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ILendingPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILendingPool;
}
