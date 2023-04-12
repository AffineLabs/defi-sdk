import { productAllocation, productAmounts } from "./types";
export declare function portfolioUpdate(buyAmounts: productAmounts, sellAmounts: productAmounts): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function portfolioPurchase(allocations: productAllocation, amount: number): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function portfolioSell(allocations: productAllocation, amount: number): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function portfolioRebalance(allocations: productAllocation): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
