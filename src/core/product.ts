import { BigNumber, ethers } from "ethers";
import { GasInfo, SmallTxReceipt } from "..";
import { ERC4626Upgradeable, L2Vault, MockERC20, Router, StrategyVault, TwoAssetBasket, Vault } from "../typechain";
// Implementation of erc20, as contract uses two erc20 implementation oz, solmate,
// replacing it with mockERC20 which is an extension of ERC20
import { MockERC20__factory } from "../typechain";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { getContracts, getEthContracts, getPolygonContracts, PROVIDER, SIMULATE, userAddress } from "./cache";
import { MAX_UINT } from "./constants";

import { AlpineProduct, BasicReceiptInfo, DryRunReceipt, FullTxReceipt, TokenInfo, polygonProducts } from "./types";

async function _getVaultAndAsset(product: AlpineProduct): Promise<{
  vault: ERC4626Upgradeable;
  asset: MockERC20;
  router: Router;
}> {
  const { alpSave, alpLarge, polygonDegen, router: polyRouter } = getPolygonContracts();
  const { ethEarn, ethWethEarn, ssvEthUSDEarn, degen, router: ethRouter } = getEthContracts();

  const productToVault: { [key in AlpineProduct]: ERC4626Upgradeable } = {
    alpSave,
    alpLarge: alpLarge as unknown as ERC4626Upgradeable,
    polygonDegen,
    ethEarn,
    ethWethEarn,
    ssvEthUSDEarn,
    degen,
  };

  const vault = productToVault[product];
  const asset = MockERC20__factory.connect(await vault.asset(), vault.provider);

  const router: Router = product in polygonProducts ? polyRouter : ethRouter;
  return { vault, asset, router };
}
export async function buyProduct(product: AlpineProduct, amount: number, slippageBps = 500) {
  const { vault, asset, router } = await _getVaultAndAsset(product);

  if (product == "alpLarge") {
    return buyBtCEthShares(vault, amount, slippageBps, asset, router);
  } else if (product == "ethWethEarn") {
    return buyEthWethShares(vault, amount, asset, router);
  }
  return buyVault(vault, amount, asset);
}

export async function sellProduct(product: AlpineProduct, amount: number) {
  const { vault, asset } = await _getVaultAndAsset(product);
  if (product == "alpLarge") {
    return sellBtCEthShares(vault, amount, asset);
  }
  return sellVault(vault, amount, asset);
}

async function getBasicTxInfo(
  vault: ERC4626Upgradeable,
  rawAssets: number, // assets without decimals, e.g. "100" for 100 USDC
  assetDecimals: number,
): Promise<{
  assets: BigNumber;
  basicInfo: BasicReceiptInfo;
}> {
  const assets = _addDecimals(rawAssets.toString(), assetDecimals);

  const basicInfo: BasicReceiptInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: rawAssets.toString(),
    tokenAmount: _removeDecimals(await vault.convertToShares(assets), await vault.decimals()),
  };

  return {
    assets,
    basicInfo,
  };
}

export async function buyVault(
  vault: ERC4626Upgradeable,
  rawAssets: number,
  asset: MockERC20,
): Promise<DryRunReceipt & (SmallTxReceipt | GasInfo)> {
  const { assets, basicInfo } = await getBasicTxInfo(vault, rawAssets, await asset.decimals());

  const receipt = SIMULATE
    ? ((await blockchainCall(vault, "deposit", [assets, userAddress], true)) as GasInfo)
    : ((await blockchainCall(vault, "deposit", [assets, userAddress], false)) as SmallTxReceipt);
  return { ...basicInfo, ...receipt };
}

export async function sellVault(vault: ERC4626Upgradeable, rawAssets: number, asset: MockERC20) {
  const { assets, basicInfo } = await getBasicTxInfo(vault, rawAssets, await asset.decimals());

  const receipt = SIMULATE
    ? ((await blockchainCall(vault, "withdraw", [assets, userAddress, userAddress], true)) as GasInfo)
    : ((await blockchainCall(vault, "withdraw", [assets, userAddress, userAddress], false)) as SmallTxReceipt);
  return { ...basicInfo, ...receipt };
}

async function buyEthWethShares(
  ethWethEarn: ERC4626Upgradeable,
  amountWeth: number,
  weth: MockERC20,
  router: Router,
): Promise<DryRunReceipt | FullTxReceipt> {
  const shareDecimals = await ethWethEarn.decimals();
  const ethDecimals = 18;

  const { assets: amount, basicInfo } = await getBasicTxInfo(ethWethEarn, amountWeth, ethDecimals);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  const walletBalance = await PROVIDER.getBalance(userAddress);
  if (walletBalance.lt(amount)) {
    throw new Error("Insufficient balance");
  }

  const data: string[] = [];
  data.push(router.interface.encodeFunctionData("depositNative"));
  data.push(router.interface.encodeFunctionData("approve", [weth.address, ethWethEarn.address, MAX_UINT]));
  data.push(router.interface.encodeFunctionData("deposit", [ethWethEarn.address, userAddress, amount, 0]));

  const beforeBal: ethers.BigNumber = await ethWethEarn.balanceOf(userAddress);
  if (SIMULATE) {
    const dryRunInfo = (await blockchainCall(router, "multicall", [data], true, amount)) as GasInfo;
    return {
      ...basicInfo,
      ...dryRunInfo,
    };
  } else {
    const receipt = (await blockchainCall(router, "multicall", [data], false, amount)) as SmallTxReceipt;
    const afterBal: ethers.BigNumber = await ethWethEarn.balanceOf(userAddress);
    const amountChanged = afterBal.sub(beforeBal);

    const res = { ...basicInfo, ...receipt, tokenAmount: _removeDecimals(amountChanged, shareDecimals) };
    return res;
  }
}

export async function buyBtCEthShares(
  alpLarge: ERC4626Upgradeable,
  amountUSDC: number,
  slippageBps: number,
  usdc: MockERC20,
  router: Router,
): Promise<DryRunReceipt | FullTxReceipt> {
  // const { alpLarge, router, usdc } = getPolygonContracts();
  const amount = _addDecimals(amountUSDC.toString(), await usdc.decimals());
  const expectedShares = await sharesFromTokens("alpLarge", amount);
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(expectedShares, await alpLarge.decimals()),
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

export async function sellBtCEthShares(
  alpLarge: ERC4626Upgradeable,
  amountUSDC: number,
  asset: MockERC20,
): Promise<DryRunReceipt | FullTxReceipt> {
  // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
  const usdcToWithdraw = _addDecimals(amountUSDC.toString(), await asset.decimals());
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: amountUSDC.toString(),
    tokenAmount: _removeDecimals(await sharesFromTokens("alpLarge", usdcToWithdraw), await alpLarge.decimals()),
  };

  if (SIMULATE) {
    const gasEstimate = ethers.BigNumber.from(100e3);
    const gasPrice = await PROVIDER.getGasPrice();
    const txnCost = ethers.utils.formatEther(gasEstimate.mul(gasPrice));
    const dryRunInfo: GasInfo = {
      txnCost,
      gasPrice: ethers.utils.formatEther(gasPrice),
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

  if (product === "usdc") {
    const { usdc } = getContracts();
    const amount = await usdc.balanceOf(user);
    const numUsdc = _removeDecimals(amount, 6);
    return {
      amount: numUsdc,
      price: "1",
      equity: numUsdc,
    };
  }

  let contract: L2Vault | TwoAssetBasket | Vault | StrategyVault;
  if (product === "ethEarn" || product === "ethWethEarn" || product === "ssvEthUSDEarn" || product === "degen") {
    contract = getEthContracts()[product];
  } else {
    contract = getPolygonContracts()[product];
  }

  const amount = await contract.balanceOf(user);
  // price number of decimals of the share token
  const { num, decimals } = await contract.detailedPrice();
  const amountDecimals = ethers.BigNumber.from(await contract.decimals());
  const equity = amount.mul(num);
  return {
    amount: _removeDecimals(amount, amountDecimals),
    price: _removeDecimals(num, decimals),
    equity: _removeDecimals(equity, amountDecimals.add(decimals)),
  };
}

// Only used in (unused) portfolio code
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

// Only used for alpLarge conversions
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
