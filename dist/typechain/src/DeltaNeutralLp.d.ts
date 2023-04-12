import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface DeltaNeutralLpInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "STRATEGIST_ROLE()": FunctionFragment;
        "_totalLockedValue(bool)": FunctionFragment;
        "aToken()": FunctionFragment;
        "abPair()": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "borrowAsset()": FunctionFragment;
        "canStartNewPos()": FunctionFragment;
        "claimRewards(uint256)": FunctionFragment;
        "claimRewardsAndEndPosition(uint256)": FunctionFragment;
        "currentPosition()": FunctionFragment;
        "debtToken()": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "endPosition(uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "longPercentage()": FunctionFragment;
        "masterChef()": FunctionFragment;
        "masterChefPid()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "router()": FunctionFragment;
        "startPosition(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sushiToken()": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "totalLockedValue(bool)": FunctionFragment;
        "useMasterChefV2()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "MAX_BPS" | "STRATEGIST_ROLE" | "_totalLockedValue" | "aToken" | "abPair" | "asset" | "balanceOfAsset" | "borrowAsset" | "canStartNewPos" | "claimRewards" | "claimRewardsAndEndPosition" | "currentPosition" | "debtToken" | "divest" | "endPosition" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "longPercentage" | "masterChef" | "masterChefPid" | "renounceRole" | "revokeRole" | "router" | "startPosition" | "supportsInterface" | "sushiToken" | "sweep" | "totalLockedValue()" | "totalLockedValue(bool)" | "useMasterChefV2" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_totalLockedValue", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "aToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "abPair", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "canStartNewPos", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimRewardsAndEndPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "currentPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "divest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "invest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "longPercentage", values?: undefined): string;
    encodeFunctionData(functionFragment: "masterChef", values?: undefined): string;
    encodeFunctionData(functionFragment: "masterChefPid", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "startPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "sushiToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweep", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalLockedValue()", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalLockedValue(bool)", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "useMasterChefV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "abPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canStartNewPos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsAndEndPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "longPercentage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "masterChef", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "masterChefPid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sushiToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useMasterChefV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "MetricInfo(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "PositionEnd(uint32,uint256,uint256)": EventFragment;
        "PositionStart(uint32,uint256,uint256,uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MetricInfo"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionEnd"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionStart"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface MetricInfoEventObject {
    position: BigNumber;
    step: BigNumber;
    assetBalance: BigNumber;
    borrowBalance: BigNumber;
    abPairBalance: BigNumber;
    aTokenBalance: BigNumber;
    debtTokenBalance: BigNumber;
    sushiBalance: BigNumber;
    masterChefStakedAmount: BigNumber;
}
export type MetricInfoEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MetricInfoEventObject>;
export type MetricInfoEventFilter = TypedEventFilter<MetricInfoEvent>;
export interface PositionEndEventObject {
    position: number;
    assetBalance: BigNumber;
    timestamp: BigNumber;
}
export type PositionEndEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], PositionEndEventObject>;
export type PositionEndEventFilter = TypedEventFilter<PositionEndEvent>;
export interface PositionStartEventObject {
    position: number;
    assetBalance: BigNumber;
    borrowPriceChainlink: BigNumber;
    borrowPriceSushi: BigNumber;
    timestamp: BigNumber;
}
export type PositionStartEvent = TypedEvent<[
    number,
    BigNumber,
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
        _totalLockedValue(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        aToken(overrides?: CallOverrides): Promise<[string]>;
        abPair(overrides?: CallOverrides): Promise<[string]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        borrowAsset(overrides?: CallOverrides): Promise<[string]>;
        canStartNewPos(overrides?: CallOverrides): Promise<[boolean]>;
        claimRewards(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimRewardsAndEndPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentPosition(overrides?: CallOverrides): Promise<[number]>;
        debtToken(overrides?: CallOverrides): Promise<[string]>;
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
        longPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;
        masterChef(overrides?: CallOverrides): Promise<[string]>;
        masterChefPid(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        startPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        sushiToken(overrides?: CallOverrides): Promise<[string]>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "totalLockedValue()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        "totalLockedValue(bool)"(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        useMasterChefV2(overrides?: CallOverrides): Promise<[boolean]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
    _totalLockedValue(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    aToken(overrides?: CallOverrides): Promise<string>;
    abPair(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    borrowAsset(overrides?: CallOverrides): Promise<string>;
    canStartNewPos(overrides?: CallOverrides): Promise<boolean>;
    claimRewards(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRewardsAndEndPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentPosition(overrides?: CallOverrides): Promise<number>;
    debtToken(overrides?: CallOverrides): Promise<string>;
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
    longPercentage(overrides?: CallOverrides): Promise<BigNumber>;
    masterChef(overrides?: CallOverrides): Promise<string>;
    masterChefPid(overrides?: CallOverrides): Promise<BigNumber>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    startPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    sushiToken(overrides?: CallOverrides): Promise<string>;
    sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "totalLockedValue()"(overrides?: CallOverrides): Promise<BigNumber>;
    "totalLockedValue(bool)"(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    useMasterChefV2(overrides?: CallOverrides): Promise<boolean>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
        _totalLockedValue(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        aToken(overrides?: CallOverrides): Promise<string>;
        abPair(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAsset(overrides?: CallOverrides): Promise<string>;
        canStartNewPos(overrides?: CallOverrides): Promise<boolean>;
        claimRewards(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimRewardsAndEndPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        currentPosition(overrides?: CallOverrides): Promise<number>;
        debtToken(overrides?: CallOverrides): Promise<string>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        longPercentage(overrides?: CallOverrides): Promise<BigNumber>;
        masterChef(overrides?: CallOverrides): Promise<string>;
        masterChefPid(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        startPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        sushiToken(overrides?: CallOverrides): Promise<string>;
        sweep(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "totalLockedValue()"(overrides?: CallOverrides): Promise<BigNumber>;
        "totalLockedValue(bool)"(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        useMasterChefV2(overrides?: CallOverrides): Promise<boolean>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MetricInfo(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, step?: null, assetBalance?: null, borrowBalance?: null, abPairBalance?: null, aTokenBalance?: null, debtTokenBalance?: null, sushiBalance?: null, masterChefStakedAmount?: null): MetricInfoEventFilter;
        MetricInfo(position?: PromiseOrValue<BigNumberish> | null, step?: null, assetBalance?: null, borrowBalance?: null, abPairBalance?: null, aTokenBalance?: null, debtTokenBalance?: null, sushiBalance?: null, masterChefStakedAmount?: null): MetricInfoEventFilter;
        "PositionEnd(uint32,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, assetBalance?: null, timestamp?: null): PositionEndEventFilter;
        PositionEnd(position?: PromiseOrValue<BigNumberish> | null, assetBalance?: null, timestamp?: null): PositionEndEventFilter;
        "PositionStart(uint32,uint256,uint256,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, assetBalance?: null, borrowPriceChainlink?: null, borrowPriceSushi?: null, timestamp?: null): PositionStartEventFilter;
        PositionStart(position?: PromiseOrValue<BigNumberish> | null, assetBalance?: null, borrowPriceChainlink?: null, borrowPriceSushi?: null, timestamp?: null): PositionStartEventFilter;
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
        _totalLockedValue(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        aToken(overrides?: CallOverrides): Promise<BigNumber>;
        abPair(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAsset(overrides?: CallOverrides): Promise<BigNumber>;
        canStartNewPos(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRewardsAndEndPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentPosition(overrides?: CallOverrides): Promise<BigNumber>;
        debtToken(overrides?: CallOverrides): Promise<BigNumber>;
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
        longPercentage(overrides?: CallOverrides): Promise<BigNumber>;
        masterChef(overrides?: CallOverrides): Promise<BigNumber>;
        masterChefPid(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        startPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        sushiToken(overrides?: CallOverrides): Promise<BigNumber>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "totalLockedValue()"(overrides?: CallOverrides): Promise<BigNumber>;
        "totalLockedValue(bool)"(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        useMasterChefV2(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _totalLockedValue(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        abPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canStartNewPos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardsAndEndPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        longPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        masterChef(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        masterChefPid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startPosition(slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sushiToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "totalLockedValue()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "totalLockedValue(bool)"(useSpotPrice: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useMasterChefV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
