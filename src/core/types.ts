export interface DryRunReceipt {
  txnCost: string;
  txnCostUSD: string;
  alpFee: string;
  alpFeePercent: string;
  dollarAmount: string;
  tokenAmount: string;
}
// This is metadata passed to the _blockChainCall for transactions where the user is buying or selling a basket (
// (e.g. alpSave or alpLarge)
export interface txMetaData {
  // the dollar amount being bought or sold
  dollarAmount: string;
  // the amount of the basket token being bought or sold
  tokenAmount: string;
}

export interface TxnReceipt {
  method: string;
  amount: string;
  timestamp: number;
  gasPrice: string;
  txnCost: string;
  contractAddress: string;
  txnHash: string;
  blockNumber: number;
  ticker: string;
  status: boolean;
}

//docs.polygonscan.com/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
export interface PolygonScanAPIResponse {
  blockNumber: string;
  blockHash: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  txreceipt_status: string;
  gasUsed: string;
  confirmations: string;
}

export interface UserBalance {
  balanceUSDC: string;
}
