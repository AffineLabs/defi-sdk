/**
 * @namespace typedefs
 */

/**
 * @typedef {Object} AlpineContracts
 * @property {ethers.Contract} usdcContract circle usdc contract
 * @property {ethers.Contract} vaultContract a dummy vault contract
 */

/**
 * @typedef {Object} TxnReceipt
 * @property {String} method  transaction method name (deposit, withdraw or approve)
 * @property {String} amountUSDC amount in the transaction in usdc denominated value
 * @property {number} timestamp timestamp of the transaction
 * @property {String} gasPrice gas price in eth
 * @property {String} txnFee transaction fee in eth
 * @property {String} contract the address of the contract
 * @property {String} txnHash transaction hash
 * @property {number} blockNumber block number
 */

/**
 * @typedef {Object} UserBalance
 * @property {String} balanceUSDC amount in usdc denominated value
 * @property {String} [balanceToken] amount in token denominated value
 */
export default {};
