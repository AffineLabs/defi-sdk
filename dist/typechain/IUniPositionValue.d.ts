import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IUniPositionValueInterface extends utils.Interface {
    functions: {
        "fees(address,uint256)": FunctionFragment;
        "principal(address,uint256,uint160)": FunctionFragment;
        "total(address,uint256,uint160)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fees" | "principal" | "total"): FunctionFragment;
    encodeFunctionData(functionFragment: "fees", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "principal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "total", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "principal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
    events: {};
}
export interface IUniPositionValue extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniPositionValueInterface;
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
        fees(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        principal(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        total(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    fees(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    principal(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    total(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    callStatic: {
        fees(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        principal(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        total(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        fees(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        principal(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        total(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        fees(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        principal(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        total(positionManager: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sqrtRatioX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
