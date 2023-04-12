import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IPoolInitializerInterface extends utils.Interface {
    functions: {
        "createAndInitializePoolIfNecessary(address,address,uint24,uint160)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createAndInitializePoolIfNecessary"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAndInitializePoolIfNecessary", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "createAndInitializePoolIfNecessary", data: BytesLike): Result;
    events: {};
}
export interface IPoolInitializer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolInitializerInterface;
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
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
