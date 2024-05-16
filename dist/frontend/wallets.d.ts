import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import { AllowedChainId, AllowedWallet } from "../types/account";
export declare function initMagic({ email, testMode, chainId, }: {
    email: string;
    testMode: boolean;
    chainId: AllowedChainId;
}): Promise<{
    magic?: Magic;
    provider?: ethers.providers.Web3Provider;
}>;
export declare function getWeb3Provider(walletType: AllowedWallet, chainId: AllowedChainId): Promise<ethers.providers.Web3Provider | undefined>;
