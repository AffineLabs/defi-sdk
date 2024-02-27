import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IBalancerVault {
    type BatchSwapStepStruct = {
        poolId: PromiseOrValue<BytesLike>;
        assetInIndex: PromiseOrValue<BigNumberish>;
        assetOutIndex: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        userData: PromiseOrValue<BytesLike>;
    };
    type BatchSwapStepStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        poolId: string;
        assetInIndex: BigNumber;
        assetOutIndex: BigNumber;
        amount: BigNumber;
        userData: string;
    };
    type FundManagementStruct = {
        sender: PromiseOrValue<string>;
        fromInternalBalance: PromiseOrValue<boolean>;
        recipient: PromiseOrValue<string>;
        toInternalBalance: PromiseOrValue<boolean>;
    };
    type FundManagementStructOutput = [
        string,
        boolean,
        string,
        boolean
    ] & {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
    };
    type SingleSwapStruct = {
        poolId: PromiseOrValue<BytesLike>;
        kind: PromiseOrValue<BigNumberish>;
        assetIn: PromiseOrValue<string>;
        assetOut: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        userData: PromiseOrValue<BytesLike>;
    };
    type SingleSwapStructOutput = [
        string,
        number,
        string,
        string,
        BigNumber,
        string
    ] & {
        poolId: string;
        kind: number;
        assetIn: string;
        assetOut: string;
        amount: BigNumber;
        userData: string;
    };
}
export interface IBalancerVaultInterface extends utils.Interface {
    functions: {
        "flashLoan(address,address[],uint256[],bytes)": FunctionFragment;
        "getPool(bytes32)": FunctionFragment;
        "getPoolTokens(bytes32)": FunctionFragment;
        "queryBatchSwap(uint8,(bytes32,uint256,uint256,uint256,bytes)[],address[],(address,bool,address,bool))": FunctionFragment;
        "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "flashLoan" | "getPool" | "getPoolTokens" | "queryBatchSwap" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "flashLoan", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getPool", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getPoolTokens", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "queryBatchSwap", values: [
        PromiseOrValue<BigNumberish>,
        IBalancerVault.BatchSwapStepStruct[],
        PromiseOrValue<string>[],
        IBalancerVault.FundManagementStruct
    ]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        IBalancerVault.SingleSwapStruct,
        IBalancerVault.FundManagementStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryBatchSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IBalancerVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBalancerVaultInterface;
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
        flashLoan(recipient: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getPool(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, number]>;
        getPoolTokens(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber
        ] & {
            tokens: string[];
            balances: BigNumber[];
            lastChangeBlock: BigNumber;
        }>;
        queryBatchSwap(kind: PromiseOrValue<BigNumberish>, swaps: IBalancerVault.BatchSwapStepStruct[], assets: PromiseOrValue<string>[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    flashLoan(recipient: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getPool(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, number]>;
    getPoolTokens(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        BigNumber
    ] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
    }>;
    queryBatchSwap(kind: PromiseOrValue<BigNumberish>, swaps: IBalancerVault.BatchSwapStepStruct[], assets: PromiseOrValue<string>[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        flashLoan(recipient: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getPool(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, number]>;
        getPoolTokens(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber
        ] & {
            tokens: string[];
            balances: BigNumber[];
            lastChangeBlock: BigNumber;
        }>;
        queryBatchSwap(kind: PromiseOrValue<BigNumberish>, swaps: IBalancerVault.BatchSwapStepStruct[], assets: PromiseOrValue<string>[], funds: IBalancerVault.FundManagementStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        flashLoan(recipient: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getPool(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolTokens(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        queryBatchSwap(kind: PromiseOrValue<BigNumberish>, swaps: IBalancerVault.BatchSwapStepStruct[], assets: PromiseOrValue<string>[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        flashLoan(recipient: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getPool(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolTokens(poolId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryBatchSwap(kind: PromiseOrValue<BigNumberish>, swaps: IBalancerVault.BatchSwapStepStruct[], assets: PromiseOrValue<string>[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
