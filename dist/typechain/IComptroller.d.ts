import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IComptrollerInterface extends utils.Interface {
    functions: {
        "claimComp(address,address[])": FunctionFragment;
        "claimStrike(address)": FunctionFragment;
        "claimStrike(address,address[])": FunctionFragment;
        "compAccrued(address)": FunctionFragment;
        "enterMarkets(address[])": FunctionFragment;
        "getAccountLiquidity(address)": FunctionFragment;
        "markets(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimComp" | "claimStrike(address)" | "claimStrike(address,address[])" | "compAccrued" | "enterMarkets" | "getAccountLiquidity" | "markets"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimComp", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "claimStrike(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimStrike(address,address[])", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "markets", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "claimComp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimStrike(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimStrike(address,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    events: {};
}
export interface IComptroller extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IComptrollerInterface;
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
        claimComp(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "claimStrike(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "claimStrike(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        enterMarkets(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        markets(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claimComp(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "claimStrike(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "claimStrike(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    enterMarkets(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    markets(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimComp(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "claimStrike(address)"(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "claimStrike(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(arg0: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getAccountLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        markets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    };
    filters: {};
    estimateGas: {
        claimComp(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "claimStrike(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "claimStrike(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimComp(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "claimStrike(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "claimStrike(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterMarkets(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markets(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
