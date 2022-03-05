import * as sdk from "./AlpineDeFiSDK";

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

export async function buyProduct(
  product: AlpineProduct,
  amount: number,
  getData: boolean = false
) {
  if (product == "alpSave") {
    // buy alpSave
    return sdk.buyUSDCShares(amount, getData);
  }
  if (product == "alpLarge") {
    return sdk.buyBtCEthShares(amount, getData);
  }
}
