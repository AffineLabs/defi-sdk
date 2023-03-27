import { ALLOWED_CHAIN_IDS, DEFAULT_RAW_CHAIN_ID } from "../core/constants";
import { AlpineProduct } from "../core/types";
import { AllowedChainId, AllowedWallet } from "../types/account";
import { Account, ReadAccount } from "./Account";

const getTokenInfo = async (token: "alpSave" | "alpLarge" | "ethEarn" | "usdc", readAcc: ReadAccount) => {
  try {
    const _tokenInfo = await readAcc.getTokenInfo(token);
    console.log(token, " token: ", _tokenInfo);
  } catch (error) {
    console.error("Error in getTokenInfo: ", token, error);
  }
};

const testRead = async (user: string, chainId: AllowedChainId) => {
  try {
    const readAcc = new ReadAccount(user || "", chainId);
    await readAcc.init();
    const gas = await readAcc.getGasPrice();
    const balance = await readAcc.getGasBalance();
    console.log({ gas, balance });
    await getTokenInfo("usdc", readAcc);

    if (chainId === 80001 || chainId === 137) {
      await getTokenInfo("alpSave", readAcc);
      await getTokenInfo("alpLarge", readAcc);
    } else {
      await getTokenInfo("ethEarn", readAcc);
    }
  } catch (error) {
    console.error("Error in read account: ", error);
  }
};
const connectAndWrite = async ({
  walletType = "metamask",
  account,
  chainId,
}: {
  walletType?: AllowedWallet;
  account: Account;
  chainId: AllowedChainId;
}) => {
  const email = process.env.EMAIL || "";
  // connect
  console.time("entire-connect");
  try {
    if (walletType === "metamask") {
      // switch to the chainId
      await account.switchWalletToAllowedNetwork(walletType, chainId);
    }
    console.log("connecting to", walletType, "on chain", chainId, account);
    await account.connect({ walletType, chainId, email });
    console.log("address: ", await account.getUserAddress());
  } catch (error) {
    console.error("Error in connect: ", error);
  }
  console.timeEnd("entire-connect");
  await testRead(account.userAddress || "", chainId);
};

const main = async () => {
  const alpAccount = new Account();
  const walletType = "metamask";
  const chainId = 80001 as AllowedChainId;
  const _productToBuy: AlpineProduct = "alpSave";

  console.log(
    `connecting to ${walletType} on chain ${chainId}`,
    { ALLOWED_CHAIN_IDS },
    ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
  );
  await connectAndWrite({ walletType, account: alpAccount, chainId });
  const readAcc = new ReadAccount(alpAccount.userAddress || "", chainId);
  console.log("usdc bal on ETH: ", await readAcc.getTokenInfo("usdc"));

  await alpAccount.setSimulationMode(true); // turn off simulation mode

  // write
  try {
    // check if user is approved max amount
    const isApproved = await alpAccount.isMaxUSDCApproved(_productToBuy);
    console.log("isApproved: ", isApproved);

    // approve max amount if not approved
    if (!isApproved) {
      const res = await alpAccount.approve(_productToBuy);
      console.log("approve res: ", res);
    }
    console.log("approved: ", _productToBuy);
  } catch (error) {
    console.error("Error in approve: ", error);
  }
  // const res = await alpAccount.buyProduct(_productToBuy, 0.1);
  const res = await alpAccount.sellProduct(_productToBuy, 0.1);
  console.log({ res });
  console.log("bought: ", _productToBuy);

  // disconnect
  try {
    console.log("disconnecting");
    await alpAccount.disconnect(walletType);
  } catch (error) {
    console.error("Error in disconnect: ", error);
  }
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
      console.log("Eth", window.ethereum);
      try {
        await account.connect({ walletType: "coinbase", chainId: DEFAULT_RAW_CHAIN_ID });
      } catch (error) {
        console.log("ERROR ===>", error);
      }
      // await account.connect({ walletType: "metamask" });
      console.log("Metamask connected!!");
      const isConnected = await account.isConnectedToTheGivenChainId("coinbase", DEFAULT_RAW_CHAIN_ID);

      if (!isConnected) {
        await account.switchWalletToAllowedNetwork("metamask", DEFAULT_RAW_CHAIN_ID);
      }
      console.log({ isConnected });
    },
    false,
  );
};

main();
handleButtonClick();
