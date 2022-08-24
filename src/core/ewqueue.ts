import { ethers } from "ethers";
import { _addDecimals, _removeDecimals } from "./AlpineDeFiSDK";
import { CONTRACTS, PROVIDER, userAddress } from "./cache";
import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer, TxnReceipt } from "./types";
import {
  EmergencyWithdrawalQueueEnqueueEvent,
  EmergencyWithdrawalQueueDequeueEvent,
} from "../typechain/src/polygon/EmergencyWithdrawalQueue";
import { AlpineProduct, FullTxReceipt } from "./types";

export async function getUserEmergencyWithdrawalQueueRequests(
  product: AlpineProduct,
): Promise<EmergencyWithdrawalQueueRequest[]> {
  if (product === "alpSave") {
    const sharePrice = await CONTRACTS.alpSave.detailedPrice();
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
          sharesVauleInAsset: eventShares.mul(sharePrice.num).toNumber(),
        });
      }
    }
    return ewQueue;
  } else {
    return [];
  }
}

export async function vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<number> {
  const vaultAvailableAssets = await CONTRACTS.usdc.balanceOf(CONTRACTS[product].address);
  if (product === "alpSave") {
    const ewQueueDebt = await CONTRACTS.ewQueue.totalDebt();
    const sharePrice = await CONTRACTS.alpSave.detailedPrice();
    const ewQueueDebtInAssets = ewQueueDebt.mul(sharePrice.num);
    if (vaultAvailableAssets < ewQueueDebtInAssets) {
      return 0;
    }
    return vaultAvailableAssets.sub(ewQueueDebtInAssets).toNumber();
  } else {
    return vaultAvailableAssets.toNumber();
  }
}

export async function txHasEnqueueEvent(txReceipt: FullTxReceipt): Promise<boolean> {
  const txnReceipt = await PROVIDER.getTransactionReceipt(txReceipt.txnHash);
  let eventABI = [
    "event EmergencyWithdrawalQueueEnqueue(uint256 indexed pos, address indexed owner, address indexed receiver, uint256 shares)",
  ];
  let eventInterface = new ethers.utils.Interface(eventABI);
  for (const l of txnReceipt.logs) {
    try {
      eventInterface.parseLog(l);
      return true;
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
        sharesVauleInAsset: eventShares.mul(sharePrice.num).toNumber(),
        txHash: e.transactionHash,
        timestamp: new Date((await e.getBlock()).timestamp),
      });
    }
    return transfers;
  } else {
    return [];
  }
}
