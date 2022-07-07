import { Account, ReadAccount } from "./Account";
import { ethers } from "ethers";
import { blockchainCall } from "../core/AlpineDeFiSDK";
import { CONTRACTS } from "../core/cache";
import { mintUSDC } from "../core/AlpineDeFiSDK";
import { approve } from "../core/AlpineDeFiSDK";
import { productAllocation } from "../core/types";

const main = async () => {
  const email = process.env.EMAIL || "";
  await approve("router", "1000000");
  await blockchainCall(CONTRACTS.router, "approve", [
    CONTRACTS.usdc.address,
    CONTRACTS.alpLarge.address,
    ethers.BigNumber.from(2).pow(256).sub(1),
  ]);
  await blockchainCall(CONTRACTS.router, "approve", [
    CONTRACTS.usdc.address,
    CONTRACTS.alpSave.address,
    ethers.BigNumber.from(2).pow(256).sub(1),
  ]);
  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect({ email, walletType: "metamask" });
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setGasMode(true);
  await alpAccount.setSimulationMode(true);
  let allocation: productAllocation = {};
  allocation["alpSave"] = 100;
  allocation["alpLarge"] = 0;
  await alpAccount.portfolioPurchase(allocation, 1000);
  await alpAccount.portfolioSell(allocation, 100);
  const res = await alpAccount.approve("alpLarge", "1000000");
  console.log({ res });

  const receipt = await alpAccount.buyProduct("alpLarge", 1);
  console.log({ receipt });

  const readAcc = new ReadAccount(alpAccount.userAddress || "");
  await readAcc.init();
  const gas = await readAcc.getGasPrice();
  const balance = await readAcc.getMaticBalance();
  const infoAlpSave = await readAcc.getTokenInfo("alpSave");
  const infoAlpLarge = await readAcc.getTokenInfo("alpLarge");
  const infoUsdc = await readAcc.getTokenInfo("usdc");
  console.log({ gas, balance, infoAlpSave, infoAlpLarge, infoUsdc });

  console.log("exiting");
};

const handleButtonClick = () => {
  document.addEventListener(
    "click",
    async function (event) {
      if (!event || !event.target) return;

      const element = event.target as HTMLInputElement;

      // If the clicked element doesn't have the right selector, bail
      if (!element.matches("#switchToPolygon")) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      console.log(event.target);

      const account = new Account();
      try {
        await account.switchMetamaskToAllowedNetwork();
      } catch (error) {
        console.log("ERROR ===>", error);
      }
      await account.connect({ walletType: "metamask" });
      console.log("Metamask connected!!");
      const isConnected = await account.isConnectedToAllowedNetwork();
      console.log({ isConnected });
    },
    false,
  );
};

main();
handleButtonClick();
