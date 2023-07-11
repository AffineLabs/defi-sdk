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
const constants_1 = require("../core/constants");
const Account_1 = require("./Account");
const getTokenInfo = (token, readAcc) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _tokenInfo = yield readAcc.getTokenInfo(token);
        console.log(token, " token: ", _tokenInfo);
    }
    catch (error) {
        console.error("Error in getTokenInfo: ", token, error);
    }
});
const testRead = (user, chainId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const readAcc = new Account_1.ReadAccount(user || "", chainId);
        yield readAcc.init();
        const gas = yield readAcc.getGasPrice();
        const balance = yield readAcc.getGasBalance();
        console.log({ gas, balance });
        yield getTokenInfo("usdc", readAcc);
        yield getTokenInfo("weth", readAcc);
        if (chainId === 80001 || chainId === 137) {
            yield getTokenInfo("alpSave", readAcc);
            yield getTokenInfo("alpLarge", readAcc);
        }
        else {
            yield getTokenInfo("ethEarn", readAcc);
            yield getTokenInfo("degen", readAcc);
        }
    }
    catch (error) {
        console.error("Error in read account: ", error);
    }
});
const connectAndWrite = ({ walletType = "metamask", account, chainId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const email = process.env.EMAIL || "";
    // connect
    console.time("entire-connect");
    try {
        if (walletType === "metamask") {
            // switch to the chainId
            yield account.switchWalletToAllowedNetwork(walletType, chainId);
        }
        console.log("connecting to", walletType, "on chain", chainId, account);
        yield account.connect({ walletType, chainId, email });
        console.log("address: ", yield account.getUserAddress());
    }
    catch (error) {
        console.error("Error in connect: ", error);
    }
    console.timeEnd("entire-connect");
    yield testRead(account.userAddress || "", chainId);
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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const alpAccount = new Account_1.Account();
    const walletType = "metamask";
    const chainId = 137;
    const _productToBuy = "polygonLeverage";
    console.log(`connecting to ${walletType} on chain ${chainId}`, { ALLOWED_CHAIN_IDS: constants_1.ALLOWED_CHAIN_IDS }, constants_1.ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`));
    yield connectAndWrite({ walletType, account: alpAccount, chainId });
    const readAcc = new Account_1.ReadAccount(alpAccount.userAddress || "", chainId);
    yield readAcc.init();
    console.log("usdc bal: ", yield readAcc.getTokenInfo("usdc"));
    console.log("native bal: ", yield readAcc.getGasBalance());
    console.log("basket bal: ", yield readAcc.getTokenInfo(_productToBuy));
    yield alpAccount.setSimulationMode(false);
    yield buy(alpAccount, _productToBuy, 2);
    console.log("bought: ", _productToBuy, "of amount: ", 1);
    console.log("basket bal after purchase ", yield readAcc.getTokenInfo(_productToBuy));
    yield alpAccount.sellProduct(_productToBuy, 1);
    console.log("sold: ", _productToBuy, "of amount: ", 1);
    console.log("basket bal after sell ", yield readAcc.getTokenInfo(_productToBuy));
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
            if (!element.matches("#switchToPolygon"))
                return;
            // Don't follow the link
            event.preventDefault();
            // Log the clicked element in the console
            console.log(event.target);
            const account = new Account_1.Account();
            console.log("Eth", window.ethereum);
            try {
                yield account.connect({ walletType: "coinbase", chainId: constants_1.DEFAULT_RAW_CHAIN_ID });
            }
            catch (error) {
                console.log("ERROR ===>", error);
            }
            // await account.connect({ walletType: "metamask" });
            console.log("Metamask connected!!");
            const isConnected = yield account.isConnectedToTheGivenChainId("coinbase", constants_1.DEFAULT_RAW_CHAIN_ID);
            if (!isConnected) {
                yield account.switchWalletToAllowedNetwork("metamask", constants_1.DEFAULT_RAW_CHAIN_ID);
            }
            console.log({ isConnected });
        });
    }, false);
};
main();
handleButtonClick();
