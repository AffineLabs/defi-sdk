import { ethers } from "ethers";
import chai, { assert } from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

import { buyProduct, sellProduct } from "../product";
import { AlpineDeFiSDK } from "..";
import { CONTRACTS, init } from "../cache";
import { approve } from "../AlpineDeFiSDK";

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

describe("Buy products", async () => {
  before(async () => {
    init(testProvider, wallet, undefined);
    await AlpineDeFiSDK.mintUSDC(wallet.address, 100);
  });

  it("Buy/Sell alpSave", async () => {
    console.log("APPROVING....");
    await approve(CONTRACTS.alpSave.address, "100000");
    await buyProduct("alpSave", 10);
    const res = await CONTRACTS.alpSave.balanceOf(wallet.address);
    console.log("alpSave Shares...", res);
    assert(res.gt(0));

    // TODO: This assert will only work if 1 alpSave is $1. Fix
    await sellProduct("alpSave", 10);
    const newBal: ethers.BigNumber = await CONTRACTS.alpSave.balanceOf(
      wallet.address
    );
    assert(newBal.eq(0));
  });

  it("Buy/Sell alpLarge", async () => {
    console.log("buying alpLarge");
    await approve(CONTRACTS.alpLarge.address, "100000");
    await buyProduct("alpLarge", 10);
    const res: ethers.BigNumber = await CONTRACTS.alpLarge.balanceOf(
      wallet.address
    );
    console.log("alpLarge shares....", res);
    assert(res.gt(0));

    await sellProduct("alpLarge", 0.7);
    const newBal: ethers.BigNumber = await CONTRACTS.alpLarge.balanceOf(
      wallet.address
    );
    console.log("newBal: ", newBal.toString());
    assert(newBal.lt(res));
  });
});
