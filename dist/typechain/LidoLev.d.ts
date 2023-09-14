import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface LidoLevInterface extends utils.Interface {
    functions: {
        "BALANCER()": FunctionFragment;
        "CDAI()": FunctionFragment;
        "CETH()": FunctionFragment;
        "CURVE()": FunctionFragment;
        "DAI()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "ETH_DAI_FEED()": FunctionFragment;
        "ILK()": FunctionFragment;
        "JOIN_DAI()": FunctionFragment;
        "MAKER()": FunctionFragment;
        "STETH()": FunctionFragment;
        "STRATEGIST_ROLE()": FunctionFragment;
        "UNI_ROUTER()": FunctionFragment;
        "VAT()": FunctionFragment;
        "WETH()": FunctionFragment;
        "WSTETH()": FunctionFragment;
        "WSTETH_JOIN()": FunctionFragment;
        "addToPosition(uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "cdpId()": FunctionFragment;
        "createCompoundDebt(uint256)": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "getPositionInfo()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "leverage()": FunctionFragment;
        "rebalance(uint256,uint256)": FunctionFragment;
        "receiveFlashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "upgrade(address)": FunctionFragment;
        "urn()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALANCER" | "CDAI" | "CETH" | "CURVE" | "DAI" | "DEFAULT_ADMIN_ROLE" | "ETH_DAI_FEED" | "ILK" | "JOIN_DAI" | "MAKER" | "STETH" | "STRATEGIST_ROLE" | "UNI_ROUTER" | "VAT" | "WETH" | "WSTETH" | "WSTETH_JOIN" | "addToPosition" | "asset" | "balanceOfAsset" | "cdpId" | "createCompoundDebt" | "divest" | "getPositionInfo" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "leverage" | "rebalance" | "receiveFlashLoan" | "renounceRole" | "revokeRole" | "supportsInterface" | "sweep" | "totalLockedValue" | "upgrade" | "urn" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALANCER", values?: undefined): string;
    encodeFunctionData(functionFragment: "CDAI", values?: undefined): string;
    encodeFunctionData(functionFragment: "CETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "CURVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ETH_DAI_FEED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ILK", values?: undefined): string;
    encodeFunctionData(functionFragment: "JOIN_DAI", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAKER", values?: undefined): string;
    encodeFunctionData(functionFragment: "STETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNI_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "VAT", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WSTETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WSTETH_JOIN", values?: undefined): string;
    encodeFunctionData(functionFragment: "addToPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "cdpId", values?: undefined): string;
    encodeFunctionData(functionFragment: "createCompoundDebt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "divest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPositionInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "invest", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "leverage", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalance", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "sweep", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgrade", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "urn", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALANCER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CDAI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CURVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ETH_DAI_FEED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ILK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "JOIN_DAI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAKER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNI_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VAT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WSTETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WSTETH_JOIN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cdpId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCompoundDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "leverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "urn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
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
export interface LidoLev extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LidoLevInterface;
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
        BALANCER(overrides?: CallOverrides): Promise<[string]>;
        CDAI(overrides?: CallOverrides): Promise<[string]>;
        CETH(overrides?: CallOverrides): Promise<[string]>;
        CURVE(overrides?: CallOverrides): Promise<[string]>;
        DAI(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        ETH_DAI_FEED(overrides?: CallOverrides): Promise<[string]>;
        ILK(overrides?: CallOverrides): Promise<[string]>;
        JOIN_DAI(overrides?: CallOverrides): Promise<[string]>;
        MAKER(overrides?: CallOverrides): Promise<[string]>;
        STETH(overrides?: CallOverrides): Promise<[string]>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<[string]>;
        UNI_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        VAT(overrides?: CallOverrides): Promise<[string]>;
        WETH(overrides?: CallOverrides): Promise<[string]>;
        WSTETH(overrides?: CallOverrides): Promise<[string]>;
        WSTETH_JOIN(overrides?: CallOverrides): Promise<[string]>;
        addToPosition(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        cdpId(overrides?: CallOverrides): Promise<[BigNumber]>;
        createCompoundDebt(ethToBorrow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getPositionInfo(overrides?: Overrides & {
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
        leverage(overrides?: CallOverrides): Promise<[BigNumber]>;
        rebalance(amountEth: PromiseOrValue<BigNumberish>, amountDai: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgrade(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        urn(overrides?: CallOverrides): Promise<[string]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    BALANCER(overrides?: CallOverrides): Promise<string>;
    CDAI(overrides?: CallOverrides): Promise<string>;
    CETH(overrides?: CallOverrides): Promise<string>;
    CURVE(overrides?: CallOverrides): Promise<string>;
    DAI(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    ETH_DAI_FEED(overrides?: CallOverrides): Promise<string>;
    ILK(overrides?: CallOverrides): Promise<string>;
    JOIN_DAI(overrides?: CallOverrides): Promise<string>;
    MAKER(overrides?: CallOverrides): Promise<string>;
    STETH(overrides?: CallOverrides): Promise<string>;
    STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
    UNI_ROUTER(overrides?: CallOverrides): Promise<string>;
    VAT(overrides?: CallOverrides): Promise<string>;
    WETH(overrides?: CallOverrides): Promise<string>;
    WSTETH(overrides?: CallOverrides): Promise<string>;
    WSTETH_JOIN(overrides?: CallOverrides): Promise<string>;
    addToPosition(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    cdpId(overrides?: CallOverrides): Promise<BigNumber>;
    createCompoundDebt(ethToBorrow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getPositionInfo(overrides?: Overrides & {
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
    leverage(overrides?: CallOverrides): Promise<BigNumber>;
    rebalance(amountEth: PromiseOrValue<BigNumberish>, amountDai: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgrade(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    urn(overrides?: CallOverrides): Promise<string>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        BALANCER(overrides?: CallOverrides): Promise<string>;
        CDAI(overrides?: CallOverrides): Promise<string>;
        CETH(overrides?: CallOverrides): Promise<string>;
        CURVE(overrides?: CallOverrides): Promise<string>;
        DAI(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        ETH_DAI_FEED(overrides?: CallOverrides): Promise<string>;
        ILK(overrides?: CallOverrides): Promise<string>;
        JOIN_DAI(overrides?: CallOverrides): Promise<string>;
        MAKER(overrides?: CallOverrides): Promise<string>;
        STETH(overrides?: CallOverrides): Promise<string>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
        UNI_ROUTER(overrides?: CallOverrides): Promise<string>;
        VAT(overrides?: CallOverrides): Promise<string>;
        WETH(overrides?: CallOverrides): Promise<string>;
        WSTETH(overrides?: CallOverrides): Promise<string>;
        WSTETH_JOIN(overrides?: CallOverrides): Promise<string>;
        addToPosition(size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        cdpId(overrides?: CallOverrides): Promise<BigNumber>;
        createCompoundDebt(ethToBorrow: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionInfo(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            makerCollateral: BigNumber;
            makerDebt: BigNumber;
            compoundCollateral: BigNumber;
            compoundDebt: BigNumber;
        }>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        invest(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        leverage(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(amountEth: PromiseOrValue<BigNumberish>, amountDai: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        sweep(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        upgrade(newStrategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        urn(overrides?: CallOverrides): Promise<string>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        BALANCER(overrides?: CallOverrides): Promise<BigNumber>;
        CDAI(overrides?: CallOverrides): Promise<BigNumber>;
        CETH(overrides?: CallOverrides): Promise<BigNumber>;
        CURVE(overrides?: CallOverrides): Promise<BigNumber>;
        DAI(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        ETH_DAI_FEED(overrides?: CallOverrides): Promise<BigNumber>;
        ILK(overrides?: CallOverrides): Promise<BigNumber>;
        JOIN_DAI(overrides?: CallOverrides): Promise<BigNumber>;
        MAKER(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        UNI_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        VAT(overrides?: CallOverrides): Promise<BigNumber>;
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        WSTETH(overrides?: CallOverrides): Promise<BigNumber>;
        WSTETH_JOIN(overrides?: CallOverrides): Promise<BigNumber>;
        addToPosition(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        cdpId(overrides?: CallOverrides): Promise<BigNumber>;
        createCompoundDebt(ethToBorrow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getPositionInfo(overrides?: Overrides & {
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
        leverage(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(amountEth: PromiseOrValue<BigNumberish>, amountDai: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgrade(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        urn(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALANCER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CDAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CURVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ETH_DAI_FEED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ILK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        JOIN_DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAKER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNI_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VAT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WSTETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WSTETH_JOIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addToPosition(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cdpId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createCompoundDebt(ethToBorrow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        divest(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getPositionInfo(overrides?: Overrides & {
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
        leverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalance(amountEth: PromiseOrValue<BigNumberish>, amountDai: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], arg2: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgrade(newStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        urn(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
