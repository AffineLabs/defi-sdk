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
// Implementation of erc20, as contract uses two erc20 implementation oz, solmate,
// replacing it with mockERC20 which is an extension of ERC20
import { MockERC20__factory } from "../typechain";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { getBaseContracts, getContracts, getEthContracts, getPolygonContracts, PROVIDER, SIMULATE, userAddress, } from "./cache";
import { MAX_UINT } from "./constants";
function _getVaultAndAsset(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, alpLarge, polygonDegen, polygonLeverage, polygonLevMaticX, polygon6xLevMaticX } = getPolygonContracts();
        const { ethEarn, ethWethEarn, ssvEthUSDEarn, degen, ethLeverage } = getEthContracts();
        const { baseUsdEarn, baseLeverage } = getBaseContracts();
        const { router } = getContracts();
        const productToVault = {
            alpSave,
            alpLarge: alpLarge,
            polygonDegen,
            ethEarn,
            ethWethEarn,
            ssvEthUSDEarn,
            degen,
            ethLeverage,
            polygonLeverage,
            baseUsdEarn,
            baseLeverage,
            polygonLevMaticX,
            polygon6xLevMaticX,
        };
        const vault = productToVault[product];
        if (!vault)
            throw new Error("Invalid product");
        const asset = MockERC20__factory.connect(yield vault.asset(), vault.provider);
        return { vault, asset, router };
    });
}
export function buyProduct(product, amount, slippageBps = 500) {
    return __awaiter(this, void 0, void 0, function* () {
        const { vault, asset, router } = yield _getVaultAndAsset(product);
        if (product == "alpLarge") {
            return buyBtCEthShares(vault, amount, slippageBps, asset, router);
        }
        else if (["ethWethEarn", "ethLeverage", "baseLeverage", "polygonLevMaticX", "polygon6xLevMaticX"].includes(product)) {
            return buySharesByEthThroughWeth(amount, vault, asset);
        }
        return buyVault(vault, amount, asset);
    });
}
export function sellProduct(product, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { vault, asset } = yield _getVaultAndAsset(product);
        if (product == "alpLarge") {
            return sellBtCEthShares(vault, amount, asset);
        }
        return sellVault(vault, amount, asset);
    });
}
function getBasicTxInfo(vault, rawAssets, // assets without decimals, e.g. "100" for 100 USDC
assetDecimals) {
    return __awaiter(this, void 0, void 0, function* () {
        const assets = _addDecimals(rawAssets.toString(), assetDecimals);
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: rawAssets.toString(),
            tokenAmount: _removeDecimals(yield vault.convertToShares(assets), yield vault.decimals()),
        };
        return {
            assets,
            basicInfo,
        };
    });
}
export function buyVault(vault, rawAssets, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        const { assets, basicInfo } = yield getBasicTxInfo(vault, rawAssets, yield asset.decimals());
        console.log("buying", { asset, basicInfo });
        const receipt = SIMULATE
            ? (yield blockchainCall(vault, "deposit", [assets, userAddress], true))
            : (yield blockchainCall(vault, "deposit", [assets, userAddress], false));
        return Object.assign(Object.assign({}, basicInfo), receipt);
    });
}
export function sellVault(vault, rawAssets, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        const { assets, basicInfo } = yield getBasicTxInfo(vault, rawAssets, yield asset.decimals());
        const receipt = SIMULATE
            ? (yield blockchainCall(vault, "withdraw", [assets, userAddress, userAddress], true))
            : (yield blockchainCall(vault, "withdraw", [assets, userAddress, userAddress], false));
        return Object.assign(Object.assign({}, basicInfo), receipt);
    });
}
function buySharesByEthThroughWeth(amountWeth, vault, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        const ethDecimals = 18;
        const { assets: amount, basicInfo } = yield getBasicTxInfo(vault, amountWeth, ethDecimals);
        const { router } = getContracts();
        const shareDecimals = yield vault.decimals();
        if (amount.isNegative() || amount.isZero()) {
            throw new Error("amount must be positive.");
        }
        const walletBalance = yield PROVIDER.getBalance(userAddress);
        if (walletBalance.lt(amount)) {
            throw new Error("Insufficient balance");
        }
        const data = [];
        data.push(router.interface.encodeFunctionData("depositNative"));
        data.push(router.interface.encodeFunctionData("approve", [asset.address, vault.address, MAX_UINT]));
        data.push(router.interface.encodeFunctionData("deposit", [vault.address, userAddress, amount, 0]));
        const beforeBal = yield vault.balanceOf(userAddress);
        if (SIMULATE) {
            const dryRunInfo = (yield blockchainCall(router, "multicall", [data], true, amount));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield blockchainCall(router, "multicall", [data], false, amount));
            const afterBal = yield vault.balanceOf(userAddress);
            const amountChanged = afterBal.sub(beforeBal);
            const res = Object.assign(Object.assign(Object.assign({}, basicInfo), receipt), { tokenAmount: _removeDecimals(amountChanged, shareDecimals) });
            return res;
        }
    });
}
export function buyBtCEthShares(alpLarge, amountUSDC, slippageBps, usdc, router) {
    return __awaiter(this, void 0, void 0, function* () {
        // const { alpLarge, router, usdc } = getPolygonContracts();
        const amount = _addDecimals(amountUSDC.toString(), yield usdc.decimals());
        const expectedShares = yield sharesFromTokens("alpLarge", amount);
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amountUSDC.toString(),
            tokenAmount: _removeDecimals(expectedShares, yield alpLarge.decimals()),
        };
        const data = [];
        data.push(router.interface.encodeFunctionData("approve", [usdc.address, alpLarge.address, MAX_UINT]));
        data.push(router.interface.encodeFunctionData("depositToVault", [
            alpLarge.address,
            userAddress,
            amount,
            expectedShares.mul(10000 - slippageBps).div(10000),
        ]));
        const beforeBal = yield alpLarge.balanceOf(userAddress);
        if (SIMULATE) {
            const dryRunInfo = (yield blockchainCall(router, "multicall", [data], true));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield blockchainCall(router, "multicall", [data], false));
            const afterBal = yield alpLarge.balanceOf(userAddress);
            const amountChanged = afterBal.sub(beforeBal);
            const res = Object.assign(Object.assign(Object.assign({}, basicInfo), receipt), { tokenAmount: _removeDecimals(amountChanged, 18) });
            return res;
        }
    });
}
export function sellBtCEthShares(alpLarge, amountUSDC, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: this only works if amountUSDC has less than 6 decimals. Handle other case
        const usdcToWithdraw = _addDecimals(amountUSDC.toString(), yield asset.decimals());
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amountUSDC.toString(),
            tokenAmount: _removeDecimals(yield sharesFromTokens("alpLarge", usdcToWithdraw), yield alpLarge.decimals()),
        };
        if (SIMULATE) {
            const gasEstimate = ethers.BigNumber.from(100e3);
            const gasPrice = yield PROVIDER.getGasPrice();
            const txnCost = ethers.utils.formatEther(gasEstimate.mul(gasPrice));
            const dryRunInfo = {
                txnCost,
                gasPrice: ethers.utils.formatEther(gasPrice),
            };
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            // We only support redeem via the sdk
            // Get the share amount we want to burn
            const shares = yield _convertToShares(usdcToWithdraw);
            const receipt = (yield blockchainCall(alpLarge, "redeem(uint256,address,address,uint256)", [shares, userAddress, userAddress, usdcToWithdraw.mul(95).div(100)], false));
            const res = Object.assign(Object.assign(Object.assign({}, basicInfo), receipt), { tokenAmount: _removeDecimals(shares, 18) });
            return res;
        }
    });
}
// Convert usdc to a share amount to be passed to `redeem` (for alpLarge only)
function _convertToShares(amountUSDC) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpLarge } = getPolygonContracts();
        const userShares = yield alpLarge.balanceOf(userAddress);
        const shares = yield sharesFromTokens("alpLarge", amountUSDC);
        return shares.gt(userShares) ? userShares : shares;
    });
}
export function getTokenInfo(product, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = userAddress;
        const { router } = getContracts();
        if (product === "usdc") {
            const { usdc } = getContracts();
            const amount = yield usdc.balanceOf(user);
            console.log("USDC amount w/ decimals", amount.toString(), { usdc });
            const numUsdc = _removeDecimals(amount, 6);
            return {
                amount: numUsdc,
                price: "1",
                equity: numUsdc,
            };
        }
        else if (product === "weth") {
            const { weth } = getContracts();
            const amount = yield weth.balanceOf(user);
            console.log("WETH amount w/ decimals", amount.toString(), { weth });
            const numWeth = _removeDecimals(amount, 18);
            return {
                amount: numWeth,
                price: "1",
                equity: numWeth,
            };
        }
        else if (token != undefined) {
            const asset = MockERC20__factory.connect(token, router.provider);
            const amount = yield asset.balanceOf(user);
            const assetAmount = _removeDecimals(amount, yield asset.decimals());
            return {
                amount: assetAmount,
                price: "1",
                equity: assetAmount,
            };
        }
        const { alpSave, alpLarge, ethEarn, ethWethEarn, ssvEthUSDEarn, degen, polygonDegen, ethLeverage, polygonLeverage, baseUsdEarn, baseLeverage, polygonLevMaticX, polygon6xLevMaticX, affineReStaking, } = getContracts();
        const productToContract = {
            alpSave,
            ethEarn,
            ssvEthUSDEarn,
            degen,
            polygonDegen,
            ethLeverage,
            polygonLeverage,
            alpLarge,
            ethWethEarn,
            baseLeverage,
            baseUsdEarn,
            polygonLevMaticX,
            polygon6xLevMaticX,
            affineReStaking,
        };
        const contract = productToContract[product];
        if (!contract)
            throw new Error("Invalid product");
        const amount = yield contract.balanceOf(user);
        // price number of decimals of the share token
        const { num, decimals } = yield contract.detailedPrice();
        const amountDecimals = ethers.BigNumber.from(yield contract.decimals());
        const equity = amount.mul(num);
        return {
            amount: _removeDecimals(amount, amountDecimals),
            price: _removeDecimals(num, decimals),
            equity: _removeDecimals(equity, amountDecimals.add(decimals)),
        };
    });
}
// Only used in (unused) portfolio code
export function tokensFromShares(product, shareAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (product === "alpSave") {
            const { alpSave } = getPolygonContracts();
            const tokens = yield alpSave.convertToAssets(shareAmount);
            return tokens;
        }
        else {
            // alpLarge
            const { alpLarge } = getPolygonContracts();
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
// Only used for alpLarge conversions
export function sharesFromTokens(product, tokenAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (product === "alpSave") {
            const { alpSave } = getPolygonContracts();
            const shares = yield alpSave.convertToShares(tokenAmount);
            return shares;
        }
        if (product === "alpLarge") {
            // alpLarge
            const { alpLarge } = getPolygonContracts();
            // TODO: let the contract take care of pricing
            const totalDollars = yield alpLarge.valueOfVault();
            console.log({ totalDollars });
            // $100 usdc per share to start with => usdc * alpLarge / usdc
            if (totalDollars.eq(0))
                return tokenAmount.mul(ethers.BigNumber.from(10).pow(18)).div(100e6);
            // totalSupply / totalDollars * dollars
            // dollars given by btc/eth vault actually have 8 decimals
            const totalSupply = yield alpLarge.totalSupply();
            // convert tokenAmount (a USDC amount with 6 decimals) to dollar amount (8 decimals)
            const shares = totalSupply.mul(tokenAmount.mul(1e2)).div(totalDollars);
            return shares;
        }
        return ethers.BigNumber.from(0);
    });
}
