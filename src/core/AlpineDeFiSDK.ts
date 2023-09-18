import { BigNumber, ethers, PayableOverrides } from "ethers";

import { AlpineProduct, DryRunReceipt, FullTxReceipt, SmallTxReceipt } from "./types";
import { TransactionResponse } from "@ethersproject/abstract-provider";

import { SIGNER, BICONOMY, PROVIDER, userAddress, SIMULATE, getContracts } from "./cache";
import { AlpineContracts } from "./types";
import { getSignature, sendBiconomy, sendToForwarder } from "./biconomy";
import { GasInfo } from "..";
import { MAX_APPROVAL_AMOUNT } from "./constants";
import { StrategyVault } from "../typechain";

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
  // we will make it integer at first just to remove the decimal part
  // then we will parse it to ethers.BigNumber
  // see - https://docs.ethers.org/v5/troubleshooting/errors/#help-NUMERIC_FAULT-underflow
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
// export async function getMaticPrice(): Promise<number> {
//   // const apiAddress = "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd";
//   // const { data: maticData } = await axios.get(apiAddress);
//   // const maticPrices = maticData["matic-network"];
//   // const usdMaticPrice: number = maticPrices["usd"];
//   return 1.077;
// }

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
  value?: ethers.BigNumberish,
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
    return { blockNumber: "", txnHash: "", txnCost: "", gasPrice: "" };
  }

  if (biconomy && contract.address == usdc.address) {
    await sendBiconomy(contract, signer, method, args);
    return { blockNumber: "", txnHash: "", txnCost: "", gasPrice: "" };
  }

  // regular (non-meta) tx

  let overrides: PayableOverrides = { value };
  args.push(overrides);
  const gasLimit = (await contract.estimateGas[method].apply(null, args)).mul(12).div(10);
  overrides = { value, gasLimit };
  args[args.length - 1] = overrides;

  if (simulate) {
    const [gasEstimate, gasPrice] = await Promise.all([
      contract.estimateGas[method].apply(null, args),
      PROVIDER.getGasPrice(),
    ]);

    console.log(`gasEstimate: ${gasEstimate.toString()} and gasPrice: ${gasPrice.toString()}`);

    // cost is gas * gasPrice
    const cost = gasEstimate.mul(gasPrice);
    const txnCost = ethers.utils.formatEther(cost);

    return { txnCost, gasPrice: ethers.utils.formatEther(gasPrice) };
  }

  const tx: TransactionResponse = await contract[method].apply(null, args);
  const receipt = await tx.wait();

  const cost = receipt.gasUsed.mul(receipt.effectiveGasPrice);
  const txnCost = ethers.utils.formatEther(cost);
  return {
    blockNumber: receipt.blockNumber.toString(),
    txnHash: receipt.transactionHash,
    txnCost,
    gasPrice: ethers.utils.formatEther(receipt.effectiveGasPrice),
  };
}

/**
 * check if the user has approved amount of usdc/ eth (Asset) to the contract.
 * DEFAULT amount is: MAX_APPROVAL_AMOUNT/2
 * @returns boolean
 */
export async function isApproved(product: AlpineProduct, amount?: number): Promise<boolean> {
  const {
    usdc,
    alpSave,
    router,
    ethEarn,
    ssvEthUSDEarn,
    degen,
    polygonDegen,
    weth,
    polygonLeverage,
    baseUsdEarn,
    ethWethEarn,
    baseLeverage,
    ethLeverage,
  } = getContracts() as AlpineContracts;

  if (["ethWethEarn", "baseLeverage", "ethLeverage"].includes(product)) return true;

  const asset = product == "polygonLeverage" ? weth : usdc;

  const productToSpender = {
    alpSave,
    alpLarge: router,
    ethEarn,
    ssvEthUSDEarn,
    degen,
    polygonDegen,
    polygonLeverage,
    baseUsdEarn,

    // No approvals needed for these
    ethWethEarn,
    ethLeverage,
    baseLeverage,
  };

  if (!productToSpender[product]) {
    throw new Error("Product not found");
  }

  const allowance = await asset.allowance(userAddress, productToSpender[product]?.address);
  /**
   * If the 'amount' is not specified then we will check the max amount, but
   * we are dividing the max approval amount by 2 because
   * user might have already deposited some amount after approving the max amount
   * and we found out 'allowance' decreases by the amount deposited for 'ethEarn' only.
   * Thats why we are dividing the max approval amount by 2 and comparing it with the allowance.
   */
  const maxApprovalAmount = amount
    ? _addDecimals(amount.toString(), await asset.decimals())
    : MAX_APPROVAL_AMOUNT.div(2);
  return allowance.gte(maxApprovalAmount);
}

/**
 * approve outgoing transaction with another wallet or smart contract for
 * the specified amount
 * @param to the receipient contract
 * @param amountUSDC (optional) transaction amount in usdc, if not specified then approve max amount
 */
export async function approve(product: AlpineProduct, amountAsset?: string): Promise<DryRunReceipt | FullTxReceipt> {
  const contracts = getContracts() as AlpineContracts;
  const { usdc, router, weth } = contracts;

  let asset = usdc;
  if (["ethWethEarn", "ethLeverage", "polygonLeverage"].includes(product)) {
    asset = weth;
  }
  const decimals = await asset.decimals();

  const amount = amountAsset ? _addDecimals(amountAsset, decimals) : MAX_APPROVAL_AMOUNT;
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountAsset || _removeDecimals(MAX_APPROVAL_AMOUNT, decimals),
    tokenAmount: amountAsset || _removeDecimals(MAX_APPROVAL_AMOUNT, decimals),
  };
  const approveArgs = [product === "alpLarge" ? router.address : contracts[product]?.address, amount];
  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(asset, "approve", approveArgs, true)) as GasInfo;
    return { ...basicInfo, ...dryRunInfo };
  } else {
    const receipt = (await blockchainCall(asset, "approve", approveArgs, false)) as SmallTxReceipt;
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

export async function mintUSDC(to: string, amountUSDC: number | BigNumber) {
  const { usdc } = getContracts();
  const amount = _addDecimals(amountUSDC.toString(), 6);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  return blockchainCall(usdc, "mint", [to, amount]);
}

// AffinePass

/**
 * Mint NFTs for whitelisted users.
 * @param quantity how many NFTs to mint
 * @param proof a merkle proof generated using the Whitelist merkle tree
 */
export async function mintWhitelist(quantity: number, proof: string[]) {
  const contracts = getContracts() as AlpineContracts;
  const { affineGenesis } = contracts;
  if (!affineGenesis) throw new Error("AffineGenesis contract not found");
  return blockchainCall(affineGenesis, "mintWhitelist", [quantity, proof]);
}

/**
 * Mint NFTs during public sale.
 * @param quantity how many NFTs to mint
 */
export async function mint(quantity: number) {
  const contracts = getContracts() as AlpineContracts;
  const { affineGenesis } = contracts;
  if (!affineGenesis) throw new Error("AffineGenesis contract not found");
  return blockchainCall(affineGenesis, "mint", [quantity]);
}

/**
 * check if the user is whitelisted.
 * @returns boolean
 */
export async function isWhitelisted(address: string, proof: string[]): Promise<boolean> {
  const contracts = getContracts() as AlpineContracts;
  const { affineGenesis } = contracts;
  return affineGenesis?.isWhitelisted(address, proof) ?? false;
}

/**
 * check affine pass whitelist mint is live.
 * @returns boolean
 */
export async function whitelistSaleIsActive(): Promise<boolean> {
  const contracts = getContracts() as AlpineContracts;
  const { affineGenesis } = contracts;
  return affineGenesis?.whitelistSaleIsActive() ?? false;
}

/**
 * check affine pass public mint is live.
 * @returns boolean
 */
export async function saleIsActive(): Promise<boolean> {
  const contracts = getContracts() as AlpineContracts;
  const { affineGenesis } = contracts;
  return affineGenesis?.saleIsActive() ?? false;
}

/**
 * This function will return the tvl cap of the product,
 * but some of the products don't have tvl cap so it will return error in that case.
 * So, make sure to handle the error or use try catch block.
 * @param product {AlpineProduct} the product name
 * @returns {Promise<string>} the tvl cap of the product in unit
 */
export async function getTVLCap(product: AlpineProduct): Promise<string> {
  const contracts = getContracts() as AlpineContracts;
  const _asset = ["ethLeverage", "polygonLeverage", "ethWethEarn"].includes(product) ? contracts.weth : contracts.usdc;
  const _contract = contracts[product] as StrategyVault;

  const tvlCap = await _contract.tvlCap();
  const decimals = await _asset.decimals();
  return _removeDecimals(tvlCap, decimals);
}
