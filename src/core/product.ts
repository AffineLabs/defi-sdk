import { ethers } from "ethers";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { CONTRACTS, SIGNER, userAddress } from "./cache";

import { AlpineProduct, TokenInfo } from "./types";

export async function buyProduct(product: AlpineProduct, amount: number) {
  if (product === "alpSave") {
    return buyUsdcShares(amount);
  }
  if (product === "alpLarge") {
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
  return blockchainCall(alpSave, "deposit", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await sharesFromTokens("alpSave", amount)),
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
  return blockchainCall(CONTRACTS.alpSave, "withdraw", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(
      await sharesFromTokens("alpSave", usdcToWihdraw)
    ),
  });
}

export async function buyBtCEthShares(amountUSDC: number) {
  const { alpLarge } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());
  return blockchainCall(alpLarge, "deposit", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: ethers.utils.formatUnits(
      await sharesFromTokens("alpLarge", amount),
      18
    ),
  });
}

export async function sellBtCEthShares(amountUSDC: number) {
  const { alpLarge } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWihdraw = ethers.utils.parseUnits(amountUSDC.toString(), 6);
  return blockchainCall(alpLarge, "withdraw", [amount], {
    dollarAmount: amountUSDC.toString(),
    tokenAmount: ethers.utils.formatUnits(
      await sharesFromTokens("alpLarge", usdcToWihdraw),
      18
    ),
  });
}

export async function getTokenInfo(
  product: AlpineProduct | "usdc"
): Promise<TokenInfo> {
  const user = userAddress;
  if (product === "alpSave" || product === "alpLarge") {
    const contract: ethers.Contract = CONTRACTS[product];
    const amount: ethers.BigNumber = await contract.balanceOf(user);
    const price: ethers.BigNumber = (await contract.detailedPrice()).num;
    const equity: ethers.BigNumber = amount.mul(price)
    // token amount has 6 decimals 
    // and price has 6 decimals for alpSave and 8 decimals for alpLarge
    const amount_decimals = 6
    const price_decimals = (product === "alpSave") ? 6 : 8
    return {
      amount: ethers.utils.formatUnits(amount, amount_decimals),
      price: ethers.utils.formatUnits(price, price_decimals),
      equity: ethers.utils.formatUnits(equity, amount_decimals + price_decimals),
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

export async function tokensFromShares(
  product: AlpineProduct,
  amount: ethers.BigNumber
) {
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const tokens: ethers.BigNumber = await alpSave.tokensFromShares(amount);
    return tokens;
  }

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = CONTRACTS;
    const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
    const totalSupply: ethers.BigNumber = await alpLarge.totalSupply();
    // totalDollars / totalShares * numShares
    const dollars = totalDollars.mul(amount).div(totalSupply);
    // The token we're talking about is USDC here, which only has 6 decimals.
    return dollars.div(1e2);
  }
}

export async function sharesFromTokens(
  product: AlpineProduct,
  tokenAmount: ethers.BigNumber
) {
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const shares: ethers.BigNumber = await alpSave.sharesFromTokens(
      tokenAmount
    );
    return shares;
  }

  if (product === "alpLarge") {
    // alpLarge
    const { alpLarge } = CONTRACTS;
    // TODO: let the contract take care of pricing
    const totalDollars: ethers.BigNumber = await alpLarge.valueOfVault();
    console.log({ totalDollars });
    // totalSupply / totalDollars * dollars
    // dollars given by btc/eth vault actually have 8 decimals
    const totalSupply: ethers.BigNumber = await alpLarge.totalSupply();
    // convert tokenAmount (a USDC amount with 6 decimals) to dollar amount (8 decimals)
    const shares = totalSupply.mul(tokenAmount.mul(1e2)).div(totalDollars);
    return shares;
  }
  return ethers.BigNumber.from(0);
}
