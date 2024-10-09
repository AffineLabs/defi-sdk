import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export type ApproverSignatureAndExpiryParamsStruct = {
    signature: PromiseOrValue<BytesLike>;
    expiry: PromiseOrValue<BigNumberish>;
};
export type ApproverSignatureAndExpiryParamsStructOutput = [
    string,
    BigNumber
] & {
    signature: string;
    expiry: BigNumber;
};
export type QueuedWithdrawalParamsStruct = {
    strategies: PromiseOrValue<string>[];
    shares: PromiseOrValue<BigNumberish>[];
    recipient: PromiseOrValue<string>;
};
export type QueuedWithdrawalParamsStructOutput = [
    string[],
    BigNumber[],
    string
] & {
    strategies: string[];
    shares: BigNumber[];
    recipient: string;
};
export interface IDelegationManagerInterface extends utils.Interface {
    functions: {
        "completeQueuedWithdrawals((address,address,address,uint256,uint32,address[],uint256[])[],address[][],uint256[],bool[])": FunctionFragment;
        "delegateTo(address,(bytes,uint256),bytes32)": FunctionFragment;
        "queueWithdrawals((address[],uint256[],address)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "completeQueuedWithdrawals" | "delegateTo" | "queueWithdrawals"): FunctionFragment;
    encodeFunctionData(functionFragment: "completeQueuedWithdrawals", values: [
        WithdrawalInfoStruct[],
        PromiseOrValue<string>[][],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>[]
    ]): string;
    encodeFunctionData(functionFragment: "delegateTo", values: [
        PromiseOrValue<string>,
        ApproverSignatureAndExpiryParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "queueWithdrawals", values: [QueuedWithdrawalParamsStruct[]]): string;
    decodeFunctionResult(functionFragment: "completeQueuedWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueWithdrawals", data: BytesLike): Result;
    events: {};
}
export interface IDelegationManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDelegationManagerInterface;
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
        completeQueuedWithdrawals(arg0: WithdrawalInfoStruct[], arg1: PromiseOrValue<string>[][], arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegateTo(arg0: PromiseOrValue<string>, arg1: ApproverSignatureAndExpiryParamsStruct, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queueWithdrawals(arg0: QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    completeQueuedWithdrawals(arg0: WithdrawalInfoStruct[], arg1: PromiseOrValue<string>[][], arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegateTo(arg0: PromiseOrValue<string>, arg1: ApproverSignatureAndExpiryParamsStruct, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queueWithdrawals(arg0: QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        completeQueuedWithdrawals(arg0: WithdrawalInfoStruct[], arg1: PromiseOrValue<string>[][], arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        delegateTo(arg0: PromiseOrValue<string>, arg1: ApproverSignatureAndExpiryParamsStruct, arg2: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        queueWithdrawals(arg0: QueuedWithdrawalParamsStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        completeQueuedWithdrawals(arg0: WithdrawalInfoStruct[], arg1: PromiseOrValue<string>[][], arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegateTo(arg0: PromiseOrValue<string>, arg1: ApproverSignatureAndExpiryParamsStruct, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queueWithdrawals(arg0: QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        completeQueuedWithdrawals(arg0: WithdrawalInfoStruct[], arg1: PromiseOrValue<string>[][], arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegateTo(arg0: PromiseOrValue<string>, arg1: ApproverSignatureAndExpiryParamsStruct, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queueWithdrawals(arg0: QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
