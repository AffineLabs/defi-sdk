import { ethers } from "ethers";
import { AlpineProduct, DryRunReceipt, FullTxReceipt, SmallTxReceipt } from "./types";
import { GasInfo } from "..";
/**
 * Get the current best estimate for gas price
 * @returns the best estimate for gas price in eth
 */
export declare function getGasPrice(): Promise<string>;
export declare function getGasBalance(): Promise<string>;
/**
 * Converts a unit amount to equivalent micro unit amount
 * @param {string} amount an amount in whole unit eg. usdc.
 * @param {number} decimals The amount of decimals this contract has
 * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
 */
export declare function _addDecimals(amount: string, decimals: number): ethers.BigNumber;
/**
 * converts a micro unit amount to equivalent unit amount
 * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
 * @param {number} decimals
 * @returns {string} equivalent amount in unit.
 */
export declare function _removeDecimals(amount: ethers.BigNumber, decimals: ethers.BigNumberish): string;
/**
 * Call a smart contract method with arguments
 * @param {ethers.Contract} contract smart contract
 * @param {String} method the method name
 * @param {Array} args the arguments to the method
 * @returns a transaction receipt from the blockchain
 */
export declare function blockchainCall(contract: ethers.Contract, method: string, args: Array<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
simulate?: boolean, value?: ethers.BigNumberish): Promise<SmallTxReceipt | GasInfo>;
/**
 * check if the user has approved the max amount of usdc to the contract
 * @returns true if the user has approved the max amount of usdc to the contract
 */
export declare function isMaxUSDCApproved(product: AlpineProduct): Promise<boolean>;
/**
 * approve outgoing transaction with another wallet or smart contract for
 * the specified amount
 * @param to the receipient contract
 * @param amountUSDC (optional) transaction amount in usdc, if not specified then approve max amount
 */
export declare function approve(product: AlpineProduct, amountAsset?: string): Promise<DryRunReceipt | FullTxReceipt>;
/**
 * Transfer usdc from user's wallet to another wallet
 * @param to receipient address
 * @param amountUSDC amount in usdc
 */
export declare function transfer(to: string, amountUSDC: string): Promise<GasInfo | SmallTxReceipt>;
export declare function mintUSDC(to: string, amountUSDC: number): Promise<GasInfo | SmallTxReceipt>;
