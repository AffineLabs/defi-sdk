import { ethers } from "ethers";

import { DryRunReceipt, TxMetaData, SmallTxReceipt } from "./types";
import { TransactionResponse } from "@ethersproject/abstract-provider";

import { CONTRACTS, SIGNER, BICONOMY, SIMULATE, PROVIDER, userAddress } from "./cache";
import { AlpineProduct } from "./types";
import { getSignature, sendBiconomy, sendToForwarder } from "./biconomy";

/**
 * Get the current best estimate for gas price
 * @returns the best estimate for gas price in eth
 */
export async function getGasPrice(): Promise<string> {
  const gas = await PROVIDER.getGasPrice(); // gas price in wei
  // return gas price in ether
  return ethers.utils.formatEther(gas);
}

export async function getMaticBalance() {
  return ethers.utils.formatEther(await PROVIDER.getBalance(userAddress));
}

/**
 * Converts a unit amount to equivalent micro unit amount
 * @param {string} amount an amount in unit eg. usdc.
 * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
 */
export function _addDecimals(amount: string): ethers.BigNumber {
  return ethers.utils.parseUnits(amount, 6);
}

/**
 * converts a micro unit amount to equivalent unit amount
 * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
 * @returns {string} equivalent amount in unit.
 */
export function _removeDecimals(amount: ethers.BigNumber): string {
  return ethers.utils.formatUnits(amount, 6);
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
  options?: TxMetaData,
): Promise<void | SmallTxReceipt | DryRunReceipt> {
  const signer = SIGNER;
  const biconomy = BICONOMY;

  contract = contract.connect(signer);

  if (biconomy && contract.address !== CONTRACTS.usdc.address) {
    console.log({ method }, args);
    const { signature, request } = await getSignature(contract, signer, method, args);
    console.log({ signature, request });
    await sendToForwarder([signature], [request]);
    return;
  }

  if (biconomy && contract.address == CONTRACTS.usdc.address) {
    await sendBiconomy(contract, signer, method, args);
    return;
  }

  // regular (non-meta) tx
  if (SIMULATE) {
    const [gasEstimate, gasPrice] = await Promise.all([
      contract.estimateGas[method].apply(null, args),
      PROVIDER.getGasPrice(),
    ]);

    console.log(`gasEstimate: ${gasEstimate.toString()} and gasPrice: ${gasPrice.toString()}`);

    // cost is gas * gasPrice
    const cost = gasEstimate.mul(gasPrice);
    const txnCost = ethers.utils.formatEther(cost);
    // TODO: consider getting matic price from some api
    const maticPrice = 1.25;
    const txnCostUSD = (Number(txnCost) * maticPrice).toString();

    let alpFee = ethers.BigNumber.from(0);
    let alpFeePercent = "0";
    if (method == "withdraw" && contract.address === CONTRACTS.alpSave.address) {
      const usdcAmount: ethers.BigNumber = args[0];
      const withdrawFeeBps: ethers.BigNumber = await CONTRACTS.alpSave.withdrawalFee();
      alpFee = usdcAmount.mul(withdrawFeeBps).div(10_000);
      alpFeePercent = (withdrawFeeBps.toNumber() / 100).toString();
    }
    return {
      txnCost,
      txnCostUSD,
      alpFeePercent,
      alpFee: _removeDecimals(alpFee).toString(),
      dollarAmount: options?.dollarAmount || "0",
      tokenAmount: options?.tokenAmount || "0",
    };
  }

  const tx: TransactionResponse = await contract[method].apply(null, args);
  const receipt = await tx.wait();
  return {
    blockNumber: receipt.blockNumber.toString(),
    txnHash: receipt.transactionHash,
  };
}

/**
 * approve outgoing transaction with another wallet or smart contract for
 * the specified amount
 * @param to the receipient contract
 * @param amountUSDC transaction amount in usdc
 */
export async function approve(to: AlpineProduct, amountUSDC: string) {
  // convert to micro usdc
  const amount = _addDecimals(amountUSDC);
  return blockchainCall(CONTRACTS.usdc, "approve", [CONTRACTS[to].address, amount]);
}

/**
 * transfer usdc from user's wallet to another wallet
 * @param {String} to receipient address
 * @param {String} amountUSDC amount in usdc
 * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
 */
export async function transfer(to: string, amountUSDC: string) {
  const { usdc } = CONTRACTS;

  const amount = _addDecimals(amountUSDC);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }

  const balance = await usdc.balanceOf(await SIGNER.getAddress());

  // balance at wallet < amount requested to transfer
  if (balance.lt(amount)) {
    throw new Error(
      "Insuffient balance at user's wallet. " +
        `Balance: ${_removeDecimals(balance)}, ` +
        `Requested to transfer: ${_removeDecimals(amount)}`,
    );
  }

  return blockchainCall(usdc, "transfer", [to, amount]);
}

export async function mintUSDC(to: string, amountUSDC: number) {
  const { usdc } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  return blockchainCall(usdc, "mint", [to, amount]);
}
