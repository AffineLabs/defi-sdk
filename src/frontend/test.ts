import { AlpineDeFiSDK } from "../core";
import { DEFAULT_RAW_CHAIN_ID } from "../core/constants";
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
    console.log("connecting to", walletType, "on chain", chainId, account);
    await account.connect({ walletType, chainId, email });
    console.log("address: ", await account.getUserAddress());
  } catch (error) {
    console.error("Error in connect: ", error);
  }
  console.timeEnd("entire-connect");

  // read
  let readAcc: ReadAccount | undefined = undefined;
  try {
    readAcc = new ReadAccount(account.userAddress || "", chainId);
    await readAcc.init();
    const gas = await readAcc.getGasPrice();
    const balance = await readAcc.getGasBalance();
    await getTokenInfo("usdc", readAcc);
    console.log({ gas, balance });
    console.log("matic bal: ", await AlpineDeFiSDK.getGasBalance());

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

const main = async () => {
  const alpAccount = new Account();

  // await alpAccount.switchWalletToAllowedNetwork("walletConnect", 137);
  await connectAndWrite({ walletType: "walletConnect", account: alpAccount, chainId: 137 });
  // await alpAccount.switchWalletToAllowedNetwork("metamask", 5);
  // await connectAndWrite({ account: alpAccount, chainId: 5 });
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
