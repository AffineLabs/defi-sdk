import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BridgeEscrowInterface extends utils.Interface {
    functions: {
        "asset()": FunctionFragment;
        "clearFunds(uint256,bytes)": FunctionFragment;
        "governance()": FunctionFragment;
        "rescueFunds(uint256,bytes)": FunctionFragment;
        "wormholeRouter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "asset" | "clearFunds" | "governance" | "rescueFunds" | "wormholeRouter"): FunctionFragment;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "clearFunds", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "rescueFunds", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "wormholeRouter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wormholeRouter", data: BytesLike): Result;
    events: {
        "TransferToVault(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TransferToVault"): EventFragment;
}
export interface TransferToVaultEventObject {
    assets: BigNumber;
}
export type TransferToVaultEvent = TypedEvent<[
    BigNumber
], TransferToVaultEventObject>;
export type TransferToVaultEventFilter = TypedEventFilter<TransferToVaultEvent>;
export interface BridgeEscrow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeEscrowInterface;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        clearFunds(assets: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        rescueFunds(amount: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wormholeRouter(overrides?: CallOverrides): Promise<[string]>;
    };
    asset(overrides?: CallOverrides): Promise<string>;
    clearFunds(assets: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governance(overrides?: CallOverrides): Promise<string>;
    rescueFunds(amount: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wormholeRouter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        asset(overrides?: CallOverrides): Promise<string>;
        clearFunds(assets: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        governance(overrides?: CallOverrides): Promise<string>;
        rescueFunds(amount: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        wormholeRouter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TransferToVault(uint256)"(assets?: null): TransferToVaultEventFilter;
        TransferToVault(assets?: null): TransferToVaultEventFilter;
    };
    estimateGas: {
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        clearFunds(assets: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        rescueFunds(amount: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wormholeRouter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearFunds(assets: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rescueFunds(amount: PromiseOrValue<BigNumberish>, exitProof: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wormholeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
