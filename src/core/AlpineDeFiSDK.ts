import { ethers } from "ethers";
import axios from "axios";

import { DryRunReceipt, FullTxReceipt, SmallTxReceipt } from "./types";
import { TransactionResponse } from "@ethersproject/abstract-provider";

import { SIGNER, BICONOMY, PROVIDER, userAddress, SIMULATE, getContracts } from "./cache";
import { AlpineContracts } from "./types";
import { getSignature, sendBiconomy, sendToForwarder } from "./biconomy";
import { GasInfo } from "..";
import { MAX_APPROVAL_AMOUNT } from "./constants";

/**
 * Get the current best estimate for gas price
 * @returns the best estimate for gas price in eth
 */
export async function getGasPrice(): Promise<string> {
  const gas = await PROVIDER.getGasPrice(); // gas price in wei
  // return gas price in ether
  return ethers.utils.formatEther(gas);
}

export async function getGasBalance() {
  return ethers.utils.formatEther(await PROVIDER.getBalance(userAddress));
}

/**
 * Converts a unit amount to equivalent micro unit amount
 * @param {string} amount an amount in whole unit eg. usdc.
 * @param {number} decimals The amount of decimals this contract has
 * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
 */
export function _addDecimals(amount: string, decimals: number): ethers.BigNumber {
  return ethers.utils.parseUnits(amount, decimals);
}

/**
 * converts a micro unit amount to equivalent unit amount
 * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
 * @param {number} decimals
 * @returns {string} equivalent amount in unit.
 */
export function _removeDecimals(amount: ethers.BigNumber, decimals: ethers.BigNumberish): string {
  return ethers.utils.formatUnits(amount, decimals);
}

// get the current matic price in usd
// we are using coingecko API to get the latest price
export async function getMaticPrice(): Promise<number> {
  const apiAddress = "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd";
  const { data: maticData } = await axios.get(apiAddress);
  const maticPrices = maticData["matic-network"];
  const usdMaticPrice: number = maticPrices["usd"];
  return usdMaticPrice;
}

/**
 * Call a smart contract method with arguments
 * @param {ethers.Contract} contract smart contract
 * @param {String} method the method name
 * @param {Array} args the arguments to the method
 * @returns a transaction receipt from the blockchain
 */
export async function blockchainCall(
  contract: ethers.Contract,
  method: string,
  args: Array<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  simulate = false,
): Promise<SmallTxReceipt | GasInfo> {
  const signer = SIGNER;
  const biconomy = BICONOMY;

  const { usdc } = getContracts();
  contract = contract.connect(signer);

  if (biconomy && contract.address !== usdc.address) {
    console.log({ method }, args);
    const { signature, request } = await getSignature(contract, signer, method, args);
    console.log({ signature, request });
    await sendToForwarder([signature], [request]);
    return { blockNumber: "", txnHash: "", txnCost: "", txnCostUSD: "" };
  }

  if (biconomy && contract.address == usdc.address) {
    await sendBiconomy(contract, signer, method, args);
    return { blockNumber: "", txnHash: "", txnCost: "", txnCostUSD: "" };
  }

  // regular (non-meta) tx
  if (simulate) {
    const [gasEstimate, gasPrice] = await Promise.all([
      contract.estimateGas[method].apply(null, args),
      PROVIDER.getGasPrice(),
    ]);

    console.log(`gasEstimate: ${gasEstimate.toString()} and gasPrice: ${gasPrice.toString()}`);

    // cost is gas * gasPrice
    const cost = gasEstimate.mul(gasPrice);
    const txnCost = ethers.utils.formatEther(cost);
    const maticPrice = await getMaticPrice();
    const txnCostUSD = (Number(txnCost) * maticPrice).toString();

    return { txnCost, txnCostUSD };
  }

  const gasLimit = (await contract.estimateGas[method].apply(null, args)).mul(12).div(10);
  args.push({ gasLimit });
  const tx: TransactionResponse = await contract[method].apply(null, args);
  const receipt = await tx.wait();

  const cost = receipt.gasUsed.mul(receipt.effectiveGasPrice);
  const txnCost = ethers.utils.formatEther(cost);
  const maticPrice = await getMaticPrice();
  const txnCostUSD = (Number(txnCost) * maticPrice).toString();
  return {
    blockNumber: receipt.blockNumber.toString(),
    txnHash: receipt.transactionHash,
    txnCost,
    txnCostUSD,
  };
}

/**
 * approve outgoing transaction with another wallet or smart contract for
 * the specified amount
 * @param to the receipient contract
 * @param amountUSDC (optional) transaction amount in usdc, if not specified then approve max amount
 */
export async function approve(to: keyof AlpineContracts, amountUSDC?: string): Promise<DryRunReceipt | FullTxReceipt> {
  const contracts = getContracts() as AlpineContracts;
  const { usdc, router } = contracts;

  const amount = amountUSDC ? _addDecimals(amountUSDC, 6) : MAX_APPROVAL_AMOUNT;
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC || _removeDecimals(MAX_APPROVAL_AMOUNT, 6),
    tokenAmount: amountUSDC || _removeDecimals(MAX_APPROVAL_AMOUNT, 6),
  };
  const approveArgs = [to === "alpLarge" ? router.address : contracts[to].address, amount];
  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(usdc, "approve", approveArgs, true)) as GasInfo;
    return { ...basicInfo, ...dryRunInfo };
  } else {
    const receipt = (await blockchainCall(usdc, "approve", approveArgs, false)) as SmallTxReceipt;
    return {
      ...basicInfo,
      ...receipt,
    };
  }
}

/**
 * Transfer usdc from user's wallet to another wallet
 * @param to receipient address
 * @param amountUSDC amount in usdc
 */
export async function transfer(to: string, amountUSDC: string) {
  const { usdc } = getContracts();

  const amount = _addDecimals(amountUSDC, 6);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }

  const balance = await usdc.balanceOf(await SIGNER.getAddress());

  // balance at wallet < amount requested to transfer
  if (balance.lt(amount)) {
    throw new Error("Insufficient allowance");
  }

  return blockchainCall(usdc, "transfer", [to, amount]);
}

export async function mintUSDC(to: string, amountUSDC: number) {
  const { usdc } = getContracts();
  const amount = _addDecimals(amountUSDC.toString(), 6);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  return blockchainCall(usdc, "mint", [to, amount]);
}
