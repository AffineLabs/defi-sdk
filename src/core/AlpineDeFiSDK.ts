import axios from "axios";
import { ethers } from "ethers";

import {
  TxnReceipt,
  PolygonScanAPIResponse,
  DryRunReceipt,
  TxMetaData,
  SmallTxReceipt,
} from "./types";
import {
  TransactionResponse,
  TransactionReceipt,
} from "@ethersproject/abstract-provider";

import { CONTRACTS, SIGNER, BICONOMY, SIMULATE } from "./cache";
import { AlpineProduct, sharesFromTokens } from "./product";
import { getSignature, sendBiconomy, sendToForwarder } from "./biconomy";

/**
 * Get the current best estimate for gas price
 * @returns the best estimate for gas price in eth
 */
export async function getGasPrice(): Promise<string> {
  const gas = await SIGNER.getGasPrice(); // gas price in wei
  // return gas price in ether
  return ethers.utils.formatEther(gas);
}

export async function getMaticBalance() {
  return ethers.utils.formatEther(await SIGNER.getBalance());
}
/**
 * Get current usdc price of an alpine token. If there's 0 token in circulation
 * returns null.
 * @param contract an alpine contract
 * @returns current token price
 */
export async function getTokenPrice(
  product: AlpineProduct
): Promise<String | null> {
  const contract = CONTRACTS[product];

  // total value in micro usdc locked in the contract
  const tvlUSDC = await contract.globalTVL();
  // number of circulating micro tokens
  const numTokens = await contract.totalSupply();
  if (numTokens.isZero()) {
    return null;
  } else {
    const price = tvlUSDC.div(numTokens);
    return price.toString();
  }
}

/**
 * get transaction history of the user with alpine smart contracts
 * @param {string} userAddress The user's address
 * @param {string} polygonscanApiKey
 * @param {Number} page the page number
 * @param {Number} offset number of transanctions in the page
 * @param {String} sort `asc` or `desc`; sorts the transactions in ascending or decensing order
 *                      default is `desc`.
 * @returns An array of user transaction receipts
 **/
export async function getTransactionHistory(
  userAddress: string,
  polygonscanApiKey: string,
  page: number,
  offset: number,
  sort: string = "desc"
): Promise<Array<TxnReceipt>> {
  const polygonscanUrl =
    "https://api-testnet.polygonscan.com/api?module=account&action=txlist" +
    `&address=${userAddress}` +
    "&startblock=0&endblock=99999999" +
    `&page=${page}&offset=${offset}&sort=${sort}` +
    `&apikey=${polygonscanApiKey}`;

  let data = [] as Array<PolygonScanAPIResponse>;
  data = (await axios.get(polygonscanUrl)).data.result;
  const parsedTxHistory: Array<TxnReceipt> = [];

  for (const tx of data) {
    const ticker = await _getContractTicker(tx.to || "");
    // filter by outgoing transactions that were sent to alpine contracts
    if (ticker === "unknown") continue;

    // fake TransactionResponse constructed from polygonscan data
    const fakeTx = {
      to: tx.to,
      data: tx.input,
      timestamp: Number(tx.timeStamp),
      hash: tx.hash,
      gasPrice: ethers.BigNumber.from(tx.gasPrice),
    } as TransactionResponse;

    const fakeReceipt = {
      gasUsed: tx.gasUsed,
      blockNumber: Number(tx.blockNumber),
    } as unknown as TransactionReceipt;

    const parsedTx = await _parseTransaction(fakeTx, fakeReceipt);
    parsedTxHistory.push(parsedTx);
  }

  return parsedTxHistory;
}

/**
 * Find ticker for alpine and usdc contract addresses
 * @param {String} address
 * @returns contract ticker for alpine and usdc
 * contracts, and unknown otherwise
 */
async function _getContractTicker(address: string): Promise<string> {
  switch (address.toLowerCase()) {
    case CONTRACTS.alpSave.address.toLowerCase():
      return "alpSave";
    case CONTRACTS.usdc.address.toLowerCase():
      return "usdc";
    default:
      return "unknown";
  }
}

/**
 * parse blockchain response for a transaction
 * @param {TransactionResponse} tx transaction response
 * @param {TransactionReceipt} receipt transaction block
 * parse a transaction if its sent to an alpine contract
 * @returns the parsed receipt of the transaction
 */
async function _parseTransaction(
  tx: TransactionResponse,
  receipt: TransactionReceipt
): Promise<TxnReceipt> {
  const ticker = (await _getContractTicker(tx.to || "")) as AlpineProduct;

  const contract = CONTRACTS[ticker];
  const { data, value } = tx;
  const txDescription = contract.interface.parseTransaction({ data, value });
  const { name } = txDescription;

  // Deposit uses "amountToken", withdraw uses "shares", while transfer/approve use "amount"
  let amount =
    txDescription.args.amountToken ||
    txDescription.args.amount ||
    txDescription.args.shares;
  amount = ethers.BigNumber.from(amount);
  // for withdraw method of the smart contract, amount is in tokens, so
  // convert that to usdc
  if (name === "withdraw") {
    const tokenPrice = ethers.BigNumber.from(await getTokenPrice(ticker));
    amount = amount.mul(tokenPrice);
  }
  // convert smart contract method names to app's method names
  const methodDict: { [key: string]: string | undefined } = {
    deposit: "buy",
    withdraw: "sell",
    transfer: "transfer",
    approve: "approve",
  };

  const txnCost = ethers.BigNumber.from(tx.gasPrice || 0).mul(receipt.gasUsed);
  return {
    method: methodDict[txDescription.name] || "",
    amount: String(ethers.utils.formatUnits(amount, 6)),
    timestamp: tx.timestamp || 0,
    gasPrice: String(ethers.utils.formatEther(tx.gasPrice || 0)),
    txnCost: txnCost.toString(),
    contractAddress: tx.to || "",
    txnHash: tx.hash,
    blockNumber: receipt.blockNumber,
    status: true,
    ticker: await _getContractTicker(tx.to || ""),
  };
}

/**
 * Converts a unit amount to equivalent micro unit amount
 * @param {string} amount an amount in unit eg. usdc.
 * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
 */
function _addDecimals(amount: string): ethers.BigNumber {
  return ethers.utils.parseUnits(amount, 6);
}

/**
 * converts a micro unit amount to equivalent unit amount
 * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
 * @returns {string} equivalent amount in unit.
 */
function _removeDecimals(amount: ethers.BigNumber): string {
  return ethers.utils.formatUnits(amount, 6);
}

/**
 * Call a smart contract method with arguments
 * @param {ethers.Contract} contract smart contract
 * @param {String} method the method name
 * @param {Array} args the arguments to the method
 * @returns a transaction receipt from the blockchain
 */
async function _blockchainCall(
  contract: ethers.Contract,
  method: string,
  args: Array<any>,
  options?: TxMetaData
): Promise<void | SmallTxReceipt | DryRunReceipt> {
  const signer = SIGNER;
  const biconomy = BICONOMY;

  contract = contract.connect(signer);

  if (biconomy && contract.address !== CONTRACTS.usdc.address) {
    console.log({ method }, args);
    const { signature, request } = await getSignature(
      contract,
      signer,
      method,
      args
    );
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
      SIGNER.getGasPrice(),
    ]);

    console.log(
      `gasEstimate: ${gasEstimate.toString()} and gasPrice: ${gasPrice.toString()}`
    );

    // cost is gas * gasPrice
    const cost = gasEstimate.mul(gasPrice);
    const txnCost = ethers.utils.formatEther(cost);
    // TODO: consider getting matic price from some api
    const maticPrice = 1.25;
    const txnCostUSD = (Number(txnCost) * maticPrice).toString();

    let alpFee = ethers.BigNumber.from(0);
    let alpFeePercent: string = "0";
    if (
      method == "withdraw" &&
      contract.address === CONTRACTS.alpSave.address
    ) {
      const usdcAmount: ethers.BigNumber = args[0];
      const withdrawFeeBps: ethers.BigNumber =
        await CONTRACTS.alpSave.withdrawalFee();
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
  return _blockchainCall(CONTRACTS.usdc, "approve", [
    CONTRACTS[to].address,
    amount,
  ]);
}

/**
 * Deposit usdc to a vault, and get alp tokens in return
 * @param {String} amountUSDC amount in usdc
 * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
 */
export async function buyUsdcShares(amountUSDC: number) {
  const contracts = CONTRACTS;
  const { usdc, alpSave } = contracts;
  const userAddress = await SIGNER.getAddress();
  const amount = _addDecimals(amountUSDC.toString());
  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  const walletBalance = await usdc.balanceOf(userAddress);
  if (walletBalance.lt(amount)) {
    throw new Error(
      `Insuffient balance at user wallet. Balance: ${_removeDecimals(
        walletBalance
      )}, Requested to buy: ${amountUSDC}`
    );
  }

  // check if user has sufficient allowance
  const allowance = await usdc.allowance(userAddress, alpSave.address);

  // allowance < amount
  if (allowance.lt(amount)) {
    throw new Error(
      `Insufficient allowance. Allowance: ${_removeDecimals(
        allowance
      )} USDC, Required: ${amountUSDC} USDC. ` +
        "Call approve() to increase the allowance."
    );
  }
  return _blockchainCall(alpSave, "deposit", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: (await sharesFromTokens("alpSave", amount)).toString(),
  });
}

/**
 * sell alp token and withdraw usdc from a vault (to user's wallet by default)
 * @param amountUSDC amount in usdc to sell
 */
export async function sellUsdcShares(amountUSDC: number) {
  const amount = _addDecimals(amountUSDC.toString());
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWihdraw = ethers.utils.parseUnits(amountUSDC.toString(), 6);
  return _blockchainCall(CONTRACTS.alpSave, "withdraw", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: (await sharesFromTokens("alpSave", usdcToWihdraw)).toString(),
  });
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
        `Requested to transfer: ${_removeDecimals(amount)}`
    );
  }

  return _blockchainCall(usdc, "transfer", [to, amount]);
}

export async function mintUSDC(to: string, amountUSDC: number) {
  const { usdc } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  return _blockchainCall(usdc, "mint", [to, amount]);
}

export async function buyBtCEthShares(amountUSDC: number) {
  const { alpLarge } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());
  return _blockchainCall(alpLarge, "deposit", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: (await sharesFromTokens("alpLarge", amount)).toString(),
  });
}

export async function sellBtCEthShares(amountUSDC: number) {
  const { alpLarge } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWihdraw = ethers.utils.parseUnits(amountUSDC.toString(), 6);
  return _blockchainCall(alpLarge, "withdraw", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: (await sharesFromTokens("alpLarge", usdcToWihdraw)).toString(),
  });
}
