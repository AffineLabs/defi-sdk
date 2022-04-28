// Testing miscellaneous sdk functions

import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

import { AlpineDeFiSDK } from "..";
import { init, SIGNER } from "../cache";

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

describe("Balances", async () => {
  before(async () => {
    await init(testProvider, wallet, undefined);
  });

  it("getMaticBalance", async () => {
    const balance = await SIGNER.getBalance();
    const balStr = await AlpineDeFiSDK.getMaticBalance();
    expect(ethers.utils.formatEther(balance)).to.equal(balStr);
  });
});
