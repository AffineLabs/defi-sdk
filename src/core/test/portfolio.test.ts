import { ethers } from "ethers";
import chai from "chai";
const { expect } = chai;

import { CONTRACTS, init, setProvider } from "../cache";

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

describe("Portfolio transactions", async () => {
  before(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
  });
  it("Buy Portfolio", async () => {});
});
