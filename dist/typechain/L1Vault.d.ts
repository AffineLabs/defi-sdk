import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface L1VaultInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "HARVESTER()": FunctionFragment;
        "LOCK_INTERVAL()": FunctionFragment;
        "addStrategy(address,uint16)": FunctionFragment;
        "afterReceive()": FunctionFragment;
        "asset()": FunctionFragment;
        "bridgeEscrow()": FunctionFragment;
        "chainManager()": FunctionFragment;
        "depositIntoStrategy(address,uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getWithdrawalQueue()": FunctionFragment;
        "governance()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "harvest(address[])": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,address,address,address,address,address)": FunctionFragment;
        "lastHarvest()": FunctionFragment;
        "lockedProfit()": FunctionFragment;
        "maxLockedProfit()": FunctionFragment;
        "paused()": FunctionFragment;
        "predicate()": FunctionFragment;
        "processFundRequest(uint256)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "rebalance()": FunctionFragment;
        "received()": FunctionFragment;
        "removeStrategy(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "sendTVL()": FunctionFragment;
        "setBridgeEscrow(address)": FunctionFragment;
        "setWithdrawalQueue(address[20])": FunctionFragment;
        "setWormholeRouter(address)": FunctionFragment;
        "strategies(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalBps()": FunctionFragment;
        "totalStrategyHoldings()": FunctionFragment;
        "updateStrategyAllocations(address[],uint16[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "vaultTVL()": FunctionFragment;
        "withdrawFromStrategy(address,uint256)": FunctionFragment;
        "withdrawalQueue(uint256)": FunctionFragment;
        "wormholeRouter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "HARVESTER" | "LOCK_INTERVAL" | "addStrategy" | "afterReceive" | "asset" | "bridgeEscrow" | "chainManager" | "depositIntoStrategy" | "getRoleAdmin" | "getWithdrawalQueue" | "governance" | "grantRole" | "harvest" | "hasRole" | "initialize" | "lastHarvest" | "lockedProfit" | "maxLockedProfit" | "paused" | "predicate" | "processFundRequest" | "proxiableUUID" | "rebalance" | "received" | "removeStrategy" | "renounceRole" | "revokeRole" | "sendTVL" | "setBridgeEscrow" | "setWithdrawalQueue" | "setWormholeRouter" | "strategies" | "supportsInterface" | "totalBps" | "totalStrategyHoldings" | "updateStrategyAllocations" | "upgradeTo" | "upgradeToAndCall" | "vaultTVL" | "withdrawFromStrategy" | "withdrawalQueue" | "wormholeRouter"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCK_INTERVAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "addStrategy", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "afterReceive", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositIntoStrategy", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getWithdrawalQueue", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "harvest", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "lastHarvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "predicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "processFundRequest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "received", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeStrategy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sendTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBridgeEscrow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setWithdrawalQueue", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "setWormholeRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "strategies", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "totalBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStrategyHoldings", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateStrategyAllocations", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "vaultTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFromStrategy", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawalQueue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "wormholeRouter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCK_INTERVAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositIntoStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastHarvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "predicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processFundRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBridgeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWormholeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStrategyHoldings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStrategyAllocations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wormholeRouter", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "BridgeEscrowSet(address,address)": EventFragment;
        "Harvest(address,address[])": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Liquidation(uint256,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Rebalance(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SendTVL(uint256)": EventFragment;
        "StrategyAdded(address)": EventFragment;
        "StrategyAllocsUpdated(address[],uint16[])": EventFragment;
        "StrategyDeposit(address,uint256)": EventFragment;
        "StrategyRemoved(address)": EventFragment;
        "StrategyWithdrawal(address,uint256,uint256)": EventFragment;
        "TransferToL2(uint256,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "WithdrawalQueueSet(address[20])": EventFragment;
        "WormholeRouterSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeEscrowSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendTVL"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyAllocsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferToL2"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalQueueSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WormholeRouterSet"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface BridgeEscrowSetEventObject {
    oldEscrow: string;
    newEscrow: string;
}
export type BridgeEscrowSetEvent = TypedEvent<[
    string,
    string
], BridgeEscrowSetEventObject>;
export type BridgeEscrowSetEventFilter = TypedEventFilter<BridgeEscrowSetEvent>;
export interface HarvestEventObject {
    user: string;
    strategies: string[];
}
export type HarvestEvent = TypedEvent<[string, string[]], HarvestEventObject>;
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
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface RebalanceEventObject {
    caller: string;
}
export type RebalanceEvent = TypedEvent<[string], RebalanceEventObject>;
export type RebalanceEventFilter = TypedEventFilter<RebalanceEvent>;
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
export interface SendTVLEventObject {
    tvl: BigNumber;
}
export type SendTVLEvent = TypedEvent<[BigNumber], SendTVLEventObject>;
export type SendTVLEventFilter = TypedEventFilter<SendTVLEvent>;
export interface StrategyAddedEventObject {
    strategy: string;
}
export type StrategyAddedEvent = TypedEvent<[string], StrategyAddedEventObject>;
export type StrategyAddedEventFilter = TypedEventFilter<StrategyAddedEvent>;
export interface StrategyAllocsUpdatedEventObject {
    strategyList: string[];
    strategyBps: number[];
}
export type StrategyAllocsUpdatedEvent = TypedEvent<[
    string[],
    number[]
], StrategyAllocsUpdatedEventObject>;
export type StrategyAllocsUpdatedEventFilter = TypedEventFilter<StrategyAllocsUpdatedEvent>;
export interface StrategyDepositEventObject {
    strategy: string;
    assets: BigNumber;
}
export type StrategyDepositEvent = TypedEvent<[
    string,
    BigNumber
], StrategyDepositEventObject>;
export type StrategyDepositEventFilter = TypedEventFilter<StrategyDepositEvent>;
export interface StrategyRemovedEventObject {
    strategy: string;
}
export type StrategyRemovedEvent = TypedEvent<[
    string
], StrategyRemovedEventObject>;
export type StrategyRemovedEventFilter = TypedEventFilter<StrategyRemovedEvent>;
export interface StrategyWithdrawalEventObject {
    strategy: string;
    assetsRequested: BigNumber;
    assetsReceived: BigNumber;
}
export type StrategyWithdrawalEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StrategyWithdrawalEventObject>;
export type StrategyWithdrawalEventFilter = TypedEventFilter<StrategyWithdrawalEvent>;
export interface TransferToL2EventObject {
    assetsRequested: BigNumber;
    assetsSent: BigNumber;
}
export type TransferToL2Event = TypedEvent<[
    BigNumber,
    BigNumber
], TransferToL2EventObject>;
export type TransferToL2EventFilter = TypedEventFilter<TransferToL2Event>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface WithdrawalQueueSetEventObject {
    newQueue: string[];
}
export type WithdrawalQueueSetEvent = TypedEvent<[
    string[]
], WithdrawalQueueSetEventObject>;
export type WithdrawalQueueSetEventFilter = TypedEventFilter<WithdrawalQueueSetEvent>;
export interface WormholeRouterSetEventObject {
    oldRouter: string;
    newRouter: string;
}
export type WormholeRouterSetEvent = TypedEvent<[
    string,
    string
], WormholeRouterSetEventObject>;
export type WormholeRouterSetEventFilter = TypedEventFilter<WormholeRouterSetEvent>;
export interface L1Vault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1VaultInterface;
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
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterReceive(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        bridgeEscrow(overrides?: CallOverrides): Promise<[string]>;
        chainManager(overrides?: CallOverrides): Promise<[string]>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<[string[]]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvest(strategyList: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_governance: PromiseOrValue<string>, _token: PromiseOrValue<string>, _wormholeRouter: PromiseOrValue<string>, _bridgeEscrow: PromiseOrValue<string>, _chainManager: PromiseOrValue<string>, _predicate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        predicate(overrides?: CallOverrides): Promise<[string]>;
        processFundRequest(amountRequested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        received(overrides?: CallOverrides): Promise<[boolean]>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendTVL(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBridgeEscrow(_escrow: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWormholeRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            BigNumber
        ] & {
            isActive: boolean;
            tvlBps: number;
            balance: BigNumber;
        }>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        totalBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateStrategyAllocations(strategyList: PromiseOrValue<string>[], strategyBps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vaultTVL(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        wormholeRouter(overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
    addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterReceive(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    bridgeEscrow(overrides?: CallOverrides): Promise<string>;
    chainManager(overrides?: CallOverrides): Promise<string>;
    depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getWithdrawalQueue(overrides?: CallOverrides): Promise<string[]>;
    governance(overrides?: CallOverrides): Promise<string>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvest(strategyList: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_governance: PromiseOrValue<string>, _token: PromiseOrValue<string>, _wormholeRouter: PromiseOrValue<string>, _bridgeEscrow: PromiseOrValue<string>, _chainManager: PromiseOrValue<string>, _predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
    lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    predicate(overrides?: CallOverrides): Promise<string>;
    processFundRequest(amountRequested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    rebalance(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    received(overrides?: CallOverrides): Promise<boolean>;
    removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendTVL(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBridgeEscrow(_escrow: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWormholeRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        number,
        BigNumber
    ] & {
        isActive: boolean;
        tvlBps: number;
        balance: BigNumber;
    }>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    totalBps(overrides?: CallOverrides): Promise<BigNumber>;
    totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
    updateStrategyAllocations(strategyList: PromiseOrValue<string>[], strategyBps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    wormholeRouter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        afterReceive(overrides?: CallOverrides): Promise<void>;
        asset(overrides?: CallOverrides): Promise<string>;
        bridgeEscrow(overrides?: CallOverrides): Promise<string>;
        chainManager(overrides?: CallOverrides): Promise<string>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<string[]>;
        governance(overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        harvest(strategyList: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_governance: PromiseOrValue<string>, _token: PromiseOrValue<string>, _wormholeRouter: PromiseOrValue<string>, _bridgeEscrow: PromiseOrValue<string>, _chainManager: PromiseOrValue<string>, _predicate: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        predicate(overrides?: CallOverrides): Promise<string>;
        processFundRequest(amountRequested: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        rebalance(overrides?: CallOverrides): Promise<void>;
        received(overrides?: CallOverrides): Promise<boolean>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sendTVL(overrides?: CallOverrides): Promise<void>;
        setBridgeEscrow(_escrow: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        setWormholeRouter(_router: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            BigNumber
        ] & {
            isActive: boolean;
            tvlBps: number;
            balance: BigNumber;
        }>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        totalBps(overrides?: CallOverrides): Promise<BigNumber>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
        updateStrategyAllocations(strategyList: PromiseOrValue<string>[], strategyBps: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        wormholeRouter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "BridgeEscrowSet(address,address)"(oldEscrow?: PromiseOrValue<string> | null, newEscrow?: PromiseOrValue<string> | null): BridgeEscrowSetEventFilter;
        BridgeEscrowSet(oldEscrow?: PromiseOrValue<string> | null, newEscrow?: PromiseOrValue<string> | null): BridgeEscrowSetEventFilter;
        "Harvest(address,address[])"(user?: PromiseOrValue<string> | null, strategies?: null): HarvestEventFilter;
        Harvest(user?: PromiseOrValue<string> | null, strategies?: null): HarvestEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Liquidation(uint256,uint256)"(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        Liquidation(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Rebalance(address)"(caller?: PromiseOrValue<string> | null): RebalanceEventFilter;
        Rebalance(caller?: PromiseOrValue<string> | null): RebalanceEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "SendTVL(uint256)"(tvl?: null): SendTVLEventFilter;
        SendTVL(tvl?: null): SendTVLEventFilter;
        "StrategyAdded(address)"(strategy?: PromiseOrValue<string> | null): StrategyAddedEventFilter;
        StrategyAdded(strategy?: PromiseOrValue<string> | null): StrategyAddedEventFilter;
        "StrategyAllocsUpdated(address[],uint16[])"(strategyList?: null, strategyBps?: null): StrategyAllocsUpdatedEventFilter;
        StrategyAllocsUpdated(strategyList?: null, strategyBps?: null): StrategyAllocsUpdatedEventFilter;
        "StrategyDeposit(address,uint256)"(strategy?: PromiseOrValue<string> | null, assets?: null): StrategyDepositEventFilter;
        StrategyDeposit(strategy?: PromiseOrValue<string> | null, assets?: null): StrategyDepositEventFilter;
        "StrategyRemoved(address)"(strategy?: PromiseOrValue<string> | null): StrategyRemovedEventFilter;
        StrategyRemoved(strategy?: PromiseOrValue<string> | null): StrategyRemovedEventFilter;
        "StrategyWithdrawal(address,uint256,uint256)"(strategy?: PromiseOrValue<string> | null, assetsRequested?: null, assetsReceived?: null): StrategyWithdrawalEventFilter;
        StrategyWithdrawal(strategy?: PromiseOrValue<string> | null, assetsRequested?: null, assetsReceived?: null): StrategyWithdrawalEventFilter;
        "TransferToL2(uint256,uint256)"(assetsRequested?: null, assetsSent?: null): TransferToL2EventFilter;
        TransferToL2(assetsRequested?: null, assetsSent?: null): TransferToL2EventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        "WithdrawalQueueSet(address[20])"(newQueue?: null): WithdrawalQueueSetEventFilter;
        WithdrawalQueueSet(newQueue?: null): WithdrawalQueueSetEventFilter;
        "WormholeRouterSet(address,address)"(oldRouter?: PromiseOrValue<string> | null, newRouter?: PromiseOrValue<string> | null): WormholeRouterSetEventFilter;
        WormholeRouterSet(oldRouter?: PromiseOrValue<string> | null, newRouter?: PromiseOrValue<string> | null): WormholeRouterSetEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterReceive(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        chainManager(overrides?: CallOverrides): Promise<BigNumber>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvest(strategyList: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governance: PromiseOrValue<string>, _token: PromiseOrValue<string>, _wormholeRouter: PromiseOrValue<string>, _bridgeEscrow: PromiseOrValue<string>, _chainManager: PromiseOrValue<string>, _predicate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        predicate(overrides?: CallOverrides): Promise<BigNumber>;
        processFundRequest(amountRequested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        received(overrides?: CallOverrides): Promise<BigNumber>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendTVL(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBridgeEscrow(_escrow: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWormholeRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        totalBps(overrides?: CallOverrides): Promise<BigNumber>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
        updateStrategyAllocations(strategyList: PromiseOrValue<string>[], strategyBps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        wormholeRouter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterReceive(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgeEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvest(strategyList: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_governance: PromiseOrValue<string>, _token: PromiseOrValue<string>, _wormholeRouter: PromiseOrValue<string>, _bridgeEscrow: PromiseOrValue<string>, _chainManager: PromiseOrValue<string>, _predicate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        predicate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processFundRequest(amountRequested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        received(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendTVL(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBridgeEscrow(_escrow: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWormholeRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateStrategyAllocations(strategyList: PromiseOrValue<string>[], strategyBps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vaultTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wormholeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
