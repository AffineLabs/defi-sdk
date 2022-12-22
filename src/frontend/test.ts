import { AlpineDeFiSDK } from "../core";
import { DEFAULT_RAW_CHAIN_ID } from "../core/constants";
import { Account, ReadAccount } from "./Account";

const main = async () => {
  const email = process.env.EMAIL || "";
  const alpAccount = new Account();
  console.time("entire-connect");

  // Connect to polygon
  try {
    await alpAccount.connect({ email, walletType: "metamask", chainId: DEFAULT_RAW_CHAIN_ID });
    console.log("wallet: ", await alpAccount.getUserAddress());
    console.timeEnd("entire-connect");

    console.log("read account info: ");
  } catch (error) {
    console.error("Error in connect: ", error);
  }

  let readAcc: ReadAccount | undefined = undefined;
  try {
    readAcc = new ReadAccount(alpAccount.userAddress || "", DEFAULT_RAW_CHAIN_ID);
    await readAcc.init();
  } catch (error) {
    console.error("Error in read account: ", error);
  }

  if (readAcc) {
    const gas = await readAcc.getGasPrice();
    const balance = await readAcc.getMaticBalance();
    const infoAlpSave = await readAcc.getTokenInfo("alpSave");
    const infoAlpLarge = await readAcc.getTokenInfo("alpLarge");
    const infoUsdc = await readAcc.getTokenInfo("usdc");
    console.log({ gas, balance, infoAlpSave, infoAlpLarge, infoUsdc });
    console.log("\n\n\nfinished readAccount");
  }

  // connect to ethereum
  console.log("matic bal: ", AlpineDeFiSDK.getMaticBalance());
  console.log("connecting to ethereum...");
  await alpAccount.switchWalletToAllowedNetwork("metamask", 5);
  console.log("eth bal: ", AlpineDeFiSDK.getMaticBalance());

  // Connect to an ethereum read account
  const readEthAcc = new ReadAccount(alpAccount.userAddress || "", 5);
  await readEthAcc.init();
  const ethGas = await readEthAcc.getGasPrice();
  const ethBalance = await readEthAcc.getMaticBalance();
  const infoEthUsdc = await readEthAcc.getTokenInfo("usdc");
  console.log({ ethGas, ethBalance, infoEthUsdc });

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
      const isConnected = await account.isConnectedToAllowedNetwork("coinbase", DEFAULT_RAW_CHAIN_ID);

      if (!isConnected) {
        await account.switchWalletToAllowedNetwork("coinbase", DEFAULT_RAW_CHAIN_ID);
      }
      console.log({ isConnected });
    },
    false,
  );
};

main();
handleButtonClick();
