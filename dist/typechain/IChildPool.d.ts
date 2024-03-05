import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IChildPool {
    type MaticXSwapRequestStruct = {
        amount: PromiseOrValue<BigNumberish>;
        requestTime: PromiseOrValue<BigNumberish>;
        withdrawalTime: PromiseOrValue<BigNumberish>;
    };
    type MaticXSwapRequestStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        requestTime: BigNumber;
        withdrawalTime: BigNumber;
    };
}
export interface IChildPoolInterface extends utils.Interface {
    functions: {
        "claimMaticXSwap(uint256)": FunctionFragment;
        "claimedMatic()": FunctionFragment;
        "convertMaticToMaticX(uint256)": FunctionFragment;
        "convertMaticXToMatic(uint256)": FunctionFragment;
        "getAmountAfterInstantWithdrawalFees(uint256)": FunctionFragment;
        "getContracts()": FunctionFragment;
        "getMaticXSwapLockPeriod()": FunctionFragment;
        "getUserMaticXSwapRequests(address)": FunctionFragment;
        "instantPoolMatic()": FunctionFragment;
        "instantPoolMaticX()": FunctionFragment;
        "instantPoolOwner()": FunctionFragment;
        "instantWithdrawalFeeBps()": FunctionFragment;
        "instantWithdrawalFees()": FunctionFragment;
        "maticXSwapLockPeriod()": FunctionFragment;
        "provideInstantPoolMatic()": FunctionFragment;
        "provideInstantPoolMaticX(uint256)": FunctionFragment;
        "requestMaticXSwap(uint256)": FunctionFragment;
        "setFxStateChildTunnel(address)": FunctionFragment;
        "setInstantPoolOwner(address)": FunctionFragment;
        "setInstantWithdrawalFeeBps(uint256)": FunctionFragment;
        "setMaticXSwapLockPeriod(uint256)": FunctionFragment;
        "setTreasury(address)": FunctionFragment;
        "setTrustedForwarder(address)": FunctionFragment;
        "setVersion(string)": FunctionFragment;
        "swapMaticForMaticXViaInstantPool()": FunctionFragment;
        "swapMaticXForMaticViaInstantPool(uint256)": FunctionFragment;
        "togglePause()": FunctionFragment;
        "treasury()": FunctionFragment;
        "version()": FunctionFragment;
        "withdrawInstantPoolMatic(uint256)": FunctionFragment;
        "withdrawInstantPoolMaticX(uint256)": FunctionFragment;
        "withdrawInstantWithdrawalFees(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimMaticXSwap" | "claimedMatic" | "convertMaticToMaticX" | "convertMaticXToMatic" | "getAmountAfterInstantWithdrawalFees" | "getContracts" | "getMaticXSwapLockPeriod" | "getUserMaticXSwapRequests" | "instantPoolMatic" | "instantPoolMaticX" | "instantPoolOwner" | "instantWithdrawalFeeBps" | "instantWithdrawalFees" | "maticXSwapLockPeriod" | "provideInstantPoolMatic" | "provideInstantPoolMaticX" | "requestMaticXSwap" | "setFxStateChildTunnel" | "setInstantPoolOwner" | "setInstantWithdrawalFeeBps" | "setMaticXSwapLockPeriod" | "setTreasury" | "setTrustedForwarder" | "setVersion" | "swapMaticForMaticXViaInstantPool" | "swapMaticXForMaticViaInstantPool" | "togglePause" | "treasury" | "version" | "withdrawInstantPoolMatic" | "withdrawInstantPoolMaticX" | "withdrawInstantWithdrawalFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimMaticXSwap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimedMatic", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertMaticToMaticX", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convertMaticXToMatic", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAmountAfterInstantWithdrawalFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaticXSwapLockPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserMaticXSwapRequests", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "instantPoolMatic", values?: undefined): string;
    encodeFunctionData(functionFragment: "instantPoolMaticX", values?: undefined): string;
    encodeFunctionData(functionFragment: "instantPoolOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "instantWithdrawalFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "instantWithdrawalFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "maticXSwapLockPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "provideInstantPoolMatic", values?: undefined): string;
    encodeFunctionData(functionFragment: "provideInstantPoolMaticX", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "requestMaticXSwap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFxStateChildTunnel", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setInstantPoolOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setInstantWithdrawalFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaticXSwapLockPeriod", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTreasury", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setVersion", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapMaticForMaticXViaInstantPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapMaticXForMaticViaInstantPool", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "togglePause", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawInstantPoolMatic", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawInstantPoolMaticX", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawInstantWithdrawalFees", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "claimMaticXSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedMatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertMaticToMaticX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertMaticXToMatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountAfterInstantWithdrawalFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaticXSwapLockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserMaticXSwapRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantPoolMatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantPoolMaticX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantPoolOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantWithdrawalFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantWithdrawalFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maticXSwapLockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "provideInstantPoolMatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "provideInstantPoolMaticX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestMaticXSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFxStateChildTunnel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInstantPoolOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInstantWithdrawalFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaticXSwapLockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapMaticForMaticXViaInstantPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapMaticXForMaticViaInstantPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "togglePause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawInstantPoolMatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawInstantPoolMaticX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawInstantWithdrawalFees", data: BytesLike): Result;
    events: {
        "ClaimMaticXSwap(address,uint256,uint256)": EventFragment;
        "CollectedInstantWithdrawalFees(uint256)": EventFragment;
        "RequestMaticXSwap(address,uint256,uint256,uint256)": EventFragment;
        "SetFxStateChildTunnel(address)": EventFragment;
        "SetInstantPoolOwner(address)": EventFragment;
        "SetInstantWithdrawalFeeBps(uint256)": EventFragment;
        "SetMaticXSwapLockPeriodEvent(uint256)": EventFragment;
        "SetTreasury(address)": EventFragment;
        "SetTrustedForwarder(address)": EventFragment;
        "SetVersion(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimMaticXSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollectedInstantWithdrawalFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestMaticXSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFxStateChildTunnel"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetInstantPoolOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetInstantWithdrawalFeeBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMaticXSwapLockPeriodEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTreasury"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedForwarder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetVersion"): EventFragment;
}
export interface ClaimMaticXSwapEventObject {
    _from: string;
    _idx: BigNumber;
    _amountClaimed: BigNumber;
}
export type ClaimMaticXSwapEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ClaimMaticXSwapEventObject>;
export type ClaimMaticXSwapEventFilter = TypedEventFilter<ClaimMaticXSwapEvent>;
export interface CollectedInstantWithdrawalFeesEventObject {
    _fees: BigNumber;
}
export type CollectedInstantWithdrawalFeesEvent = TypedEvent<[
    BigNumber
], CollectedInstantWithdrawalFeesEventObject>;
export type CollectedInstantWithdrawalFeesEventFilter = TypedEventFilter<CollectedInstantWithdrawalFeesEvent>;
export interface RequestMaticXSwapEventObject {
    _from: string;
    _amountMaticX: BigNumber;
    _amountMatic: BigNumber;
    userSwapRequestsIndex: BigNumber;
}
export type RequestMaticXSwapEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RequestMaticXSwapEventObject>;
export type RequestMaticXSwapEventFilter = TypedEventFilter<RequestMaticXSwapEvent>;
export interface SetFxStateChildTunnelEventObject {
    _address: string;
}
export type SetFxStateChildTunnelEvent = TypedEvent<[
    string
], SetFxStateChildTunnelEventObject>;
export type SetFxStateChildTunnelEventFilter = TypedEventFilter<SetFxStateChildTunnelEvent>;
export interface SetInstantPoolOwnerEventObject {
    _address: string;
}
export type SetInstantPoolOwnerEvent = TypedEvent<[
    string
], SetInstantPoolOwnerEventObject>;
export type SetInstantPoolOwnerEventFilter = TypedEventFilter<SetInstantPoolOwnerEvent>;
export interface SetInstantWithdrawalFeeBpsEventObject {
    _feeBps: BigNumber;
}
export type SetInstantWithdrawalFeeBpsEvent = TypedEvent<[
    BigNumber
], SetInstantWithdrawalFeeBpsEventObject>;
export type SetInstantWithdrawalFeeBpsEventFilter = TypedEventFilter<SetInstantWithdrawalFeeBpsEvent>;
export interface SetMaticXSwapLockPeriodEventEventObject {
    _hours: BigNumber;
}
export type SetMaticXSwapLockPeriodEventEvent = TypedEvent<[
    BigNumber
], SetMaticXSwapLockPeriodEventEventObject>;
export type SetMaticXSwapLockPeriodEventEventFilter = TypedEventFilter<SetMaticXSwapLockPeriodEventEvent>;
export interface SetTreasuryEventObject {
    _address: string;
}
export type SetTreasuryEvent = TypedEvent<[string], SetTreasuryEventObject>;
export type SetTreasuryEventFilter = TypedEventFilter<SetTreasuryEvent>;
export interface SetTrustedForwarderEventObject {
    _address: string;
}
export type SetTrustedForwarderEvent = TypedEvent<[
    string
], SetTrustedForwarderEventObject>;
export type SetTrustedForwarderEventFilter = TypedEventFilter<SetTrustedForwarderEvent>;
export interface SetVersionEventObject {
    _version: string;
}
export type SetVersionEvent = TypedEvent<[string], SetVersionEventObject>;
export type SetVersionEventFilter = TypedEventFilter<SetVersionEvent>;
export interface IChildPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IChildPoolInterface;
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
        claimMaticXSwap(_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimedMatic(overrides?: CallOverrides): Promise<[BigNumber]>;
        convertMaticToMaticX(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        convertMaticXToMatic(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAmountAfterInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getContracts(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            _fxStateChildTunnel: string;
            _maticX: string;
            _trustedForwarder: string;
        }>;
        getMaticXSwapLockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserMaticXSwapRequests(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IChildPool.MaticXSwapRequestStructOutput[]]>;
        instantPoolMatic(overrides?: CallOverrides): Promise<[BigNumber]>;
        instantPoolMaticX(overrides?: CallOverrides): Promise<[BigNumber]>;
        instantPoolOwner(overrides?: CallOverrides): Promise<[string]>;
        instantWithdrawalFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        instantWithdrawalFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        maticXSwapLockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        provideInstantPoolMatic(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        provideInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        requestMaticXSwap(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFxStateChildTunnel(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInstantPoolOwner(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInstantWithdrawalFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaticXSwapLockPeriod(_hours: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTreasury(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedForwarder(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVersion(_version: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapMaticForMaticXViaInstantPool(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapMaticXForMaticViaInstantPool(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        togglePause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        treasury(overrides?: CallOverrides): Promise<[string]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        withdrawInstantPoolMatic(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claimMaticXSwap(_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimedMatic(overrides?: CallOverrides): Promise<BigNumber>;
    convertMaticToMaticX(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    convertMaticXToMatic(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getAmountAfterInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getContracts(overrides?: CallOverrides): Promise<[
        string,
        string,
        string
    ] & {
        _fxStateChildTunnel: string;
        _maticX: string;
        _trustedForwarder: string;
    }>;
    getMaticXSwapLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    getUserMaticXSwapRequests(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IChildPool.MaticXSwapRequestStructOutput[]>;
    instantPoolMatic(overrides?: CallOverrides): Promise<BigNumber>;
    instantPoolMaticX(overrides?: CallOverrides): Promise<BigNumber>;
    instantPoolOwner(overrides?: CallOverrides): Promise<string>;
    instantWithdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    instantWithdrawalFees(overrides?: CallOverrides): Promise<BigNumber>;
    maticXSwapLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    provideInstantPoolMatic(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    provideInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    requestMaticXSwap(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFxStateChildTunnel(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInstantPoolOwner(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInstantWithdrawalFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaticXSwapLockPeriod(_hours: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTreasury(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedForwarder(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVersion(_version: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapMaticForMaticXViaInstantPool(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapMaticXForMaticViaInstantPool(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    togglePause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    treasury(overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<string>;
    withdrawInstantPoolMatic(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimMaticXSwap(_idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimedMatic(overrides?: CallOverrides): Promise<BigNumber>;
        convertMaticToMaticX(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        convertMaticXToMatic(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAmountAfterInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getContracts(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            _fxStateChildTunnel: string;
            _maticX: string;
            _trustedForwarder: string;
        }>;
        getMaticXSwapLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        getUserMaticXSwapRequests(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IChildPool.MaticXSwapRequestStructOutput[]>;
        instantPoolMatic(overrides?: CallOverrides): Promise<BigNumber>;
        instantPoolMaticX(overrides?: CallOverrides): Promise<BigNumber>;
        instantPoolOwner(overrides?: CallOverrides): Promise<string>;
        instantWithdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        instantWithdrawalFees(overrides?: CallOverrides): Promise<BigNumber>;
        maticXSwapLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        provideInstantPoolMatic(overrides?: CallOverrides): Promise<void>;
        provideInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        requestMaticXSwap(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setFxStateChildTunnel(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setInstantPoolOwner(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setInstantWithdrawalFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaticXSwapLockPeriod(_hours: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTreasury(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTrustedForwarder(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setVersion(_version: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        swapMaticForMaticXViaInstantPool(overrides?: CallOverrides): Promise<void>;
        swapMaticXForMaticViaInstantPool(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        togglePause(overrides?: CallOverrides): Promise<void>;
        treasury(overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<string>;
        withdrawInstantPoolMatic(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimMaticXSwap(address,uint256,uint256)"(_from?: PromiseOrValue<string> | null, _idx?: PromiseOrValue<BigNumberish> | null, _amountClaimed?: null): ClaimMaticXSwapEventFilter;
        ClaimMaticXSwap(_from?: PromiseOrValue<string> | null, _idx?: PromiseOrValue<BigNumberish> | null, _amountClaimed?: null): ClaimMaticXSwapEventFilter;
        "CollectedInstantWithdrawalFees(uint256)"(_fees?: null): CollectedInstantWithdrawalFeesEventFilter;
        CollectedInstantWithdrawalFees(_fees?: null): CollectedInstantWithdrawalFeesEventFilter;
        "RequestMaticXSwap(address,uint256,uint256,uint256)"(_from?: PromiseOrValue<string> | null, _amountMaticX?: null, _amountMatic?: null, userSwapRequestsIndex?: null): RequestMaticXSwapEventFilter;
        RequestMaticXSwap(_from?: PromiseOrValue<string> | null, _amountMaticX?: null, _amountMatic?: null, userSwapRequestsIndex?: null): RequestMaticXSwapEventFilter;
        "SetFxStateChildTunnel(address)"(_address?: null): SetFxStateChildTunnelEventFilter;
        SetFxStateChildTunnel(_address?: null): SetFxStateChildTunnelEventFilter;
        "SetInstantPoolOwner(address)"(_address?: null): SetInstantPoolOwnerEventFilter;
        SetInstantPoolOwner(_address?: null): SetInstantPoolOwnerEventFilter;
        "SetInstantWithdrawalFeeBps(uint256)"(_feeBps?: null): SetInstantWithdrawalFeeBpsEventFilter;
        SetInstantWithdrawalFeeBps(_feeBps?: null): SetInstantWithdrawalFeeBpsEventFilter;
        "SetMaticXSwapLockPeriodEvent(uint256)"(_hours?: null): SetMaticXSwapLockPeriodEventEventFilter;
        SetMaticXSwapLockPeriodEvent(_hours?: null): SetMaticXSwapLockPeriodEventEventFilter;
        "SetTreasury(address)"(_address?: null): SetTreasuryEventFilter;
        SetTreasury(_address?: null): SetTreasuryEventFilter;
        "SetTrustedForwarder(address)"(_address?: null): SetTrustedForwarderEventFilter;
        SetTrustedForwarder(_address?: null): SetTrustedForwarderEventFilter;
        "SetVersion(string)"(_version?: null): SetVersionEventFilter;
        SetVersion(_version?: null): SetVersionEventFilter;
    };
    estimateGas: {
        claimMaticXSwap(_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimedMatic(overrides?: CallOverrides): Promise<BigNumber>;
        convertMaticToMaticX(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertMaticXToMatic(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountAfterInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getContracts(overrides?: CallOverrides): Promise<BigNumber>;
        getMaticXSwapLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        getUserMaticXSwapRequests(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        instantPoolMatic(overrides?: CallOverrides): Promise<BigNumber>;
        instantPoolMaticX(overrides?: CallOverrides): Promise<BigNumber>;
        instantPoolOwner(overrides?: CallOverrides): Promise<BigNumber>;
        instantWithdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        instantWithdrawalFees(overrides?: CallOverrides): Promise<BigNumber>;
        maticXSwapLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        provideInstantPoolMatic(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        provideInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        requestMaticXSwap(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFxStateChildTunnel(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInstantPoolOwner(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInstantWithdrawalFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaticXSwapLockPeriod(_hours: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTreasury(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedForwarder(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVersion(_version: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapMaticForMaticXViaInstantPool(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapMaticXForMaticViaInstantPool(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        togglePause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        treasury(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawInstantPoolMatic(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimMaticXSwap(_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimedMatic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertMaticToMaticX(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertMaticXToMatic(_balance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountAfterInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaticXSwapLockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserMaticXSwapRequests(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        instantPoolMatic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        instantPoolMaticX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        instantPoolOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        instantWithdrawalFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        instantWithdrawalFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maticXSwapLockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        provideInstantPoolMatic(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        provideInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        requestMaticXSwap(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFxStateChildTunnel(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInstantPoolOwner(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInstantWithdrawalFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaticXSwapLockPeriod(_hours: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTreasury(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedForwarder(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVersion(_version: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapMaticForMaticXViaInstantPool(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapMaticXForMaticViaInstantPool(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        togglePause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawInstantPoolMatic(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawInstantPoolMaticX(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawInstantWithdrawalFees(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
