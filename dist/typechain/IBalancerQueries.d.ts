import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IBalancerVault {
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
}
export interface IBalancerQueriesInterface extends utils.Interface {
    functions: {
        "querySwap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "querySwap"): FunctionFragment;
    encodeFunctionData(functionFragment: "querySwap", values: [
        IBalancerVault.SingleSwapStruct,
        IBalancerVault.FundManagementStruct
    ]): string;
    decodeFunctionResult(functionFragment: "querySwap", data: BytesLike): Result;
    events: {};
}
export interface IBalancerQueries extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBalancerQueriesInterface;
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
        querySwap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    querySwap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        querySwap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        querySwap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        querySwap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
