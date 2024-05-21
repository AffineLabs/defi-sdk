import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DummyRelayInterface extends utils.Interface {
    functions: {
        "trustedForwarder()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "trustedForwarder"): FunctionFragment;
    encodeFunctionData(functionFragment: "trustedForwarder", values?: undefined): string;
    decodeFunctionResult(functionFragment: "trustedForwarder", data: BytesLike): Result;
    events: {};
}
export interface DummyRelay extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DummyRelayInterface;
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
        trustedForwarder(overrides?: CallOverrides): Promise<[string]>;
    };
    trustedForwarder(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        trustedForwarder(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        trustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        trustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
