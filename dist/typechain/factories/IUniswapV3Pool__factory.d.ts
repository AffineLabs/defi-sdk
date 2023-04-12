import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3Pool, IUniswapV3PoolInterface } from "../IUniswapV3Pool";
export declare class IUniswapV3Pool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "AI";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "F0";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "F1";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IIA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "L";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LOK";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "M0";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "M1";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TLM";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TLU";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TUM";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly name: "Burn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount0";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount1";
            readonly type: "uint128";
        }];
        readonly name: "Collect";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount0";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount1";
            readonly type: "uint128";
        }];
        readonly name: "CollectProtocol";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "paid0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "paid1";
            readonly type: "uint256";
        }];
        readonly name: "Flash";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNextOld";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNextNew";
            readonly type: "uint16";
        }];
        readonly name: "IncreaseObservationCardinalityNext";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }];
        readonly name: "Initialize";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly name: "Mint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "feeProtocol0Old";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "feeProtocol1Old";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "feeProtocol0New";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "feeProtocol1New";
            readonly type: "uint8";
        }];
        readonly name: "SetFeeProtocol";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "amount0";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "amount1";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "liquidity";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }];
        readonly name: "Swap";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }];
        readonly name: "burn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount0Requested";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount1Requested";
            readonly type: "uint128";
        }];
        readonly name: "collect";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "amount0";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount1";
            readonly type: "uint128";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount0Requested";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount1Requested";
            readonly type: "uint128";
        }];
        readonly name: "collectProtocol";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "amount0";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount1";
            readonly type: "uint128";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fee";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeGrowthGlobal0X128";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeGrowthGlobal1X128";
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
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "flash";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
        }];
        readonly name: "increaseObservationCardinalityNext";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "liquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxLiquidityPerTick";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "observations";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "blockTimestamp";
            readonly type: "uint32";
        }, {
            readonly internalType: "int56";
            readonly name: "tickCumulative";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "secondsPerLiquidityCumulativeX128";
            readonly type: "uint160";
        }, {
            readonly internalType: "bool";
            readonly name: "initialized";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "secondsAgos";
            readonly type: "uint32[]";
        }];
        readonly name: "observe";
        readonly outputs: readonly [{
            readonly internalType: "int56[]";
            readonly name: "tickCumulatives";
            readonly type: "int56[]";
        }, {
            readonly internalType: "uint160[]";
            readonly name: "secondsPerLiquidityCumulativeX128s";
            readonly type: "uint160[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "positions";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "liquidity";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthInside0LastX128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthInside1LastX128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "tokensOwed0";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "tokensOwed1";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protocolFees";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "token0";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "token1";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "feeProtocol0";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "feeProtocol1";
            readonly type: "uint8";
        }];
        readonly name: "setFeeProtocol";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "slot0";
        readonly outputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }, {
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationCardinality";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "feeProtocol";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "unlocked";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }];
        readonly name: "snapshotCumulativesInside";
        readonly outputs: readonly [{
            readonly internalType: "int56";
            readonly name: "tickCumulativeInside";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "secondsPerLiquidityInsideX128";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint32";
            readonly name: "secondsInside";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "zeroForOne";
            readonly type: "bool";
        }, {
            readonly internalType: "int256";
            readonly name: "amountSpecified";
            readonly type: "int256";
        }, {
            readonly internalType: "uint160";
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "amount0";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "amount1";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int16";
            readonly name: "wordPosition";
            readonly type: "int16";
        }];
        readonly name: "tickBitmap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tickSpacing";
        readonly outputs: readonly [{
            readonly internalType: "int24";
            readonly name: "";
            readonly type: "int24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }];
        readonly name: "ticks";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "liquidityGross";
            readonly type: "uint128";
        }, {
            readonly internalType: "int128";
            readonly name: "liquidityNet";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthOutside0X128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthOutside1X128";
            readonly type: "uint256";
        }, {
            readonly internalType: "int56";
            readonly name: "tickCumulativeOutside";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "secondsPerLiquidityOutsideX128";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint32";
            readonly name: "secondsOutside";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "initialized";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token0";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token1";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3Pool;
}
