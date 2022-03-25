import { ethers } from "ethers";
import * as sdk from "./AlpineDeFiSDK";
import { CONTRACTS, SIGNER, BICONOMY } from "./cache";

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

type ContractName = "usdc" | "relayer" | AlpineProduct;
export type AlpineContracts = {
  [key in ContractName]: ethers.Contract;
};

export async function buyProduct(product: AlpineProduct, amount: number) {
  if (product === "alpSave") {
    return sdk.buyUsdcShares(amount);
  }
  if (product === "alpLarge") {
    return sdk.buyBtCEthShares(amount);
  }
}

export async function sellProduct(product: AlpineProduct, amount: number) {
  if (product === "alpSave") {
    return sdk.sellUsdcShares(amount);
  }
  if (product === "alpLarge") {
    return sdk.sellBtCEthShares(amount);
  }
}

export interface TokenInfo {
  amount: string; // in base unit
  price: string; // dollars / 1 base unit of token
  equity: string; // in dollars
}
export async function getTokenInfo(product: AlpineProduct): Promise<TokenInfo> {
  const user = await SIGNER.getAddress();
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const amount: ethers.BigNumber = await alpSave.balanceOf(user);
    const equity: ethers.BigNumber = await alpSave.tokensFromShares(amount);
    const price: ethers.BigNumber = await alpSave.tokensFromShares(1e6);
    return {
      amount: ethers.utils.formatUnits(amount, 6),
      price: ethers.utils.formatUnits(price, 6),
      equity: ethers.utils.formatUnits(equity, 6),
    };
  }

  // alpLarge
  const { alpLarge } = CONTRACTS;
  // TODO: let the contract take care of pricing
  const amount: ethers.BigNumber = await alpLarge.balanceOf(user);
  const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
  console.log({ totalDollars });
  // totalDollars * percentOfTotalSupply
  // dollars diven by btc/eth vault actually have 8 decimals
  const equity = totalDollars.mul(amount).div(await alpLarge.totalSupply());
  const price = equity.div(amount);
  console.log({ equity, amount, price });
  return {
    amount: ethers.utils.formatUnits(amount, 8),
    price: ethers.utils.formatUnits(price, 8),
    equity: ethers.utils.formatUnits(equity, 8),
  };
}
