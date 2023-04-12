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
exports.portfolioRebalance = exports.portfolioSell = exports.portfolioPurchase = exports.portfolioUpdate = void 0;
const product_1 = require("./product");
const types_1 = require("./types");
const ethers_1 = require("ethers");
const cache_1 = require("./cache");
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
const ALLOCSUM = 100;
function portfolioUpdate(buyAmounts, sellAmounts) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [];
        const contracts = (0, cache_1.getPolygonContracts)();
        const { router } = contracts;
        for (const product of types_1.polygonProducts) {
            const sellAmount = sellAmounts[product];
            if (sellAmount === undefined || Number(sellAmount) === 0)
                continue;
            const usdcAmount = (0, AlpineDeFiSDK_1._addDecimals)(sellAmount.toString(), 6);
            data.push(router.interface.encodeFunctionData("withdraw", [
                contracts[product].address,
                cache_1.userAddress,
                usdcAmount,
                ethers_1.ethers.BigNumber.from(2).pow(256).sub(1),
            ]));
        }
        for (const product of types_1.polygonProducts) {
            const buyAmount = buyAmounts[product];
            if (buyAmount === undefined || Number(buyAmount) === 0)
                continue;
            const usdcAmount = (0, AlpineDeFiSDK_1._addDecimals)(buyAmount.toString(), 6);
            data.push(router.interface.encodeFunctionData("depositToVault", [contracts[product].address, cache_1.userAddress, usdcAmount, 0]));
        }
        return (0, AlpineDeFiSDK_1.blockchainCall)(router, "multicall", [data]);
    });
}
exports.portfolioUpdate = portfolioUpdate;
function portfolioPurchase(allocations, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const buyAmounts = {};
        for (const product of types_1.polygonProducts) {
            buyAmounts[product] = ((allocations[product] * amount) / ALLOCSUM).toString();
        }
        return portfolioUpdate(buyAmounts, {});
    });
}
exports.portfolioPurchase = portfolioPurchase;
function portfolioSell(allocations, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const sellAmounts = {};
        for (const product of types_1.polygonProducts) {
            sellAmounts[product] = ((allocations[product] * amount) / ALLOCSUM).toString();
        }
        return portfolioUpdate({}, sellAmounts);
    });
}
exports.portfolioSell = portfolioSell;
function portfolioRebalance(allocations) {
    return __awaiter(this, void 0, void 0, function* () {
        // difference between current vs desired allocation * amount to buy or sell for every product
        const contracts = (0, cache_1.getPolygonContracts)();
        const user = cache_1.userAddress;
        const coinBalance = { alpLarge: ethers_1.ethers.BigNumber.from(0), alpSave: ethers_1.ethers.BigNumber.from(0) };
        let total = ethers_1.ethers.BigNumber.from(0);
        const buyAmounts = {};
        const sellAmounts = {};
        for (const product of types_1.polygonProducts) {
            const contract = contracts[product];
            const tokenBalance = yield contract.balanceOf(user);
            const dollarsBalance = yield (0, product_1.tokensFromShares)(product, tokenBalance);
            total = total.add(dollarsBalance);
            coinBalance[product] = dollarsBalance;
        }
        for (const product of types_1.polygonProducts) {
            // Ideal Amount is the desired proportion * total money
            const idealAmount = total.mul(allocations[product]).div(ALLOCSUM);
            const currentBalance = coinBalance[product];
            if (idealAmount > currentBalance) {
                const amount = idealAmount.sub(currentBalance);
                buyAmounts[product] = (0, AlpineDeFiSDK_1._removeDecimals)(amount, 6);
            }
            else if (currentBalance > idealAmount) {
                const amount = currentBalance.sub(idealAmount);
                sellAmounts[product] = (0, AlpineDeFiSDK_1._removeDecimals)(amount, 6);
            }
        }
        return portfolioUpdate(buyAmounts, sellAmounts);
    });
}
exports.portfolioRebalance = portfolioRebalance;
