import { ethers } from "ethers";

import * as sdk from "./AlpineDeFiSDK";
import { SIGNER } from "./cache";

export type AlpineProduct = "alpSave" | "alpLarge";
export type productAmounts = {
  [key in AlpineProduct]?: number;
};

export async function portfolioUpdate(
  buyAmounts: productAmounts,
  sellAmounts: productAmounts
) {
  const encodedCalls: Array<Array<string>> = [];
  for (const [prd, amount] of Object.entries(buyAmounts)) {
    // get the transaction data
    const txDataAndTarget = (await buyProduct(
      prd as AlpineProduct,
      amount,
      true
    )) as string;
    const [target, txData] = txDataAndTarget.split(":");
    encodedCalls.push([target, txData]);
    console.log({ target, txData });
  }

  console.log({ encodedCalls });
  // TODO: Get transaction data for sell
  // Do a multicall right here
  const Call = "(address,bytes)";
  const humanAbi = `function aggregate(${Call}[] memory calls) returns (uint256 blockNumber, bytes[] memory returnData)`;
  const multiCall = new ethers.Contract(
    "0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc",
    [humanAbi],
    SIGNER
  );

  await multiCall.aggregate(encodedCalls, { gasLimit: 10e6 });
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
