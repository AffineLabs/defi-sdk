import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface HarvestStorageInterface extends utils.Interface {
    functions: {
        "accumulatedPerformanceFee()": FunctionFragment;
        "governance()": FunctionFragment;
        "performanceFeeBps()": FunctionFragment;
        "setPerformanceFeeBps(uint128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accumulatedPerformanceFee" | "governance" | "performanceFeeBps" | "setPerformanceFeeBps"): FunctionFragment;
    encodeFunctionData(functionFragment: "accumulatedPerformanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPerformanceFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "accumulatedPerformanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performanceFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPerformanceFeeBps", data: BytesLike): Result;
    events: {
        "PerformanceFeeWithdrawn(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PerformanceFeeWithdrawn"): EventFragment;
}
export interface PerformanceFeeWithdrawnEventObject {
    amount: BigNumber;
}
export declare type PerformanceFeeWithdrawnEvent = TypedEvent<[
    BigNumber
], PerformanceFeeWithdrawnEventObject>;
export declare type PerformanceFeeWithdrawnEventFilter = TypedEventFilter<PerformanceFeeWithdrawnEvent>;
export interface HarvestStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HarvestStorageInterface;
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
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        performanceFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    accumulatedPerformanceFee(overrides?: CallOverrides): Promise<BigNumber>;
    governance(overrides?: CallOverrides): Promise<string>;
    performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<string>;
        performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PerformanceFeeWithdrawn(uint256)"(amount?: null): PerformanceFeeWithdrawnEventFilter;
        PerformanceFeeWithdrawn(amount?: null): PerformanceFeeWithdrawnEventFilter;
    };
    estimateGas: {
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        performanceFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
