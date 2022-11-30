import { CONTRACTS, PROVIDER, userAddress } from "./cache";
import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer } from "./types";
import { PushEvent, PopEvent } from "../typechain/src/polygon/EmergencyWithdrawalQueue";
import { AlpineProduct } from "./types";
import { _removeDecimals } from "./AlpineDeFiSDK";

export async function getUserEmergencyWithdrawalQueueRequests(
  product: AlpineProduct,
): Promise<EmergencyWithdrawalQueueRequest[]> {
  if (product === "alpSave") {
    const curBlock = await PROVIDER.getBlock("latest");
    const ewQueueEnqueueEvents: PushEvent[] = await CONTRACTS.ewQueue.queryFilter(
      CONTRACTS.ewQueue.filters.Push(null, userAddress, userAddress, null),
      curBlock.number - 4096,
      curBlock.number,
    );
    const ewQueueHeadPtr = await CONTRACTS.ewQueue.headPtr();
    const ewQueue: EmergencyWithdrawalQueueRequest[] = [];
    for (const e of ewQueueEnqueueEvents) {
      const eventPtr = e.args[0];
      if (ewQueueHeadPtr.lte(eventPtr)) {
        const eventShares = e.args[3];
        ewQueue.push({
          pos: eventPtr.sub(ewQueueHeadPtr).toNumber(),
          shares: _removeDecimals(eventShares, 16),
          sharesValueInAsset: _removeDecimals(await CONTRACTS.alpSave.convertToAssets(eventShares), 6),
        });
      }
    }
    return ewQueue;
  } else {
    return [];
  }
}

export async function vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<string> {
  const vaultTVL = await CONTRACTS.alpSave.vaultTVL();
  if (product === "alpSave") {
    const debtToEWQ = await CONTRACTS.ewQueue.totalDebt();
    if (debtToEWQ.gt(vaultTVL)) return "0";
    return _removeDecimals(vaultTVL.sub(debtToEWQ), 6);
  } else {
    return _removeDecimals(vaultTVL, 6);
  }
}

export async function txHasEnqueueEvent(txHash: string): Promise<boolean> {
  const txReceipt = await PROVIDER.getTransactionReceipt(txHash);
  for (const l of txReceipt.logs) {
    try {
      const logDescription = CONTRACTS.ewQueue.interface.parseLog(l);
      if (logDescription.name == "Push") {
        return true;
      }
    } catch (e) {
      continue;
    }
  }
  return false;
}

export async function getEmergencyWithdrawalQueueTransfers(
  product: AlpineProduct,
): Promise<EmergencyWithdrawalQueueTransfer[]> {
  const { alpSave } = CONTRACTS;
  if (product === "alpSave") {
    const curBlock = await PROVIDER.getBlock("latest");
    const ewQueueDequeueEvents: PopEvent[] = await CONTRACTS.ewQueue.queryFilter(
      CONTRACTS.ewQueue.filters.Pop(null, userAddress, userAddress, null),
      curBlock.number - 512,
      curBlock.number,
    );
    const transfers: EmergencyWithdrawalQueueTransfer[] = [];
    for (const e of ewQueueDequeueEvents) {
      const eventShares = e.args[3];
      transfers.push({
        shares: _removeDecimals(eventShares, 16),
        sharesValueInAsset: _removeDecimals(await alpSave.convertToAssets(eventShares), 6),
        txHash: e.transactionHash,
        timestamp: new Date((await e.getBlock()).timestamp * 1000),
      });
    }
    return transfers;
  } else {
    return [];
  }
}
