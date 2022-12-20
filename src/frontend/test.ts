import { DEFAULT_RAW_CHAIN_ID } from "../core/constants";
import { getTokenInfo } from "../core/product";
import { Account, ReadAccount } from "./Account";

const main = async () => {
  const email = process.env.EMAIL || "";
  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect({ email, walletType: "metamask" });
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setSimulationMode(false);
  console.log("alpLarge info: ", await getTokenInfo("alpLarge"));
  await alpAccount.sellProduct("alpLarge", 14);

  // await approve("router", "1000000");
  // await approve("alpSave", "1000000");

  const readAcc = new ReadAccount(alpAccount.userAddress || "");
  await readAcc.init();
  const gas = await readAcc.getGasPrice();
  const balance = await readAcc.getMaticBalance();
  const infoAlpSave = await readAcc.getTokenInfo("alpSave");
  const infoAlpLarge = await readAcc.getTokenInfo("alpLarge");
  const infoUsdc = await readAcc.getTokenInfo("usdc");
  console.log({ gas, balance, infoAlpSave, infoAlpLarge, infoUsdc });

  // connect to ethereum
  await alpAccount.connect({ email, walletType: "metamask", chainId: 5 });
  await alpAccount.switchWalletToAllowedNetwork("metamask", 5);
  console.log("wallet: ", await alpAccount.getUserAddress());
  const readEthAcc = new ReadAccount(alpAccount.userAddress || "", 5);
  await readEthAcc.init();
  const ethGas = await readEthAcc.getGasPrice();
  const ethBalance = await readAcc.getMaticBalance();
  const infoEthAlpSave = await readAcc.getTokenInfo("alpSave");
  const infoEthAlpLarge = await readAcc.getTokenInfo("alpLarge");
  const infoEthUsdc = await readAcc.getTokenInfo("usdc");
  console.log({ ethGas, ethBalance, infoEthAlpSave, infoEthAlpLarge, infoEthUsdc });

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
        await account.connect({ walletType: "coinbase" });
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
