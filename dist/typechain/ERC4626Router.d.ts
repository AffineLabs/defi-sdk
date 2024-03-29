import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ERC4626RouterInterface extends utils.Interface {
    functions: {
        "approve(address,address,uint256)": FunctionFragment;
        "deposit(address,address,uint256,uint256)": FunctionFragment;
        "depositMax(address,address,uint256)": FunctionFragment;
        "depositToVault(address,address,uint256,uint256)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "redeem(address,address,uint256,uint256)": FunctionFragment;
        "redeemMax(address,address,uint256)": FunctionFragment;
        "redeemToDeposit(address,address,address,uint256,uint256)": FunctionFragment;
        "withdraw(address,address,uint256,uint256)": FunctionFragment;
        "withdrawToDeposit(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "deposit" | "depositMax" | "depositToVault" | "mint" | "multicall" | "redeem" | "redeemMax" | "redeemToDeposit" | "withdraw" | "withdrawToDeposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "depositMax", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "depositToVault", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "multicall", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "redeem", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeemMax", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeemToDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawToDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemToDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToDeposit", data: BytesLike): Result;
    events: {};
}
export interface ERC4626Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC4626RouterInterface;
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
        approve(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositToVault(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, maxAmountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeem(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesIn: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    approve(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositToVault(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, maxAmountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeem(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesIn: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        deposit(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositToVault(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, maxAmountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        redeem(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesIn: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        approve(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositToVault(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, maxAmountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeem(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesIn: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositToVault(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, maxAmountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeem(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemMax(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, minAmountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, shares: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(vault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToDeposit(fromVault: PromiseOrValue<string>, toVault: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxSharesIn: PromiseOrValue<BigNumberish>, minSharesOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
