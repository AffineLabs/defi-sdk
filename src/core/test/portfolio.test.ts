import { ethers } from "ethers";
import { expect } from "chai";

import { getTokenInfo, tokensFromShares } from "../product";
import { init, setProvider, userAddress, PROVIDER, getPolygonContracts } from "../cache";
import { productAllocation, productBalances, PolygonContracts, polygonProducts } from "../types";
import { portfolioPurchase, portfolioRebalance, portfolioSell } from "../portfolio";

import { blockchainCall, mintUSDC, _removeDecimals } from "../AlpineDeFiSDK";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const MAX_INT = ethers.BigNumber.from(2).pow(256).sub(1);

describe("Portfolio transactions", async () => {
  let contracts: PolygonContracts;
  before(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
    await PROVIDER.send("anvil_setBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
    await mintUSDC(wallet.address, 10_000);

    contracts = getPolygonContracts();
    const { router, alpLarge, usdc, alpSave } = contracts;

    // await approve("router", "1000000");
    //This approval allows the alpLarge vault to spend USDC
    await blockchainCall(router, "approve", [usdc.address, alpLarge.address, MAX_INT]);
    //This approval allows the alpSave vault to spend USDC
    await blockchainCall(router, "approve", [usdc.address, alpSave.address, MAX_INT]);
    //This approval lets the router burn alpLarge shares
    await blockchainCall(alpLarge, "approve", [router.address, MAX_INT]);
    //This approval lets the router burn alpSave shares
    await blockchainCall(alpSave, "approve", [router.address, MAX_INT]);
  });

  xit("Portfolio Purchase", async () => {
    const coinBalance: productBalances = {
      alpLarge: ethers.BigNumber.from(0),
      alpSave: ethers.BigNumber.from(0),
      polygonDegen: ethers.BigNumber.from(0),
    };
    const user = userAddress;
    const allocation: productAllocation = { alpLarge: 50, alpSave: 50, polygonDegen: 50 };
    const balanceBefore = Number((await getTokenInfo("usdc")).amount);
    await portfolioPurchase(allocation, 1000);
    const balanceAfter = Number((await getTokenInfo("usdc")).amount);
    for (const product of polygonProducts) {
      const contract = contracts[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      coinBalance[product] = dollarsBalance;
    }
    const alpLargeBalance = Number(_removeDecimals(coinBalance.alpLarge, 6));
    const alpSaveBalance = Number(_removeDecimals(coinBalance.alpSave, 6));
    expect(alpLargeBalance > 495);
    expect(alpSaveBalance > 495);
    expect(alpSaveBalance < 530);
    expect(balanceBefore - balanceAfter == 1000);
  });

  // TODO: Re-enable and fix the following tests. Skipped to unblock mainnet alpha.
  xit("Portfolio Sell", async () => {
    const coinBalance: productBalances = {
      alpLarge: ethers.BigNumber.from(0),
      alpSave: ethers.BigNumber.from(0),
      polygonDegen: ethers.BigNumber.from(0),
    };
    const allocation: productAllocation = { alpLarge: 50, alpSave: 50, polygonDegen: 50 };
    await portfolioSell(allocation, 100);
    const user = userAddress;
    const total: ethers.BigNumber = ethers.BigNumber.from(0);
    for (const product of polygonProducts) {
      const contract = contracts[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance);
      coinBalance[product] = dollarsBalance;
    }
    // We have 500 AlpSave from portfolio purchase and we sell 50 so overall should have <450 alpSave left
    const alpSaveBalance = Number(_removeDecimals(coinBalance.alpSave, 6));
    const alpLargeBalance = Number(_removeDecimals(coinBalance.alpLarge, 6));
    console.log(alpLargeBalance);
    expect(alpSaveBalance > 445);
    expect(alpLargeBalance > 450);
    expect(alpSaveBalance > 445);
  });

  xit("Portfolio Rebalance", async () => {
    const allocation: productAllocation = { alpLarge: 50, alpSave: 50, polygonDegen: 50 };
    await portfolioRebalance(allocation);
    const user = userAddress;
    const coinBalance: productBalances = {
      alpLarge: ethers.BigNumber.from(0),
      alpSave: ethers.BigNumber.from(0),
      polygonDegen: ethers.BigNumber.from(0),
    };
    const total = ethers.BigNumber.from(0);
    for (const product of polygonProducts) {
      const contract = contracts[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance);
      coinBalance[product] = dollarsBalance;
    }
    const alpLargeBalance = Number(_removeDecimals(coinBalance.alpLarge, 6));
    const alpSaveBalance = Number(_removeDecimals(coinBalance.alpSave, 6));
    if (alpLargeBalance > alpSaveBalance) expect(alpLargeBalance - alpSaveBalance < 5);
    else expect(alpSaveBalance - alpLargeBalance < 5);
  });
});
