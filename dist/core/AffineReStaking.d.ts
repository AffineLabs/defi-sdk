export declare function depositERC20(token: string, to: string, amount: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function depositEth(to: string, amount: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function withdraw(token: string, amount: string): Promise<import("./types").GasInfo | import("./types").SmallTxReceipt>;
export declare function getBalance(token: string, address: string): Promise<string>;
