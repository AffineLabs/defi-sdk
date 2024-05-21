import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IRouter {
    type RouteStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        stable: PromiseOrValue<boolean>;
    };
    type RouteStructOutput = [string, string, boolean] & {
        from: string;
        to: string;
        stable: boolean;
    };
}
export interface IRouterInterface extends utils.Interface {
    functions: {
        "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "getAmountOut(uint256,address,address)": FunctionFragment;
        "getAmountsOut(uint256,(address,address,bool)[])": FunctionFragment;
        "getReserves(address,address,bool)": FunctionFragment;
        "isPair(address)": FunctionFragment;
        "pairFor(address,address,bool)": FunctionFragment;
        "quoteAddLiquidity(address,address,bool,uint256,uint256)": FunctionFragment;
        "quoteRemoveLiquidity(address,address,bool,uint256)": FunctionFragment;
        "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHWithPermit(address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityWithPermit(address,address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "sortTokens(address,address)": FunctionFragment;
        "swapExactETHForTokens(uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSimple(uint256,uint256,address,address,bool,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addLiquidity" | "addLiquidityETH" | "getAmountOut" | "getAmountsOut" | "getReserves" | "isPair" | "pairFor" | "quoteAddLiquidity" | "quoteRemoveLiquidity" | "removeLiquidity" | "removeLiquidityETH" | "removeLiquidityETHWithPermit" | "removeLiquidityWithPermit" | "sortTokens" | "swapExactETHForTokens" | "swapExactTokensForETH" | "swapExactTokensForTokens" | "swapExactTokensForTokensSimple"): FunctionFragment;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidityETH", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [PromiseOrValue<BigNumberish>, IRouter.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "isPair", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pairFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quoteRemoveLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETH", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sortTokens", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [
        PromiseOrValue<BigNumberish>,
        IRouter.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IRouter.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IRouter.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSimple", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemoveLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSimple", data: BytesLike): Result;
    events: {};
}
export interface IRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            amount: BigNumber;
            stable: boolean;
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string] & {
            pair: string;
        }>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        amount: BigNumber;
        stable: boolean;
    }>;
    getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
        token0: string;
        token1: string;
    }>;
    swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            amount: BigNumber;
            stable: boolean;
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IRouter.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
