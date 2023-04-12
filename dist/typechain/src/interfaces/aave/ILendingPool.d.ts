import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace DataTypes {
    type ReserveConfigurationMapStruct = {
        data: PromiseOrValue<BigNumberish>;
    };
    type ReserveConfigurationMapStructOutput = [BigNumber] & {
        data: BigNumber;
    };
    type ReserveDataStruct = {
        configuration: DataTypes.ReserveConfigurationMapStruct;
        liquidityIndex: PromiseOrValue<BigNumberish>;
        variableBorrowIndex: PromiseOrValue<BigNumberish>;
        currentLiquidityRate: PromiseOrValue<BigNumberish>;
        currentVariableBorrowRate: PromiseOrValue<BigNumberish>;
        currentStableBorrowRate: PromiseOrValue<BigNumberish>;
        lastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        aTokenAddress: PromiseOrValue<string>;
        stableDebtTokenAddress: PromiseOrValue<string>;
        variableDebtTokenAddress: PromiseOrValue<string>;
        interestRateStrategyAddress: PromiseOrValue<string>;
        id: PromiseOrValue<BigNumberish>;
    };
    type ReserveDataStructOutput = [
        DataTypes.ReserveConfigurationMapStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        number
    ] & {
        configuration: DataTypes.ReserveConfigurationMapStructOutput;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        id: number;
    };
    type UserConfigurationMapStruct = {
        data: PromiseOrValue<BigNumberish>;
    };
    type UserConfigurationMapStructOutput = [BigNumber] & {
        data: BigNumber;
    };
}
export interface ILendingPoolInterface extends utils.Interface {
    functions: {
        "borrow(address,uint256,uint256,uint16,address)": FunctionFragment;
        "deposit(address,uint256,address,uint16)": FunctionFragment;
        "finalizeTransfer(address,address,address,uint256,uint256,uint256)": FunctionFragment;
        "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": FunctionFragment;
        "getAddressesProvider()": FunctionFragment;
        "getConfiguration(address)": FunctionFragment;
        "getReserveData(address)": FunctionFragment;
        "getReserveNormalizedIncome(address)": FunctionFragment;
        "getReserveNormalizedVariableDebt(address)": FunctionFragment;
        "getReservesList()": FunctionFragment;
        "getUserAccountData(address)": FunctionFragment;
        "getUserConfiguration(address)": FunctionFragment;
        "initReserve(address,address,address,address,address)": FunctionFragment;
        "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
        "paused()": FunctionFragment;
        "rebalanceStableBorrowRate(address,address)": FunctionFragment;
        "repay(address,uint256,uint256,address)": FunctionFragment;
        "setConfiguration(address,uint256)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
        "setUserUseReserveAsCollateral(address,bool)": FunctionFragment;
        "swapBorrowRateMode(address,uint256)": FunctionFragment;
        "withdraw(address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "borrow" | "deposit" | "finalizeTransfer" | "flashLoan" | "getAddressesProvider" | "getConfiguration" | "getReserveData" | "getReserveNormalizedIncome" | "getReserveNormalizedVariableDebt" | "getReservesList" | "getUserAccountData" | "getUserConfiguration" | "initReserve" | "liquidationCall" | "paused" | "rebalanceStableBorrowRate" | "repay" | "setConfiguration" | "setPause" | "setReserveInterestRateStrategyAddress" | "setUserUseReserveAsCollateral" | "swapBorrowRateMode" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "borrow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "finalizeTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getConfiguration", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedIncome", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedVariableDebt", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReservesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccountData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserConfiguration", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initReserve", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "liquidationCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalanceStableBorrowRate", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "repay", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setConfiguration", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUserUseReserveAsCollateral", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "swapBorrowRateMode", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedIncome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedVariableDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Borrow(address,address,address,uint256,uint256,uint256,uint16)": EventFragment;
        "Deposit(address,address,address,uint256,uint16)": EventFragment;
        "FlashLoan(address,address,address,uint256,uint256,uint16)": EventFragment;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
        "Paused()": EventFragment;
        "RebalanceStableBorrowRate(address,address)": EventFragment;
        "Repay(address,address,address,uint256)": EventFragment;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
        "Swap(address,address,uint256)": EventFragment;
        "Unpaused()": EventFragment;
        "Withdraw(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RebalanceStableBorrowRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface BorrowEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    borrowRateMode: BigNumber;
    borrowRate: BigNumber;
    referral: number;
}
export type BorrowEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number
], BorrowEventObject>;
export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface DepositEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referral: number;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface FlashLoanEventObject {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    premium: BigNumber;
    referralCode: number;
}
export type FlashLoanEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number
], FlashLoanEventObject>;
export type FlashLoanEventFilter = TypedEventFilter<FlashLoanEvent>;
export interface LiquidationCallEventObject {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BigNumber;
    liquidatedCollateralAmount: BigNumber;
    liquidator: string;
    receiveAToken: boolean;
}
export type LiquidationCallEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean
], LiquidationCallEventObject>;
export type LiquidationCallEventFilter = TypedEventFilter<LiquidationCallEvent>;
export interface PausedEventObject {
}
export type PausedEvent = TypedEvent<[], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface RebalanceStableBorrowRateEventObject {
    reserve: string;
    user: string;
}
export type RebalanceStableBorrowRateEvent = TypedEvent<[
    string,
    string
], RebalanceStableBorrowRateEventObject>;
export type RebalanceStableBorrowRateEventFilter = TypedEventFilter<RebalanceStableBorrowRateEvent>;
export interface RepayEventObject {
    reserve: string;
    user: string;
    repayer: string;
    amount: BigNumber;
}
export type RepayEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], RepayEventObject>;
export type RepayEventFilter = TypedEventFilter<RepayEvent>;
export interface ReserveDataUpdatedEventObject {
    reserve: string;
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
}
export type ReserveDataUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ReserveDataUpdatedEventObject>;
export type ReserveDataUpdatedEventFilter = TypedEventFilter<ReserveDataUpdatedEvent>;
export interface ReserveUsedAsCollateralDisabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralDisabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralDisabledEventObject>;
export type ReserveUsedAsCollateralDisabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralDisabledEvent>;
export interface ReserveUsedAsCollateralEnabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralEnabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralEnabledEventObject>;
export type ReserveUsedAsCollateralEnabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralEnabledEvent>;
export interface SwapEventObject {
    reserve: string;
    user: string;
    rateMode: BigNumber;
}
export type SwapEvent = TypedEvent<[
    string,
    string,
    BigNumber
], SwapEventObject>;
export type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface UnpausedEventObject {
}
export type UnpausedEvent = TypedEvent<[], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface WithdrawEventObject {
    reserve: string;
    user: string;
    to: string;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface ILendingPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILendingPoolInterface;
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
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromAfter: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], modes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAddressesProvider(overrides?: CallOverrides): Promise<[string]>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.ReserveConfigurationMapStructOutput]>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.ReserveDataStructOutput]>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReservesList(overrides?: CallOverrides): Promise<[string[]]>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralETH: BigNumber;
            totalDebtETH: BigNumber;
            availableBorrowsETH: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.UserConfigurationMapStructOutput]>;
        initReserve(reserve: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfiguration(reserve: PromiseOrValue<string>, configuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveInterestRateStrategyAddress(reserve: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, rateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromAfter: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], modes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAddressesProvider(overrides?: CallOverrides): Promise<string>;
    getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>;
    getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>;
    getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReservesList(overrides?: CallOverrides): Promise<string[]>;
    getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
    }>;
    getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.UserConfigurationMapStructOutput>;
    initReserve(reserve: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfiguration(reserve: PromiseOrValue<string>, configuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveInterestRateStrategyAddress(reserve: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapBorrowRateMode(asset: PromiseOrValue<string>, rateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromAfter: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], modes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAddressesProvider(overrides?: CallOverrides): Promise<string>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<string[]>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralETH: BigNumber;
            totalDebtETH: BigNumber;
            availableBorrowsETH: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.UserConfigurationMapStructOutput>;
        initReserve(reserve: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setConfiguration(reserve: PromiseOrValue<string>, configuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPause(val: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveInterestRateStrategyAddress(reserve: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, rateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Borrow(address,address,address,uint256,uint256,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, borrowRateMode?: null, borrowRate?: null, referral?: PromiseOrValue<BigNumberish> | null): BorrowEventFilter;
        Borrow(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, borrowRateMode?: null, borrowRate?: null, referral?: PromiseOrValue<BigNumberish> | null): BorrowEventFilter;
        "Deposit(address,address,address,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referral?: PromiseOrValue<BigNumberish> | null): DepositEventFilter;
        Deposit(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referral?: PromiseOrValue<BigNumberish> | null): DepositEventFilter;
        "FlashLoan(address,address,address,uint256,uint256,uint16)"(target?: PromiseOrValue<string> | null, initiator?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null, premium?: null, referralCode?: null): FlashLoanEventFilter;
        FlashLoan(target?: PromiseOrValue<string> | null, initiator?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null, premium?: null, referralCode?: null): FlashLoanEventFilter;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)"(collateralAsset?: PromiseOrValue<string> | null, debtAsset?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        LiquidationCall(collateralAsset?: PromiseOrValue<string> | null, debtAsset?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        "Paused()"(): PausedEventFilter;
        Paused(): PausedEventFilter;
        "RebalanceStableBorrowRate(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): RebalanceStableBorrowRateEventFilter;
        RebalanceStableBorrowRate(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): RebalanceStableBorrowRateEventFilter;
        "Repay(address,address,address,uint256)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, repayer?: PromiseOrValue<string> | null, amount?: null): RepayEventFilter;
        Repay(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, repayer?: PromiseOrValue<string> | null, amount?: null): RepayEventFilter;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"(reserve?: PromiseOrValue<string> | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        ReserveDataUpdated(reserve?: PromiseOrValue<string> | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        "ReserveUsedAsCollateralDisabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        ReserveUsedAsCollateralDisabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        "Swap(address,address,uint256)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, rateMode?: null): SwapEventFilter;
        Swap(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, rateMode?: null): SwapEventFilter;
        "Unpaused()"(): UnpausedEventFilter;
        Unpaused(): UnpausedEventFilter;
        "Withdraw(address,address,address,uint256)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
        Withdraw(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromAfter: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], modes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initReserve(reserve: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfiguration(reserve: PromiseOrValue<string>, configuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveInterestRateStrategyAddress(reserve: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, rateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromAfter: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], modes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAddressesProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initReserve(reserve: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfiguration(reserve: PromiseOrValue<string>, configuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveInterestRateStrategyAddress(reserve: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, rateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
