import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IProtocolDataProvider {
    type TokenDataStruct = {
        symbol: PromiseOrValue<string>;
        tokenAddress: PromiseOrValue<string>;
    };
    type TokenDataStructOutput = [string, string] & {
        symbol: string;
        tokenAddress: string;
    };
}
export interface IProtocolDataProviderInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "getAllATokens()": FunctionFragment;
        "getAllReservesTokens()": FunctionFragment;
        "getReserveConfigurationData(address)": FunctionFragment;
        "getReserveData(address)": FunctionFragment;
        "getReserveTokensAddresses(address)": FunctionFragment;
        "getUserReserveData(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "getAllATokens" | "getAllReservesTokens" | "getReserveConfigurationData" | "getReserveData" | "getReserveTokensAddresses" | "getUserReserveData"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllATokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllReservesTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReserveConfigurationData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveTokensAddresses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserReserveData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllReservesTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveConfigurationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveTokensAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserReserveData", data: BytesLike): Result;
    events: {};
}
export interface IProtocolDataProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProtocolDataProviderInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        getAllATokens(overrides?: CallOverrides): Promise<[IProtocolDataProvider.TokenDataStructOutput[]]>;
        getAllReservesTokens(overrides?: CallOverrides): Promise<[IProtocolDataProvider.TokenDataStructOutput[]]>;
        getReserveConfigurationData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            boolean,
            boolean,
            boolean,
            boolean
        ] & {
            decimals: BigNumber;
            ltv: BigNumber;
            liquidationThreshold: BigNumber;
            liquidationBonus: BigNumber;
            reserveFactor: BigNumber;
            usageAsCollateralEnabled: boolean;
            borrowingEnabled: boolean;
            stableBorrowRateEnabled: boolean;
            isActive: boolean;
            isFrozen: boolean;
        }>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            availableLiquidity: BigNumber;
            totalStableDebt: BigNumber;
            totalVariableDebt: BigNumber;
            liquidityRate: BigNumber;
            variableBorrowRate: BigNumber;
            stableBorrowRate: BigNumber;
            averageStableBorrowRate: BigNumber;
            liquidityIndex: BigNumber;
            variableBorrowIndex: BigNumber;
            lastUpdateTimestamp: number;
        }>;
        getReserveTokensAddresses(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            aTokenAddress: string;
            stableDebtTokenAddress: string;
            variableDebtTokenAddress: string;
        }>;
        getUserReserveData(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            currentATokenBalance: BigNumber;
            currentStableDebt: BigNumber;
            currentVariableDebt: BigNumber;
            principalStableDebt: BigNumber;
            scaledVariableDebt: BigNumber;
            stableBorrowRate: BigNumber;
            liquidityRate: BigNumber;
            stableRateLastUpdated: number;
            usageAsCollateralEnabled: boolean;
        }>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    getAllATokens(overrides?: CallOverrides): Promise<IProtocolDataProvider.TokenDataStructOutput[]>;
    getAllReservesTokens(overrides?: CallOverrides): Promise<IProtocolDataProvider.TokenDataStructOutput[]>;
    getReserveConfigurationData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
    ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
    }>;
    getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        availableLiquidity: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
    }>;
    getReserveTokensAddresses(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        string,
        string
    ] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
    }>;
    getUserReserveData(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
    }>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        getAllATokens(overrides?: CallOverrides): Promise<IProtocolDataProvider.TokenDataStructOutput[]>;
        getAllReservesTokens(overrides?: CallOverrides): Promise<IProtocolDataProvider.TokenDataStructOutput[]>;
        getReserveConfigurationData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            boolean,
            boolean,
            boolean,
            boolean
        ] & {
            decimals: BigNumber;
            ltv: BigNumber;
            liquidationThreshold: BigNumber;
            liquidationBonus: BigNumber;
            reserveFactor: BigNumber;
            usageAsCollateralEnabled: boolean;
            borrowingEnabled: boolean;
            stableBorrowRateEnabled: boolean;
            isActive: boolean;
            isFrozen: boolean;
        }>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            availableLiquidity: BigNumber;
            totalStableDebt: BigNumber;
            totalVariableDebt: BigNumber;
            liquidityRate: BigNumber;
            variableBorrowRate: BigNumber;
            stableBorrowRate: BigNumber;
            averageStableBorrowRate: BigNumber;
            liquidityIndex: BigNumber;
            variableBorrowIndex: BigNumber;
            lastUpdateTimestamp: number;
        }>;
        getReserveTokensAddresses(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            aTokenAddress: string;
            stableDebtTokenAddress: string;
            variableDebtTokenAddress: string;
        }>;
        getUserReserveData(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            currentATokenBalance: BigNumber;
            currentStableDebt: BigNumber;
            currentVariableDebt: BigNumber;
            principalStableDebt: BigNumber;
            scaledVariableDebt: BigNumber;
            stableBorrowRate: BigNumber;
            liquidityRate: BigNumber;
            stableRateLastUpdated: number;
            usageAsCollateralEnabled: boolean;
        }>;
    };
    filters: {};
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        getAllATokens(overrides?: CallOverrides): Promise<BigNumber>;
        getAllReservesTokens(overrides?: CallOverrides): Promise<BigNumber>;
        getReserveConfigurationData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveTokensAddresses(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserReserveData(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllATokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllReservesTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveConfigurationData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveTokensAddresses(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserReserveData(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
