import { BigNumber, ethers } from "ethers";
import { GasInfo, SmallTxReceipt } from "..";
import { ERC4626Upgradeable, MockERC20, Router } from "../typechain";
import { AlpineProduct, DryRunReceipt, FullTxReceipt, TokenInfo } from "./types";
export declare function buyProduct(product: AlpineProduct, amount: number, slippageBps?: number): Promise<DryRunReceipt>;
export declare function sellProduct(product: AlpineProduct, amount: number): Promise<DryRunReceipt>;
export declare function buyVault(vault: ERC4626Upgradeable, rawAssets: number, asset: MockERC20): Promise<DryRunReceipt & (SmallTxReceipt | GasInfo)>;
export declare function sellVault(vault: ERC4626Upgradeable, rawAssets: number, asset: MockERC20): Promise<{
    txnCost: string;
    gasPrice: string;
    alpFee: string;
    alpFeePercent: string;
    dollarAmount: string;
    tokenAmount: string;
}>;
export declare function buyBtCEthShares(alpLarge: ERC4626Upgradeable, amountUSDC: number, slippageBps: number, usdc: MockERC20, router: Router): Promise<DryRunReceipt | FullTxReceipt>;
export declare function sellBtCEthShares(alpLarge: ERC4626Upgradeable, amountUSDC: number, asset: MockERC20): Promise<DryRunReceipt | FullTxReceipt>;
export declare function getTokenInfo(product: AlpineProduct | "usdc" | "weth"): Promise<TokenInfo>;
export declare function tokensFromShares(product: AlpineProduct, shareAmount: ethers.BigNumber): Promise<BigNumber>;
export declare function sharesFromTokens(product: AlpineProduct, tokenAmount: ethers.BigNumber): Promise<BigNumber>;
