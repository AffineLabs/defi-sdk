import { SSVWithdrawalRequestInfo } from "./types";
export declare function getWithdrawalRequest(): Promise<SSVWithdrawalRequestInfo[]>;
export declare function redeemWithdrawRequest(reqInfo: SSVWithdrawalRequestInfo): Promise<any>;
export declare function getAssets(): Promise<number>;
export declare function isLiquidToWithdraw(): Promise<boolean>;
