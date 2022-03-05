import { ethers } from "ethers";

import { SIGNER } from "./cache";

import { productAmounts, AlpineProduct, buyProduct } from "./product";

async function portfolioUpdate(
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
  }

  // TODO: Get transaction data for sell
  // Do a multicall right here
  const Call = "(address,bytes)";
  const humanAbi = `function aggregate(${Call}[] memory calls) returns (uint256 blockNumber, bytes[] memory returnData)`;
  const multiCall = new ethers.Contract(
    "0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc",
    [humanAbi],
    SIGNER
  );

  await multiCall.aggregate(encodedCalls);
}
