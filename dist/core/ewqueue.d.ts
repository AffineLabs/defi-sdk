import { EmergencyWithdrawalQueueRequest, EmergencyWithdrawalQueueTransfer } from "./types";
import { AlpineProduct } from "./types";
export declare function getUserEmergencyWithdrawalQueueRequests(product: AlpineProduct): Promise<EmergencyWithdrawalQueueRequest[]>;
export declare function vaultWithdrawableAssetAmount(product: AlpineProduct): Promise<string>;
export declare function txHasEnqueueEvent(txHash: string): Promise<boolean>;
export declare function getEmergencyWithdrawalQueueTransfers(product: AlpineProduct): Promise<EmergencyWithdrawalQueueTransfer[]>;
