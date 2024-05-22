export declare function canWithdraw(amount: number): Promise<boolean>;
export declare function withdraw(amount: string, address: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function redeem(address: string, epoch: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function canWithdrawEscrow(epoch: string): Promise<boolean>;
export declare function withdrawableAssets(address: string): Promise<{
    totalAmount: number;
    epochData: {
        epoch: number;
        assets: string;
        shares: string;
        canWithdraw: boolean;
    }[];
}>;
export declare function migratableAssets(address: string): Promise<number>;
export declare function queueMigrationWithdrawal(address: string, shares: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function completeMigrationWithdrawal(address: string, delegator: string, nonce: string, blockNumber: string, shares: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
