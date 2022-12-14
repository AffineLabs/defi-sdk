import { ethers } from "ethers";
import { GasInfo, SmallTxReceipt } from "..";
import { _addDecimals, _removeDecimals, blockchainCall, getMaticPrice } from "./AlpineDeFiSDK";
import { getContracts, getEthContracts, getPolygonContracts, PROVIDER, SIGNER, SIMULATE, userAddress } from "./cache";
import { MAX_UINT } from "./constants";

import { AlpineProduct, DryRunReceipt, FullTxReceipt, TokenInfo } from "./types";

export async function buyProduct(product: AlpineProduct, amount: number, slippageBps = 500) {
  if (product === "alpSave") {
    return buyUsdcShares(amount);
  } else if (product === "alpLarge") {
    return buyBtCEthShares(amount, slippageBps);
  } else {
    return buyEthUsdcShares(amount);
  }
}

export async function sellProduct(product: AlpineProduct, amount: number) {
  if (product === "alpSave") {
    return sellUsdcShares(amount);
  } else if (product === "alpLarge") {
    return sellBtCEthShares(amount);
  } else {
    return sellEthUsdcShares(amount);
  }
}

async function buyEthUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { ethEarn } = getEthContracts();
  const userAddress = await SIGNER.getAddress();
  const amount = _addDecimals(amountUSDC.toString(), 6);

  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await ethEarn.convertToShares(amount), 18),
  };

  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(ethEarn, "deposit", [amount, userAddress], true)) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(ethEarn, "deposit", [amount, userAddress], false)) as SmallTxReceipt;
    return { ...basicInfo, ...receipt };
  }
}

/**
 * Deposit usdc to a vault, and get alp tokens in return
 * @param {String} amountUSDC amount in usdc
 */
export async function buyUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { usdc, alpSave } = getPolygonContracts();
  const userAddress = await SIGNER.getAddress();
  const amount = _addDecimals(amountUSDC.toString(), 6);
  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  const walletBalance = await usdc.balanceOf(userAddress);
  if (walletBalance.lt(amount)) {
    throw new Error("Insufficient balance");
  }

  // check if user has sufficient allowance
  const allowance = await usdc.allowance(userAddress, alpSave.address);
  if (allowance.lt(amount)) throw new Error("Insufficient allowance");

  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await alpSave.convertToShares(amount), 16),
  };

  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(alpSave, "deposit", [amount, userAddress], true)) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(alpSave, "deposit", [amount, userAddress], false)) as SmallTxReceipt;
    return { ...basicInfo, ...receipt };
  }
}

export async function buyBtCEthShares(amountUSDC: number, slippageBps: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { alpLarge, router, usdc } = getPolygonContracts();
  const amount = _addDecimals(amountUSDC.toString(), 6);
  const expectedShares = await sharesFromTokens("alpLarge", amount);
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(expectedShares, 18),
  };

  const data: string[] = [];
  data.push(router.interface.encodeFunctionData("approve", [usdc.address, alpLarge.address, MAX_UINT]));
  data.push(
    router.interface.encodeFunctionData("depositToVault", [
      alpLarge.address,
      userAddress,
      amount,
      expectedShares.mul(10_000 - slippageBps).div(10_000),
    ]),
  );

  const beforeBal: ethers.BigNumber = await alpLarge.balanceOf(userAddress);
  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(router, "multicall", [data], true)) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(router, "multicall", [data], false)) as SmallTxReceipt;
    const afterBal: ethers.BigNumber = await alpLarge.balanceOf(userAddress);
    const amountChanged = afterBal.sub(beforeBal);

    const res = { ...basicInfo, ...receipt, tokenAmount: _removeDecimals(amountChanged, 18) };
    return res;
  }
}

/**
 * sell alp token and withdraw usdc from a vault (to user's wallet by default)
 * @param amountUSDC amount in usdc to sell
 */
export async function sellUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { alpSave } = getPolygonContracts();
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWithdraw = _addDecimals(amountUSDC.toString(), 6);
  const withdrawFeeBps: ethers.BigNumber = await alpSave.withdrawalFee();
  const alpFee = usdcToWithdraw.mul(withdrawFeeBps).div(10_000);
  const alpFeePercent = (withdrawFeeBps.toNumber() / 100).toString();

  const basicInfo = {
    alpFee: _removeDecimals(alpFee, 6).toString(),
    alpFeePercent,
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await alpSave.convertToShares(usdcToWithdraw), 16),
  };
  console.log({ basicInfo });

  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(
      alpSave,
      "withdraw",
      [usdcToWithdraw, userAddress, userAddress],
      true,
    )) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(
      alpSave,
      "withdraw",
      [usdcToWithdraw, userAddress, userAddress],
      false,
    )) as SmallTxReceipt;
    return { ...basicInfo, ...receipt };
  }
}

/**
 * Sell from eth vault shares.
 * @param amountUSDC Smount in usdc to sell
 */
export async function sellEthUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { ethEarn } = getEthContracts();
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWithdraw = _addDecimals(amountUSDC.toString(), 6);
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await ethEarn.convertToShares(usdcToWithdraw), await ethEarn.decimals()),
  };
  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(
      ethEarn,
      "withdraw",
      [usdcToWithdraw, userAddress, userAddress],
      true,
    )) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(
      ethEarn,
      "withdraw",
      [usdcToWithdraw, userAddress, userAddress],
      false,
    )) as SmallTxReceipt;
    return { ...basicInfo, ...receipt };
  }
}

export async function sellBtCEthShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { alpLarge } = getPolygonContracts();
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWithdraw = _addDecimals(amountUSDC.toString(), 6);
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await sharesFromTokens("alpLarge", usdcToWithdraw), 18),
  };

  if (SIMULATE) {
    const gasEstimate = ethers.BigNumber.from(100e3);
    const gasPrice = await PROVIDER.getGasPrice();
    const txnCost = ethers.utils.formatEther(gasEstimate.mul(gasPrice));
    const maticPrice = await getMaticPrice();
    const dryRunInfo: GasInfo = {
      txnCost,
      txnCostUSD: (Number(txnCost) * maticPrice).toString(),
    };
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    // We only support redeem via the sdk
    // Get the share amount we want to burn
    const shares = await _convertToShares(usdcToWithdraw);
    const receipt = (await blockchainCall(
      alpLarge,
      "redeem(uint256,address,address,uint256)",
      [shares, userAddress, userAddress, usdcToWithdraw.mul(95).div(100)],
      false,
    )) as SmallTxReceipt;
    const res = { ...basicInfo, ...receipt, tokenAmount: _removeDecimals(shares, 18) };
    return res;
  }
}

// Convert usdc to a share amount to be passed to `redeem` (for alpLarge only)
async function _convertToShares(amountUSDC: ethers.BigNumber) {
  const { alpLarge } = getPolygonContracts();
  const userShares = await alpLarge.balanceOf(userAddress);
  const shares = await sharesFromTokens("alpLarge", amountUSDC);
  return shares.gt(userShares) ? userShares : shares;
}

export async function getTokenInfo(product: AlpineProduct | "usdc"): Promise<TokenInfo> {
  const user = userAddress;
  if (product === "alpSave" || product === "alpLarge") {
    const contract = getPolygonContracts()[product];
    const amount: ethers.BigNumber = await contract.balanceOf(user);
    // price and number of decimals of each unit of the contract

    const { num, decimals } = await contract.detailedPrice();
    console.log({ num, decimals });
    const amount_decimals = ethers.BigNumber.from(await contract.decimals());
    const equity = amount.mul(num);
    return {
      amount: _removeDecimals(amount, amount_decimals),
      price: _removeDecimals(num, decimals),
      equity: _removeDecimals(equity, amount_decimals.add(decimals)),
    };
  }
  // usdc
  const { usdc } = getContracts();
  const amount = await usdc.balanceOf(user);
  return {
    amount: _removeDecimals(amount, 6),
    price: "1",
    equity: _removeDecimals(amount, 6),
  };
}

export async function tokensFromShares(product: AlpineProduct, shareAmount: ethers.BigNumber) {
  if (product === "alpSave") {
    const { alpSave } = getPolygonContracts();
    const tokens = await alpSave.convertToAssets(shareAmount);
    return tokens;
  } else {
    // alpLarge
    const { alpLarge } = getPolygonContracts();
    const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
    const totalSupply: ethers.BigNumber = await alpLarge.totalSupply();

    if (totalDollars.eq(0)) return shareAmount.mul(100); // $100 usdc per share to start with

    // totalDollars / totalShares * numShares
    const dollars = totalDollars.mul(shareAmount).div(totalSupply);
    // The token we're talking about is USDC here, which only has 6 decimals.
    return dollars.div(1e2);
  }
}

export async function sharesFromTokens(product: AlpineProduct, tokenAmount: ethers.BigNumber) {
  if (product === "alpSave") {
    const { alpSave } = getPolygonContracts();
    const shares = await alpSave.convertToShares(tokenAmount);
    return shares;
  }

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = getPolygonContracts();
    // TODO: let the contract take care of pricing
    const totalDollars = await alpLarge.valueOfVault();
    console.log({ totalDollars });

    // $100 usdc per share to start with => usdc * alpLarge / usdc
    if (totalDollars.eq(0)) return tokenAmount.mul(ethers.BigNumber.from(10).pow(18)).div(100e6);
    // totalSupply / totalDollars * dollars
    // dollars given by btc/eth vault actually have 8 decimals
    const totalSupply = await alpLarge.totalSupply();
    // convert tokenAmount (a USDC amount with 6 decimals) to dollar amount (8 decimals)
    const shares = totalSupply.mul(tokenAmount.mul(1e2)).div(totalDollars);
    return shares;
  }
  return ethers.BigNumber.from(0);
}
