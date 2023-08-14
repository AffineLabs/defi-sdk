import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IComet, ICometInterface } from "../IComet";
export declare class IComet__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseIndexScale";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseMinForRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseScale";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseTokenPriceFeed";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseTrackingBorrowSpeed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseTrackingSupplySpeed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "i";
            readonly type: "uint8";
        }];
        readonly name: "getAssetInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "offset";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "asset";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "priceFeed";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "scale";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "borrowCollateralFactor";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "liquidateCollateralFactor";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "liquidationFactor";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint128";
                readonly name: "supplyCap";
                readonly type: "uint128";
            }];
            readonly internalType: "struct CometStructs.AssetInfo";
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
        readonly name: "getAssetInfoByAddress";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "offset";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "asset";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "priceFeed";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "scale";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "borrowCollateralFactor";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "liquidateCollateralFactor";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "liquidationFactor";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint128";
                readonly name: "supplyCap";
                readonly type: "uint128";
            }];
            readonly internalType: "struct CometStructs.AssetInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "utilization";
            readonly type: "uint256";
        }];
        readonly name: "getBorrowRate";
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
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly name: "getPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "utilization";
            readonly type: "uint256";
        }];
        readonly name: "getSupplyRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUtilization";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "numAssets";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
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
        }];
        readonly name: "supply";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalBorrow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalsBasic";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "baseSupplyIndex";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "baseBorrowIndex";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "trackingSupplyIndex";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "trackingBorrowIndex";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint104";
                readonly name: "totalSupplyBase";
                readonly type: "uint104";
            }, {
                readonly internalType: "uint104";
                readonly name: "totalBorrowBase";
                readonly type: "uint104";
            }, {
                readonly internalType: "uint40";
                readonly name: "lastAccrualTime";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint8";
                readonly name: "pauseFlags";
                readonly type: "uint8";
            }];
            readonly internalType: "struct CometStructs.TotalsBasic";
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
        readonly name: "totalsCollateral";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "totalSupplyAsset";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "_reserved";
                readonly type: "uint128";
            }];
            readonly internalType: "struct CometStructs.TotalsCollateral";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "userBasic";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "int104";
                readonly name: "principal";
                readonly type: "int104";
            }, {
                readonly internalType: "uint64";
                readonly name: "baseTrackingIndex";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "baseTrackingAccrued";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint16";
                readonly name: "assetsIn";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint8";
                readonly name: "_reserved";
                readonly type: "uint8";
            }];
            readonly internalType: "struct CometStructs.UserBasic";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "userCollateral";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "balance";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "_reserved";
                readonly type: "uint128";
            }];
            readonly internalType: "struct CometStructs.UserCollateral";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ICometInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IComet;
}
