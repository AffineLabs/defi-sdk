import { ethers } from "ethers";
import { GasInfo, SmallTxReceipt } from "..";
import { _addDecimals, _removeDecimals, blockchainCall, getMaticPrice } from "./AlpineDeFiSDK";
import { getSignature } from "./biconomy";
import { CONTRACTS, PROVIDER, SIGNER, SIMULATE, userAddress } from "./cache";

import { AlpineProduct, DryRunReceipt, FullTxReceipt, TokenInfo } from "./types";

export async function buyProduct(product: AlpineProduct, amount: number) {
  if (product === "alpSave") {
    return buyUsdcShares(amount);
  } else {
    return buyBtCEthShares(amount);
  }
}

export async function sellProduct(product: AlpineProduct, amount: number) {
  if (product === "alpSave") {
    return sellUsdcShares(amount);
  }
  if (product === "alpLarge") {
    return sellBtCEthShares(amount);
  }
}

/**
 * Deposit usdc to a vault, and get alp tokens in return
 * @param {String} amountUSDC amount in usdc
 */
export async function buyUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
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
      `Insuffient balance at user wallet. Balance: ${_removeDecimals(walletBalance)}, Requested to buy: ${amountUSDC}`,
    );
  }

  // check if user has sufficient allowance
  const allowance = await usdc.allowance(userAddress, alpSave.address);

  // allowance < amount
  if (allowance.lt(amount)) {
    throw new Error(
      `Insufficient allowance. Allowance: ${_removeDecimals(allowance)} USDC, Required: ${amountUSDC} USDC. ` +
        "Call approve() to increase the allowance.",
    );
  }

  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await alpSave.convertToShares(amount)),
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

/**
 * sell alp token and withdraw usdc from a vault (to user's wallet by default)
 * @param amountUSDC amount in usdc to sell
 */
export async function sellUsdcShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const userAddress = await SIGNER.getAddress();
  const contracts = CONTRACTS;
  const { alpSave } = contracts;
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWithdraw = _addDecimals(amountUSDC.toString());
  const withdrawFeeBps: ethers.BigNumber = await alpSave.withdrawalFee();
  const alpFee = usdcToWithdraw.mul(withdrawFeeBps).div(10_000);
  const alpFeePercent = (withdrawFeeBps.toNumber() / 100).toString();

  const basicInfo = {
    alpFee: _removeDecimals(alpFee).toString(),
    alpFeePercent,
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await alpSave.convertToShares(usdcToWithdraw)),
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

export async function buyBtCEthShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { alpLarge } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: ethers.utils.formatUnits(await sharesFromTokens("alpLarge", amount), 18),
  };

  const beforeBal: ethers.BigNumber = await alpLarge.balanceOf(userAddress);
  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(
      CONTRACTS.router,
      "depositToVault",
      [CONTRACTS.alpLarge.address, userAddress, amount, 0],
      true,
    )) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(
      CONTRACTS.router,
      "depositToVault",
      [CONTRACTS.alpLarge.address, userAddress, amount, 0],
      false,
    )) as SmallTxReceipt;
    const afterBal: ethers.BigNumber = await alpLarge.balanceOf(userAddress);
    const amountChanged = afterBal.sub(beforeBal);

    const res = { ...basicInfo, ...receipt, tokenAmount: ethers.utils.formatUnits(amountChanged, 18) };
    return res;
  }
}

export async function sellBtCEthShares(amountUSDC: number): Promise<DryRunReceipt | FullTxReceipt> {
  const { alpLarge } = CONTRACTS;
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWithdraw = _addDecimals(amountUSDC.toString());
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: ethers.utils.formatUnits(await sharesFromTokens("alpLarge", usdcToWithdraw), 18),
  };

  const beforeBal = await alpLarge.balanceOf(userAddress);
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
  }

  let receipt: SmallTxReceipt;
  // If the user hasn't given max approval, give max approval
  const routerAllowance = await alpLarge.allowance(userAddress, CONTRACTS.router.address);
  if (routerAllowance.lt(ethers.BigNumber.from(2).pow(256).sub(1))) {
    // Get alpLarge approval signature
    const approvalSig = await getSignature(alpLarge, SIGNER, "approve", [
      CONTRACTS.router.address,
      ethers.BigNumber.from(2).pow(256).sub(1),
    ]);
    console.log({ approvalSig });

    // Get router withdraw sig
    const withdrawSig = await getSignature(
      CONTRACTS.router,
      SIGNER,
      "withdraw",
      [CONTRACTS.alpLarge.address, userAddress, usdcToWithdraw, ethers.BigNumber.from(2).pow(256).sub(1)],
      approvalSig.request.nonce + 1,
    );

    // call executeBatch
    const signatures = [approvalSig.signature, withdrawSig.signature];
    receipt = (await blockchainCall(
      CONTRACTS.forwarder,
      "executeBatch",
      [
        [approvalSig.request, withdrawSig.request].map(req => [
          req.from,
          req.to,
          req.value,
          req.gas,
          req.nonce,
          req.data,
        ]),
        ethers.utils.hexConcat(signatures),
      ],
      false,
    )) as unknown as SmallTxReceipt;
  } else {
    // just do a normal withdrawal
    receipt = (await blockchainCall(CONTRACTS.router, "withdraw", [
      CONTRACTS.alpLarge.address,
      userAddress,
      usdcToWithdraw,
      ethers.BigNumber.from(2).pow(256).sub(1),
    ])) as SmallTxReceipt;
  }
  const afterBal: ethers.BigNumber = await alpLarge.balanceOf(userAddress);
  const amountChanged = beforeBal.sub(afterBal);
  return { ...basicInfo, ...receipt, tokenAmount: ethers.utils.formatUnits(amountChanged, 18) };
}

export async function getTokenInfo(product: AlpineProduct | "usdc"): Promise<TokenInfo> {
  const user = userAddress;
  if (product === "alpSave" || product === "alpLarge") {
    const contract = CONTRACTS[product];
    const amount: ethers.BigNumber = await contract.balanceOf(user);
    // price and number of decimals of each unit of the contract

    const { num, decimals } = await contract.detailedPrice();
    console.log({ num, decimals });
    const amount_decimals = ethers.BigNumber.from(await contract.decimals());
    const equity = amount.mul(num);
    return {
      amount: ethers.utils.formatUnits(amount, amount_decimals),
      price: ethers.utils.formatUnits(num, decimals),
      equity: ethers.utils.formatUnits(equity, amount_decimals.add(decimals)),
    };
  }
  // usdc
  const { usdc } = CONTRACTS;
  const amount = await usdc.balanceOf(user);
  return {
    amount: ethers.utils.formatUnits(amount, 6),
    price: "1",
    equity: ethers.utils.formatUnits(amount, 6),
  };
}

export async function tokensFromShares(product: AlpineProduct, shareAmount: ethers.BigNumber) {
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const tokens = await alpSave.convertToAssets(shareAmount);
    return tokens;
  } else {
    // alpLarge
    const { alpLarge } = CONTRACTS;
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
    const { alpSave } = CONTRACTS;
    const shares = await alpSave.convertToShares(tokenAmount);
    return shares;
  }

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = CONTRACTS;
    // TODO: let the contract take care of pricing
    const totalDollars = await alpLarge.valueOfVault();
    console.log({ totalDollars });

    if (totalDollars.eq(0)) return tokenAmount.div(100); // $100 usdc per share to start with
    // totalSupply / totalDollars * dollars
    // dollars given by btc/eth vault actually have 8 decimals
    const totalSupply = await alpLarge.totalSupply();
    // convert tokenAmount (a USDC amount with 6 decimals) to dollar amount (8 decimals)
    const shares = totalSupply.mul(tokenAmount.mul(1e2)).div(totalDollars);
    return shares;
  }
  return ethers.BigNumber.from(0);
}
