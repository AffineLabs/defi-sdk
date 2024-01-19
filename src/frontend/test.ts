// import { AlpineDeFiSDK } from "../core";
import { ALLOWED_CHAIN_IDS, DEFAULT_RAW_CHAIN_ID, WITHDRAW_SLIPPAGE_BY_PRODUCT } from "../core/constants";
import { AlpineProduct } from "../core/types";
import { AllowedChainId, AllowedWallet } from "../types/account";
import { Account, ReadAccount } from "./Account";

const getTokenInfo = async (token: AlpineProduct | "usdc" | "weth", readAcc: ReadAccount) => {
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
    await getTokenInfo("weth", readAcc);

    if (chainId === 80001 || chainId === 137) {
      await getTokenInfo("alpSave", readAcc);
      await getTokenInfo("alpLarge", readAcc);
    } else {
      await getTokenInfo("ethEarn", readAcc);
      await getTokenInfo("degen", readAcc);
    }
  } catch (error) {
    console.error("Error in read account: ", error);
  }
};
const connectAndRead = async ({
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

const main = async () => {
  const alpAccount = new Account();
  const walletType = "metamask";
  const chainId = 137 as AllowedChainId;
  const _productToBuy: AlpineProduct = "polygonLevMaticX";
  const _amountToBuy = 0.01;

  console.log(
    `connecting to ${walletType} on chain ${chainId}`,
    { ALLOWED_CHAIN_IDS },
    ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
  );
  await connectAndRead({ walletType, account: alpAccount, chainId });
  const readAcc = new ReadAccount(alpAccount.userAddress || "", chainId);
  await readAcc.init();
  // console.log("usdc bal: ", await readAcc.getTokenInfo("usdc"));
  // console.log("native bal: ", await readAcc.getGasBalance());
  console.log("basket bal of:",_productToBuy, await readAcc.getTokenInfo(_productToBuy));

  // console.log("withdrawSlippageByProduct 2", WITHDRAW_SLIPPAGE_BY_PRODUCT);
  // console.log("withdrawSlippageByProduct", alpAccount.withdrawSlippageByProduct);

  let _isApproved;
  _isApproved = await alpAccount.isApproved(_productToBuy,_amountToBuy);
  console.log("isApproved: ", _isApproved);
  if(!_isApproved){
    // approve max amount if not approved
    const _approve = await alpAccount.approve(_productToBuy);
    console.log("approve res: ", _approve);
    console.log("approved: ", _productToBuy);
    _isApproved = await alpAccount.isApproved(_productToBuy, _amountToBuy);
    console.log("isApproved after `approve`: ", _isApproved);
  }

  if(_isApproved){
    alpAccount.setSimulationMode(false);
    const _buy = await alpAccount.buyProduct(_productToBuy, _amountToBuy);
    console.log("buy res: ", _buy);
    console.log("bought: ", _productToBuy, "of amount: ", _amountToBuy);
    console.log("basket bal after purchase ", await readAcc.getTokenInfo(_productToBuy));
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
