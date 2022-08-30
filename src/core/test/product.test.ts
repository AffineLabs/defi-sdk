import { ethers } from "ethers";
import chai from "chai";
const { expect } = chai;

import { approve, blockchainCall, mintUSDC } from "../AlpineDeFiSDK";
import { CONTRACTS, init, setProvider } from "../cache";
import { buyProduct, sellProduct, getTokenInfo } from "../product";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const MAX_INT = ethers.BigNumber.from(2).pow(256).sub(1);

describe("Buy products", async () => {
  before(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
    await mintUSDC(wallet.address, 100);
  });

  it("Buy/Sell alpSave", async () => {
    console.log("APPROVING....");
    await approve("alpSave", "100000");
    await buyProduct("alpSave", 10);
    const res = await CONTRACTS.alpSave.balanceOf(wallet.address);
    console.log("alpSave Shares...", res);
    expect(res.gt(0)).to.be.true;

    await sellProduct("alpSave", 10);
    const newBal: ethers.BigNumber = await CONTRACTS.alpSave.balanceOf(wallet.address);
    expect(newBal.lt(res)).to.be.true;
  });

  it("Buy/Sell alpLarge", async () => {
    await approve("alpLarge", "100000");

    console.log("buying alpLarge");
    await buyProduct("alpLarge", 10);
    const res: ethers.BigNumber = await CONTRACTS.alpLarge.balanceOf(wallet.address);
    console.log("alpLarge shares....", res.toString());
    expect(res.gt(0)).to.be.true;

    //This approval allows the alpLarge vault to spend USDC
    await blockchainCall(CONTRACTS.router, "approve", [CONTRACTS.usdc.address, CONTRACTS.alpLarge.address, MAX_INT]);
    await sellProduct("alpLarge", 1);
    const newBal: ethers.BigNumber = await CONTRACTS.alpLarge.balanceOf(wallet.address);
    console.log("newBal: ", newBal.toString());
    expect(newBal.lt(res)).to.be.true;
  });
});

describe("Product info", async () => {
  before(async () => {
    await init(wallet, undefined);
    await mintUSDC(wallet.address, 100);
  });
  it("Can get token info", async () => {
    const saveInfo = await getTokenInfo("alpSave");
    console.log({ saveInfo });

    expect(Number(saveInfo.amount) * Number(saveInfo.price)).to.closeTo(Number(saveInfo.equity), 0.1);
    const largeInfo = await getTokenInfo("alpLarge");
    console.log({ largeInfo });
    expect(Number(largeInfo.amount) * Number(largeInfo.price)).to.closeTo(Number(largeInfo.equity), 1);

    const usdcInfo = await getTokenInfo("usdc");
    console.log({ usdcInfo });
    expect(usdcInfo.amount).to.equal(ethers.utils.formatUnits(await CONTRACTS.usdc.balanceOf(wallet.address), 6));
    expect(usdcInfo.price).to.equal("1");
    expect(usdcInfo.equity).to.equal(usdcInfo.amount);
  });

  const usdcInfo = await getTokenInfo("usdc");
  expect(usdcInfo.amount).to.equal(ethers.utils.formatUnits(await CONTRACTS.usdc.balanceOf(wallet.address), 6));
});
