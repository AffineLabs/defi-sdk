import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace DetailedShare {
    type NumberStruct = {
        num: PromiseOrValue<BigNumberish>;
        decimals: PromiseOrValue<BigNumberish>;
    };
    type NumberStructOutput = [BigNumber, number] & {
        num: BigNumber;
        decimals: number;
    };
}
export interface DegenEthVaultInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "GUARDIAN_ROLE()": FunctionFragment;
        "HARVESTER()": FunctionFragment;
        "LOCK_INTERVAL()": FunctionFragment;
        "accessNft()": FunctionFragment;
        "accumulatedPerformanceFee()": FunctionFragment;
        "addStrategy(address,uint16)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "depositIntoStrategies(uint256)": FunctionFragment;
        "depositIntoStrategy(address,uint256)": FunctionFragment;
        "detailedPrice()": FunctionFragment;
        "detailedTVL()": FunctionFragment;
        "detailedTotalSupply()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getWithdrawalQueue()": FunctionFragment;
        "governance()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "harvest(address[])": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialSharesPerAsset()": FunctionFragment;
        "initialize(address,address,string,string)": FunctionFragment;
        "lastHarvest()": FunctionFragment;
        "lockedProfit()": FunctionFragment;
        "managementFee()": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxLockedProfit()": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "performanceFeeBps()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "rebalance()": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "removeStrategy(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setAccessNft(address)": FunctionFragment;
        "setManagementFee(uint256)": FunctionFragment;
        "setNftProperties(bool,bool)": FunctionFragment;
        "setPerformanceFeeBps(uint128)": FunctionFragment;
        "setWithdrawalFee(uint256)": FunctionFragment;
        "setWithdrawalFeeWithNft(uint16)": FunctionFragment;
        "setWithdrawalQueue(address[20])": FunctionFragment;
        "strategies(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tearDown(bytes)": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalBps()": FunctionFragment;
        "totalStrategyHoldings()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unpause()": FunctionFragment;
        "updateStrategyAllocations(address[],uint16[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "vaultTVL()": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
        "withdrawFromStrategy(address,uint256)": FunctionFragment;
        "withdrawPerformanceFee()": FunctionFragment;
        "withdrawalFee()": FunctionFragment;
        "withdrawalFeeWithNft()": FunctionFragment;
        "withdrawalQueue(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "GUARDIAN_ROLE" | "HARVESTER" | "LOCK_INTERVAL" | "accessNft" | "accumulatedPerformanceFee" | "addStrategy" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "decreaseAllowance" | "deposit" | "depositIntoStrategies" | "depositIntoStrategy" | "detailedPrice" | "detailedTVL" | "detailedTotalSupply" | "getRoleAdmin" | "getWithdrawalQueue" | "governance" | "grantRole" | "harvest" | "hasRole" | "increaseAllowance" | "initialSharesPerAsset" | "initialize" | "lastHarvest" | "lockedProfit" | "managementFee" | "maxDeposit" | "maxLockedProfit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "pause" | "paused" | "performanceFeeBps" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "proxiableUUID" | "rebalance" | "redeem" | "removeStrategy" | "renounceRole" | "revokeRole" | "setAccessNft" | "setManagementFee" | "setNftProperties" | "setPerformanceFeeBps" | "setWithdrawalFee" | "setWithdrawalFeeWithNft" | "setWithdrawalQueue" | "strategies" | "supportsInterface" | "symbol" | "tearDown" | "totalAssets" | "totalBps" | "totalStrategyHoldings" | "totalSupply" | "transfer" | "transferFrom" | "unpause" | "updateStrategyAllocations" | "upgradeTo" | "upgradeToAndCall" | "vaultTVL" | "withdraw" | "withdrawFromStrategy" | "withdrawPerformanceFee" | "withdrawalFee" | "withdrawalFeeWithNft" | "withdrawalQueue"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "GUARDIAN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCK_INTERVAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessNft", values?: undefined): string;
    encodeFunctionData(functionFragment: "accumulatedPerformanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "addStrategy", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositIntoStrategies", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositIntoStrategy", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "detailedPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "detailedTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "detailedTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getWithdrawalQueue", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "harvest", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialSharesPerAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "lastHarvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "managementFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxLockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "removeStrategy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAccessNft", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setManagementFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setNftProperties", values: [PromiseOrValue<boolean>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPerformanceFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFeeWithNft", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawalQueue", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "strategies", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tearDown", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStrategyHoldings", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateStrategyAllocations", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "vaultTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawFromStrategy", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawPerformanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalFeeWithNft", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalQueue", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GUARDIAN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCK_INTERVAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accumulatedPerformanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositIntoStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositIntoStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detailedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detailedTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detailedTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialSharesPerAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastHarvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "managementFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performanceFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccessNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManagementFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNftProperties", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPerformanceFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFeeWithNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tearDown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStrategyHoldings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStrategyAllocations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawPerformanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFeeWithNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalQueue", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Harvest(address,address[])": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Liquidation(uint256,uint256)": EventFragment;
        "ManagementFeeSet(uint256,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "PerformanceFeeWithdrawn(uint256)": EventFragment;
        "Rebalance(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "StrategyAdded(address)": EventFragment;
        "StrategyAllocsUpdated(address[],uint16[])": EventFragment;
        "StrategyDeposit(address,uint256)": EventFragment;
        "StrategyRemoved(address)": EventFragment;
        "StrategyWithdrawal(address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
        "WithdrawalFeeSet(uint256,uint256)": EventFragment;
        "WithdrawalQueueSet(address[20])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ManagementFeeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PerformanceFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyAllocsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalFeeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalQueueSet"): EventFragment;
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
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface DepositEventObject {
    caller: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
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
export interface ManagementFeeSetEventObject {
    oldFee: BigNumber;
    newFee: BigNumber;
}
export type ManagementFeeSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ManagementFeeSetEventObject>;
export type ManagementFeeSetEventFilter = TypedEventFilter<ManagementFeeSetEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PerformanceFeeWithdrawnEventObject {
    amount: BigNumber;
}
export type PerformanceFeeWithdrawnEvent = TypedEvent<[
    BigNumber
], PerformanceFeeWithdrawnEventObject>;
export type PerformanceFeeWithdrawnEventFilter = TypedEventFilter<PerformanceFeeWithdrawnEvent>;
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
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
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
export interface WithdrawEventObject {
    caller: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface WithdrawalFeeSetEventObject {
    oldFee: BigNumber;
    newFee: BigNumber;
}
export type WithdrawalFeeSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], WithdrawalFeeSetEventObject>;
export type WithdrawalFeeSetEventFilter = TypedEventFilter<WithdrawalFeeSetEvent>;
export interface WithdrawalQueueSetEventObject {
    newQueue: string[];
}
export type WithdrawalQueueSetEvent = TypedEvent<[
    string[]
], WithdrawalQueueSetEventObject>;
export type WithdrawalQueueSetEventFilter = TypedEventFilter<WithdrawalQueueSetEvent>;
export interface DegenEthVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DegenEthVaultInterface;
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
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        HARVESTER(overrides?: CallOverrides): Promise<[string]>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;
        accessNft(overrides?: CallOverrides): Promise<[string]>;
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            shares: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositIntoStrategies(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        detailedPrice(overrides?: CallOverrides): Promise<[
            DetailedShare.NumberStructOutput
        ] & {
            price: DetailedShare.NumberStructOutput;
        }>;
        detailedTVL(overrides?: CallOverrides): Promise<[
            DetailedShare.NumberStructOutput
        ] & {
            tvl: DetailedShare.NumberStructOutput;
        }>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<[
            DetailedShare.NumberStructOutput
        ] & {
            supply: DetailedShare.NumberStructOutput;
        }>;
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
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_governance: PromiseOrValue<string>, vaultAsset: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        managementFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        performanceFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewWithdraw(assetsToUser: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setManagementFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
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
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tearDown(users: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawPerformanceFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawalFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<[number]>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    GUARDIAN_ROLE(overrides?: CallOverrides): Promise<string>;
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
    accessNft(overrides?: CallOverrides): Promise<string>;
    accumulatedPerformanceFee(overrides?: CallOverrides): Promise<BigNumber>;
    addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositIntoStrategies(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    detailedPrice(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
    detailedTVL(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
    detailedTotalSupply(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
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
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialSharesPerAsset(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_governance: PromiseOrValue<string>, vaultAsset: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
    lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    managementFee(overrides?: CallOverrides): Promise<BigNumber>;
    maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assetsToUser: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    rebalance(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setManagementFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
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
    symbol(overrides?: CallOverrides): Promise<string>;
    tearDown(users: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalBps(overrides?: CallOverrides): Promise<BigNumber>;
    totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
    withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawPerformanceFee(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawalFeeWithNft(overrides?: CallOverrides): Promise<number>;
    withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<string>;
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        accessNft(overrides?: CallOverrides): Promise<string>;
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositIntoStrategies(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        detailedPrice(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
        detailedTVL(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<string[]>;
        governance(overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        harvest(strategyList: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governance: PromiseOrValue<string>, vaultAsset: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        managementFee(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assetsToUser: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        rebalance(overrides?: CallOverrides): Promise<void>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setManagementFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
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
        symbol(overrides?: CallOverrides): Promise<string>;
        tearDown(users: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalBps(overrides?: CallOverrides): Promise<BigNumber>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<void>;
        updateStrategyAllocations(strategyList: PromiseOrValue<string>[], strategyBps: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawPerformanceFee(overrides?: CallOverrides): Promise<void>;
        withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<number>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Deposit(address,address,uint256,uint256)"(caller?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(caller?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        "Harvest(address,address[])"(user?: PromiseOrValue<string> | null, strategies?: null): HarvestEventFilter;
        Harvest(user?: PromiseOrValue<string> | null, strategies?: null): HarvestEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Liquidation(uint256,uint256)"(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        Liquidation(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        "ManagementFeeSet(uint256,uint256)"(oldFee?: null, newFee?: null): ManagementFeeSetEventFilter;
        ManagementFeeSet(oldFee?: null, newFee?: null): ManagementFeeSetEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "PerformanceFeeWithdrawn(uint256)"(amount?: null): PerformanceFeeWithdrawnEventFilter;
        PerformanceFeeWithdrawn(amount?: null): PerformanceFeeWithdrawnEventFilter;
        "Rebalance(address)"(caller?: PromiseOrValue<string> | null): RebalanceEventFilter;
        Rebalance(caller?: PromiseOrValue<string> | null): RebalanceEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
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
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(caller?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(caller?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
        "WithdrawalFeeSet(uint256,uint256)"(oldFee?: null, newFee?: null): WithdrawalFeeSetEventFilter;
        WithdrawalFeeSet(oldFee?: null, newFee?: null): WithdrawalFeeSetEventFilter;
        "WithdrawalQueueSet(address[20])"(newQueue?: null): WithdrawalQueueSetEventFilter;
        WithdrawalQueueSet(newQueue?: null): WithdrawalQueueSetEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        accessNft(overrides?: CallOverrides): Promise<BigNumber>;
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositIntoStrategies(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        detailedPrice(overrides?: CallOverrides): Promise<BigNumber>;
        detailedTVL(overrides?: CallOverrides): Promise<BigNumber>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
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
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governance: PromiseOrValue<string>, vaultAsset: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        managementFee(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assetsToUser: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setManagementFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawalFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tearDown(users: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalBps(overrides?: CallOverrides): Promise<BigNumber>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
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
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawPerformanceFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accumulatedPerformanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addStrategy(strategy: PromiseOrValue<string>, tvlBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositIntoStrategies(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositIntoStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        detailedPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        detailedTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_governance: PromiseOrValue<string>, vaultAsset: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        managementFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        performanceFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assetsToUser: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalance(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAccessNft(_accessNft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setManagementFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNftProperties(_needNftToDeposit: PromiseOrValue<boolean>, _nftDiscountActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPerformanceFeeBps(_newFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFee(feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFeeWithNft(_newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalQueue(newQueue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        strategies(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tearDown(users: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
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
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFromStrategy(strategy: PromiseOrValue<string>, assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawPerformanceFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawalQueue(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
