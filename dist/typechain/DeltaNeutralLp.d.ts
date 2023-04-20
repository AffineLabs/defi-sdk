import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type LendingInfoStruct = {
    pool: PromiseOrValue<string>;
    borrow: PromiseOrValue<string>;
    priceFeed: PromiseOrValue<string>;
    assetToDepositRatioBps: PromiseOrValue<BigNumberish>;
    collateralToBorrowRatioBps: PromiseOrValue<BigNumberish>;
};
export type LendingInfoStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber
] & {
    pool: string;
    borrow: string;
    priceFeed: string;
    assetToDepositRatioBps: BigNumber;
    collateralToBorrowRatioBps: BigNumber;
};
export type LpInfoStruct = {
    router: PromiseOrValue<string>;
    masterChef: PromiseOrValue<string>;
    masterChefPid: PromiseOrValue<BigNumberish>;
    useMasterChefV2: PromiseOrValue<boolean>;
    sushiToken: PromiseOrValue<string>;
    pool: PromiseOrValue<string>;
};
export type LpInfoStructOutput = [
    string,
    string,
    BigNumber,
    boolean,
    string,
    string
] & {
    router: string;
    masterChef: string;
    masterChefPid: BigNumber;
    useMasterChefV2: boolean;
    sushiToken: string;
    pool: string;
};
export interface DeltaNeutralLpInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "STRATEGIST_ROLE()": FunctionFragment;
        "V3ROUTER()": FunctionFragment;
        "aToken()": FunctionFragment;
        "abPair()": FunctionFragment;
        "asset()": FunctionFragment;
        "assetToDepositRatioBps()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "borrow()": FunctionFragment;
        "borrowFeed()": FunctionFragment;
        "canStartNewPos()": FunctionFragment;
        "claimAndSellSushi(uint256)": FunctionFragment;
        "collateralToBorrowRatioBps()": FunctionFragment;
        "currentPosition()": FunctionFragment;
        "debtToken()": FunctionFragment;
        "decimalAdjust()": FunctionFragment;
        "decimalAdjustSign()": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "endPosition(uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "masterChef()": FunctionFragment;
        "masterChefPid()": FunctionFragment;
        "poolFee()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "router()": FunctionFragment;
        "startPosition(uint256,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sushiToken()": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "useMasterChefV2()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "MAX_BPS" | "STRATEGIST_ROLE" | "V3ROUTER" | "aToken" | "abPair" | "asset" | "assetToDepositRatioBps" | "balanceOfAsset" | "borrow" | "borrowFeed" | "canStartNewPos" | "claimAndSellSushi" | "collateralToBorrowRatioBps" | "currentPosition" | "debtToken" | "decimalAdjust" | "decimalAdjustSign" | "divest" | "endPosition" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "masterChef" | "masterChefPid" | "poolFee" | "renounceRole" | "revokeRole" | "router" | "startPosition" | "supportsInterface" | "sushiToken" | "sweep" | "totalLockedValue" | "useMasterChefV2" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "V3ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "aToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "abPair", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "assetToDepositRatioBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "canStartNewPos", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAndSellSushi", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "collateralToBorrowRatioBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimalAdjust", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimalAdjustSign", values?: undefined): string;
    encodeFunctionData(functionFragment: "divest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "invest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "masterChef", values?: undefined): string;
    encodeFunctionData(functionFragment: "masterChefPid", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "startPosition", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "sushiToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweep", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "useMasterChefV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "V3ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "abPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetToDepositRatioBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canStartNewPos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAndSellSushi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralToBorrowRatioBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimalAdjust", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimalAdjustSign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "masterChef", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "masterChefPid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sushiToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useMasterChefV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "PositionEnd(uint32,uint256,uint256,uint256,uint256[2],bool,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "PositionStart(uint32,uint256,uint256,uint256[2],uint256,uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PositionEnd"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionStart"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface PositionEndEventObject {
    position: number;
    assetsFromSushi: BigNumber;
    borrowsFromSushi: BigNumber;
    assetsFromRewards: BigNumber;
    borrowPrices: [BigNumber, BigNumber];
    assetSold: boolean;
    assetsOrBorrowsSold: BigNumber;
    assetsOrBorrowsReceived: BigNumber;
    assetCollateral: BigNumber;
    borrowDebtPaid: BigNumber;
    timestamp: BigNumber;
}
export type PositionEndEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    [
        BigNumber,
        BigNumber
    ],
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionEndEventObject>;
export type PositionEndEventFilter = TypedEventFilter<PositionEndEvent>;
export interface PositionStartEventObject {
    position: number;
    assetCollateral: BigNumber;
    borrows: BigNumber;
    borrowPrices: [BigNumber, BigNumber];
    assetsToSushi: BigNumber;
    borrowsToSushi: BigNumber;
    timestamp: BigNumber;
}
export type PositionStartEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    [
        BigNumber,
        BigNumber
    ],
    BigNumber,
    BigNumber,
    BigNumber
], PositionStartEventObject>;
export type PositionStartEventFilter = TypedEventFilter<PositionStartEvent>;
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
export interface DeltaNeutralLp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeltaNeutralLpInterface;
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
        MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<[string]>;
        V3ROUTER(overrides?: CallOverrides): Promise<[string]>;
        aToken(overrides?: CallOverrides): Promise<[string]>;
        abPair(overrides?: CallOverrides): Promise<[string]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        borrow(overrides?: CallOverrides): Promise<[string]>;
        borrowFeed(overrides?: CallOverrides): Promise<[string]>;
        canStartNewPos(overrides?: CallOverrides): Promise<[boolean]>;
        claimAndSellSushi(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        currentPosition(overrides?: CallOverrides): Promise<[number]>;
        debtToken(overrides?: CallOverrides): Promise<[string]>;
        decimalAdjust(overrides?: CallOverrides): Promise<[BigNumber]>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<[boolean]>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        masterChef(overrides?: CallOverrides): Promise<[string]>;
        masterChefPid(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolFee(overrides?: CallOverrides): Promise<[number]>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        startPosition(assets: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        sushiToken(overrides?: CallOverrides): Promise<[string]>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        useMasterChefV2(overrides?: CallOverrides): Promise<[boolean]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
    V3ROUTER(overrides?: CallOverrides): Promise<string>;
    aToken(overrides?: CallOverrides): Promise<string>;
    abPair(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    assetToDepositRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    borrow(overrides?: CallOverrides): Promise<string>;
    borrowFeed(overrides?: CallOverrides): Promise<string>;
    canStartNewPos(overrides?: CallOverrides): Promise<boolean>;
    claimAndSellSushi(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
    currentPosition(overrides?: CallOverrides): Promise<number>;
    debtToken(overrides?: CallOverrides): Promise<string>;
    decimalAdjust(overrides?: CallOverrides): Promise<BigNumber>;
    decimalAdjustSign(overrides?: CallOverrides): Promise<boolean>;
    divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    invest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    masterChef(overrides?: CallOverrides): Promise<string>;
    masterChefPid(overrides?: CallOverrides): Promise<BigNumber>;
    poolFee(overrides?: CallOverrides): Promise<number>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    startPosition(assets: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    sushiToken(overrides?: CallOverrides): Promise<string>;
    sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
    useMasterChefV2(overrides?: CallOverrides): Promise<boolean>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
        V3ROUTER(overrides?: CallOverrides): Promise<string>;
        aToken(overrides?: CallOverrides): Promise<string>;
        abPair(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrow(overrides?: CallOverrides): Promise<string>;
        borrowFeed(overrides?: CallOverrides): Promise<string>;
        canStartNewPos(overrides?: CallOverrides): Promise<boolean>;
        claimAndSellSushi(slippageBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        currentPosition(overrides?: CallOverrides): Promise<number>;
        debtToken(overrides?: CallOverrides): Promise<string>;
        decimalAdjust(overrides?: CallOverrides): Promise<BigNumber>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<boolean>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        masterChef(overrides?: CallOverrides): Promise<string>;
        masterChefPid(overrides?: CallOverrides): Promise<BigNumber>;
        poolFee(overrides?: CallOverrides): Promise<number>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        startPosition(assets: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        sushiToken(overrides?: CallOverrides): Promise<string>;
        sweep(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        useMasterChefV2(overrides?: CallOverrides): Promise<boolean>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PositionEnd(uint32,uint256,uint256,uint256,uint256[2],bool,uint256,uint256,uint256,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, assetsFromSushi?: null, borrowsFromSushi?: null, assetsFromRewards?: null, borrowPrices?: null, assetSold?: null, assetsOrBorrowsSold?: null, assetsOrBorrowsReceived?: null, assetCollateral?: null, borrowDebtPaid?: null, timestamp?: null): PositionEndEventFilter;
        PositionEnd(position?: PromiseOrValue<BigNumberish> | null, assetsFromSushi?: null, borrowsFromSushi?: null, assetsFromRewards?: null, borrowPrices?: null, assetSold?: null, assetsOrBorrowsSold?: null, assetsOrBorrowsReceived?: null, assetCollateral?: null, borrowDebtPaid?: null, timestamp?: null): PositionEndEventFilter;
        "PositionStart(uint32,uint256,uint256,uint256[2],uint256,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, assetCollateral?: null, borrows?: null, borrowPrices?: null, assetsToSushi?: null, borrowsToSushi?: null, timestamp?: null): PositionStartEventFilter;
        PositionStart(position?: PromiseOrValue<BigNumberish> | null, assetCollateral?: null, borrows?: null, borrowPrices?: null, assetsToSushi?: null, borrowsToSushi?: null, timestamp?: null): PositionStartEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        V3ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        aToken(overrides?: CallOverrides): Promise<BigNumber>;
        abPair(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrow(overrides?: CallOverrides): Promise<BigNumber>;
        borrowFeed(overrides?: CallOverrides): Promise<BigNumber>;
        canStartNewPos(overrides?: CallOverrides): Promise<BigNumber>;
        claimAndSellSushi(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        currentPosition(overrides?: CallOverrides): Promise<BigNumber>;
        debtToken(overrides?: CallOverrides): Promise<BigNumber>;
        decimalAdjust(overrides?: CallOverrides): Promise<BigNumber>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<BigNumber>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        masterChef(overrides?: CallOverrides): Promise<BigNumber>;
        masterChefPid(overrides?: CallOverrides): Promise<BigNumber>;
        poolFee(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        startPosition(assets: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        sushiToken(overrides?: CallOverrides): Promise<BigNumber>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        useMasterChefV2(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        V3ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        abPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canStartNewPos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimAndSellSushi(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimalAdjust(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        masterChef(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        masterChefPid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startPosition(assets: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sushiToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useMasterChefV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
