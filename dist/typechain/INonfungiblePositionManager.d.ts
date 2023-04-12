import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace INonfungiblePositionManager {
    type CollectParamsStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        recipient: PromiseOrValue<string>;
        amount0Max: PromiseOrValue<BigNumberish>;
        amount1Max: PromiseOrValue<BigNumberish>;
    };
    type CollectParamsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        tokenId: BigNumber;
        recipient: string;
        amount0Max: BigNumber;
        amount1Max: BigNumber;
    };
    type DecreaseLiquidityParamsStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        liquidity: PromiseOrValue<BigNumberish>;
        amount0Min: PromiseOrValue<BigNumberish>;
        amount1Min: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type DecreaseLiquidityParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenId: BigNumber;
        liquidity: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        deadline: BigNumber;
    };
    type IncreaseLiquidityParamsStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        amount0Desired: PromiseOrValue<BigNumberish>;
        amount1Desired: PromiseOrValue<BigNumberish>;
        amount0Min: PromiseOrValue<BigNumberish>;
        amount1Min: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type IncreaseLiquidityParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenId: BigNumber;
        amount0Desired: BigNumber;
        amount1Desired: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        deadline: BigNumber;
    };
    type MintParamsStruct = {
        token0: PromiseOrValue<string>;
        token1: PromiseOrValue<string>;
        fee: PromiseOrValue<BigNumberish>;
        tickLower: PromiseOrValue<BigNumberish>;
        tickUpper: PromiseOrValue<BigNumberish>;
        amount0Desired: PromiseOrValue<BigNumberish>;
        amount1Desired: PromiseOrValue<BigNumberish>;
        amount0Min: PromiseOrValue<BigNumberish>;
        amount1Min: PromiseOrValue<BigNumberish>;
        recipient: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type MintParamsStructOutput = [
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
    ] & {
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        amount0Desired: BigNumber;
        amount1Desired: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        recipient: string;
        deadline: BigNumber;
    };
}
export interface INonfungiblePositionManagerInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "PERMIT_TYPEHASH()": FunctionFragment;
        "WETH9()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "collect((uint256,address,uint128,uint128))": FunctionFragment;
        "createAndInitializePoolIfNecessary(address,address,uint24,uint160)": FunctionFragment;
        "decreaseLiquidity((uint256,uint128,uint256,uint256,uint256))": FunctionFragment;
        "factory()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "increaseLiquidity((uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "mint((address,address,uint24,int24,int24,uint256,uint256,uint256,uint256,address,uint256))": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "permit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "positions(uint256)": FunctionFragment;
        "refundETH()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "PERMIT_TYPEHASH" | "WETH9" | "approve" | "balanceOf" | "burn" | "collect" | "createAndInitializePoolIfNecessary" | "decreaseLiquidity" | "factory" | "getApproved" | "increaseLiquidity" | "isApprovedForAll" | "mint" | "name" | "ownerOf" | "permit" | "positions" | "refundETH" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "supportsInterface" | "sweepToken" | "symbol" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "unwrapWETH9"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "collect", values: [INonfungiblePositionManager.CollectParamsStruct]): string;
    encodeFunctionData(functionFragment: "createAndInitializePoolIfNecessary", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decreaseLiquidity", values: [INonfungiblePositionManager.DecreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseLiquidity", values: [INonfungiblePositionManager.IncreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [INonfungiblePositionManager.MintParamsStruct]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "positions", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "sweepToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndInitializePoolIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Collect(uint256,address,uint256,uint256)": EventFragment;
        "DecreaseLiquidity(uint256,uint128,uint256,uint256)": EventFragment;
        "IncreaseLiquidity(uint256,uint128,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreaseLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface CollectEventObject {
    tokenId: BigNumber;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type CollectEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], CollectEventObject>;
export type CollectEventFilter = TypedEventFilter<CollectEvent>;
export interface DecreaseLiquidityEventObject {
    tokenId: BigNumber;
    liquidity: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type DecreaseLiquidityEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], DecreaseLiquidityEventObject>;
export type DecreaseLiquidityEventFilter = TypedEventFilter<DecreaseLiquidityEvent>;
export interface IncreaseLiquidityEventObject {
    tokenId: BigNumber;
    liquidity: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type IncreaseLiquidityEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], IncreaseLiquidityEventObject>;
export type IncreaseLiquidityEventFilter = TypedEventFilter<IncreaseLiquidityEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface INonfungiblePositionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INonfungiblePositionManagerInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            operator: string;
        }>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            owner: string;
        }>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        positions(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            string,
            number,
            number,
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            nonce: BigNumber;
            operator: string;
            token0: string;
            token1: string;
            fee: number;
            tickLower: number;
            tickUpper: number;
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        refundETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WETH9(overrides?: CallOverrides): Promise<string>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    positions(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        nonce: BigNumber;
        operator: string;
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
    }>;
    refundETH(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WETH9(overrides?: CallOverrides): Promise<string>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            tokenId: BigNumber;
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        name(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        positions(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            string,
            number,
            number,
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            nonce: BigNumber;
            operator: string;
            token0: string;
            token1: string;
            fee: number;
            tickLower: number;
            tickUpper: number;
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "Collect(uint256,address,uint256,uint256)"(tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: null, amount0?: null, amount1?: null): CollectEventFilter;
        Collect(tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: null, amount0?: null, amount1?: null): CollectEventFilter;
        "DecreaseLiquidity(uint256,uint128,uint256,uint256)"(tokenId?: PromiseOrValue<BigNumberish> | null, liquidity?: null, amount0?: null, amount1?: null): DecreaseLiquidityEventFilter;
        DecreaseLiquidity(tokenId?: PromiseOrValue<BigNumberish> | null, liquidity?: null, amount0?: null, amount1?: null): DecreaseLiquidityEventFilter;
        "IncreaseLiquidity(uint256,uint128,uint256,uint256)"(tokenId?: PromiseOrValue<BigNumberish> | null, liquidity?: null, amount0?: null, amount1?: null): IncreaseLiquidityEventFilter;
        IncreaseLiquidity(tokenId?: PromiseOrValue<BigNumberish> | null, liquidity?: null, amount0?: null, amount1?: null): IncreaseLiquidityEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        positions(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createAndInitializePoolIfNecessary(token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        positions(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
