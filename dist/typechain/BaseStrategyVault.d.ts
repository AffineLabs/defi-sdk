import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BaseStrategyVaultInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "HARVESTER()": FunctionFragment;
        "LOCK_INTERVAL()": FunctionFragment;
        "asset()": FunctionFragment;
        "beginEpoch()": FunctionFragment;
        "debtEscrow()": FunctionFragment;
        "endEpoch()": FunctionFragment;
        "epoch()": FunctionFragment;
        "epochEnded()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "governance()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "harvest()": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "lastHarvest()": FunctionFragment;
        "lockedProfit()": FunctionFragment;
        "maxLockedProfit()": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setStrategy(address)": FunctionFragment;
        "strategy()": FunctionFragment;
        "strategyTVL()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "vaultTVL()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "HARVESTER" | "LOCK_INTERVAL" | "asset" | "beginEpoch" | "debtEscrow" | "endEpoch" | "epoch" | "epochEnded" | "getRoleAdmin" | "governance" | "grantRole" | "harvest" | "hasRole" | "lastHarvest" | "lockedProfit" | "maxLockedProfit" | "multicall" | "renounceRole" | "revokeRole" | "setStrategy" | "strategy" | "strategyTVL" | "supportsInterface" | "vaultTVL"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCK_INTERVAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "beginEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "debtEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "endEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochEnded", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "harvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastHarvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setStrategy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "strategy", values?: undefined): string;
    encodeFunctionData(functionFragment: "strategyTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "vaultTVL", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCK_INTERVAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beginEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochEnded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastHarvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultTVL", data: BytesLike): Result;
    events: {
        "Harvest(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Liquidation(uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "StrategyDeposit(uint256)": EventFragment;
        "StrategyWithdrawal(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyWithdrawal"): EventFragment;
}
export interface HarvestEventObject {
    user: string;
}
export type HarvestEvent = TypedEvent<[string], HarvestEventObject>;
export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LiquidationEventObject {
    assetsRequested: BigNumber;
    assetsLiquidated: BigNumber;
}
export type LiquidationEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LiquidationEventObject>;
export type LiquidationEventFilter = TypedEventFilter<LiquidationEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface StrategyDepositEventObject {
    assets: BigNumber;
}
export type StrategyDepositEvent = TypedEvent<[
    BigNumber
], StrategyDepositEventObject>;
export type StrategyDepositEventFilter = TypedEventFilter<StrategyDepositEvent>;
export interface StrategyWithdrawalEventObject {
    assetsRequested: BigNumber;
    assetsReceived: BigNumber;
}
export type StrategyWithdrawalEvent = TypedEvent<[
    BigNumber,
    BigNumber
], StrategyWithdrawalEventObject>;
export type StrategyWithdrawalEventFilter = TypedEventFilter<StrategyWithdrawalEvent>;
export interface BaseStrategyVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseStrategyVaultInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        HARVESTER(overrides?: CallOverrides): Promise<[string]>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        beginEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        debtEscrow(overrides?: CallOverrides): Promise<[string]>;
        endEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        epoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        epochEnded(overrides?: CallOverrides): Promise<[boolean]>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lastHarvest(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStrategy(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        strategy(overrides?: CallOverrides): Promise<[string]>;
        strategyTVL(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        vaultTVL(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
    asset(overrides?: CallOverrides): Promise<string>;
    beginEpoch(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    debtEscrow(overrides?: CallOverrides): Promise<string>;
    endEpoch(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    epoch(overrides?: CallOverrides): Promise<BigNumber>;
    epochEnded(overrides?: CallOverrides): Promise<boolean>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    governance(overrides?: CallOverrides): Promise<string>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvest(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
    lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStrategy(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    strategy(overrides?: CallOverrides): Promise<string>;
    strategyTVL(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<string>;
        beginEpoch(overrides?: CallOverrides): Promise<void>;
        debtEscrow(overrides?: CallOverrides): Promise<string>;
        endEpoch(overrides?: CallOverrides): Promise<void>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochEnded(overrides?: CallOverrides): Promise<boolean>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        governance(overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        harvest(overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setStrategy(newStrategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        strategy(overrides?: CallOverrides): Promise<string>;
        strategyTVL(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Harvest(address)"(user?: PromiseOrValue<string> | null): HarvestEventFilter;
        Harvest(user?: PromiseOrValue<string> | null): HarvestEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Liquidation(uint256,uint256)"(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        Liquidation(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "StrategyDeposit(uint256)"(assets?: null): StrategyDepositEventFilter;
        StrategyDeposit(assets?: null): StrategyDepositEventFilter;
        "StrategyWithdrawal(uint256,uint256)"(assetsRequested?: null, assetsReceived?: null): StrategyWithdrawalEventFilter;
        StrategyWithdrawal(assetsRequested?: null, assetsReceived?: null): StrategyWithdrawalEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        beginEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        debtEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        endEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochEnded(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStrategy(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        strategy(overrides?: CallOverrides): Promise<BigNumber>;
        strategyTVL(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beginEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        debtEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochEnded(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStrategy(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        strategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        strategyTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vaultTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
