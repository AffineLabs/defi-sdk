import { FullTxReceipt, SSVWithdrawalRequestInfo } from "./types";
export declare function getWithdrawalRequest(): Promise<SSVWithdrawalRequestInfo[]>;
export declare function redeemWithdrawRequest(reqInfo: SSVWithdrawalRequestInfo): Promise<FullTxReceipt>;
export declare function getAssets(): Promise<string>;
export declare function isLiquidToWithdraw(): Promise<boolean>;
export declare function epochStartTime(): Promise<number>;
