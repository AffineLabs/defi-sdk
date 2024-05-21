var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPolygonContracts, PROVIDER, userAddress } from "./cache";
import { _removeDecimals } from "./AlpineDeFiSDK";
export function getUserEmergencyWithdrawalQueueRequests(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, ewQueue } = getPolygonContracts();
        if (product === "alpSave") {
            const curBlock = yield PROVIDER.getBlock("latest");
            const ewQueueEnqueueEvents = yield ewQueue.queryFilter(ewQueue.filters.Push(null, userAddress, userAddress, null), curBlock.number - 4096, curBlock.number);
            const ewQueueHeadPtr = yield ewQueue.headPtr();
            const requests = [];
            for (const e of ewQueueEnqueueEvents) {
                const eventPtr = e.args[0];
                if (ewQueueHeadPtr.lte(eventPtr)) {
                    const eventShares = e.args[3];
                    requests.push({
                        pos: eventPtr.sub(ewQueueHeadPtr).toNumber(),
                        shares: _removeDecimals(eventShares, 16),
                        sharesValueInAsset: _removeDecimals(yield alpSave.convertToAssets(eventShares), 6),
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
export function vaultWithdrawableAssetAmount(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, ewQueue } = getPolygonContracts();
        const vaultTVL = yield alpSave.vaultTVL();
        if (product === "alpSave") {
            const debtToEWQ = yield ewQueue.totalDebt();
            if (debtToEWQ.gt(vaultTVL))
                return "0";
            return _removeDecimals(vaultTVL.sub(debtToEWQ), 6);
        }
        else {
            return _removeDecimals(vaultTVL, 6);
        }
    });
}
export function txHasEnqueueEvent(txHash) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ewQueue } = getPolygonContracts();
        const txReceipt = yield PROVIDER.getTransactionReceipt(txHash);
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
export function getEmergencyWithdrawalQueueTransfers(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave, ewQueue } = getPolygonContracts();
        if (product === "alpSave") {
            const curBlock = yield PROVIDER.getBlock("latest");
            const ewQueueDequeueEvents = yield ewQueue.queryFilter(ewQueue.filters.Pop(null, userAddress, userAddress, null), curBlock.number - 512, curBlock.number);
            const transfers = [];
            for (const e of ewQueueDequeueEvents) {
                const eventShares = e.args[3];
                transfers.push({
                    shares: _removeDecimals(eventShares, 16),
                    sharesValueInAsset: _removeDecimals(yield alpSave.convertToAssets(eventShares), 6),
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
