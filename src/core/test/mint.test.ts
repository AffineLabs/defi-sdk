import { ethers } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { AlpineDeFiSDK } from "..";
chai.use(solidity);
const { expect } = chai;

const testProvider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(
  testProvider
);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
it("Mint some usdc", async () => {
  const blockNum = await testProvider.getBlockNumber();
  console.log({ blockNum });

  const contracts = await AlpineDeFiSDK.getAllContracts(testProvider);
  const beforeBal: ethers.BigNumber = await contracts.usdc.balanceOf(
    wallet.address
  );
  const oneUSDC = ethers.BigNumber.from(10).pow(6);
  await AlpineDeFiSDK.mintUSDC(
    contracts.usdc,
    wallet,
    undefined,
    wallet.address,
    "1",
    true
  );
  const afterBal = await contracts.usdc.balanceOf(wallet.address);
  expect(afterBal).to.equal(beforeBal.add(oneUSDC));
});
