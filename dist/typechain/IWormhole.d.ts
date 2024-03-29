import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IWormhole {
    type SignatureStruct = {
        r: PromiseOrValue<BytesLike>;
        s: PromiseOrValue<BytesLike>;
        v: PromiseOrValue<BigNumberish>;
        guardianIndex: PromiseOrValue<BigNumberish>;
    };
    type SignatureStructOutput = [string, string, number, number] & {
        r: string;
        s: string;
        v: number;
        guardianIndex: number;
    };
    type VMStruct = {
        version: PromiseOrValue<BigNumberish>;
        timestamp: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
        emitterChainId: PromiseOrValue<BigNumberish>;
        emitterAddress: PromiseOrValue<BytesLike>;
        sequence: PromiseOrValue<BigNumberish>;
        consistencyLevel: PromiseOrValue<BigNumberish>;
        payload: PromiseOrValue<BytesLike>;
        guardianSetIndex: PromiseOrValue<BigNumberish>;
        signatures: IWormhole.SignatureStruct[];
        hash: PromiseOrValue<BytesLike>;
    };
    type VMStructOutput = [
        number,
        number,
        number,
        number,
        string,
        BigNumber,
        number,
        string,
        number,
        IWormhole.SignatureStructOutput[],
        string
    ] & {
        version: number;
        timestamp: number;
        nonce: number;
        emitterChainId: number;
        emitterAddress: string;
        sequence: BigNumber;
        consistencyLevel: number;
        payload: string;
        guardianSetIndex: number;
        signatures: IWormhole.SignatureStructOutput[];
        hash: string;
    };
}
export interface IWormholeInterface extends utils.Interface {
    functions: {
        "nextSequence(address)": FunctionFragment;
        "parseAndVerifyVM(bytes)": FunctionFragment;
        "publishMessage(uint32,bytes,uint8)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "nextSequence" | "parseAndVerifyVM" | "publishMessage"): FunctionFragment;
    encodeFunctionData(functionFragment: "nextSequence", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseAndVerifyVM", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "publishMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "nextSequence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseAndVerifyVM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishMessage", data: BytesLike): Result;
    events: {};
}
export interface IWormhole extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IWormholeInterface;
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
        nextSequence(emitter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        parseAndVerifyVM(encodedVM: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            IWormhole.VMStructOutput,
            boolean,
            string
        ] & {
            vm: IWormhole.VMStructOutput;
            valid: boolean;
            reason: string;
        }>;
        publishMessage(nonce: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, consistencyLevel: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    nextSequence(emitter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    parseAndVerifyVM(encodedVM: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        IWormhole.VMStructOutput,
        boolean,
        string
    ] & {
        vm: IWormhole.VMStructOutput;
        valid: boolean;
        reason: string;
    }>;
    publishMessage(nonce: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, consistencyLevel: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        nextSequence(emitter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseAndVerifyVM(encodedVM: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            IWormhole.VMStructOutput,
            boolean,
            string
        ] & {
            vm: IWormhole.VMStructOutput;
            valid: boolean;
            reason: string;
        }>;
        publishMessage(nonce: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, consistencyLevel: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        nextSequence(emitter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseAndVerifyVM(encodedVM: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        publishMessage(nonce: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, consistencyLevel: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        nextSequence(emitter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseAndVerifyVM(encodedVM: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publishMessage(nonce: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, consistencyLevel: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
