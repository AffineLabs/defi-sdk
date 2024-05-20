import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IDelegatorInterface extends utils.Interface {
    functions: {
        "checkAssetAvailability(uint256)": FunctionFragment;
        "delegate(uint256)": FunctionFragment;
        "queuedAssets()": FunctionFragment;
        "requestWithdrawal(uint256)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "withdrawableAssets()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkAssetAvailability" | "delegate" | "queuedAssets" | "requestWithdrawal" | "totalLockedValue" | "withdraw" | "withdrawableAssets"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkAssetAvailability", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "delegate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "queuedAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestWithdrawal", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableAssets", values?: undefined): string;
    decodeFunctionResult(functionFragment: "checkAssetAvailability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableAssets", data: BytesLike): Result;
    events: {};
}
export interface IDelegator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDelegatorInterface;
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
        checkAssetAvailability(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queuedAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawableAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    checkAssetAvailability(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
    requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        checkAssetAvailability(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        checkAssetAvailability(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkAssetAvailability(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queuedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawableAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
