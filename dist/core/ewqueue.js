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
exports.getEmergencyWithdrawalQueueTransfers = exports.txHasEnqueueEvent = exports.vaultWithdrawableAssetAmount = exports.getUserEmergencyWithdrawalQueueRequests = void 0;
const cache_1 = require("./cache");
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
function getUserEmergencyWithdrawalQueueRequests(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, ewQueue } = (0, cache_1.getPolygonContracts)();
        if (product === "alpSave") {
            const curBlock = yield cache_1.PROVIDER.getBlock("latest");
            const ewQueueEnqueueEvents = yield ewQueue.queryFilter(ewQueue.filters.Push(null, cache_1.userAddress, cache_1.userAddress, null), curBlock.number - 4096, curBlock.number);
            const ewQueueHeadPtr = yield ewQueue.headPtr();
            const requests = [];
            for (const e of ewQueueEnqueueEvents) {
                const eventPtr = e.args[0];
                if (ewQueueHeadPtr.lte(eventPtr)) {
                    const eventShares = e.args[3];
                    requests.push({
                        pos: eventPtr.sub(ewQueueHeadPtr).toNumber(),
                        shares: (0, AlpineDeFiSDK_1._removeDecimals)(eventShares, 16),
                        sharesValueInAsset: (0, AlpineDeFiSDK_1._removeDecimals)(yield alpSave.convertToAssets(eventShares), 6),
                    });
                }
            }
            return requests;
        }
        else {
            return [];
        }
    });
}
exports.getUserEmergencyWithdrawalQueueRequests = getUserEmergencyWithdrawalQueueRequests;
function vaultWithdrawableAssetAmount(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, ewQueue } = (0, cache_1.getPolygonContracts)();
        const vaultTVL = yield alpSave.vaultTVL();
        if (product === "alpSave") {
            const debtToEWQ = yield ewQueue.totalDebt();
            if (debtToEWQ.gt(vaultTVL))
                return "0";
            return (0, AlpineDeFiSDK_1._removeDecimals)(vaultTVL.sub(debtToEWQ), 6);
        }
        else {
            return (0, AlpineDeFiSDK_1._removeDecimals)(vaultTVL, 6);
        }
    });
}
exports.vaultWithdrawableAssetAmount = vaultWithdrawableAssetAmount;
function txHasEnqueueEvent(txHash) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ewQueue } = (0, cache_1.getPolygonContracts)();
        const txReceipt = yield cache_1.PROVIDER.getTransactionReceipt(txHash);
        for (const l of txReceipt.logs) {
            try {
                const logDescription = ewQueue.interface.parseLog(l);
                if (logDescription.name == "Push") {
                    return true;
                }
            }
            catch (e) {
                continue;
            }
        }
        return false;
    });
}
exports.txHasEnqueueEvent = txHasEnqueueEvent;
function getEmergencyWithdrawalQueueTransfers(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, ewQueue } = (0, cache_1.getPolygonContracts)();
        if (product === "alpSave") {
            const curBlock = yield cache_1.PROVIDER.getBlock("latest");
            const ewQueueDequeueEvents = yield ewQueue.queryFilter(ewQueue.filters.Pop(null, cache_1.userAddress, cache_1.userAddress, null), curBlock.number - 512, curBlock.number);
            const transfers = [];
            for (const e of ewQueueDequeueEvents) {
                const eventShares = e.args[3];
                transfers.push({
                    shares: (0, AlpineDeFiSDK_1._removeDecimals)(eventShares, 16),
                    sharesValueInAsset: (0, AlpineDeFiSDK_1._removeDecimals)(yield alpSave.convertToAssets(eventShares), 6),
                    txHash: e.transactionHash,
                    timestamp: new Date((yield e.getBlock()).timestamp * 1000),
                });
            }
            return transfers;
        }
        else {
            return [];
        }
    });
}
exports.getEmergencyWithdrawalQueueTransfers = getEmergencyWithdrawalQueueTransfers;
