import { Contract, ethers } from "ethers";
import { getTokenInfo, tokensFromShares } from "../product";
import { init, setProvider, CONTRACTS, userAddress, PROVIDER } from "../cache";
import { productAllocation, productBalances, alpineProducts } from "../types";
import { portfolioPurchase, portfolioRebalance, portfolioSell } from "../portfolio"
import { assert } from "chai";
import { approve, blockchainCall, mintUSDC, _addDecimals, _removeDecimals } from "../AlpineDeFiSDK";
import { verifyMessage } from "ethers/lib/utils";
import { Router__factory } from "../../../typechain";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);

describe("Portfolio transactions", async () => {
  before(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
    await PROVIDER.send("evm_setAccountBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
    await mintUSDC(wallet.address, 10000);
    await approve("router", "1000000");
    await blockchainCall(CONTRACTS.router, "approve", [CONTRACTS.usdc.address ,CONTRACTS.alpLarge.address, ethers.BigNumber.from(2).pow(256).sub(1)]);
    await blockchainCall(CONTRACTS.router, "approve", [CONTRACTS.usdc.address ,CONTRACTS.alpSave.address, ethers.BigNumber.from(2).pow(256).sub(1)]);
    await blockchainCall(CONTRACTS.alpLarge, "approve", [CONTRACTS.router.address, ethers.BigNumber.from(2).pow(256).sub(1)]);
    await blockchainCall(CONTRACTS.alpSave, "approve", [CONTRACTS.router.address, ethers.BigNumber.from(2).pow(256).sub(1)]);
  });
  it("Portfolio Purchase", async () => {
    const coinBalance:productBalances = {};
    const user = userAddress;
    const allocation:productAllocation = {};
    allocation['alpLarge'] = 50;
    allocation['alpSave'] = 50;
    const balanceBefore = Number(await (await getTokenInfo("usdc")).amount);
    await portfolioPurchase(allocation, 1000);
    const balanceAfter = Number(await (await getTokenInfo("usdc")).amount);
    for (const product of alpineProducts){
      const contract = CONTRACTS[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      coinBalance[product] = dollarsBalance;
    }
    assert(coinBalance['alpLarge']! > ethers.BigNumber.from(0));
    assert(coinBalance['alpSave']! > ethers.BigNumber.from(0));
    assert(balanceBefore-balanceAfter == 1000);

  });
  it("Portfolio Sell", async () => {
    const coinBalance:productBalances = {};
    let allocation:productAllocation = {};
    allocation['alpSave'] = 100;
    allocation['alpLarge'] = 0;
    await portfolioSell(allocation, 100);
    const user = userAddress;
    const total: ethers.BigNumber = ethers.BigNumber.from(0);
    for (const product of alpineProducts){
      const contract = CONTRACTS[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance!);
      coinBalance[product] = dollarsBalance;
    }
    assert(Number(_removeDecimals(coinBalance['alpSave']!)) > 395);
    assert(Number(_removeDecimals(coinBalance['alpSave']!)) < 400);
  });
  it("Portfolio Rebalance", async () => {
    const allocation:productAllocation = {};
    allocation['alpLarge'] = 50;
    allocation['alpSave'] = 50;
    await portfolioRebalance(allocation);
    const user = userAddress;
    const coinBalance:productBalances = {};
    const total: ethers.BigNumber = ethers.BigNumber.from(0);
    for (const product of alpineProducts){
      const contract = CONTRACTS[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance!);
      coinBalance[product] = dollarsBalance;
    }
    assert(Number(_removeDecimals(coinBalance['alpLarge']!))+ 5 > Number(_removeDecimals(coinBalance['alpSave']!)));
    assert(Number(_removeDecimals(coinBalance['alpLarge']!))- 5 < Number(_removeDecimals(coinBalance['alpSave']!)));
  });
});
