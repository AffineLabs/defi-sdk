// Testing miscellaneous sdk functions

import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;

import { AlpineDeFiSDK } from "..";
import { CONTRACTS, init, SIGNER } from "../cache";

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

  it("getUserBalance", async () => {
    const { usdc } = CONTRACTS;
    const beforeBal: ethers.BigNumber = await usdc.balanceOf(wallet.address);

    const oneUSDC = ethers.BigNumber.from(10).pow(6);
    await AlpineDeFiSDK.mintUSDC(wallet.address, 1);

    const { balanceUSDC: afterBal } = await AlpineDeFiSDK.getUserBalance(
      "usdc"
    );
    console.log({ afterBal });

    expect(ethers.utils.parseUnits(afterBal, 6)).to.equal(
      beforeBal.add(oneUSDC)
    );
  });

  it("getMaticBalance", async () => {
    const balance = await SIGNER.getBalance();
    const balStr = await AlpineDeFiSDK.getMaticBalance();
    expect(ethers.utils.formatEther(balance)).to.equal(balStr);
  });
});
