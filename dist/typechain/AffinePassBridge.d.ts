import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Client {
    type EVMTokenAmountStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type EVMTokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type Any2EVMMessageStruct = {
        messageId: PromiseOrValue<BytesLike>;
        sourceChainSelector: PromiseOrValue<BigNumberish>;
        sender: PromiseOrValue<BytesLike>;
        data: PromiseOrValue<BytesLike>;
        destTokenAmounts: Client.EVMTokenAmountStruct[];
    };
    type Any2EVMMessageStructOutput = [
        string,
        BigNumber,
        string,
        string,
        Client.EVMTokenAmountStructOutput[]
    ] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        data: string;
        destTokenAmounts: Client.EVMTokenAmountStructOutput[];
    };
}
export interface AffinePassBridgeInterface extends utils.Interface {
    functions: {
        "affinePass()": FunctionFragment;
        "bridgePass(uint64,address,uint256)": FunctionFragment;
        "ccipFee(uint64)": FunctionFragment;
        "ccipReceive((bytes32,uint64,bytes,bytes,(address,uint256)[]))": FunctionFragment;
        "chainReceiver(uint64)": FunctionFragment;
        "getRouter()": FunctionFragment;
        "initialize()": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setPaused(bool)": FunctionFragment;
        "setchainReceiver(uint64,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "whitelistDestinationChain(uint64,bool)": FunctionFragment;
        "whitelistSender(address,bool)": FunctionFragment;
        "whitelistSourceChain(uint64,bool)": FunctionFragment;
        "whitelistedDestinationChains(uint64)": FunctionFragment;
        "whitelistedSenders(address)": FunctionFragment;
        "whitelistedSourceChains(uint64)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "affinePass" | "bridgePass" | "ccipFee" | "ccipReceive" | "chainReceiver" | "getRouter" | "initialize" | "owner" | "paused" | "proxiableUUID" | "renounceOwnership" | "setPaused" | "setchainReceiver" | "supportsInterface" | "transferOwnership" | "upgradeTo" | "upgradeToAndCall" | "whitelistDestinationChain" | "whitelistSender" | "whitelistSourceChain" | "whitelistedDestinationChains" | "whitelistedSenders" | "whitelistedSourceChains" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "affinePass", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgePass", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "ccipFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ccipReceive", values: [Client.Any2EVMMessageStruct]): string;
    encodeFunctionData(functionFragment: "chainReceiver", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setchainReceiver", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "whitelistDestinationChain", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "whitelistSender", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "whitelistSourceChain", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "whitelistedDestinationChains", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "whitelistedSenders", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelistedSourceChains", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "affinePass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgePass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccipFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccipReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setchainReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistDestinationChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSourceChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedDestinationChains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedSenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedSourceChains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "BridgeReceipt(bytes32,uint64,address,uint256)": EventFragment;
        "BridgeRequest(bytes32,uint64,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeReceipt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeRequest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
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
export interface BridgeReceiptEventObject {
    messageId: string;
    sourceChainSelector: BigNumber;
    receiver: string;
    id: BigNumber;
}
export type BridgeReceiptEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], BridgeReceiptEventObject>;
export type BridgeReceiptEventFilter = TypedEventFilter<BridgeReceiptEvent>;
export interface BridgeRequestEventObject {
    messageId: string;
    destinationChainSelector: BigNumber;
    sender: string;
    id: BigNumber;
}
export type BridgeRequestEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], BridgeRequestEventObject>;
export type BridgeRequestEventFilter = TypedEventFilter<BridgeRequestEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface AffinePassBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AffinePassBridgeInterface;
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
        affinePass(overrides?: CallOverrides): Promise<[string]>;
        bridgePass(destinationChainSelector: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ccipFee(destinationChainSelector: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        chainReceiver(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getRouter(overrides?: CallOverrides): Promise<[string]>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setchainReceiver(chainSelector: PromiseOrValue<BigNumberish>, reciever: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistDestinationChain(_destinationChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistSender(_sender: PromiseOrValue<string>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistSourceChain(_sourceChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistedDestinationChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        whitelistedSenders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        whitelistedSourceChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    affinePass(overrides?: CallOverrides): Promise<string>;
    bridgePass(destinationChainSelector: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ccipFee(destinationChainSelector: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    chainReceiver(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getRouter(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setchainReceiver(chainSelector: PromiseOrValue<BigNumberish>, reciever: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistDestinationChain(_destinationChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistSender(_sender: PromiseOrValue<string>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistSourceChain(_sourceChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistedDestinationChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    whitelistedSenders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    whitelistedSourceChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        affinePass(overrides?: CallOverrides): Promise<string>;
        bridgePass(destinationChainSelector: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        ccipFee(destinationChainSelector: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: CallOverrides): Promise<void>;
        chainReceiver(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getRouter(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setchainReceiver(chainSelector: PromiseOrValue<BigNumberish>, reciever: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        whitelistDestinationChain(_destinationChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistSender(_sender: PromiseOrValue<string>, _whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistSourceChain(_sourceChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistedDestinationChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        whitelistedSenders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        whitelistedSourceChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "BridgeReceipt(bytes32,uint64,address,uint256)"(messageId?: PromiseOrValue<BytesLike> | null, sourceChainSelector?: PromiseOrValue<BigNumberish> | null, receiver?: null, id?: null): BridgeReceiptEventFilter;
        BridgeReceipt(messageId?: PromiseOrValue<BytesLike> | null, sourceChainSelector?: PromiseOrValue<BigNumberish> | null, receiver?: null, id?: null): BridgeReceiptEventFilter;
        "BridgeRequest(bytes32,uint64,address,uint256)"(messageId?: PromiseOrValue<BytesLike> | null, destinationChainSelector?: PromiseOrValue<BigNumberish> | null, sender?: null, id?: null): BridgeRequestEventFilter;
        BridgeRequest(messageId?: PromiseOrValue<BytesLike> | null, destinationChainSelector?: PromiseOrValue<BigNumberish> | null, sender?: null, id?: null): BridgeRequestEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        affinePass(overrides?: CallOverrides): Promise<BigNumber>;
        bridgePass(destinationChainSelector: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ccipFee(destinationChainSelector: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        chainReceiver(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRouter(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setchainReceiver(chainSelector: PromiseOrValue<BigNumberish>, reciever: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistDestinationChain(_destinationChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistSender(_sender: PromiseOrValue<string>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistSourceChain(_sourceChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistedDestinationChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedSenders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedSourceChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        affinePass(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgePass(destinationChainSelector: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ccipFee(destinationChainSelector: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        chainReceiver(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setchainReceiver(chainSelector: PromiseOrValue<BigNumberish>, reciever: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistDestinationChain(_destinationChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistSender(_sender: PromiseOrValue<string>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistSourceChain(_sourceChainSelector: PromiseOrValue<BigNumberish>, _whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistedDestinationChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedSenders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedSourceChains(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
