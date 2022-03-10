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
    await init(testProvider, wallet, undefined);
    await AlpineDeFiSDK.mintUSDC(wallet.address, 100);
  });

  it("Buy/Sell alpSave", async () => {
    console.log("APPROVING....");
    await approve("alpSave", "100000");
    await buyProduct("alpSave", 10);
    const res = await CONTRACTS.alpSave.balanceOf(wallet.address);
    console.log("alpSave Shares...", res);
    assert(res.gt(0));

    await sellProduct("alpSave", 10);
    const newBal: ethers.BigNumber = await CONTRACTS.alpSave.balanceOf(
      wallet.address
    );
    assert(newBal.lt(res));
  });

  it("Buy/Sell alpLarge", async () => {
    await approve("alpLarge", "100000");

    console.log("buying alpLarge");
    await buyProduct("alpLarge", 10);
    const res: ethers.BigNumber = await CONTRACTS.alpLarge.balanceOf(
      wallet.address
    );
    console.log("alpLarge shares....", res);
    assert(res.gt(0));

    await sellProduct("alpLarge", 0.1);
    const newBal: ethers.BigNumber = await CONTRACTS.alpLarge.balanceOf(
      wallet.address
    );
    console.log("newBal: ", newBal.toString());
    assert(newBal.lt(res));
  });
});
