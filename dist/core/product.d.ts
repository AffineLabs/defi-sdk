import { ethers } from "ethers";
import { GasInfo, SmallTxReceipt } from "..";
import { ERC4626Upgradeable, MockERC20 } from "../typechain";
import { AlpineProduct, DryRunReceipt, FullTxReceipt, TokenInfo } from "./types";
export declare function buyProduct(product: AlpineProduct, amount: number, slippageBps?: number): Promise<DryRunReceipt & (GasInfo | SmallTxReceipt)>;
export declare function sellProduct(product: AlpineProduct, amount: number): Promise<{
    txnCost: string;
    gasPrice: string;
    alpFee: string;
    alpFeePercent: string;
    dollarAmount: string;
    tokenAmount: string;
}>;
export declare function buyVault(vault: ERC4626Upgradeable, rawAmount: number, asset: MockERC20): Promise<DryRunReceipt & (SmallTxReceipt | GasInfo)>;
export declare function sellVault(vault: ERC4626Upgradeable, rawAmount: number, asset: MockERC20): Promise<{
    txnCost: string;
    gasPrice: string;
    alpFee: string;
    alpFeePercent: string;
    dollarAmount: string;
    tokenAmount: string;
}>;
export declare function buyBtCEthShares(amountUSDC: number, slippageBps: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellBtCEthShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt>;
/**
 * Sell from eth weth vault shares.
 * @param amountWeth Amount in weth to sell
 */
export declare function sellEthWethShares(amountWeth: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function getTokenInfo(product: AlpineProduct | "usdc"): Promise<TokenInfo>;
export declare function tokensFromShares(product: AlpineProduct, shareAmount: ethers.BigNumber): Promise<ethers.BigNumber>;
export declare function sharesFromTokens(product: AlpineProduct, tokenAmount: ethers.BigNumber): Promise<ethers.BigNumber>;
