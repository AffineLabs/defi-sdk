import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

// import { portfolioUpdate } from "../portfolio";
// import { AlpineDeFiSDK } from "..";
import { CONTRACTS, init } from "../cache";
// import { approve } from "../AlpineDeFiSDK";

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

describe("Portfolio transactions", async () => {
  before(async () => {
    await init(testProvider, wallet, undefined);
  });
  it("Buy Portfolio", async () => {});
});
