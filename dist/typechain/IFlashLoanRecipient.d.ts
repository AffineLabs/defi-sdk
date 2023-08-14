import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IFlashLoanRecipientInterface extends utils.Interface {
    functions: {
        "receiveFlashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface IFlashLoanRecipient extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFlashLoanRecipientInterface;
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
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
