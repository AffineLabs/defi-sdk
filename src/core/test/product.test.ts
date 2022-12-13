import { ethers } from "ethers";
import chai from "chai";
const { expect } = chai;

import { approve, mintUSDC } from "../AlpineDeFiSDK";
import { getContracts, getEthContracts, getPolygonContracts, init, setProvider } from "../cache";
import { buyProduct, sellProduct, getTokenInfo } from "../product";
import { EthContracts, PolygonContracts } from "../types";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);

describe("Buy products", async () => {
  let contracts: PolygonContracts;
  before(async () => {
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
    await buyProduct("alpLarge", 5);
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
    await init(wallet, undefined);
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
});

describe("Product info", async () => {
  before(async () => {
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
