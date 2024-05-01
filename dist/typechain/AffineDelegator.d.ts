import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type WithdrawalInfoStruct = {
    staker: PromiseOrValue<string>;
    delegatedTo: PromiseOrValue<string>;
    withdrawer: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    startBlock: PromiseOrValue<BigNumberish>;
    strategies: PromiseOrValue<string>[];
    shares: PromiseOrValue<BigNumberish>[];
};
export type WithdrawalInfoStructOutput = [
    string,
    string,
    string,
    BigNumber,
    number,
    string[],
    BigNumber[]
] & {
    staker: string;
    delegatedTo: string;
    withdrawer: string;
    nonce: BigNumber;
    startBlock: number;
    strategies: string[];
    shares: BigNumber[];
};
export interface AffineDelegatorInterface extends utils.Interface {
    functions: {
        "completeWithdrawalRequest((address,address,address,uint256,uint32,address[],uint256[])[])": FunctionFragment;
        "currentOperator()": FunctionFragment;
        "delegate(uint256)": FunctionFragment;
        "delegationManager()": FunctionFragment;
        "governance()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isDelegated()": FunctionFragment;
        "queuedAssets()": FunctionFragment;
        "queuedShares()": FunctionFragment;
        "requestWithdrawal(uint256)": FunctionFragment;
        "stETH()": FunctionFragment;
        "stEthStrategy()": FunctionFragment;
        "strategyManager()": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "vault()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "withdrawableAssets()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "completeWithdrawalRequest" | "currentOperator" | "delegate" | "delegationManager" | "governance" | "initialize" | "isDelegated" | "queuedAssets" | "queuedShares" | "requestWithdrawal" | "stETH" | "stEthStrategy" | "strategyManager" | "totalLockedValue" | "vault" | "withdraw" | "withdrawableAssets"): FunctionFragment;
    encodeFunctionData(functionFragment: "completeWithdrawalRequest", values: [WithdrawalInfoStruct[]]): string;
    encodeFunctionData(functionFragment: "currentOperator", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "delegationManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isDelegated", values?: undefined): string;
    encodeFunctionData(functionFragment: "queuedAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "queuedShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestWithdrawal", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "stEthStrategy", values?: undefined): string;
    encodeFunctionData(functionFragment: "strategyManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableAssets", values?: undefined): string;
    decodeFunctionResult(functionFragment: "completeWithdrawalRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stEthStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableAssets", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface AffineDelegator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AffineDelegatorInterface;
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
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentOperator(overrides?: CallOverrides): Promise<[string]>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegationManager(overrides?: CallOverrides): Promise<[string]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        initialize(_vault: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isDelegated(overrides?: CallOverrides): Promise<[boolean]>;
        queuedAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        queuedShares(overrides?: CallOverrides): Promise<[BigNumber]>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stETH(overrides?: CallOverrides): Promise<[string]>;
        stEthStrategy(overrides?: CallOverrides): Promise<[string]>;
        strategyManager(overrides?: CallOverrides): Promise<[string]>;
        totalLockedValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawableAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentOperator(overrides?: CallOverrides): Promise<string>;
    delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegationManager(overrides?: CallOverrides): Promise<string>;
    governance(overrides?: CallOverrides): Promise<string>;
    initialize(_vault: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isDelegated(overrides?: CallOverrides): Promise<boolean>;
    queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
    queuedShares(overrides?: CallOverrides): Promise<BigNumber>;
    requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stETH(overrides?: CallOverrides): Promise<string>;
    stEthStrategy(overrides?: CallOverrides): Promise<string>;
    strategyManager(overrides?: CallOverrides): Promise<string>;
    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
    vault(overrides?: CallOverrides): Promise<string>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: CallOverrides): Promise<void>;
        currentOperator(overrides?: CallOverrides): Promise<string>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        delegationManager(overrides?: CallOverrides): Promise<string>;
        governance(overrides?: CallOverrides): Promise<string>;
        initialize(_vault: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isDelegated(overrides?: CallOverrides): Promise<boolean>;
        queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        queuedShares(overrides?: CallOverrides): Promise<BigNumber>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stETH(overrides?: CallOverrides): Promise<string>;
        stEthStrategy(overrides?: CallOverrides): Promise<string>;
        strategyManager(overrides?: CallOverrides): Promise<string>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
    };
    estimateGas: {
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentOperator(overrides?: CallOverrides): Promise<BigNumber>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegationManager(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_vault: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isDelegated(overrides?: CallOverrides): Promise<BigNumber>;
        queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        queuedShares(overrides?: CallOverrides): Promise<BigNumber>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stETH(overrides?: CallOverrides): Promise<BigNumber>;
        stEthStrategy(overrides?: CallOverrides): Promise<BigNumber>;
        strategyManager(overrides?: CallOverrides): Promise<BigNumber>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegationManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_vault: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isDelegated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queuedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queuedShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestWithdrawal(assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stEthStrategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        strategyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawableAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
