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
exports.epochStartTime = exports.isLiquidToWithdraw = exports.getAssets = exports.redeemWithdrawRequest = exports.getWithdrawalRequest = void 0;
const cache_1 = require("./cache");
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
function getWithdrawalRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow, ssvEthUSDEarn, usdc } = (0, cache_1.getEthContracts)();
        const currentEpoch = yield ssvEthUSDEarn.epoch();
        const epochEnded = yield ssvEthUSDEarn.epochEnded();
        const withdrawalRequests = yield withdrawalEscrow.queryFilter(withdrawalEscrow.filters.WithdrawalRequest(cache_1.userAddress, null, null));
        const ret = [];
        for (const req of withdrawalRequests) {
            if (req.args[1].lt(currentEpoch) || (req.args[1].eq(currentEpoch) && epochEnded === true)) {
                const shares = yield withdrawalEscrow.withdrawableShares(cache_1.userAddress, req.args[1]);
                const assets = yield withdrawalEscrow.withdrawableAssets(cache_1.userAddress, req.args[1]);
                ret.push({
                    epoch: req.args[1].toNumber(),
                    token: (0, AlpineDeFiSDK_1._removeDecimals)(shares, yield ssvEthUSDEarn.decimals()),
                    value: (0, AlpineDeFiSDK_1._removeDecimals)(assets, yield usdc.decimals()),
                    claimed: shares.eq(0),
                    claimable: shares.gt(0),
                });
            }
            else {
                ret.push({
                    epoch: req.args[1].toNumber(),
                    token: (0, AlpineDeFiSDK_1._removeDecimals)(req.args[2], yield ssvEthUSDEarn.decimals()),
                    value: "0",
                    claimed: false,
                    claimable: false,
                });
            }
        }
        return ret;
    });
}
exports.getWithdrawalRequest = getWithdrawalRequest;
function redeemWithdrawRequest(reqInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow } = (0, cache_1.getEthContracts)();
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: reqInfo.value,
            tokenAmount: reqInfo.token,
        };
        const txReceipt = (yield (0, AlpineDeFiSDK_1.blockchainCall)(withdrawalEscrow, "redeem", [cache_1.userAddress, reqInfo.epoch]));
        return Object.assign(Object.assign({}, txReceipt), basicInfo);
    });
}
exports.redeemWithdrawRequest = redeemWithdrawRequest;
function getAssets() {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow, usdc } = (0, cache_1.getEthContracts)();
        const withdrawalRequests = yield withdrawalEscrow.queryFilter(withdrawalEscrow.filters.WithdrawalRequest(cache_1.userAddress, null, null));
        const epochs = withdrawalRequests.map(req => req.args[1]);
        const assets = yield withdrawalEscrow.getAssets(cache_1.userAddress, epochs);
        return (0, AlpineDeFiSDK_1._removeDecimals)(assets, yield usdc.decimals());
    });
}
exports.getAssets = getAssets;
function isLiquidToWithdraw() {
    return __awaiter(this, void 0, void 0, function* () {
        const { ssvEthUSDEarn } = (0, cache_1.getEthContracts)();
        return ssvEthUSDEarn.epochEnded();
    });
}
exports.isLiquidToWithdraw = isLiquidToWithdraw;
function epochStartTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const { ssvEthUSDEarn } = (0, cache_1.getEthContracts)();
        return (yield ssvEthUSDEarn.epochStartTime()).toNumber();
    });
}
exports.epochStartTime = epochStartTime;
