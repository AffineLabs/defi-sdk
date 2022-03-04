import ethers from "ethers";

import * as sdk from "./AlpineDeFiSDK";

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]: number;
};

export async function portfolioUpdate(
  buyAmounts: productAmounts,
  sellAmounts: productAmounts
) {
  const allTxData: Array<string> = [];
  for (const [prd, amount] of Object.entries(buyAmounts)) {
    // get the transaction data
    const txData = (await buyProduct(
      prd as AlpineProduct,
      amount,
      true
    )) as string;
    allTxData.push(txData);
  }

  // Get transaction data for sell

  // Do a multicall right here
}

// TODO: move this function to a new file
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
