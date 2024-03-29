import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IConvexRewardsInterface extends utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
        "earned(address)": FunctionFragment;
        "getReward()": FunctionFragment;
        "stake(uint256)": FunctionFragment;
        "stakeFor(address,uint256)": FunctionFragment;
        "withdraw(uint256,bool)": FunctionFragment;
        "withdrawAllAndUnwrap(bool)": FunctionFragment;
        "withdrawAndUnwrap(uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "earned" | "getReward" | "stake" | "stakeFor" | "withdraw" | "withdrawAllAndUnwrap" | "withdrawAndUnwrap"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "earned", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stakeFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "withdrawAllAndUnwrap", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "withdrawAndUnwrap", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllAndUnwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndUnwrap", data: BytesLike): Result;
    events: {};
}
export interface IConvexRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConvexRewardsInterface;
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
        balanceOf(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stake(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakeFor(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(_amount: PromiseOrValue<BigNumberish>, _claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAllAndUnwrap(claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAndUnwrap(amount: PromiseOrValue<BigNumberish>, claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    balanceOf(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReward(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stake(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakeFor(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(_amount: PromiseOrValue<BigNumberish>, _claim: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAllAndUnwrap(claim: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAndUnwrap(amount: PromiseOrValue<BigNumberish>, claim: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(overrides?: CallOverrides): Promise<boolean>;
        stake(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        stakeFor(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        withdraw(_amount: PromiseOrValue<BigNumberish>, _claim: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        withdrawAllAndUnwrap(claim: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        withdrawAndUnwrap(amount: PromiseOrValue<BigNumberish>, claim: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        balanceOf(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stake(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakeFor(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(_amount: PromiseOrValue<BigNumberish>, _claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAllAndUnwrap(claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAndUnwrap(amount: PromiseOrValue<BigNumberish>, claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stake(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakeFor(_account: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_amount: PromiseOrValue<BigNumberish>, _claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllAndUnwrap(claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAndUnwrap(amount: PromiseOrValue<BigNumberish>, claim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
