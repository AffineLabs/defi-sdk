import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface AffineGovernableInterface extends utils.Interface {
    functions: {
        "governance()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "governance"): FunctionFragment;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    events: {};
}
export interface AffineGovernable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AffineGovernableInterface;
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
        governance(overrides?: CallOverrides): Promise<[string]>;
    };
    governance(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        governance(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        governance(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
