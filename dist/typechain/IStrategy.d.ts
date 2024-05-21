import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IStrategyInterface extends utils.Interface {
    functions: {
        "shares(address)": FunctionFragment;
        "sharesToUnderlying(uint256)": FunctionFragment;
        "sharesToUnderlyingView(uint256)": FunctionFragment;
        "underlyingToShares(uint256)": FunctionFragment;
        "userUnderlyingView(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "shares" | "sharesToUnderlying" | "sharesToUnderlyingView" | "underlyingToShares" | "userUnderlyingView"): FunctionFragment;
    encodeFunctionData(functionFragment: "shares", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sharesToUnderlying", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sharesToUnderlyingView", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "underlyingToShares", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "userUnderlyingView", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharesToUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharesToUnderlyingView", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userUnderlyingView", data: BytesLike): Result;
    events: {};
}
export interface IStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStrategyInterface;
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
        shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        sharesToUnderlying(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        sharesToUnderlyingView(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        underlyingToShares(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userUnderlyingView(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    sharesToUnderlying(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    sharesToUnderlyingView(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    underlyingToShares(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    userUnderlyingView(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        sharesToUnderlying(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sharesToUnderlyingView(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        underlyingToShares(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        userUnderlyingView(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        sharesToUnderlying(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sharesToUnderlyingView(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        underlyingToShares(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        userUnderlyingView(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sharesToUnderlying(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sharesToUnderlyingView(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlyingToShares(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userUnderlyingView(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
