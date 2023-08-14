import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace CometStructs {
    type RewardOwedStruct = {
        token: PromiseOrValue<string>;
        owed: PromiseOrValue<BigNumberish>;
    };
    type RewardOwedStructOutput = [string, BigNumber] & {
        token: string;
        owed: BigNumber;
    };
}
export interface IRewardsInterface extends utils.Interface {
    functions: {
        "claim(address,address,bool)": FunctionFragment;
        "getRewardOwed(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "getRewardOwed"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getRewardOwed", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardOwed", data: BytesLike): Result;
    events: {};
}
export interface IRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRewardsInterface;
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
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CometStructs.RewardOwedStructOutput>;
    };
    filters: {};
    estimateGas: {
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
