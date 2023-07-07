import { ethers } from "ethers";
import { init, setProvider, userAddress, PROVIDER, getPolygonContracts } from "../cache";
import { expect } from "chai";
import { approve, blockchainCall, mintUSDC, _removeDecimals } from "../AlpineDeFiSDK";
import {
  getEmergencyWithdrawalQueueTransfers,
  getUserEmergencyWithdrawalQueueRequests,
  txHasEnqueueEvent,
  vaultWithdrawableAssetAmount,
} from "../ewqueue";
import { PolygonContracts, SmallTxReceipt } from "../types";
import { setUSDCBalance, setAlpSaveL1LockedValue } from "./utils";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const assets = ethers.BigNumber.from(10).pow(6).mul(200);
const halfAssets = assets.div(2);
const assetsStr = _removeDecimals(assets, 6);
describe("Emergency Withdrawal Queue", async () => {
  let contracts: PolygonContracts;
  beforeEach(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
    contracts = getPolygonContracts();
    await PROVIDER.send("anvil_setBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
    await mintUSDC(wallet.address, assets);
    await approve("alpSave", assets.toString());
  });

  it("Test emergency functions", async () => {
    const { alpSave, ewQueue } = contracts;
    // Reset vault to have no assets, and deposit `assets` into it. Makes it easy to simulate have of user deposit being unavailable.
    await setUSDCBalance(alpSave.address, ethers.BigNumber.from(0));
    await blockchainCall(alpSave, "deposit", [assets, wallet.address]);

    // Simulate transfer to L1
    await setUSDCBalance(alpSave.address, halfAssets);
    await setAlpSaveL1LockedValue(halfAssets);

    console.log("storage updated");

    // Check withdrawable amount
    const withdrawableAmount = await vaultWithdrawableAssetAmount("alpSave");
    expect(withdrawableAmount).eq(_removeDecimals(ethers.BigNumber.from(halfAssets), 6));
    console.log("withdrawableAmount", withdrawableAmount.toString());

    // Withdraw
    const withdrawRes = (await blockchainCall(alpSave, "withdraw", [
      assets,
      wallet.address,
      wallet.address,
    ])) as SmallTxReceipt;
    // Check tx led to emergency withdrawal queue enqueue
    const hasEnqueueEvent = await txHasEnqueueEvent(withdrawRes.txnHash);
    expect(hasEnqueueEvent).eq(true);

    // Get queue stats
    const queue = await getUserEmergencyWithdrawalQueueRequests("alpSave");
    expect(queue.length).eq(1);
    const gotEvent = queue[0];
    expect(gotEvent.pos).eq(0);
    expect(gotEvent.sharesValueInAsset).eq(assetsStr);

    console.log("got queue stats");

    // Simulate transfer back to L2
    await setUSDCBalance(alpSave.address, assets);
    await setAlpSaveL1LockedValue(ethers.BigNumber.from(0));

    // Dequeue
    const tx = (await blockchainCall(ewQueue, "dequeue", [])) as SmallTxReceipt;

    // Get tansfers from emergency withdrawal queue.
    const transfers = await getEmergencyWithdrawalQueueTransfers("alpSave");
    expect(transfers.length).eq(1);
    const gotTransfer = transfers[0];
    expect(gotTransfer.txHash).eq(tx.txnHash);
    expect(gotTransfer.sharesValueInAsset).eq(assetsStr);
  });
});
