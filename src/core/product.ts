import { ethers } from "ethers";
import * as sdk from "./AlpineDeFiSDK";
import { CONTRACTS, SIGNER, BICONOMY } from "./cache";

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

type ContractName = "usdc" | "forwarder" | AlpineProduct;
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
export async function getTokenInfo(
  product: AlpineProduct | "usdc"
): Promise<TokenInfo> {
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

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = CONTRACTS;
    // TODO: let the contract take care of pricing
    const amount: ethers.BigNumber = await alpLarge.balanceOf(user);
    const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
    console.log({ totalDollars });
    // totalDollars * percentOfTotalSupply
    // dollars given by btc/eth vault actually have 8 decimals
    const totalSupply: ethers.BigNumber = await alpLarge.totalSupply();
    const equity = totalDollars.mul(amount).div(totalSupply);
    console.log({
      totalDollars: totalDollars.toString(),
      totalSupply: totalSupply.toString(),
    });
    const price = totalDollars.toNumber() / totalSupply.div(1e10).toNumber();
    console.log({ equity, amount, price });
    return {
      amount: ethers.utils.formatUnits(amount, 18),
      price: price.toString(),
      equity: ethers.utils.formatUnits(equity, 8),
    };
  }

  // usdc
  const { usdc } = CONTRACTS;
  const amount = await usdc.balanceOf(user);
  return {
    amount: ethers.utils.formatUnits(amount, 6),
    price: "1",
    equity: ethers.utils.formatUnits(amount, 6),
  };
}

export async function tokensFromShares(
  product: AlpineProduct,
  amount: ethers.BigNumber
) {
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const tokens: ethers.BigNumber = await alpSave.tokensFromShares(amount);
    return tokens;
  }

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = CONTRACTS;
    const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
    const totalSupply: ethers.BigNumber = await alpLarge.totalSupply();
    // totalDollars / totalShares * numShares
    const dollars = totalDollars.mul(amount).div(totalSupply);
    // The token we're talking about is USDC here, which only has 6 decimals.
    return dollars.div(1e2);
  }
}

export async function sharesFromTokens(
  product: AlpineProduct,
  tokenAmount: ethers.BigNumber
) {
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const shares: ethers.BigNumber = await alpSave.sharesFromTokens(
      tokenAmount
    );
    return shares;
  }

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = CONTRACTS;
    // TODO: let the contract take care of pricing
    const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
    console.log({ totalDollars });
    // totalSupply / totalDollars * dollars
    // dollars given by btc/eth vault actually have 8 decimals
    const totalSupply: ethers.BigNumber = await alpLarge.totalSupply();
    // convert tokenAmount (a USDC amount with 6 decimals) to dollar amount (8 decimals)
    const shares = totalSupply.mul(tokenAmount.mul(1e2)).div(totalDollars);
    return shares;
  }
  return ethers.BigNumber.from(0);
}
