import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import { AllowedChainId, AllowedWallet } from "../types/account";
import { Web3Modal } from "@web3modal/ethers5/dist/types/src/client";
export declare function initMagic({ email, testMode, chainId, }: {
    email: string;
    testMode: boolean;
    chainId: AllowedChainId;
}): Promise<{
    magic?: Magic;
    provider?: ethers.providers.Web3Provider;
}>;
export declare function getWalletconnectProvider(modal?: Web3Modal): Promise<ethers.providers.Web3Provider | undefined>;
export declare function getWeb3Provider(walletType: AllowedWallet, chainId: AllowedChainId, web3modal?: Web3Modal): Promise<ethers.providers.Web3Provider | undefined>;
