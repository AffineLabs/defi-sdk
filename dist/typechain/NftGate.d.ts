import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface NftGateInterface extends utils.Interface {
    functions: {
        "accessNft()": FunctionFragment;
        "governance()": FunctionFragment;
        "setAccessNft(address)": FunctionFragment;
        "setNftProperties(bool,bool)": FunctionFragment;
        "setWithdrawalFeeWithNft(uint16)": FunctionFragment;
        "withdrawalFeeWithNft()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessNft" | "governance" | "setAccessNft" | "setNftProperties" | "setWithdrawalFeeWithNft" | "withdrawalFeeWithNft"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessNft", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAccessNft", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setNftProperties", values: [PromiseOrValue<boolean>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFeeWithNft", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawalFeeWithNft", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accessNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccessNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNftProperties", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFeeWithNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFeeWithNft", data: BytesLike): Result;
    events: {};
}
export interface NftGate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NftGateInterface;
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
        accessNft(overrides?: CallOverrides): Promise<[string]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<[number]>;
    };
    accessNft(overrides?: CallOverrides): Promise<string>;
    governance(overrides?: CallOverrides): Promise<string>;
    setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawalFeeWithNft(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        accessNft(overrides?: CallOverrides): Promise<string>;
        governance(overrides?: CallOverrides): Promise<string>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        accessNft(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accessNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
