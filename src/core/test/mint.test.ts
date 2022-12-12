import { ethers } from "ethers";
import chai from "chai";
const { expect } = chai;
import { AlpineDeFiSDK } from "..";
import { CONTRACTS, getProviderByChainId, init } from "../cache";
import { DEFAULT_RAW_CHAIN_ID } from "../constants";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
before(async () => {
  const _provider = getProviderByChainId(DEFAULT_RAW_CHAIN_ID);
  await init(wallet, undefined, "80001");
  await _provider.send("anvil_setBalance", [wallet.address, ethers.BigNumber.from(10).pow(18).toHexString()]);
});
it("Mint some usdc", async () => {
  const blockNum = await testProvider.getBlockNumber();
  console.log({ blockNum });

  const contracts = CONTRACTS;
  const beforeBal: ethers.BigNumber = await contracts.usdc.balanceOf(wallet.address);
  const oneUSDC = ethers.BigNumber.from(10).pow(6);
  await AlpineDeFiSDK.mintUSDC(wallet.address, 1);
  const afterBal: ethers.BigNumber = await contracts.usdc.balanceOf(wallet.address);
  expect(afterBal.eq(beforeBal.add(oneUSDC))).to.be.true;
});
