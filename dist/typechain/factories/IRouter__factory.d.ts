import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRouter, IRouterInterface } from "../IRouter";
export declare class IRouter__factory {
    static readonly abi: readonly [{
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }];
        readonly name: "getAmountOut";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
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
            }];
            readonly internalType: "struct IRouter.route[]";
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
            readonly name: "pair";
            readonly type: "address";
        }];
        readonly name: "isPair";
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
        }];
        readonly name: "pairFor";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pair";
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
        }, {
            readonly internalType: "bool";
            readonly name: "approveMax";
            readonly type: "bool";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "removeLiquidityETHWithPermit";
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
        }, {
            readonly internalType: "bool";
            readonly name: "approveMax";
            readonly type: "bool";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "removeLiquidityWithPermit";
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
            }];
            readonly internalType: "struct IRouter.route[]";
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
            }];
            readonly internalType: "struct IRouter.route[]";
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
            }];
            readonly internalType: "struct IRouter.route[]";
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
            readonly internalType: "address";
            readonly name: "tokenFrom";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenTo";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "stable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactTokensForTokensSimple";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRouter;
}
