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
  const allTxData: Array<Array<string>> = [];
  for (const [prd, amount] of Object.entries(buyAmounts)) {
    // get the transaction data
    const txDataAndTarget = (await buyProduct(
      prd as AlpineProduct,
      amount,
      true
    )) as string;
    const [target, txData] = txDataAndTarget.split(":");
    allTxData.push([target, txData]);

    console.log({ target, txData });
  }
  console.log({ allTxData });
  const encodedCalls = ethers.utils.defaultAbiCoder.encode(
    ["tuple(address,bytes)[]"],
    [allTxData]
  );

  // TODO: Get transaction data for sell
  // Do a multicall right here
  const Call = "(address,bytes)";
  const humanAbi = `function aggregate(${Call}[] memory calls) returns (uint256 blockNumber, bytes[] memory returnData)`;
  //   const multiCallAbi =
  //     '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]';
  const multiCall = new ethers.Contract(
    "0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc",
    [humanAbi],
    SIGNER
  );
  //   const t = await multiCall.getCurrentBlockTimestamp();
  //   console.log("timestamp\n\n: ", { t });
  await multiCall.aggregate(encodedCalls);
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
