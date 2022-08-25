import { ethers, utils } from "ethers";
import { init, setProvider, CONTRACTS, userAddress, PROVIDER } from "../cache";
import { expect } from "chai";
import { approve, blockchainCall, mintUSDC, _removeDecimals } from "../AlpineDeFiSDK";
import { getEmergencyWithdrawalQueueTransfers, getUserEmergencyWithdrawalQueueRequests, txHasEnqueueEvent, vaultWithdrawableAssetAmount } from "../ewqueue";
import { SmallTxReceipt } from "../types";

const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
const oneUSDC = 1000000;
const halfUSDC = oneUSDC / 2;

function _getMappingStorage(slot: number, key: string): string {
    const paddedSlot = utils.hexZeroPad(utils.hexValue(slot), 32);
    const paddedKey = utils.hexZeroPad(key, 32);
    return utils.keccak256(paddedKey + paddedSlot.slice(2));
}

async function setUSDCBalance(address: string, balance: number) {
    await PROVIDER.send("anvil_setStorageAt", [
        CONTRACTS.usdc.address,
        _getMappingStorage(0, address),
        utils.hexZeroPad(utils.hexValue(balance), 32)
    ]);
}

async function setAlpSaveL1LockedValue(value: number) {
    await PROVIDER.send("anvil_setStorageAt", [
        CONTRACTS.alpSave.address,
        // L1TotalLockedValue is found at slot 282 of L2Vault contract.
        utils.hexValue(282), 
        utils.hexZeroPad(utils.hexValue(value), 32)
    ]);
}

describe("Emergency Withdrawal Queue", async () => {
  beforeEach(async () => {
    setProvider(testProvider);
    await init(wallet, undefined);
    await PROVIDER.send("anvil_setBalance", [userAddress, ethers.BigNumber.from(10).pow(18).toHexString()]);
    await mintUSDC(wallet.address, oneUSDC);
    await approve("alpSave", oneUSDC.toString());
  });

  it("Test emergency functions", async () => {
    // Deposit
    await blockchainCall(CONTRACTS.alpSave, "deposit", [oneUSDC, wallet.address]);
    // Simulate transfer to L1
    await setUSDCBalance(CONTRACTS.alpSave.address, halfUSDC);
    await setAlpSaveL1LockedValue(halfUSDC);

    // Check withdrawable amount
    const withdrawableAmount = await vaultWithdrawableAssetAmount("alpSave");
    expect(withdrawableAmount).eq(halfUSDC);

    // Withdraw
    await blockchainCall(CONTRACTS.alpSave, "withdraw", [oneUSDC, wallet.address, wallet.address]);
    
    // Get queue stats
    const queue = await getUserEmergencyWithdrawalQueueRequests("alpSave");
    expect(queue.length).eq(1);
    const gotEvent = queue[0];
    expect(gotEvent.pos).eq(0);
    expect(gotEvent.shares).eq(oneUSDC / 100);
    expect(gotEvent.sharesValueInAsset).eq(oneUSDC);

    // Simulate transfer back to L2
    await setUSDCBalance(CONTRACTS.alpSave.address, oneUSDC);
    await setAlpSaveL1LockedValue(0);

    // Dequeue
    const tx = await blockchainCall(CONTRACTS.ewQueue, "dequeue", []) as SmallTxReceipt;

    // Check tx led to emergency withdrawal queue enqueue
    const hasEnqueueEvent = await txHasEnqueueEvent(tx.txnHash);
    expect(hasEnqueueEvent).eq(true);

    // Get tansfers from emergency withdrawal queue.
    const transfers = await getEmergencyWithdrawalQueueTransfers("alpSave");
    expect(transfers.length).eq(1);
    const gotTransfer = transfers[0];
    expect(gotTransfer.txHash).eq(tx.txnHash);
    expect(gotTransfer.shares).eq(oneUSDC / 100);
    expect(gotTransfer.sharesValueInAsset).eq(oneUSDC);
  });
});
