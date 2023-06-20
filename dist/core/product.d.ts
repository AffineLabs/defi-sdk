import { ethers } from "ethers";
import { AlpineProduct, DryRunReceipt, FullTxReceipt, TokenInfo } from "./types";
export declare function buyProduct(product: AlpineProduct, amount: number, slippageBps?: number): Promise<DryRunReceipt | undefined>;
export declare function sellProduct(product: AlpineProduct, amount: number): Promise<DryRunReceipt | undefined>;
export declare function buyLockedShares(rawAmount: number): Promise<DryRunReceipt | FullTxReceipt>;
/**
 * Deposit usdc to a vault, and get alp tokens in return
 * @param {String} amountUSDC amount in usdc
 */
export declare function buyUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function buyBtCEthShares(amountUSDC: number, slippageBps: number): Promise<DryRunReceipt | FullTxReceipt>;
/**
 * sell alp token and withdraw usdc from a vault (to user's wallet by default)
 * @param amountUSDC amount in usdc to sell
 */
export declare function sellUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt>;
/**
 * Sell from eth vault shares.
 * @param amountUSDC Smount in usdc to sell
 */
export declare function sellEthUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellBtCEthShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt>;
/**
 * Sell from eth weth vault shares.
 * @param amountWeth Amount in weth to sell
 */
export declare function sellEthWethShares(amountWeth: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellLockedShares(rawAmount: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellDegenShares(amount: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellEthLeverage(amount: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellPolygonLeverage(amount: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellpolygonDegen(amount: number): Promise<DryRunReceipt | FullTxReceipt>;
export declare function getTokenInfo(product: AlpineProduct | "usdc" | "weth"): Promise<TokenInfo>;
export declare function tokensFromShares(product: AlpineProduct, shareAmount: ethers.BigNumber): Promise<ethers.BigNumber>;
export declare function sharesFromTokens(product: AlpineProduct, tokenAmount: ethers.BigNumber): Promise<ethers.BigNumber>;
