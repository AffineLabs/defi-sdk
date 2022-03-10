// Testing miscellaneous sdk functions

import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

import { AlpineDeFiSDK } from "..";
import { CONTRACTS, init } from "../cache";

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

before(async () => {
  await init(testProvider, wallet, undefined);
});
it("getUserBalance", async () => {
  const contracts = CONTRACTS;
  const beforeBal: ethers.BigNumber = await contracts.usdc.balanceOf(
    wallet.address
  );
  const oneUSDC = ethers.BigNumber.from(10).pow(6);
  await AlpineDeFiSDK.mintUSDC(wallet.address, 1);

  const afterBal = (await AlpineDeFiSDK.getUserBalance("usdc")).balanceUSDC;
  console.log({ afterBal });

  expect(ethers.utils.parseUnits(afterBal, 6)).to.equal(beforeBal.add(oneUSDC));
});
