import { ethers } from "ethers";
import { tokensFromShares } from "../product";
import { init, setProvider, CONTRACTS, userAddress, PROVIDER } from "../cache";
import { productAllocation, productBalances, alpineProducts } from "../types";
import { portfolioPurchase, portfolioRebalance, portfolioSell } from "../portfolio"
import { assert } from "chai";
import { approve, mintUSDC, _addDecimals } from "../AlpineDeFiSDK";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);

describe("Portfolio transactions", async () => {
  before(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
    await PROVIDER.send("evm_setAccountBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
    console.log("Balance: ", await wallet.getBalance());
    await mintUSDC(wallet.address, 10000);
    await approve('alpSave', "1000000");
    await approve('alpLarge', "1000000");
  });
  // it("Buy Portfolio", async () => {});
  it("Portfolio Purchase", async () => {
    const allocation:productAllocation = {};
    allocation['alpLarge'] = 50;
    allocation['alpSave'] = 50;
    await portfolioPurchase(allocation, 1000);
    const user = userAddress;
    const coinBalance:productBalances = {};
    const total: ethers.BigNumber = ethers.BigNumber.from(0);
    for (const product of alpineProducts){
      const contract = CONTRACTS[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      console.log(`Token Balance: ${product} `, tokenBalance);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance!);
      coinBalance[product] = dollarsBalance;
    }
    console.log("Coinbalance %d", coinBalance['alpLarge']);
    console.log("UserAddress: ", {userAddress});
    console.log({coinBalance});
    assert(coinBalance['alpLarge']! == _addDecimals("500"));
    assert(coinBalance['alpSave']! == _addDecimals("500"));
  });
  // it("Portfolio Sell", async () => {
  //   const allocation:productAllocation = {};
  //   allocation['alpLarge'] = 50;
  //   allocation['alpSave'] = 50;
  //   await portfolioPurchase(allocation, 1000);
  //   allocation['alpLarge'] = 30
  //   allocation['alpSave'] = 70;
  //   await portfolioSell(allocation, 100);
  //   const user = userAddress;
  //   const coinBalance:productBalances = {};
  //   const total: ethers.BigNumber = ethers.BigNumber.from(0);
  //   for (const product of alpineProducts){
  //     const contract = CONTRACTS[product];
  //     const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
  //     const dollarsBalance = await tokensFromShares(product, tokenBalance);
  //     total.add(dollarsBalance!);
  //     coinBalance[product] = dollarsBalance;
  //   }
  //   assert(coinBalance['alpLarge']! == ethers.BigNumber.from(470));
  //   assert(coinBalance['alpSave']! == ethers.BigNumber.from(430));
  // });
  // it("Portfolio Rebalance", async () => {
  //   const allocation:productAllocation = {};
  //   allocation['alpLarge'] = 50;
  //   allocation['alpSave'] = 50;
  //   await portfolioPurchase(allocation, 1000);
  //   allocation['alpLarge'] = 30;
  //   allocation['alpSave'] = 70;
  //   await portfolioRebalance(allocation);
  //   const user = userAddress;
  //   const coinBalance:productBalances = {};
  //   const total: ethers.BigNumber = ethers.BigNumber.from(0);
  //   for (const product of alpineProducts){
  //     const contract = CONTRACTS[product];
  //     const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
  //     const dollarsBalance = await tokensFromShares(product, tokenBalance);
  //     total.add(dollarsBalance!);
  //     coinBalance[product] = dollarsBalance;
  //   }
  //   assert(coinBalance['alpLarge']! == ethers.BigNumber.from(300));
  //   assert(coinBalance['alpSave']! == ethers.BigNumber.from(700));
  // });
});
