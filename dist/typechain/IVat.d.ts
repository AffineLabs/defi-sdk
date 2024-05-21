import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IVatInterface extends utils.Interface {
    functions: {
        "Line()": FunctionFragment;
        "cage()": FunctionFragment;
        "can(address,address)": FunctionFragment;
        "dai(address)": FunctionFragment;
        "debt()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "file(bytes32,bytes32,uint256)": FunctionFragment;
        "file(bytes32,uint256)": FunctionFragment;
        "flux(bytes32,address,address,uint256)": FunctionFragment;
        "fold(bytes32,address,int256)": FunctionFragment;
        "fork(bytes32,address,address,int256,int256)": FunctionFragment;
        "frob(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "gem(bytes32,address)": FunctionFragment;
        "grab(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "heal(uint256)": FunctionFragment;
        "hope(address)": FunctionFragment;
        "ilks(bytes32)": FunctionFragment;
        "init(bytes32)": FunctionFragment;
        "live()": FunctionFragment;
        "move(address,address,uint256)": FunctionFragment;
        "nope(address)": FunctionFragment;
        "rely(address)": FunctionFragment;
        "sin(address)": FunctionFragment;
        "slip(bytes32,address,int256)": FunctionFragment;
        "suck(address,address,uint256)": FunctionFragment;
        "urns(bytes32,address)": FunctionFragment;
        "vice()": FunctionFragment;
        "wards(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "Line" | "cage" | "can" | "dai" | "debt" | "deny" | "file(bytes32,bytes32,uint256)" | "file(bytes32,uint256)" | "flux" | "fold" | "fork" | "frob" | "gem" | "grab" | "heal" | "hope" | "ilks" | "init" | "live" | "move" | "nope" | "rely" | "sin" | "slip" | "suck" | "urns" | "vice" | "wards"): FunctionFragment;
    encodeFunctionData(functionFragment: "Line", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "can", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "dai", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "file(bytes32,bytes32,uint256)", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "file(bytes32,uint256)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "flux", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fold", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fork", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
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
    encodeFunctionData(functionFragment: "gem", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grab", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "heal", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "hope", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ilks", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "init", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "move", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "nope", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rely", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "slip", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "suck", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "urns", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "vice", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "Line", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "can", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file(bytes32,bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file(bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flux", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "frob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grab", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "heal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "suck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "urns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
    events: {};
}
export interface IVat extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVatInterface;
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
        Line(overrides?: CallOverrides): Promise<[BigNumber]>;
        cage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        can(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        dai(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        deny(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flux(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fold(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fork(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        frob(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gem(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grab(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        heal(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ilks(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        init(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        move(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rely(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sin(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        slip(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        suck(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        urns(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        vice(overrides?: CallOverrides): Promise<[BigNumber]>;
        wards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Line(overrides?: CallOverrides): Promise<BigNumber>;
    cage(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    can(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    dai(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    deny(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flux(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fold(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fork(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    frob(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gem(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    grab(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    heal(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ilks(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    init(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    move(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rely(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sin(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    slip(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    suck(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    urns(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    vice(overrides?: CallOverrides): Promise<BigNumber>;
    wards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Line(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: CallOverrides): Promise<void>;
        can(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        dai(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        deny(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        flux(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fold(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fork(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        frob(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        gem(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        grab(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        heal(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        hope(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        ilks(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        init(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        move(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nope(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        rely(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sin(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        slip(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        suck(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        urns(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        vice(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        Line(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        can(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        dai(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        deny(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "file(bytes32,bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "file(bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flux(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fold(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fork(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        frob(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gem(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        grab(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        heal(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ilks(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        init(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        move(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rely(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sin(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        slip(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        suck(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        urns(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        vice(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Line(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        can(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dai(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deny(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,uint256)"(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flux(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fold(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fork(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        frob(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gem(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grab(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        heal(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ilks(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        move(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nope(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rely(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sin(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slip(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        suck(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        urns(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
