import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface StakingExpInterface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "ROUTER()": FunctionFragment;
        "WETH()": FunctionFragment;
        "WSTETH()": FunctionFragment;
        "aToken()": FunctionFragment;
        "debtToken()": FunctionFragment;
        "endPosition()": FunctionFragment;
        "lastPosPnl()": FunctionFragment;
        "lastPosSize()": FunctionFragment;
        "owner()": FunctionFragment;
        "receiveFlashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
        "startPosition(uint256,uint256,uint256)": FunctionFragment;
        "withdrawEth(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AAVE" | "ROUTER" | "WETH" | "WSTETH" | "aToken" | "debtToken" | "endPosition" | "lastPosPnl" | "lastPosSize" | "owner" | "receiveFlashLoan" | "startPosition" | "withdrawEth"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WSTETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "aToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "endPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPosPnl", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPosSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "startPosition", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawEth", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WSTETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPosPnl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPosSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawEth", data: BytesLike): Result;
    events: {};
}
export interface StakingExp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakingExpInterface;
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
        AAVE(overrides?: CallOverrides): Promise<[string]>;
        ROUTER(overrides?: CallOverrides): Promise<[string]>;
        WETH(overrides?: CallOverrides): Promise<[string]>;
        WSTETH(overrides?: CallOverrides): Promise<[string]>;
        aToken(overrides?: CallOverrides): Promise<[string]>;
        debtToken(overrides?: CallOverrides): Promise<[string]>;
        endPosition(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastPosPnl(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastPosSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startPosition(size: PromiseOrValue<BigNumberish>, slippageBps: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawEth(amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    AAVE(overrides?: CallOverrides): Promise<string>;
    ROUTER(overrides?: CallOverrides): Promise<string>;
    WETH(overrides?: CallOverrides): Promise<string>;
    WSTETH(overrides?: CallOverrides): Promise<string>;
    aToken(overrides?: CallOverrides): Promise<string>;
    debtToken(overrides?: CallOverrides): Promise<string>;
    endPosition(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastPosPnl(overrides?: CallOverrides): Promise<BigNumber>;
    lastPosSize(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startPosition(size: PromiseOrValue<BigNumberish>, slippageBps: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawEth(amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        AAVE(overrides?: CallOverrides): Promise<string>;
        ROUTER(overrides?: CallOverrides): Promise<string>;
        WETH(overrides?: CallOverrides): Promise<string>;
        WSTETH(overrides?: CallOverrides): Promise<string>;
        aToken(overrides?: CallOverrides): Promise<string>;
        debtToken(overrides?: CallOverrides): Promise<string>;
        endPosition(overrides?: CallOverrides): Promise<void>;
        lastPosPnl(overrides?: CallOverrides): Promise<BigNumber>;
        lastPosSize(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        startPosition(size: PromiseOrValue<BigNumberish>, slippageBps: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawEth(amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        AAVE(overrides?: CallOverrides): Promise<BigNumber>;
        ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        WSTETH(overrides?: CallOverrides): Promise<BigNumber>;
        aToken(overrides?: CallOverrides): Promise<BigNumber>;
        debtToken(overrides?: CallOverrides): Promise<BigNumber>;
        endPosition(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastPosPnl(overrides?: CallOverrides): Promise<BigNumber>;
        lastPosSize(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startPosition(size: PromiseOrValue<BigNumberish>, slippageBps: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawEth(amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WSTETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endPosition(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastPosPnl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastPosSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startPosition(size: PromiseOrValue<BigNumberish>, slippageBps: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawEth(amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
