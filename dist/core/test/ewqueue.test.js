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
const ethers_1 = require("ethers");
const cache_1 = require("../cache");
const chai_1 = require("chai");
const AlpineDeFiSDK_1 = require("../AlpineDeFiSDK");
const ewqueue_1 = require("../ewqueue");
const utils_1 = require("./utils");
const testProvider = new ethers_1.ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers_1.ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const assets = ethers_1.ethers.BigNumber.from(10).pow(6).mul(200);
const halfAssets = assets.div(2);
const assetsStr = (0, AlpineDeFiSDK_1._removeDecimals)(assets, 6);
describe("Emergency Withdrawal Queue", () => __awaiter(void 0, void 0, void 0, function* () {
    let contracts;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        (0, cache_1.setProvider)(testProvider);
        yield (0, cache_1.init)(wallet, undefined);
        contracts = (0, cache_1.getPolygonContracts)();
        yield cache_1.PROVIDER.send("anvil_setBalance", [cache_1.userAddress, ethers_1.ethers.BigNumber.from(10).pow(18).toHexString()]);
        yield (0, AlpineDeFiSDK_1.mintUSDC)(wallet.address, assets);
        yield (0, AlpineDeFiSDK_1.approve)("alpSave", assets.toString());
    }));
    it("Test emergency functions", () => __awaiter(void 0, void 0, void 0, function* () {
        const { alpSave, ewQueue } = contracts;
        // Reset vault to have no assets, and deposit `assets` into it. Makes it easy to simulate have of user deposit being unavailable.
        yield (0, utils_1.setUSDCBalance)(alpSave.address, ethers_1.ethers.BigNumber.from(0));
        yield (0, AlpineDeFiSDK_1.blockchainCall)(alpSave, "deposit", [assets, wallet.address]);
        // Simulate transfer to L1
        yield (0, utils_1.setUSDCBalance)(alpSave.address, halfAssets);
        yield (0, utils_1.setAlpSaveL1LockedValue)(halfAssets);
        console.log("storage updated");
        // Check withdrawable amount
        const withdrawableAmount = yield (0, ewqueue_1.vaultWithdrawableAssetAmount)("alpSave");
        (0, chai_1.expect)(withdrawableAmount).eq((0, AlpineDeFiSDK_1._removeDecimals)(ethers_1.ethers.BigNumber.from(halfAssets), 6));
        console.log("withdrawableAmount", withdrawableAmount.toString());
        // Withdraw
        const withdrawRes = (yield (0, AlpineDeFiSDK_1.blockchainCall)(alpSave, "withdraw", [
            assets,
            wallet.address,
            wallet.address,
        ]));
        // Check tx led to emergency withdrawal queue enqueue
        const hasEnqueueEvent = yield (0, ewqueue_1.txHasEnqueueEvent)(withdrawRes.txnHash);
        (0, chai_1.expect)(hasEnqueueEvent).eq(true);
        // Get queue stats
        const queue = yield (0, ewqueue_1.getUserEmergencyWithdrawalQueueRequests)("alpSave");
        (0, chai_1.expect)(queue.length).eq(1);
        const gotEvent = queue[0];
        (0, chai_1.expect)(gotEvent.pos).eq(0);
        (0, chai_1.expect)(gotEvent.sharesValueInAsset).eq(assetsStr);
        console.log("got queue stats");
        // Simulate transfer back to L2
        yield (0, utils_1.setUSDCBalance)(alpSave.address, assets);
        yield (0, utils_1.setAlpSaveL1LockedValue)(ethers_1.ethers.BigNumber.from(0));
        // Dequeue
        const tx = (yield (0, AlpineDeFiSDK_1.blockchainCall)(ewQueue, "dequeue", []));
        // Get tansfers from emergency withdrawal queue.
        const transfers = yield (0, ewqueue_1.getEmergencyWithdrawalQueueTransfers)("alpSave");
        (0, chai_1.expect)(transfers.length).eq(1);
        const gotTransfer = transfers[0];
        (0, chai_1.expect)(gotTransfer.txHash).eq(tx.txnHash);
        (0, chai_1.expect)(gotTransfer.sharesValueInAsset).eq(assetsStr);
    }));
}));
