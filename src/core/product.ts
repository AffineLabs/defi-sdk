import { ethers } from "ethers";
import * as sdk from "./AlpineDeFiSDK";

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

type ContractName = "usdc" | "relayer" | AlpineProduct;
export type AlpineContracts = {
  [key in ContractName]: ethers.Contract;
};

export async function buyProduct(product: AlpineProduct, amount: number) {
  if (product == "alpSave") {
    return sdk.buyUsdcShares(amount);
  }
  if (product == "alpLarge") {
    return sdk.buyBtCEthShares(amount);
  }
}

export async function sellProduct(product: AlpineProduct, amount: number) {
  if (product == "alpSave") {
    return sdk.sellUsdcShares(amount);
  }
  if (product == "alpLarge") {
    return sdk.sellBtCEthShares(amount);
  }
}
