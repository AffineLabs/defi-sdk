import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import { AllowedChainId, AllowedWallet } from "../types/account";
import Provider from "@walletconnect/universal-provider";
export declare function initMagic({ email, testMode, chainId, }: {
    email: string;
    testMode: boolean;
    chainId: AllowedChainId;
}): Promise<{
    magic?: Magic;
    provider?: ethers.providers.Web3Provider;
}>;
export declare function getWalletconnectProvider(chainId: AllowedChainId, wcProvider?: Provider, modal?: import("@web3modal/standalone").Web3Modal): Promise<ethers.providers.Web3Provider | undefined>;
export declare function getWeb3Provider(walletType: AllowedWallet, chainId: AllowedChainId, wcProvider?: Provider, web3modal?: import("@web3modal/standalone").Web3Modal): Promise<ethers.providers.Web3Provider | undefined>;
