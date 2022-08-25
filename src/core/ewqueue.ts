import { _addDecimals, _removeDecimals } from "./AlpineDeFiSDK";
import { CONTRACTS, PROVIDER, userAddress } from "./cache";
import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer, TxnReceipt } from "./types";
import {
  EmergencyWithdrawalQueueEnqueueEvent,
  EmergencyWithdrawalQueueDequeueEvent,
} from "../typechain/src/polygon/EmergencyWithdrawalQueue";
import { AlpineProduct } from "./types";

export async function getUserEmergencyWithdrawalQueueRequests(
  product: AlpineProduct,
): Promise<EmergencyWithdrawalQueueRequest[]> {
  if (product === "alpSave") {
    const ewQueueEnqueueEvents: EmergencyWithdrawalQueueEnqueueEvent[] = await CONTRACTS.ewQueue.queryFilter(
      CONTRACTS.ewQueue.filters.EmergencyWithdrawalQueueEnqueue(null, userAddress, userAddress, null),
    );
    const ewQueueHeadPtr = await CONTRACTS.ewQueue.headPtr();
    const ewQueue: EmergencyWithdrawalQueueRequest[] = [];
    for (const e of ewQueueEnqueueEvents) {
      const eventPtr = e.args[0];
      if (ewQueueHeadPtr.lte(eventPtr)) {
        const eventShares = e.args[3];
        ewQueue.push({
          pos: eventPtr.sub(ewQueueHeadPtr).toNumber(),
          shares: eventShares.toNumber(),
          sharesValueInAsset: (await CONTRACTS.alpSave.convertToAssets(eventShares)).toNumber(),
        });
      }
    }
    return ewQueue;
  } else {
    return [];
  }
}

export async function vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<number> {
  const vaultTVL = await CONTRACTS.alpSave.vaultTVL();
  const debtToEWQ = await CONTRACTS.ewQueue.totalDebt();
  if (debtToEWQ.gt(vaultTVL)) return 0;
  return vaultTVL.sub(debtToEWQ).toNumber();
}

export async function txHasEnqueueEvent(txHash: string): Promise<boolean> {
  const txReceipt = await PROVIDER.getTransactionReceipt(txHash);
  for (const l of txReceipt.logs) {
    try {
      const logDescription = CONTRACTS.ewQueue.interface.parseLog(l);
      if (logDescription.name == "EmergencyWithdrawalQueueDequeue") {
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
  if (product === "alpSave") {
    const sharePrice = await CONTRACTS.alpSave.detailedPrice();
    const curBlock = await PROVIDER.getBlock("latest");
    const ewQueueDequeueEvents: EmergencyWithdrawalQueueDequeueEvent[] = await CONTRACTS.ewQueue.queryFilter(
      CONTRACTS.ewQueue.filters.EmergencyWithdrawalQueueDequeue(null, userAddress, userAddress, null),
      curBlock.number - 512,
      curBlock.number,
    );
    const transfers: EmergencyWithdrawalQueueTransfer[] = [];
    for (const e of ewQueueDequeueEvents) {
      const eventShares = e.args[3];
      transfers.push({
        shares: eventShares.toNumber(),
        sharesValueInAsset: sharePrice.num.toNumber(),
        txHash: e.transactionHash,
        timestamp: new Date((await e.getBlock()).timestamp),
      });
    }
    return transfers;
  } else {
    return [];
  }
}
