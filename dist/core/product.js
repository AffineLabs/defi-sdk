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
exports.sharesFromTokens = exports.tokensFromShares = exports.getTokenInfo = exports.sellEthWethShares = exports.sellBtCEthShares = exports.buyBtCEthShares = exports.sellVault = exports.buyVault = exports.sellProduct = exports.buyProduct = void 0;
const ethers_1 = require("ethers");
const tokens_1 = require("../typechain/factories/solmate/src/tokens");
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
const cache_1 = require("./cache");
const constants_1 = require("./constants");
function _getVaultAndAsset(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, alpLarge, polygonDegen } = (0, cache_1.getPolygonContracts)();
        const { ethEarn, ethWethEarn, ssvEthUSDEarn, degen } = (0, cache_1.getEthContracts)();
        const productToVault = {
            alpSave,
            alpLarge: alpLarge,
            polygonDegen,
            ethEarn,
            ethWethEarn,
            ssvEthUSDEarn,
            degen,
        };
        const vault = productToVault[product];
        const asset = tokens_1.ERC20__factory.connect(yield vault.asset(), vault.provider);
        return { vault, asset };
    });
}
function buyProduct(product, amount, slippageBps = 500) {
    return __awaiter(this, void 0, void 0, function* () {
        const { vault, asset } = yield _getVaultAndAsset(product);
        return buyVault(vault, amount, asset);
    });
}
exports.buyProduct = buyProduct;
function sellProduct(product, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { vault, asset } = yield _getVaultAndAsset(product);
        return sellVault(vault, amount, asset);
    });
}
exports.sellProduct = sellProduct;
function buyVault(vault, rawAmount, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        const decimals = yield asset.decimals();
        const amount = (0, AlpineDeFiSDK_1._addDecimals)(rawAmount.toString(), decimals);
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amount.toString(),
            tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(yield vault.convertToShares(amount), yield vault.decimals()),
        };
        if (cache_1.SIMULATE) {
            const dryRunInfo = (yield (0, AlpineDeFiSDK_1.blockchainCall)(vault, "deposit", [amount, cache_1.userAddress], true));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(vault, "deposit", [amount, cache_1.userAddress], false));
            return Object.assign(Object.assign({}, basicInfo), receipt);
        }
    });
}
exports.buyVault = buyVault;
function sellVault(vault, rawAmount, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        const assetsToWithdraw = (0, AlpineDeFiSDK_1._addDecimals)(rawAmount.toString(), yield asset.decimals());
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: rawAmount.toString(),
            tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(yield vault.convertToShares(assetsToWithdraw), yield vault.decimals()),
        };
        if (cache_1.SIMULATE) {
            const dryRunInfo = (yield (0, AlpineDeFiSDK_1.blockchainCall)(vault, "withdraw", [assetsToWithdraw, cache_1.userAddress, cache_1.userAddress], true));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(vault, "withdraw", [assetsToWithdraw, cache_1.userAddress, cache_1.userAddress], false));
            return Object.assign(Object.assign({}, basicInfo), receipt);
        }
    });
}
exports.sellVault = sellVault;
function buyEthWethShares(amountWeth) {
    return __awaiter(this, void 0, void 0, function* () {
        const { weth, ethWethEarn, router } = (0, cache_1.getEthContracts)();
        const shareDecimals = yield ethWethEarn.decimals();
        const ethDecimals = 18;
        const amount = (0, AlpineDeFiSDK_1._addDecimals)(amountWeth.toString(), ethDecimals);
        if (amount.isNegative() || amount.isZero()) {
            throw new Error("amount must be positive.");
        }
        const walletBalance = yield cache_1.PROVIDER.getBalance(cache_1.userAddress);
        if (walletBalance.lt(amount)) {
            throw new Error("Insufficient balance");
        }
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            // TODO: Dollar amount is not right given the amount is weth amount. But populated
            // for the sake of backward compatibility.
            dollarAmount: amountWeth.toString(),
            tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(yield ethWethEarn.convertToShares(amount), shareDecimals),
        };
        const data = [];
        data.push(router.interface.encodeFunctionData("depositNative"));
        data.push(router.interface.encodeFunctionData("approve", [weth.address, ethWethEarn.address, constants_1.MAX_UINT]));
        data.push(router.interface.encodeFunctionData("deposit", [ethWethEarn.address, cache_1.userAddress, amount, 0]));
        const beforeBal = yield ethWethEarn.balanceOf(cache_1.userAddress);
        console.log({ amount });
        if (cache_1.SIMULATE) {
            const dryRunInfo = (yield (0, AlpineDeFiSDK_1.blockchainCall)(router, "multicall", [data], true, amount));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(router, "multicall", [data], false, amount));
            const afterBal = yield ethWethEarn.balanceOf(cache_1.userAddress);
            const amountChanged = afterBal.sub(beforeBal);
            const res = Object.assign(Object.assign(Object.assign({}, basicInfo), receipt), { tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(amountChanged, shareDecimals) });
            return res;
        }
    });
}
function buyBtCEthShares(amountUSDC, slippageBps) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpLarge, router, usdc } = (0, cache_1.getPolygonContracts)();
        const amount = (0, AlpineDeFiSDK_1._addDecimals)(amountUSDC.toString(), 6);
        const expectedShares = yield sharesFromTokens("alpLarge", amount);
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amountUSDC.toString(),
            tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(expectedShares, 18),
        };
        const data = [];
        data.push(router.interface.encodeFunctionData("approve", [usdc.address, alpLarge.address, constants_1.MAX_UINT]));
        data.push(router.interface.encodeFunctionData("depositToVault", [
            alpLarge.address,
            cache_1.userAddress,
            amount,
            expectedShares.mul(10000 - slippageBps).div(10000),
        ]));
        const beforeBal = yield alpLarge.balanceOf(cache_1.userAddress);
        if (cache_1.SIMULATE) {
            const dryRunInfo = (yield (0, AlpineDeFiSDK_1.blockchainCall)(router, "multicall", [data], true));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(router, "multicall", [data], false));
            const afterBal = yield alpLarge.balanceOf(cache_1.userAddress);
            const amountChanged = afterBal.sub(beforeBal);
            const res = Object.assign(Object.assign(Object.assign({}, basicInfo), receipt), { tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(amountChanged, 18) });
            return res;
        }
    });
}
exports.buyBtCEthShares = buyBtCEthShares;
function sellBtCEthShares(amountUSDC) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpLarge } = (0, cache_1.getPolygonContracts)();
        // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
        const usdcToWithdraw = (0, AlpineDeFiSDK_1._addDecimals)(amountUSDC.toString(), 6);
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amountUSDC.toString(),
            tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(yield sharesFromTokens("alpLarge", usdcToWithdraw), 18),
        };
        if (cache_1.SIMULATE) {
            const gasEstimate = ethers_1.ethers.BigNumber.from(100e3);
            const gasPrice = yield cache_1.PROVIDER.getGasPrice();
            const txnCost = ethers_1.ethers.utils.formatEther(gasEstimate.mul(gasPrice));
            const dryRunInfo = {
                txnCost,
                gasPrice: ethers_1.ethers.utils.formatEther(gasPrice),
            };
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            // We only support redeem via the sdk
            // Get the share amount we want to burn
            const shares = yield _convertToShares(usdcToWithdraw);
            const receipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(alpLarge, "redeem(uint256,address,address,uint256)", [shares, cache_1.userAddress, cache_1.userAddress, usdcToWithdraw.mul(95).div(100)], false));
            const res = Object.assign(Object.assign(Object.assign({}, basicInfo), receipt), { tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(shares, 18) });
            return res;
        }
    });
}
exports.sellBtCEthShares = sellBtCEthShares;
/**
 * Sell from eth weth vault shares.
 * @param amountWeth Amount in weth to sell
 */
function sellEthWethShares(amountWeth) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ethWethEarn, weth } = (0, cache_1.getEthContracts)();
        // TODO: this only works if amountWeth has less than 18 decimals. Handle other case
        const wethToWithdraw = (0, AlpineDeFiSDK_1._addDecimals)(amountWeth.toString(), yield weth.decimals());
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amountWeth.toString(),
            tokenAmount: (0, AlpineDeFiSDK_1._removeDecimals)(yield ethWethEarn.convertToShares(wethToWithdraw), yield ethWethEarn.decimals()),
        };
        if (cache_1.SIMULATE) {
            const dryRunInfo = (yield (0, AlpineDeFiSDK_1.blockchainCall)(ethWethEarn, "withdraw", [wethToWithdraw, cache_1.userAddress, cache_1.userAddress], true));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(ethWethEarn, "withdraw", [wethToWithdraw, cache_1.userAddress, cache_1.userAddress], false));
            return Object.assign(Object.assign({}, basicInfo), receipt);
        }
    });
}
exports.sellEthWethShares = sellEthWethShares;
// Convert usdc to a share amount to be passed to `redeem` (for alpLarge only)
function _convertToShares(amountUSDC) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpLarge } = (0, cache_1.getPolygonContracts)();
        const userShares = yield alpLarge.balanceOf(cache_1.userAddress);
        const shares = yield sharesFromTokens("alpLarge", amountUSDC);
        return shares.gt(userShares) ? userShares : shares;
    });
}
function getTokenInfo(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = cache_1.userAddress;
        if (product === "usdc") {
            const { usdc } = (0, cache_1.getContracts)();
            const amount = yield usdc.balanceOf(user);
            const numUsdc = (0, AlpineDeFiSDK_1._removeDecimals)(amount, 6);
            return {
                amount: numUsdc,
                price: "1",
                equity: numUsdc,
            };
        }
        let contract;
        if (product === "ethEarn" || product === "ethWethEarn" || product === "ssvEthUSDEarn" || product === "degen") {
            contract = (0, cache_1.getEthContracts)()[product];
        }
        else {
            contract = (0, cache_1.getPolygonContracts)()[product];
        }
        const amount = yield contract.balanceOf(user);
        // price number of decimals of the share token
        const { num, decimals } = yield contract.detailedPrice();
        const amountDecimals = ethers_1.ethers.BigNumber.from(yield contract.decimals());
        const equity = amount.mul(num);
        return {
            amount: (0, AlpineDeFiSDK_1._removeDecimals)(amount, amountDecimals),
            price: (0, AlpineDeFiSDK_1._removeDecimals)(num, decimals),
            equity: (0, AlpineDeFiSDK_1._removeDecimals)(equity, amountDecimals.add(decimals)),
        };
    });
}
exports.getTokenInfo = getTokenInfo;
// Only used in (unused) portfolio code
function tokensFromShares(product, shareAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (product === "alpSave") {
            const { alpSave } = (0, cache_1.getPolygonContracts)();
            const tokens = yield alpSave.convertToAssets(shareAmount);
            return tokens;
        }
        else {
            // alpLarge
            const { alpLarge } = (0, cache_1.getPolygonContracts)();
            const totalDollars = yield alpLarge.valueOfVault();
            const totalSupply = yield alpLarge.totalSupply();
            if (totalDollars.eq(0))
                return shareAmount.mul(100); // $100 usdc per share to start with
            // totalDollars / totalShares * numShares
            const dollars = totalDollars.mul(shareAmount).div(totalSupply);
            // The token we're talking about is USDC here, which only has 6 decimals.
            return dollars.div(1e2);
        }
    });
}
exports.tokensFromShares = tokensFromShares;
// Only used for alpLarge conversions
function sharesFromTokens(product, tokenAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (product === "alpSave") {
            const { alpSave } = (0, cache_1.getPolygonContracts)();
            const shares = yield alpSave.convertToShares(tokenAmount);
            return shares;
        }
        if (product === "alpLarge") {
            // alpLarge
            const { alpLarge } = (0, cache_1.getPolygonContracts)();
            // TODO: let the contract take care of pricing
            const totalDollars = yield alpLarge.valueOfVault();
            console.log({ totalDollars });
            // $100 usdc per share to start with => usdc * alpLarge / usdc
            if (totalDollars.eq(0))
                return tokenAmount.mul(ethers_1.ethers.BigNumber.from(10).pow(18)).div(100e6);
            // totalSupply / totalDollars * dollars
            // dollars given by btc/eth vault actually have 8 decimals
            const totalSupply = yield alpLarge.totalSupply();
            // convert tokenAmount (a USDC amount with 6 decimals) to dollar amount (8 decimals)
            const shares = totalSupply.mul(tokenAmount.mul(1e2)).div(totalDollars);
            return shares;
        }
        return ethers_1.ethers.BigNumber.from(0);
    });
}
exports.sharesFromTokens = sharesFromTokens;
