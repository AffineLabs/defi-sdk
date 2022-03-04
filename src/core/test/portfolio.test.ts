import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

import { portfolioUpdate } from "../portfolio";
import { AlpineDeFiSDK, init } from "..";
import { CONTRACTS } from "../cache";
import { approve } from "../AlpineDeFiSDK";

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

describe("Portfolio transactions", async () => {
  before(async () => {
    init(testProvider, wallet, undefined);
    await AlpineDeFiSDK.mintUSDC(wallet.address, 100);
  });
  it("Buy Portfolio", async () => {
    console.log("APPROVING....");
    await approve(wallet, undefined, CONTRACTS.alpSave.address, "100000");
    await approve(wallet, undefined, CONTRACTS.alpLarge.address, "100000");
    await portfolioUpdate({ alpSave: 10, alpLarge: 10 }, {});
    const res = await CONTRACTS.alpSave.balanceOf(wallet.address);
    console.log("my number of shares...", res);
    const res2 = await CONTRACTS.alpLarge.balanceOf(wallet.address);
    console.log("alpLarge shares: ", res2);
  });
});
