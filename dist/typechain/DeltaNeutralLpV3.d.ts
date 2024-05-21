import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DeltaNeutralLpV3Interface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "STRATEGIST_ROLE()": FunctionFragment;
        "aToken()": FunctionFragment;
        "asset()": FunctionFragment;
        "assetToDepositRatioBps()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "borrow()": FunctionFragment;
        "canStartNewPos()": FunctionFragment;
        "collateralToBorrowRatioBps()": FunctionFragment;
        "currentPosition()": FunctionFragment;
        "decimalAdjust()": FunctionFragment;
        "decimalAdjustSign()": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "endPosition(uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "lpId()": FunctionFragment;
        "lpLiquidity()": FunctionFragment;
        "lpManager()": FunctionFragment;
        "pool()": FunctionFragment;
        "poolFee()": FunctionFragment;
        "positionFees()": FunctionFragment;
        "positionValue()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "router()": FunctionFragment;
        "startPosition(uint256,int24,int24,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "valueOfLpPosition()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "MAX_BPS" | "STRATEGIST_ROLE" | "aToken" | "asset" | "assetToDepositRatioBps" | "balanceOfAsset" | "borrow" | "canStartNewPos" | "collateralToBorrowRatioBps" | "currentPosition" | "decimalAdjust" | "decimalAdjustSign" | "divest" | "endPosition" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "lpId" | "lpLiquidity" | "lpManager" | "pool" | "poolFee" | "positionFees" | "positionValue" | "renounceRole" | "revokeRole" | "router" | "startPosition" | "supportsInterface" | "sweep" | "totalLockedValue" | "valueOfLpPosition" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "aToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "assetToDepositRatioBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "canStartNewPos", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralToBorrowRatioBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimalAdjust", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimalAdjustSign", values?: undefined): string;
    encodeFunctionData(functionFragment: "divest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "invest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lpId", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "startPosition", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "sweep", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "valueOfLpPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetToDepositRatioBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canStartNewPos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralToBorrowRatioBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimalAdjust", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimalAdjustSign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "valueOfLpPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "PositionEnd(uint32,uint256,uint256,uint256,uint256,uint256[2],bool,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "PositionStart(uint32,uint256,uint256,uint256[2],int24,int24,uint256,uint256,uint256)": EventFragment;
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
    assetsFromUni: BigNumber;
    borrowsFromUni: BigNumber;
    assetFees: BigNumber;
    borrowFees: BigNumber;
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
    tickLow: number;
    tickHigh: number;
    assetsToUni: BigNumber;
    borrowsToUni: BigNumber;
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
    number,
    number,
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
export interface DeltaNeutralLpV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeltaNeutralLpV3Interface;
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
        aToken(overrides?: CallOverrides): Promise<[string]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        borrow(overrides?: CallOverrides): Promise<[string]>;
        canStartNewPos(overrides?: CallOverrides): Promise<[boolean]>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        currentPosition(overrides?: CallOverrides): Promise<[number]>;
        decimalAdjust(overrides?: CallOverrides): Promise<[BigNumber]>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<[boolean]>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endPosition(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        lpId(overrides?: CallOverrides): Promise<[BigNumber]>;
        lpLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        lpManager(overrides?: CallOverrides): Promise<[string]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        poolFee(overrides?: CallOverrides): Promise<[number]>;
        positionFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            assets: BigNumber;
            borrows: BigNumber;
        }>;
        positionValue(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        startPosition(assets: PromiseOrValue<BigNumberish>, tickLow: PromiseOrValue<BigNumberish>, tickHigh: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        valueOfLpPosition(overrides?: CallOverrides): Promise<[BigNumber] & {
            assetsLp: BigNumber;
        }>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
    aToken(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    assetToDepositRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    borrow(overrides?: CallOverrides): Promise<string>;
    canStartNewPos(overrides?: CallOverrides): Promise<boolean>;
    collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
    currentPosition(overrides?: CallOverrides): Promise<number>;
    decimalAdjust(overrides?: CallOverrides): Promise<BigNumber>;
    decimalAdjustSign(overrides?: CallOverrides): Promise<boolean>;
    divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endPosition(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    lpId(overrides?: CallOverrides): Promise<BigNumber>;
    lpLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
    lpManager(overrides?: CallOverrides): Promise<string>;
    pool(overrides?: CallOverrides): Promise<string>;
    poolFee(overrides?: CallOverrides): Promise<number>;
    positionFees(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        assets: BigNumber;
        borrows: BigNumber;
    }>;
    positionValue(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    startPosition(assets: PromiseOrValue<BigNumberish>, tickLow: PromiseOrValue<BigNumberish>, tickHigh: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
    valueOfLpPosition(overrides?: CallOverrides): Promise<BigNumber>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
        aToken(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrow(overrides?: CallOverrides): Promise<string>;
        canStartNewPos(overrides?: CallOverrides): Promise<boolean>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        currentPosition(overrides?: CallOverrides): Promise<number>;
        decimalAdjust(overrides?: CallOverrides): Promise<BigNumber>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<boolean>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endPosition(slippageBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        lpId(overrides?: CallOverrides): Promise<BigNumber>;
        lpLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        lpManager(overrides?: CallOverrides): Promise<string>;
        pool(overrides?: CallOverrides): Promise<string>;
        poolFee(overrides?: CallOverrides): Promise<number>;
        positionFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            assets: BigNumber;
            borrows: BigNumber;
        }>;
        positionValue(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        startPosition(assets: PromiseOrValue<BigNumberish>, tickLow: PromiseOrValue<BigNumberish>, tickHigh: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        sweep(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        valueOfLpPosition(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PositionEnd(uint32,uint256,uint256,uint256,uint256,uint256[2],bool,uint256,uint256,uint256,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, assetsFromUni?: null, borrowsFromUni?: null, assetFees?: null, borrowFees?: null, borrowPrices?: null, assetSold?: null, assetsOrBorrowsSold?: null, assetsOrBorrowsReceived?: null, assetCollateral?: null, borrowDebtPaid?: null, timestamp?: null): PositionEndEventFilter;
        PositionEnd(position?: PromiseOrValue<BigNumberish> | null, assetsFromUni?: null, borrowsFromUni?: null, assetFees?: null, borrowFees?: null, borrowPrices?: null, assetSold?: null, assetsOrBorrowsSold?: null, assetsOrBorrowsReceived?: null, assetCollateral?: null, borrowDebtPaid?: null, timestamp?: null): PositionEndEventFilter;
        "PositionStart(uint32,uint256,uint256,uint256[2],int24,int24,uint256,uint256,uint256)"(position?: PromiseOrValue<BigNumberish> | null, assetCollateral?: null, borrows?: null, borrowPrices?: null, tickLow?: null, tickHigh?: null, assetsToUni?: null, borrowsToUni?: null, timestamp?: null): PositionStartEventFilter;
        PositionStart(position?: PromiseOrValue<BigNumberish> | null, assetCollateral?: null, borrows?: null, borrowPrices?: null, tickLow?: null, tickHigh?: null, assetsToUni?: null, borrowsToUni?: null, timestamp?: null): PositionStartEventFilter;
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
        aToken(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrow(overrides?: CallOverrides): Promise<BigNumber>;
        canStartNewPos(overrides?: CallOverrides): Promise<BigNumber>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<BigNumber>;
        currentPosition(overrides?: CallOverrides): Promise<BigNumber>;
        decimalAdjust(overrides?: CallOverrides): Promise<BigNumber>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<BigNumber>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endPosition(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        lpId(overrides?: CallOverrides): Promise<BigNumber>;
        lpLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        lpManager(overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        poolFee(overrides?: CallOverrides): Promise<BigNumber>;
        positionFees(overrides?: CallOverrides): Promise<BigNumber>;
        positionValue(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        startPosition(assets: PromiseOrValue<BigNumberish>, tickLow: PromiseOrValue<BigNumberish>, tickHigh: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        valueOfLpPosition(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetToDepositRatioBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canStartNewPos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralToBorrowRatioBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimalAdjust(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimalAdjustSign(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endPosition(slippageBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        lpId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startPosition(assets: PromiseOrValue<BigNumberish>, tickLow: PromiseOrValue<BigNumberish>, tickHigh: PromiseOrValue<BigNumberish>, slippageToleranceBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        valueOfLpPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
