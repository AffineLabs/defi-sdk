import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface AffinePassInterface extends utils.Interface {
    functions: {
        "MAX_PUBLIC_MINT()": FunctionFragment;
        "MAX_RESERVE_TOKENS()": FunctionFragment;
        "MAX_SUPPLY()": FunctionFragment;
        "MAX_SUPPLY_ACCOLADES()": FunctionFragment;
        "MAX_WHITELIST_MINT()": FunctionFragment;
        "accoladeAllocation(address)": FunctionFragment;
        "accolades()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseURI()": FunctionFragment;
        "bridgeBurn(uint256)": FunctionFragment;
        "bridgeMint(address,uint256)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "hasMinted(address)": FunctionFragment;
        "hasMintedWhitelist(address)": FunctionFragment;
        "hasRemainingSupply()": FunctionFragment;
        "isAccolade(address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isWhitelisted(address,bytes32[])": FunctionFragment;
        "merkleRoot()": FunctionFragment;
        "mint()": FunctionFragment;
        "mintGuaranteed()": FunctionFragment;
        "mintReserve(uint256)": FunctionFragment;
        "mintWhitelist(bytes32[])": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "reserveTokens()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "saleIsActive()": FunctionFragment;
        "setAccolades(address)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "setIsWhitelistedBridge(address,bool)": FunctionFragment;
        "setMerkleRoot(bytes32)": FunctionFragment;
        "stopMint()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "togglePublicSale()": FunctionFragment;
        "toggleWhitelistSale()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "whitelistSaleIsActive()": FunctionFragment;
        "whitelistedBridge(address)": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_PUBLIC_MINT" | "MAX_RESERVE_TOKENS" | "MAX_SUPPLY" | "MAX_SUPPLY_ACCOLADES" | "MAX_WHITELIST_MINT" | "accoladeAllocation" | "accolades" | "approve" | "balanceOf" | "baseURI" | "bridgeBurn" | "bridgeMint" | "burn" | "getApproved" | "hasMinted" | "hasMintedWhitelist" | "hasRemainingSupply" | "isAccolade" | "isApprovedForAll" | "isWhitelisted" | "merkleRoot" | "mint" | "mintGuaranteed" | "mintReserve" | "mintWhitelist" | "name" | "owner" | "ownerOf" | "renounceOwnership" | "reserveTokens" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "saleIsActive" | "setAccolades" | "setApprovalForAll" | "setBaseURI" | "setIsWhitelistedBridge" | "setMerkleRoot" | "stopMint" | "supportsInterface" | "symbol" | "togglePublicSale" | "toggleWhitelistSale" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "transferOwnership" | "whitelistSaleIsActive" | "whitelistedBridge" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_PUBLIC_MINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_RESERVE_TOKENS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_SUPPLY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_SUPPLY_ACCOLADES", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_WHITELIST_MINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "accoladeAllocation", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "accolades", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeBurn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "bridgeMint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "hasMinted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasMintedWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRemainingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAccolade", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isWhitelisted", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "merkleRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintGuaranteed", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintReserve", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mintWhitelist", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserveTokens", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "saleIsActive", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAccolades", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIsWhitelistedBridge", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMerkleRoot", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "stopMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "togglePublicSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "toggleWhitelistSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelistSaleIsActive", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelistedBridge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_PUBLIC_MINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_RESERVE_TOKENS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_SUPPLY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_SUPPLY_ACCOLADES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_WHITELIST_MINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accoladeAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accolades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasMintedWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRemainingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccolade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGuaranteed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserveTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saleIsActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccolades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIsWhitelistedBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMerkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "togglePublicSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleWhitelistSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSaleIsActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "WhitelistMerkleRootUpdated(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistMerkleRootUpdated"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
export interface WhitelistMerkleRootUpdatedEventObject {
    merkleRoot: string;
}
export type WhitelistMerkleRootUpdatedEvent = TypedEvent<[
    string
], WhitelistMerkleRootUpdatedEventObject>;
export type WhitelistMerkleRootUpdatedEventFilter = TypedEventFilter<WhitelistMerkleRootUpdatedEvent>;
export interface AffinePass extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AffinePassInterface;
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
        MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_RESERVE_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_SUPPLY_ACCOLADES(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;
        accoladeAllocation(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            allocation: BigNumber;
        }>;
        accolades(overrides?: CallOverrides): Promise<[string]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseURI(overrides?: CallOverrides): Promise<[string]>;
        bridgeBurn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bridgeMint(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        hasMinted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        hasMintedWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        hasRemainingSupply(overrides?: CallOverrides): Promise<[boolean]>;
        isAccolade(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isWhitelisted(user: PromiseOrValue<string>, proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[boolean]>;
        merkleRoot(overrides?: CallOverrides): Promise<[string]>;
        mint(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintGuaranteed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintReserve(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintWhitelist(proof: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reserveTokens(overrides?: CallOverrides): Promise<[BigNumber]>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        saleIsActive(overrides?: CallOverrides): Promise<[boolean]>;
        setAccolades(_accolades: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBaseURI(URI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIsWhitelistedBridge(_bridge: PromiseOrValue<string>, _isWhitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopMint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        togglePublicSale(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        toggleWhitelistSale(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistSaleIsActive(overrides?: CallOverrides): Promise<[boolean]>;
        whitelistedBridge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_RESERVE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_SUPPLY_ACCOLADES(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<BigNumber>;
    accoladeAllocation(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    accolades(overrides?: CallOverrides): Promise<string>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    baseURI(overrides?: CallOverrides): Promise<string>;
    bridgeBurn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bridgeMint(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    hasMinted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    hasMintedWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    hasRemainingSupply(overrides?: CallOverrides): Promise<boolean>;
    isAccolade(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isWhitelisted(user: PromiseOrValue<string>, proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<boolean>;
    merkleRoot(overrides?: CallOverrides): Promise<string>;
    mint(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintGuaranteed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintReserve(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintWhitelist(proof: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reserveTokens(overrides?: CallOverrides): Promise<BigNumber>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    saleIsActive(overrides?: CallOverrides): Promise<boolean>;
    setAccolades(_accolades: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBaseURI(URI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIsWhitelistedBridge(_bridge: PromiseOrValue<string>, _isWhitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopMint(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    togglePublicSale(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    toggleWhitelistSale(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistSaleIsActive(overrides?: CallOverrides): Promise<boolean>;
    whitelistedBridge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_RESERVE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SUPPLY_ACCOLADES(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        accoladeAllocation(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accolades(overrides?: CallOverrides): Promise<string>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<string>;
        bridgeBurn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bridgeMint(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        hasMinted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hasMintedWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hasRemainingSupply(overrides?: CallOverrides): Promise<boolean>;
        isAccolade(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isWhitelisted(user: PromiseOrValue<string>, proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<boolean>;
        merkleRoot(overrides?: CallOverrides): Promise<string>;
        mint(overrides?: CallOverrides): Promise<void>;
        mintGuaranteed(overrides?: CallOverrides): Promise<void>;
        mintReserve(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        mintWhitelist(proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        reserveTokens(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        saleIsActive(overrides?: CallOverrides): Promise<boolean>;
        setAccolades(_accolades: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setBaseURI(URI: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setIsWhitelistedBridge(_bridge: PromiseOrValue<string>, _isWhitelisted: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        stopMint(overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        togglePublicSale(overrides?: CallOverrides): Promise<void>;
        toggleWhitelistSale(overrides?: CallOverrides): Promise<void>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        whitelistSaleIsActive(overrides?: CallOverrides): Promise<boolean>;
        whitelistedBridge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        "WhitelistMerkleRootUpdated(bytes32)"(merkleRoot?: PromiseOrValue<BytesLike> | null): WhitelistMerkleRootUpdatedEventFilter;
        WhitelistMerkleRootUpdated(merkleRoot?: PromiseOrValue<BytesLike> | null): WhitelistMerkleRootUpdatedEventFilter;
    };
    estimateGas: {
        MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_RESERVE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SUPPLY_ACCOLADES(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        accoladeAllocation(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accolades(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeBurn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bridgeMint(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hasMinted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        hasMintedWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        hasRemainingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        isAccolade(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isWhitelisted(user: PromiseOrValue<string>, proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        mint(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintGuaranteed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintReserve(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintWhitelist(proof: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reserveTokens(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        saleIsActive(overrides?: CallOverrides): Promise<BigNumber>;
        setAccolades(_accolades: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBaseURI(URI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIsWhitelistedBridge(_bridge: PromiseOrValue<string>, _isWhitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopMint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        togglePublicSale(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        toggleWhitelistSale(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistSaleIsActive(overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedBridge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_RESERVE_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_SUPPLY_ACCOLADES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accoladeAllocation(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accolades(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgeBurn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bridgeMint(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasMinted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasMintedWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRemainingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccolade(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWhitelisted(user: PromiseOrValue<string>, proof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintGuaranteed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintReserve(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintWhitelist(proof: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reserveTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        saleIsActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAccolades(_accolades: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBaseURI(URI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIsWhitelistedBridge(_bridge: PromiseOrValue<string>, _isWhitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMerkleRoot(_merkleRoot: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopMint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        togglePublicSale(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        toggleWhitelistSale(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistSaleIsActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedBridge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
