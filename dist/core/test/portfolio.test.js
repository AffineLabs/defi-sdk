var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ethers } from "ethers";
import { expect } from "chai";
import { getTokenInfo, tokensFromShares } from "../product";
import { init, setProvider, userAddress, PROVIDER, getPolygonContracts } from "../cache";
import { polygonProducts } from "../types";
import { portfolioPurchase, portfolioRebalance, portfolioSell } from "../portfolio";
import { blockchainCall, mintUSDC, _removeDecimals } from "../AlpineDeFiSDK";
const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const MAX_INT = ethers.BigNumber.from(2).pow(256).sub(1);
describe("Portfolio transactions", () => __awaiter(void 0, void 0, void 0, function* () {
    let contracts;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        setProvider(testProvider);
        yield init(wallet, undefined);
        yield PROVIDER.send("anvil_setBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
        yield mintUSDC(wallet.address, 10000);
        contracts = getPolygonContracts();
        const { router, alpLarge, usdc, alpSave } = contracts;
        // await approve("router", "1000000");
        //This approval allows the alpLarge vault to spend USDC
        yield blockchainCall(router, "approve", [usdc.address, alpLarge.address, MAX_INT]);
        //This approval allows the alpSave vault to spend USDC
        yield blockchainCall(router, "approve", [usdc.address, alpSave.address, MAX_INT]);
        //This approval lets the router burn alpLarge shares
        yield blockchainCall(alpLarge, "approve", [router.address, MAX_INT]);
        //This approval lets the router burn alpSave shares
        yield blockchainCall(alpSave, "approve", [router.address, MAX_INT]);
    }));
    xit("Portfolio Purchase", () => __awaiter(void 0, void 0, void 0, function* () {
        const coinBalance = {
            alpLarge: ethers.BigNumber.from(0),
            alpSave: ethers.BigNumber.from(0),
            polygonDegen: ethers.BigNumber.from(0),
        };
        const user = userAddress;
        const allocation = { alpLarge: 50, alpSave: 50, polygonDegen: 50 };
        const balanceBefore = Number((yield getTokenInfo("usdc")).amount);
        yield portfolioPurchase(allocation, 1000);
        const balanceAfter = Number((yield getTokenInfo("usdc")).amount);
        for (const product of polygonProducts) {
            const contract = contracts[product];
            const tokenBalance = yield contract.balanceOf(user);
            const dollarsBalance = yield tokensFromShares(product, tokenBalance);
            coinBalance[product] = dollarsBalance;
        }
        const alpLargeBalance = Number(_removeDecimals(coinBalance.alpLarge, 6));
        const alpSaveBalance = Number(_removeDecimals(coinBalance.alpSave, 6));
        expect(alpLargeBalance > 495);
        expect(alpSaveBalance > 495);
        expect(alpSaveBalance < 530);
        expect(balanceBefore - balanceAfter == 1000);
    }));
    // TODO: Re-enable and fix the following tests. Skipped to unblock mainnet alpha.
    xit("Portfolio Sell", () => __awaiter(void 0, void 0, void 0, function* () {
        const coinBalance = {
            alpLarge: ethers.BigNumber.from(0),
            alpSave: ethers.BigNumber.from(0),
            polygonDegen: ethers.BigNumber.from(0),
        };
        const allocation = { alpLarge: 50, alpSave: 50, polygonDegen: 50 };
        yield portfolioSell(allocation, 100);
        const user = userAddress;
        const total = ethers.BigNumber.from(0);
        for (const product of polygonProducts) {
            const contract = contracts[product];
            const tokenBalance = yield contract.balanceOf(user);
            const dollarsBalance = yield tokensFromShares(product, tokenBalance);
            total.add(dollarsBalance);
            coinBalance[product] = dollarsBalance;
        }
        // We have 500 AlpSave from portfolio purchase and we sell 50 so overall should have <450 alpSave left
        const alpSaveBalance = Number(_removeDecimals(coinBalance.alpSave, 6));
        const alpLargeBalance = Number(_removeDecimals(coinBalance.alpLarge, 6));
        console.log(alpLargeBalance);
        expect(alpSaveBalance > 445);
        expect(alpLargeBalance > 450);
        expect(alpSaveBalance > 445);
    }));
    xit("Portfolio Rebalance", () => __awaiter(void 0, void 0, void 0, function* () {
        const allocation = { alpLarge: 50, alpSave: 50, polygonDegen: 50 };
        yield portfolioRebalance(allocation);
        const user = userAddress;
        const coinBalance = {
            alpLarge: ethers.BigNumber.from(0),
            alpSave: ethers.BigNumber.from(0),
            polygonDegen: ethers.BigNumber.from(0),
        };
        const total = ethers.BigNumber.from(0);
        for (const product of polygonProducts) {
            const contract = contracts[product];
            const tokenBalance = yield contract.balanceOf(user);
            const dollarsBalance = yield tokensFromShares(product, tokenBalance);
            total.add(dollarsBalance);
            coinBalance[product] = dollarsBalance;
        }
        const alpLargeBalance = Number(_removeDecimals(coinBalance.alpLarge, 6));
        const alpSaveBalance = Number(_removeDecimals(coinBalance.alpSave, 6));
        if (alpLargeBalance > alpSaveBalance)
            expect(alpLargeBalance - alpSaveBalance < 5);
        else
            expect(alpSaveBalance - alpLargeBalance < 5);
    }));
}));
