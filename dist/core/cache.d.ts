import { ethers } from "ethers";
import { BaseContracts, EthContracts, PolygonContracts } from "./types";
import { AllowedChainId } from "../types/account";
export declare let SIGNER: ethers.Signer;
export declare let userAddress: string;
export declare let SIMULATE: boolean;
export declare let BICONOMY: ethers.providers.Web3Provider | undefined;
export declare let PROVIDER: ethers.providers.StaticJsonRpcProvider;
export declare const RPC_URLS: {
    [index: AllowedChainId]: string;
};
export declare function getProviderByChainId(chainId: AllowedChainId): ethers.providers.StaticJsonRpcProvider;
/**
 * @param provider The current provider
 * @param version The addressbook version
 * @returns A map of contract names to ethers.Contract objects
 */
export declare function getAllContracts(provider: ethers.providers.JsonRpcProvider, version: string): Promise<PolygonContracts | EthContracts | BaseContracts>;
export declare function getContracts(): PolygonContracts | EthContracts | BaseContracts;
export declare function getEthContracts(): EthContracts;
export declare function getPolygonContracts(): PolygonContracts;
export declare function getBaseContracts(): BaseContracts;
export declare function init(signerOrAddress: ethers.Signer | string, biconomy: ethers.providers.Web3Provider | undefined, contractVersion?: string, chainId?: AllowedChainId): Promise<void>;
export declare function getChainId(): number;
export declare function setProvider(provider: ethers.providers.JsonRpcProvider): void;
export declare function setSimulationMode(mode: boolean): Promise<void>;
