import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPool, IPoolInterface } from "../IPool";
export declare class IPool__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "reserve";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "backer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly name: "BackUnbacked";
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
            readonly indexed: false;
            readonly internalType: "enum DataTypes.InterestRateMode";
            readonly name: "interestRateMode";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "borrowRate";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "Borrow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
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
            readonly internalType: "enum DataTypes.InterestRateMode";
            readonly name: "interestRateMode";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "premium";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
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
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "totalDebt";
            readonly type: "uint256";
        }];
        readonly name: "IsolationModeTotalDebtUpdated";
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
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "MintUnbacked";
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
            readonly name: "amountMinted";
            readonly type: "uint256";
        }];
        readonly name: "MintedToTreasury";
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
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "useATokens";
            readonly type: "bool";
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
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "Supply";
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
            readonly internalType: "enum DataTypes.InterestRateMode";
            readonly name: "interestRateMode";
            readonly type: "uint8";
        }];
        readonly name: "SwapBorrowRateMode";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "categoryId";
            readonly type: "uint8";
        }];
        readonly name: "UserEModeSet";
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
        readonly inputs: readonly [];
        readonly name: "ADDRESSES_PROVIDER";
        readonly outputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BRIDGE_PROTOCOL_FEE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FLASHLOAN_PREMIUM_TOTAL";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FLASHLOAN_PREMIUM_TO_PROTOCOL";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_NUMBER_RESERVES";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly name: "backUnbacked";
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
            readonly internalType: "uint8";
            readonly name: "id";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "ltv";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "liquidationThreshold";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "liquidationBonus";
                readonly type: "uint16";
            }, {
                readonly internalType: "address";
                readonly name: "priceSource";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "label";
                readonly type: "string";
            }];
            readonly internalType: "struct DataTypes.EModeCategory";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly name: "configureEModeCategory";
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
        }];
        readonly name: "dropReserve";
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
            readonly name: "balanceFromBefore";
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
            readonly name: "interestRateModes";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiverAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "params";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint16";
            readonly name: "referralCode";
            readonly type: "uint16";
        }];
        readonly name: "flashLoanSimple";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint8";
            readonly name: "id";
            readonly type: "uint8";
        }];
        readonly name: "getEModeCategoryData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "ltv";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "liquidationThreshold";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "liquidationBonus";
                readonly type: "uint16";
            }, {
                readonly internalType: "address";
                readonly name: "priceSource";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "label";
                readonly type: "string";
            }];
            readonly internalType: "struct DataTypes.EModeCategory";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "id";
            readonly type: "uint16";
        }];
        readonly name: "getReserveAddressById";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
                readonly name: "currentLiquidityRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "variableBorrowIndex";
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
                readonly internalType: "uint16";
                readonly name: "id";
                readonly type: "uint16";
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
                readonly internalType: "uint128";
                readonly name: "accruedToTreasury";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "unbacked";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "isolationModeTotalDebt";
                readonly type: "uint128";
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
            readonly name: "totalCollateralBase";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalDebtBase";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "availableBorrowsBase";
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
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserEMode";
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
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "assets";
            readonly type: "address[]";
        }];
        readonly name: "mintToTreasury";
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
        readonly name: "mintUnbacked";
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
            readonly name: "interestRateMode";
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
        }];
        readonly name: "repayWithATokens";
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
            readonly internalType: "address";
            readonly name: "onBehalfOf";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "permitV";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "permitR";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "permitS";
            readonly type: "bytes32";
        }];
        readonly name: "repayWithPermit";
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
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "rescueTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "resetIsolationModeTotalDebt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "data";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.ReserveConfigurationMap";
            readonly name: "configuration";
            readonly type: "tuple";
        }];
        readonly name: "setConfiguration";
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
            readonly name: "rateStrategyAddress";
            readonly type: "address";
        }];
        readonly name: "setReserveInterestRateStrategyAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "categoryId";
            readonly type: "uint8";
        }];
        readonly name: "setUserEMode";
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
        readonly name: "supply";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "permitV";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "permitR";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "permitS";
            readonly type: "bytes32";
        }];
        readonly name: "supplyWithPermit";
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
            readonly name: "interestRateMode";
            readonly type: "uint256";
        }];
        readonly name: "swapBorrowRateMode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bridgeProtocolFee";
            readonly type: "uint256";
        }];
        readonly name: "updateBridgeProtocolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "flashLoanPremiumTotal";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "flashLoanPremiumToProtocol";
            readonly type: "uint128";
        }];
        readonly name: "updateFlashloanPremiums";
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
    static createInterface(): IPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPool;
}
