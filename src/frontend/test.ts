import { Web3Modal } from "@web3modal/standalone";
import { AlpineDeFiSDK } from "../core";
import { ALLOWED_CHAIN_IDS } from "../core/constants";
import { AlpineProduct } from "../core/types";
import { AllowedChainId, AllowedWallet } from "../types/account";
import { Account } from "./Account";

// const getTokenInfo = async (token: AlpineProduct | "usdc" | "weth", readAcc: ReadAccount) => {
//   try {
//     const _tokenInfo = await readAcc.getTokenInfo(token);
//     console.log(token, " token: ", _tokenInfo);
//   } catch (error) {
//     console.error("Error in getTokenInfo: ", token, error);
//   }
// };

// const testRead = async (user: string, chainId: AllowedChainId) => {
//   try {
//     const readAcc = new ReadAccount(user || "", chainId);
//     await readAcc.init();
//     const gas = await readAcc.getGasPrice();
//     const balance = await readAcc.getGasBalance();
//     console.log({ gas, balance });
//     await getTokenInfo("usdc", readAcc);
//     await getTokenInfo("weth", readAcc);

//     if (chainId === 80001 || chainId === 137) {
//       await getTokenInfo("alpSave", readAcc);
//       await getTokenInfo("alpLarge", readAcc);
//     } else {
//       await getTokenInfo("ethEarn", readAcc);
//       await getTokenInfo("degen", readAcc);
//     }
//   } catch (error) {
//     console.error("Error in read account: ", error);
//   }
// };
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
    // switch to the chainId
    await account.switchWalletToAllowedNetwork(walletType, chainId);
    console.log("connecting to", walletType, "on chain", chainId, account);
    await account.connect({ walletType, chainId, email });
    const _address = await account.getUserAddress();
    console.log("CONNECTED to address: ", _address);
    // we will update the DOM element of <p id="userAddress"> with the user address
    const userAddressElement = document.getElementById("userAddress");
    if (userAddressElement) userAddressElement.innerHTML = _address || "Not connected";

  } catch (error) {
    console.error("Error in connect: ", error);
  }
  console.timeEnd("entire-connect");
  // await testRead(account.userAddress || "", chainId);
};

const buy = async (alpAccount: Account, product: AlpineProduct, amount: number) => {
  // check if user is approved max amount
  const isApproved = await alpAccount.isApproved(product, 1);
  console.log("isApproved: ", isApproved);

  // approve max amount if not approved
  if (!isApproved) {
    const res = await alpAccount.approve(product);
    console.log("approve res: ", res);
  }
  console.log("approved: ", product);
  await alpAccount.buyProduct(product, amount);
};

const alpAccount = new Account();
  const walletType: AllowedWallet = "walletConnect";
  const chainId = 137 as AllowedChainId;
  const _productToBuy: AlpineProduct = "alpSave";
  const amountToBuy = 0.1;

const main = async () => {
  

  if (walletType === "walletConnect") {
    const modal = await initiateWeb3Modal();
    if (modal) await alpAccount.initWalletConnectProvider(modal);
  }

  console.log(
    `connecting to ${walletType} on chain ${chainId}`,
    { ALLOWED_CHAIN_IDS },
    ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
  );
  await connectAndWrite({ walletType, account: alpAccount, chainId });

  // console.log("sale state", await readAcc.saleIsActive());
  // console.log("whitelist state", await readAcc.whitelistSaleIsActive());
  // await alpAccount.switchWalletToAllowedNetwork(walletType, chainId);
  // await alpAccount.setSimulationMode(false);
  // await buy(alpAccount, _productToBuy, 2);

  // console.log("bought: ", _productToBuy, "of amount: ", 1);
  // console.log("basket bal after purchase ", await readAcc.getTokenInfo(_productToBuy));

  // await alpAccount.sellProduct(_productToBuy, 1);

  // console.log("sold: ", _productToBuy, "of amount: ", 1);
  // console.log("basket bal after sell ", await readAcc.getTokenInfo(_productToBuy));

  const tvlCap = await AlpineDeFiSDK.getTVLCap(_productToBuy);

  console.log("tvlCap: ", tvlCap);

  // const res = await alpAccount.isStrategyLiquid();
  // console.log({ res });
  // const requests = await alpAccount.getWithdrawalRequest();
  // console.log({ requests });
  // const allAssets = await alpAccount.getTotalWithdrawableAssets();
  // console.log({ allAssets });

  // await buy(alpAccount, _productToBuy);
  // const sell = await alpAccount.sellProduct("ssvEthUSDEarn", 1);
  // console.log("sell res: ", sell);

  console.log("exiting");
};

const handleButtonClick = () => {
  document.addEventListener(
    "click",
    async function (event) {
      if (!event || !event.target) return;

      const element = event.target as HTMLInputElement;

      // If the clicked element doesn't have the right selector, bail
      if (!element.matches("#buySell")) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      console.log(event.target);

      await alpAccount.switchWalletToAllowedNetwork(walletType, chainId);
  await alpAccount.setSimulationMode(false);
  await buy(alpAccount, _productToBuy, amountToBuy);

  console.log("bought: ", _productToBuy, "of amount: ", amountToBuy);

  await alpAccount.sellProduct(_productToBuy, amountToBuy);

  console.log("sold: ", _productToBuy, "of amount: ", amountToBuy);
    },
    false,
  );
};

const initiateWeb3Modal = async (): Promise<Web3Modal | undefined> => {
  try {
    const web3Modal = new Web3Modal({
      projectId: process.env.WALLETCONNECT_PROJECT_ID ?? "",
      walletConnectVersion: 2,
    });

    web3Modal.setTheme({
      themeMode: "light",
    });

    return web3Modal;
  } catch (err) {
    console.error("Error in initiateWeb3Modal", err);
  }
  return;
};

const handleSwitchNetwork = () => {
  document.addEventListener(
    "click",
    async function (event) {
      if (!event || !event.target) return;

      const element = event.target as HTMLInputElement;

      // If the clicked element doesn't have the right selector, bail
      if (!element.matches("#switchNetwork")) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      console.log(event.target);

        const _chainId = alpAccount.selectedChainId === 137 ? 1 : 137;
        await alpAccount.switchWalletToAllowedNetwork(walletType, _chainId);
        // await connectAndWrite({ walletType, account: alpAccount, chainId });

        // change button text to current network
        element.innerHTML = `Current Network: ${_chainId}, Switch to ${alpAccount.selectedChainId === 137 ? 1 : 137}`;

    },
    false,
  );
};

main();
handleButtonClick();
handleSwitchNetwork();
