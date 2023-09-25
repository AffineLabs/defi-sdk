import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAeroRouter, IAeroRouterInterface } from "../IAeroRouter";
export declare class IAeroRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Expired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientAmountA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientAmountADesired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientAmountAOptimal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientAmountB";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientAmountBDesired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientOutputAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmountInForETHDeposit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPath";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidRouteA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidRouteB";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenInForETHDeposit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyWETH";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PoolDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PoolFactoryDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SameAddresses";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETHER";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "UNSAFE_swapExactTokensForTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountADesired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountBDesired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountAMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountBMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "addLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountB";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
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
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountTokenDesired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountTokenMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountETHMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "addLiquidityETH";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountToken";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountETH";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultFactory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factoryRegistry";
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
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountInA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountInB";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesA";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesB";
            readonly type: "tuple[]";
        }];
        readonly name: "generateZapInParams";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOutMinA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMinB";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountAMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountBMin";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesA";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesB";
            readonly type: "tuple[]";
        }];
        readonly name: "generateZapOutParams";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOutMinA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMinB";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountAMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountBMin";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }];
        readonly name: "getAmountsOut";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }];
        readonly name: "getReserves";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "reserveA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reserveB";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }];
        readonly name: "poolFor";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountADesired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountBDesired";
            readonly type: "uint256";
        }];
        readonly name: "quoteAddLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountB";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }];
        readonly name: "quoteRemoveLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountB";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }];
        readonly name: "quoteStableLiquidityRatio";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ratio";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountAMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountBMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "removeLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountB";
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
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountTokenMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountETHMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "removeLiquidityETH";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountToken";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountETH";
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
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountTokenMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountETHMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "removeLiquidityETHSupportingFeeOnTransferTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountETH";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }];
        readonly name: "sortTokens";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "token0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token1";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactETHForTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactETHForTokensSupportingFeeOnTransferTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactTokensForETH";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactTokensForETHSupportingFeeOnTransferTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactTokensForTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routes";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactTokensForTokensSupportingFeeOnTransferTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "voter";
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
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountInA";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountInB";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "tokenA";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenB";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMinA";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMinB";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountAMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountBMin";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAeroRouter.Zap";
            readonly name: "zapInPool";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesA";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesB";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stake";
            readonly type: "bool";
        }];
        readonly name: "zapIn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidity";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "tokenA";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenB";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMinA";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMinB";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountAMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountBMin";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAeroRouter.Zap";
            readonly name: "zapOutPool";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesA";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "factory";
                readonly type: "address";
            }];
            readonly internalType: "struct IAeroRouter.Route[]";
            readonly name: "routesB";
            readonly type: "tuple[]";
        }];
        readonly name: "zapOut";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IAeroRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAeroRouter;
}
