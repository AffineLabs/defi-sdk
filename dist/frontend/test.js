"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@web3modal/standalone");
const core_1 = require("../core");
const constants_1 = require("../core/constants");
const Account_1 = require("./Account");
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
const connectAndWrite = ({ walletType = "metamask", account, chainId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const email = process.env.EMAIL || "";
    // connect
    console.time("entire-connect");
    try {
        // switch to the chainId
        yield account.switchWalletToAllowedNetwork(walletType, chainId);
        console.log("connecting to", walletType, "on chain", chainId, account);
        yield account.connect({ walletType, chainId, email });
        const _address = yield account.getUserAddress();
        console.log("CONNECTED to address: ", _address);
        // we will update the DOM element of <p id="userAddress"> with the user address
        const userAddressElement = document.getElementById("userAddress");
        if (userAddressElement)
            userAddressElement.innerHTML = _address || "Not connected";
    }
    catch (error) {
        console.error("Error in connect: ", error);
    }
    console.timeEnd("entire-connect");
    // await testRead(account.userAddress || "", chainId);
});
const buy = (alpAccount, product, amount) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user is approved max amount
    const isApproved = yield alpAccount.isApproved(product, 1);
    console.log("isApproved: ", isApproved);
    // approve max amount if not approved
    if (!isApproved) {
        const res = yield alpAccount.approve(product);
        console.log("approve res: ", res);
    }
    console.log("approved: ", product);
    yield alpAccount.buyProduct(product, amount);
});
const alpAccount = new Account_1.Account();
const walletType = "walletConnect";
const chainId = 137;
const _productToBuy = "alpSave";
const amountToBuy = 0.1;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    if (walletType === "walletConnect") {
        const modal = yield initiateWeb3Modal();
        if (modal)
            yield alpAccount.initWalletConnectProvider(modal);
    }
    console.log(`connecting to ${walletType} on chain ${chainId}`, { ALLOWED_CHAIN_IDS: constants_1.ALLOWED_CHAIN_IDS }, constants_1.ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`));
    yield connectAndWrite({ walletType, account: alpAccount, chainId });
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
    const tvlCap = yield core_1.AlpineDeFiSDK.getTVLCap(_productToBuy);
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
});
const handleButtonClick = () => {
    document.addEventListener("click", function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!event || !event.target)
                return;
            const element = event.target;
            // If the clicked element doesn't have the right selector, bail
            if (!element.matches("#buySell"))
                return;
            // Don't follow the link
            event.preventDefault();
            // Log the clicked element in the console
            console.log(event.target);
            yield alpAccount.switchWalletToAllowedNetwork(walletType, chainId);
            yield alpAccount.setSimulationMode(false);
            yield buy(alpAccount, _productToBuy, amountToBuy);
            console.log("bought: ", _productToBuy, "of amount: ", amountToBuy);
            yield alpAccount.sellProduct(_productToBuy, amountToBuy);
            console.log("sold: ", _productToBuy, "of amount: ", amountToBuy);
        });
    }, false);
};
const initiateWeb3Modal = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const web3Modal = new standalone_1.Web3Modal({
            projectId: (_a = process.env.WALLETCONNECT_PROJECT_ID) !== null && _a !== void 0 ? _a : "",
            walletConnectVersion: 2,
        });
        web3Modal.setTheme({
            themeMode: "light",
        });
        return web3Modal;
    }
    catch (err) {
        console.error("Error in initiateWeb3Modal", err);
    }
    return;
});
const handleSwitchNetwork = () => {
    document.addEventListener("click", function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!event || !event.target)
                return;
            const element = event.target;
            // If the clicked element doesn't have the right selector, bail
            if (!element.matches("#switchNetwork"))
                return;
            // Don't follow the link
            event.preventDefault();
            // Log the clicked element in the console
            console.log(event.target);
            const _chainId = alpAccount.selectedChainId === 137 ? 1 : 137;
            yield alpAccount.switchWalletToAllowedNetwork(walletType, _chainId);
            // await connectAndWrite({ walletType, account: alpAccount, chainId });
            const tokenInfo = yield alpAccount.getTokenInfo("usdc");
            console.log("tokenInfo: ", tokenInfo);
            // change button text to current network
            element.innerHTML = `Current Network: ${_chainId}, Switch to ${alpAccount.selectedChainId === 137 ? 1 : 137}`;
        });
    }, false);
};
main();
handleButtonClick();
handleSwitchNetwork();
