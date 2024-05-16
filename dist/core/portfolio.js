var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { tokensFromShares } from "./product";
import { polygonProducts } from "./types";
import { ethers } from "ethers";
import { getPolygonContracts, userAddress } from "./cache";
import { blockchainCall, _addDecimals, _removeDecimals } from "./AlpineDeFiSDK";
const ALLOCSUM = 100;
export function portfolioUpdate(buyAmounts, sellAmounts) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [];
        const contracts = getPolygonContracts();
        const { router } = contracts;
        for (const product of polygonProducts) {
            const sellAmount = sellAmounts[product];
            if (sellAmount === undefined || Number(sellAmount) === 0)
                continue;
            const usdcAmount = _addDecimals(sellAmount.toString(), 6);
            data.push(router.interface.encodeFunctionData("withdraw", [
                contracts[product].address,
                userAddress,
                usdcAmount,
                ethers.BigNumber.from(2).pow(256).sub(1),
            ]));
        }
        for (const product of polygonProducts) {
            const buyAmount = buyAmounts[product];
            if (buyAmount === undefined || Number(buyAmount) === 0)
                continue;
            const usdcAmount = _addDecimals(buyAmount.toString(), 6);
            data.push(router.interface.encodeFunctionData("depositToVault", [contracts[product].address, userAddress, usdcAmount, 0]));
        }
        return blockchainCall(router, "multicall", [data]);
    });
}
export function portfolioPurchase(allocations, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const buyAmounts = {};
        for (const product of polygonProducts) {
            buyAmounts[product] = ((allocations[product] * amount) / ALLOCSUM).toString();
        }
        return portfolioUpdate(buyAmounts, {});
    });
}
export function portfolioSell(allocations, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const sellAmounts = {};
        for (const product of polygonProducts) {
            sellAmounts[product] = ((allocations[product] * amount) / ALLOCSUM).toString();
        }
        return portfolioUpdate({}, sellAmounts);
    });
}
export function portfolioRebalance(allocations) {
    return __awaiter(this, void 0, void 0, function* () {
        // difference between current vs desired allocation * amount to buy or sell for every product
        const contracts = getPolygonContracts();
        const user = userAddress;
        const coinBalance = {
            alpLarge: ethers.BigNumber.from(0),
            alpSave: ethers.BigNumber.from(0),
            polygonDegen: ethers.BigNumber.from(0),
        };
        let total = ethers.BigNumber.from(0);
        const buyAmounts = {};
        const sellAmounts = {};
        for (const product of polygonProducts) {
            const contract = contracts[product];
            const tokenBalance = yield contract.balanceOf(user);
            const dollarsBalance = yield tokensFromShares(product, tokenBalance);
            total = total.add(dollarsBalance);
            coinBalance[product] = dollarsBalance;
        }
        for (const product of polygonProducts) {
            // Ideal Amount is the desired proportion * total money
            const idealAmount = total.mul(allocations[product]).div(ALLOCSUM);
            const currentBalance = coinBalance[product];
            if (idealAmount > currentBalance) {
                const amount = idealAmount.sub(currentBalance);
                buyAmounts[product] = _removeDecimals(amount, 6);
            }
            else if (currentBalance > idealAmount) {
                const amount = currentBalance.sub(idealAmount);
                sellAmounts[product] = _removeDecimals(amount, 6);
            }
        }
        return portfolioUpdate(buyAmounts, sellAmounts);
    });
}
