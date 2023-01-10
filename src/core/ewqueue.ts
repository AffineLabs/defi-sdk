import { getPolygonContracts, PROVIDER, userAddress } from "./cache";
import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer } from "./types";
import { AlpineProduct } from "./types";
import { _removeDecimals } from "./AlpineDeFiSDK";
import { PopEvent, PushEvent } from "../typechain/EmergencyWithdrawalQueue";

export async function getUserEmergencyWithdrawalQueueRequests(
  product: AlpineProduct,
): Promise<EmergencyWithdrawalQueueRequest[]> {
  const { alpSave, ewQueue } = getPolygonContracts();

  if (product === "alpSave") {
    const curBlock = await PROVIDER.getBlock("latest");
    const ewQueueEnqueueEvents: PushEvent[] = await ewQueue.queryFilter(
      ewQueue.filters.Push(null, userAddress, userAddress, null),
      curBlock.number - 4096,
      curBlock.number,
    );
    const ewQueueHeadPtr = await ewQueue.headPtr();
    const requests: EmergencyWithdrawalQueueRequest[] = [];
    for (const e of ewQueueEnqueueEvents) {
      const eventPtr = e.args[0];
      if (ewQueueHeadPtr.lte(eventPtr)) {
        const eventShares = e.args[3];
        requests.push({
          pos: eventPtr.sub(ewQueueHeadPtr).toNumber(),
          shares: _removeDecimals(eventShares, 16),
          sharesValueInAsset: _removeDecimals(await alpSave.convertToAssets(eventShares), 6),
        });
      }
    }
    return requests;
  } else {
    return [];
  }
}

export async function vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<string> {
  const { alpSave, ewQueue } = getPolygonContracts();
  const vaultTVL = await alpSave.vaultTVL();
  if (product === "alpSave") {
    const debtToEWQ = await ewQueue.totalDebt();
    if (debtToEWQ.gt(vaultTVL)) return "0";
    return _removeDecimals(vaultTVL.sub(debtToEWQ), 6);
  } else {
    return _removeDecimals(vaultTVL, 6);
  }
}

export async function txHasEnqueueEvent(txHash: string): Promise<boolean> {
  const { ewQueue } = getPolygonContracts();
  const txReceipt = await PROVIDER.getTransactionReceipt(txHash);
  for (const l of txReceipt.logs) {
    try {
      const logDescription = ewQueue.interface.parseLog(l);
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
  const { alpSave, ewQueue } = getPolygonContracts();
  if (product === "alpSave") {
    const curBlock = await PROVIDER.getBlock("latest");
    const ewQueueDequeueEvents: PopEvent[] = await ewQueue.queryFilter(
      ewQueue.filters.Pop(null, userAddress, userAddress, null),
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
