"use strict";
exports.__esModule = true;
/**
 * @typedef {Object} TxnReceipt
 * @property {String} method  transaction method name (deposit, withdraw or approve)
 * @property {String} amount amount in the transaction
 * @property {number} timestamp timestamp of the transaction
 * @property {String} gasPrice gas price in eth
 * @property {String} txnCost transaction cost in eth
 * @property {String} contractAddress the address of the contract
 * @property {String} txnHash transaction hash
 * @property {number} blockNumber block number
 * @property {boolean} status transaction status
 * @property {String} ticker vault ticker
 */
/**
 * @typedef {Object} UserBalance
 * @property {String} balanceUSDC amount in usdc denominated value
 * @property {String} [balanceToken] amount in token denominated value
 */
exports["default"] = {};
