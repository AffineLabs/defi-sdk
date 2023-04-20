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
exports.isLiquidToWithdraw = exports.getAssets = exports.redeemWithdrawRequest = exports.getWithdrawalRequest = void 0;
const cache_1 = require("./cache");
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
function getWithdrawalRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow, ssvEthUSDEarn } = (0, cache_1.getEthContracts)();
        const withdrawalRequests = yield withdrawalEscrow.queryFilter(withdrawalEscrow.filters.WithdrawalRequest(cache_1.SIGNER.getAddress(), null, null));
        const currentEpoch = yield ssvEthUSDEarn.epoch();
        let ret = [];
        for (let req of withdrawalRequests) {
            if (req.args[1] < currentEpoch) {
                const shares = yield withdrawalEscrow.withdrawableShares(cache_1.SIGNER.getAddress(), req.args[1]);
                const assets = yield withdrawalEscrow.withdrawableAssets(cache_1.SIGNER.getAddress(), req.args[1]);
                ret.push({
                    epoch: req.args[1].toNumber(),
                    token: shares.toNumber(),
                    value: assets.toNumber(),
                    claimed: shares.eq(0),
                    claimable: shares.gt(0),
                });
            }
            else {
                ret.push({
                    epoch: req.args[1].toNumber(),
                    token: req.args[2].toNumber(),
                    value: 0,
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
        const txReceipt = yield (0, AlpineDeFiSDK_1.blockchainCall)(withdrawalEscrow, "redeem", [cache_1.SIGNER.getAddress(), reqInfo.epoch]);
        return txReceipt;
    });
}
exports.redeemWithdrawRequest = redeemWithdrawRequest;
function getAssets() {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow } = (0, cache_1.getEthContracts)();
        const withdrawalRequests = yield withdrawalEscrow.queryFilter(withdrawalEscrow.filters.WithdrawalRequest(cache_1.SIGNER.getAddress(), null, null));
        const epochs = withdrawalRequests.map(req => req.args[1]);
        const assets = yield withdrawalEscrow.getAssets(cache_1.SIGNER.getAddress(), epochs);
        return assets.toNumber();
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
