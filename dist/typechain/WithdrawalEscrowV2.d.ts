import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface WithdrawalEscrowV2Interface extends utils.Interface {
    functions: {
        "asset()": FunctionFragment;
        "canWithdraw(uint256)": FunctionFragment;
        "currentEpoch()": FunctionFragment;
        "endEpoch()": FunctionFragment;
        "epochInfo(uint256)": FunctionFragment;
        "getAssets(address,uint256[])": FunctionFragment;
        "getDebtToResolve()": FunctionFragment;
        "redeem(address,uint256)": FunctionFragment;
        "redeemMultiEpoch(address,uint256[])": FunctionFragment;
        "registerWithdrawalRequest(address,uint256)": FunctionFragment;
        "resolveDebtShares()": FunctionFragment;
        "resolvingEpoch()": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalDebt()": FunctionFragment;
        "userDebtShare(uint256,address)": FunctionFragment;
        "vault()": FunctionFragment;
        "withdrawableAssets(address,uint256)": FunctionFragment;
        "withdrawableShares(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "asset" | "canWithdraw" | "currentEpoch" | "endEpoch" | "epochInfo" | "getAssets" | "getDebtToResolve" | "redeem" | "redeemMultiEpoch" | "registerWithdrawalRequest" | "resolveDebtShares" | "resolvingEpoch" | "sweep" | "totalDebt" | "userDebtShare" | "vault" | "withdrawableAssets" | "withdrawableShares"): FunctionFragment;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "canWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "currentEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "endEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochInfo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAssets", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getDebtToResolve", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redeemMultiEpoch", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "registerWithdrawalRequest", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "resolveDebtShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolvingEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweep", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "userDebtShare", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableAssets", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawableShares", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtToResolve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemMultiEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerWithdrawalRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveDebtShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolvingEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userDebtShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableShares", data: BytesLike): Result;
    events: {
        "WithdrawalRequest(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "WithdrawalRequest"): EventFragment;
}
export interface WithdrawalRequestEventObject {
    user: string;
    epoch: BigNumber;
    shares: BigNumber;
}
export type WithdrawalRequestEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], WithdrawalRequestEventObject>;
export type WithdrawalRequestEventFilter = TypedEventFilter<WithdrawalRequestEvent>;
export interface WithdrawalEscrowV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WithdrawalEscrowV2Interface;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        canWithdraw(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        currentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        endEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        epochInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            shares: BigNumber;
            assets: BigNumber;
        }>;
        getAssets(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        getDebtToResolve(overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemMultiEpoch(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerWithdrawalRequest(user: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolveDebtShares(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolvingEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        sweep(_asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        userDebtShare(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        withdrawableAssets(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawableShares(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    asset(overrides?: CallOverrides): Promise<string>;
    canWithdraw(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
    endEpoch(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    epochInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        shares: BigNumber;
        assets: BigNumber;
    }>;
    getAssets(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    getDebtToResolve(overrides?: CallOverrides): Promise<BigNumber>;
    redeem(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemMultiEpoch(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerWithdrawalRequest(user: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolveDebtShares(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolvingEpoch(overrides?: CallOverrides): Promise<BigNumber>;
    sweep(_asset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
    userDebtShare(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    vault(overrides?: CallOverrides): Promise<string>;
    withdrawableAssets(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    withdrawableShares(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        asset(overrides?: CallOverrides): Promise<string>;
        canWithdraw(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        endEpoch(overrides?: CallOverrides): Promise<void>;
        epochInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            shares: BigNumber;
            assets: BigNumber;
        }>;
        getAssets(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getDebtToResolve(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemMultiEpoch(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        registerWithdrawalRequest(user: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        resolveDebtShares(overrides?: CallOverrides): Promise<void>;
        resolvingEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        sweep(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        userDebtShare(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
        withdrawableAssets(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableShares(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "WithdrawalRequest(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, epoch?: null, shares?: null): WithdrawalRequestEventFilter;
        WithdrawalRequest(user?: PromiseOrValue<string> | null, epoch?: null, shares?: null): WithdrawalRequestEventFilter;
    };
    estimateGas: {
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        canWithdraw(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        endEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        epochInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssets(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getDebtToResolve(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemMultiEpoch(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerWithdrawalRequest(user: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolveDebtShares(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolvingEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        sweep(_asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        userDebtShare(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableAssets(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableShares(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canWithdraw(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        epochInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssets(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtToResolve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemMultiEpoch(user: PromiseOrValue<string>, epochs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerWithdrawalRequest(user: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolveDebtShares(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolvingEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(_asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userDebtShare(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawableAssets(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawableShares(user: PromiseOrValue<string>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
