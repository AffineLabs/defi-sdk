import { ethers } from "ethers";
import { FullTxReceipt, GasInfo, SmallTxReceipt } from "..";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { CONTRACTS, SIGNER, userAddress } from "./cache";

import { AlpineProduct, DryRunReceipt, TokenInfo } from "./types";

type SimObj = { simulate: () => Promise<DryRunReceipt>; call: () => Promise<FullTxReceipt> };
type buyFunc = (a: number) => Promise<SimObj>;
export function buyProduct(product: AlpineProduct, amount: number): SimObj {
  let f: buyFunc = buyUsdcShares;
  if (product === "alpLarge") f = buyBtCEthShares;

  return {
    simulate: async () => f(amount).then(res => res.simulate()),
    call: async () => f(amount).then(res => res.call()),
  };
}

export function sellProduct(product: AlpineProduct, amount: number) {
  let f: buyFunc = sellUsdcShares;
  if (product === "alpLarge") f = sellBtCEthShares;

  return {
    simulate: async () => f(amount).then(res => res.simulate()),
    call: async () => f(amount).then(res => res.call()),
  };
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
    tokenAmount: _removeDecimals(await sharesFromTokens("alpSave", amount)),
  };
  return {
    simulate: async (): Promise<DryRunReceipt> => {
      const dryRunInfo = (await blockchainCall(alpSave, "deposit", [amount], true)) as GasInfo;
      return {
        ...basicInfo,
        ...dryRunInfo,
      };
    },
    call: async (): Promise<FullTxReceipt> => {
      const receipt = (await blockchainCall(alpSave, "deposit", [amount], false)) as SmallTxReceipt;
      return { ...basicInfo, ...receipt };
    },
  };
}

/**
 * sell alp token and withdraw usdc from a vault (to user's wallet by default)
 * @param amountUSDC amount in usdc to sell
 */
export async function sellUsdcShares(amountUSDC: number) {
  const contracts = CONTRACTS;
  const { alpSave } = contracts;
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWihdraw = _addDecimals(amountUSDC.toString());
  const withdrawFeeBps: ethers.BigNumber = await alpSave.withdrawalFee();
  const alpFee = usdcToWihdraw.mul(withdrawFeeBps).div(10_000);
  const alpFeePercent = (withdrawFeeBps.toNumber() / 100).toString();

  const basicInfo = {
    alpFee: _removeDecimals(alpFee).toString(),
    alpFeePercent,
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await sharesFromTokens("alpSave", usdcToWihdraw)),
  };
  console.log({ basicInfo });
  return {
    simulate: async (): Promise<DryRunReceipt> => {
      const dryRunInfo = (await blockchainCall(alpSave, "withdraw", [usdcToWihdraw], true)) as GasInfo;
      return {
        ...basicInfo,
        ...dryRunInfo,
      };
    },
    call: async (): Promise<FullTxReceipt> => {
      const receipt = (await blockchainCall(alpSave, "withdraw", [usdcToWihdraw], false)) as SmallTxReceipt;
      return { ...basicInfo, ...receipt };
    },
  };
}

export async function buyBtCEthShares(amountUSDC: number) {
  const { alpLarge } = CONTRACTS;
  const amount = _addDecimals(amountUSDC.toString());
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: ethers.utils.formatUnits(await sharesFromTokens("alpLarge", amount), 18),
  };

  return {
    simulate: async (): Promise<DryRunReceipt> => {
      const dryRunInfo = (await blockchainCall(alpLarge, "deposit", [amount, userAddress])) as GasInfo;
      return {
        ...basicInfo,
        ...dryRunInfo,
      };
    },
    call: async (): Promise<FullTxReceipt> => {
      const receipt = (await blockchainCall(alpLarge, "deposit", [amount, userAddress], false)) as SmallTxReceipt;
      return { ...basicInfo, ...receipt };
    },
  };
}

export async function sellBtCEthShares(amountUSDC: number) {
  const { alpLarge } = CONTRACTS;
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWihdraw = _addDecimals(amountUSDC.toString());
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: ethers.utils.formatUnits(await sharesFromTokens("alpLarge", usdcToWihdraw), 18),
  };

  return {
    simulate: async (): Promise<DryRunReceipt> => {
      const dryRunInfo = (await blockchainCall(
        alpLarge,
        "withdraw",
        [usdcToWihdraw, userAddress, userAddress],
        true,
      )) as GasInfo;
      return {
        ...basicInfo,
        ...dryRunInfo,
      };
    },
    call: async (): Promise<FullTxReceipt> => {
      const receipt = (await blockchainCall(
        alpLarge,
        "withdraw",
        [usdcToWihdraw, userAddress, userAddress],
        false,
      )) as SmallTxReceipt;
      return { ...basicInfo, ...receipt };
    },
  };
}

export async function getTokenInfo(product: AlpineProduct | "usdc"): Promise<TokenInfo> {
  const user = userAddress;
  if (product === "alpSave" || product === "alpLarge") {
    const contract = CONTRACTS[product];
    const amount: ethers.BigNumber = await contract.balanceOf(user);
    let num: ethers.BigNumber;
    let decimals: ethers.BigNumber;
    // price and number of decimals of each unit of the contract
    ({ num, decimals } = await contract.detailedPrice());
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

export async function tokensFromShares(product: AlpineProduct, amount: ethers.BigNumber) {
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

export async function sharesFromTokens(product: AlpineProduct, tokenAmount: ethers.BigNumber) {
  if (product === "alpSave") {
    const { alpSave } = CONTRACTS;
    const shares: ethers.BigNumber = await alpSave.sharesFromTokens(tokenAmount);
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
