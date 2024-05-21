import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IUniswapV3PoolOwnerActionsInterface extends utils.Interface {
    functions: {
        "collectProtocol(address,uint128,uint128)": FunctionFragment;
        "setFeeProtocol(uint8,uint8)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectProtocol" | "setFeeProtocol"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectProtocol", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setFeeProtocol", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "collectProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeProtocol", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3PoolOwnerActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolOwnerActionsInterface;
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
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
