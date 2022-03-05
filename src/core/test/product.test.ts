import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

import { buyProduct } from "../product";
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
  it("Buy some alpSave", async () => {
    console.log("APPROVING....");
    await approve(CONTRACTS.alpSave.address, "100000");
    await buyProduct("alpSave", 10);
    const res = await CONTRACTS.alpSave.balanceOf(wallet.address);
    console.log("my number of shares...", res);
  });
});
