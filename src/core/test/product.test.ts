import { ethers } from "ethers";
import chai from "chai";
const { expect } = chai;

import { approve, mintUSDC } from "../AlpineDeFiSDK";
import { getBaseContracts, getContracts, getEthContracts, getPolygonContracts, init, setProvider } from "../cache";
import { buyProduct, sellProduct, getTokenInfo } from "../product";
import { BaseContracts, EthContracts, PolygonContracts } from "../types";
import { getTestProvider, oneUSDC, setBaseUsdcBalance } from "./utils";
import { VaultV2 } from "../../typechain";

describe("Buy products", async () => {
  let wallet: ethers.Wallet;
  let contracts: PolygonContracts;
  before(async () => {
    const testProvider = getTestProvider("poly");
    wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);

    setProvider(testProvider);
    await init(wallet, undefined);
    await mintUSDC(wallet.address, 100);
    contracts = getPolygonContracts();
  });

  it("Buy/Sell alpSave", async () => {
    const { alpSave } = contracts;
    console.log("APPROVING....");
    await approve("alpSave", "100000");
    await buyProduct("alpSave", 10);
    const res = await alpSave.balanceOf(wallet.address);
    console.log("alpSave Shares...", res);
    expect(res.gt(0)).to.be.true;

    await sellProduct("alpSave", 10);
    const newBal = await alpSave.balanceOf(wallet.address);
    expect(newBal.lt(res)).to.be.true;
  });

  it("Buy/Sell alpLarge", async () => {
    const { alpLarge } = contracts;
    await approve("alpLarge", "100000");

    console.log("buying alpLarge");
    await buyProduct(
      "alpLarge",
      5,
      100 * 50, //  50% slippage since testnet sushiswap prices are much greater than mainnet
    );
    const res: ethers.BigNumber = await alpLarge.balanceOf(wallet.address);
    console.log("alpLarge shares....", res.toString());
    expect(res.gt(0)).to.be.true;

    await sellProduct("alpLarge", 1);
    const newBal: ethers.BigNumber = await alpLarge.balanceOf(wallet.address);
    console.log("newBal: ", newBal.toString());
    expect(newBal.lt(res)).to.be.true;
  });
});

describe("Buy products Eth", async () => {
  let wallet: ethers.Wallet;
  let testProvider: ethers.providers.JsonRpcProvider;
  let contracts: EthContracts;

  before(async () => {
    testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8546");
    wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
    await init(wallet, undefined, 5);
    await mintUSDC(wallet.address, 100);
    contracts = getEthContracts();
  });

  it("Buy/Sell ethEarn", async () => {
    const { ethEarn } = contracts;
    await approve("ethEarn", "100000");
    await buyProduct("ethEarn", 10);
    const shares = await ethEarn.balanceOf(wallet.address);
    expect(shares.gt(0)).to.be.true;

    await sellProduct("ethEarn", 10);
    const newBal = await ethEarn.balanceOf(wallet.address);
    expect(newBal.lt(shares)).to.be.true;
  });

  it("Buy/Sell ethWethEarn", async () => {
    const { ethWethEarn } = contracts;
    await approve("ethWethEarn", "100000");
    await buyProduct("ethWethEarn", 10);
    const shares = await ethWethEarn.balanceOf(wallet.address);
    expect(shares.gt(0)).to.be.true;

    await sellProduct("ethWethEarn", 10);
    const newBal = await ethWethEarn.balanceOf(wallet.address);
    expect(newBal.lt(shares)).to.be.true;
  });

  it("EthEarn info", async () => {
    const ethInfo = await getTokenInfo("ethEarn");
    console.log({ ethInfo });
    expect(Number(ethInfo.amount) * Number(ethInfo.price)).to.closeTo(Number(ethInfo.equity), 1);
  });

  it("EthWethEarn info", async () => {
    const ethWethInfo = await getTokenInfo("ethWethEarn");
    console.log({ ethWethInfo });
    expect(Number(ethWethInfo.amount) * Number(ethWethInfo.price)).to.closeTo(Number(ethWethInfo.equity), 1);
  });
});

describe("Buy products Base", async () => {
  let wallet: ethers.Wallet;
  let contracts: BaseContracts;

  before(async () => {
    const testProvider = getTestProvider("base");
    wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);

    await init(wallet, undefined, 8453);
    const oneEth = ethers.BigNumber.from(10).pow(18);
    await testProvider.send("anvil_setBalance", [wallet.address, oneEth.mul(100).toHexString()]);
    console.log("INIT DONE");
    await setBaseUsdcBalance(wallet.address, ethers.BigNumber.from(100).mul(oneUSDC));
    console.log("usdc balance set");
    contracts = getBaseContracts();
  });

  it("Buy/Sell usdEarnBase", async () => {
    let { baseUsdEarn } = contracts;

    baseUsdEarn = baseUsdEarn as any as VaultV2;

    await approve("baseUsdEarn", "100000");
    await buyProduct("baseUsdEarn", 10);
    console.log("shares bought");
    const shares = await baseUsdEarn.balanceOf(wallet.address);
    expect(shares.gt(0)).to.be.true;

    await sellProduct("baseUsdEarn", 9);
    const newBal = await baseUsdEarn.balanceOf(wallet.address);
    expect(newBal.lt(shares)).to.be.true;
  });

  it("BaseUsdEarn info", async () => {
    const baseInfo = await getTokenInfo("baseUsdEarn");
    console.log({ baseInfo });
    expect(Number(baseInfo.amount) * Number(baseInfo.price)).to.closeTo(Number(baseInfo.equity), 1);
  });

  it("Buy/Sell baseLeverage", async () => {
    const { baseLeverage } = contracts;
    await buyProduct("baseLeverage", 2);
    const shares = await baseLeverage.balanceOf(wallet.address);
    expect(shares.gt(0)).to.be.true;

    await sellProduct("baseLeverage", 1);
    const newBal = await baseLeverage.balanceOf(wallet.address);
    expect(newBal.lt(shares)).to.be.true;
  });
});

describe("Product info", async () => {
  let wallet: ethers.Wallet;
  before(async () => {
    const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);

    await init(wallet, undefined);
    await mintUSDC(wallet.address, 100);
  });
  it("Can get token info", async () => {
    const { usdc } = getContracts();
    const saveInfo = await getTokenInfo("alpSave");
    console.log({ saveInfo });
    expect(Number(saveInfo.amount) * Number(saveInfo.price)).to.closeTo(Number(saveInfo.equity), 0.1);

    const largeInfo = await getTokenInfo("alpLarge");
    console.log({ largeInfo });
    expect(Number(largeInfo.amount) * Number(largeInfo.price)).to.closeTo(Number(largeInfo.equity), 1);

    const usdcInfo = await getTokenInfo("usdc");
    console.log({ usdcInfo });
    expect(usdcInfo.amount).to.equal(ethers.utils.formatUnits(await usdc.balanceOf(wallet.address), 6));
    expect(usdcInfo.price).to.equal("1");
    expect(usdcInfo.equity).to.equal(usdcInfo.amount);
    expect(usdcInfo.amount).to.equal(ethers.utils.formatUnits(await usdc.balanceOf(wallet.address), 6));
  });
});
