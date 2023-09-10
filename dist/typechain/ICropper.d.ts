import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ICropperInterface extends utils.Interface {
    functions: {
        "exit(address,address,uint256)": FunctionFragment;
        "flux(address,address,address,uint256)": FunctionFragment;
        "frob(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "join(address,address,uint256)": FunctionFragment;
        "move(address,address,uint256)": FunctionFragment;
        "proxy(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exit" | "flux" | "frob" | "join" | "move" | "proxy"): FunctionFragment;
    encodeFunctionData(functionFragment: "exit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "flux", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "frob", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "join", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "move", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "proxy", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flux", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "frob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxy", data: BytesLike): Result;
    events: {};
}
export interface ICropper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICropperInterface;
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
        exit(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flux(crop: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        frob(ilk: PromiseOrValue<BytesLike>, u: PromiseOrValue<string>, v: PromiseOrValue<string>, w: PromiseOrValue<string>, dink: PromiseOrValue<BigNumberish>, dart: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        join(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        move(u: PromiseOrValue<string>, dst: PromiseOrValue<string>, rad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxy(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    exit(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flux(crop: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    frob(ilk: PromiseOrValue<BytesLike>, u: PromiseOrValue<string>, v: PromiseOrValue<string>, w: PromiseOrValue<string>, dink: PromiseOrValue<BigNumberish>, dart: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    join(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    move(u: PromiseOrValue<string>, dst: PromiseOrValue<string>, rad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxy(user: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exit(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        flux(crop: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        frob(ilk: PromiseOrValue<BytesLike>, u: PromiseOrValue<string>, v: PromiseOrValue<string>, w: PromiseOrValue<string>, dink: PromiseOrValue<BigNumberish>, dart: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        join(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        move(u: PromiseOrValue<string>, dst: PromiseOrValue<string>, rad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        proxy(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        exit(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flux(crop: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        frob(ilk: PromiseOrValue<BytesLike>, u: PromiseOrValue<string>, v: PromiseOrValue<string>, w: PromiseOrValue<string>, dink: PromiseOrValue<BigNumberish>, dart: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        join(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        move(u: PromiseOrValue<string>, dst: PromiseOrValue<string>, rad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxy(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exit(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flux(crop: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        frob(ilk: PromiseOrValue<BytesLike>, u: PromiseOrValue<string>, v: PromiseOrValue<string>, w: PromiseOrValue<string>, dink: PromiseOrValue<BigNumberish>, dart: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        join(crop: PromiseOrValue<string>, usr: PromiseOrValue<string>, val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        move(u: PromiseOrValue<string>, dst: PromiseOrValue<string>, rad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxy(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
