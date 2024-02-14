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
import { init, setProvider, userAddress, PROVIDER, getPolygonContracts } from "../cache";
import { expect } from "chai";
import { approve, blockchainCall, mintUSDC, _removeDecimals } from "../AlpineDeFiSDK";
import { getEmergencyWithdrawalQueueTransfers, getUserEmergencyWithdrawalQueueRequests, txHasEnqueueEvent, vaultWithdrawableAssetAmount, } from "../ewqueue";
import { setUSDCBalance, setAlpSaveL1LockedValue } from "./utils";
const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const assets = ethers.BigNumber.from(10).pow(6).mul(200);
const halfAssets = assets.div(2);
const assetsStr = _removeDecimals(assets, 6);
describe("Emergency Withdrawal Queue", () => __awaiter(void 0, void 0, void 0, function* () {
    let contracts;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        setProvider(testProvider);
        yield init(wallet, undefined);
        contracts = getPolygonContracts();
        yield PROVIDER.send("anvil_setBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
        yield mintUSDC(wallet.address, assets);
        yield approve("alpSave", assets.toString());
    }));
    it("Test emergency functions", () => __awaiter(void 0, void 0, void 0, function* () {
        const { alpSave, ewQueue } = contracts;
        // Reset vault to have no assets, and deposit `assets` into it. Makes it easy to simulate have of user deposit being unavailable.
        yield setUSDCBalance(alpSave.address, ethers.BigNumber.from(0));
        yield blockchainCall(alpSave, "deposit", [assets, wallet.address]);
        // Simulate transfer to L1
        yield setUSDCBalance(alpSave.address, halfAssets);
        yield setAlpSaveL1LockedValue(halfAssets);
        console.log("storage updated");
        // Check withdrawable amount
        const withdrawableAmount = yield vaultWithdrawableAssetAmount("alpSave");
        expect(withdrawableAmount).eq(_removeDecimals(ethers.BigNumber.from(halfAssets), 6));
        console.log("withdrawableAmount", withdrawableAmount.toString());
        // Withdraw
        const withdrawRes = (yield blockchainCall(alpSave, "withdraw", [
            assets,
            wallet.address,
            wallet.address,
        ]));
        // Check tx led to emergency withdrawal queue enqueue
        const hasEnqueueEvent = yield txHasEnqueueEvent(withdrawRes.txnHash);
        expect(hasEnqueueEvent).eq(true);
        // Get queue stats
        const queue = yield getUserEmergencyWithdrawalQueueRequests("alpSave");
        expect(queue.length).eq(1);
        const gotEvent = queue[0];
        expect(gotEvent.pos).eq(0);
        expect(gotEvent.sharesValueInAsset).eq(assetsStr);
        console.log("got queue stats");
        // Simulate transfer back to L2
        yield setUSDCBalance(alpSave.address, assets);
        yield setAlpSaveL1LockedValue(ethers.BigNumber.from(0));
        // Dequeue
        const tx = (yield blockchainCall(ewQueue, "dequeue", []));
        // Get tansfers from emergency withdrawal queue.
        const transfers = yield getEmergencyWithdrawalQueueTransfers("alpSave");
        expect(transfers.length).eq(1);
        const gotTransfer = transfers[0];
        expect(gotTransfer.txHash).eq(tx.txnHash);
        expect(gotTransfer.sharesValueInAsset).eq(assetsStr);
    }));
}));
