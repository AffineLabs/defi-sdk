import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface RebalanceStorageInterface extends utils.Interface {
    functions: {
        "governance()": FunctionFragment;
        "rebalanceModule()": FunctionFragment;
        "setRebalanceModule(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "governance" | "rebalanceModule" | "setRebalanceModule"): FunctionFragment;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalanceModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "setRebalanceModule", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRebalanceModule", data: BytesLike): Result;
    events: {};
}
export interface RebalanceStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RebalanceStorageInterface;
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
        governance(overrides?: CallOverrides): Promise<[string]>;
        rebalanceModule(overrides?: CallOverrides): Promise<[string]>;
        setRebalanceModule(_rebalanceModule: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    governance(overrides?: CallOverrides): Promise<string>;
    rebalanceModule(overrides?: CallOverrides): Promise<string>;
    setRebalanceModule(_rebalanceModule: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        governance(overrides?: CallOverrides): Promise<string>;
        rebalanceModule(overrides?: CallOverrides): Promise<string>;
        setRebalanceModule(_rebalanceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        rebalanceModule(overrides?: CallOverrides): Promise<BigNumber>;
        setRebalanceModule(_rebalanceModule: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalanceModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRebalanceModule(_rebalanceModule: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
