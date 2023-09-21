import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface RebalanceModuleInterface extends utils.Interface {
    functions: {
        "rebalance()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "rebalance"): FunctionFragment;
    encodeFunctionData(functionFragment: "rebalance", values?: undefined): string;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    events: {
        "Rebalance(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
}
export interface RebalanceEventObject {
    vault: string;
}
export declare type RebalanceEvent = TypedEvent<[string], RebalanceEventObject>;
export declare type RebalanceEventFilter = TypedEventFilter<RebalanceEvent>;
export interface RebalanceModule extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RebalanceModuleInterface;
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
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    rebalance(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        rebalance(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Rebalance(address)"(vault?: PromiseOrValue<string> | null): RebalanceEventFilter;
        Rebalance(vault?: PromiseOrValue<string> | null): RebalanceEventFilter;
    };
    estimateGas: {
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
