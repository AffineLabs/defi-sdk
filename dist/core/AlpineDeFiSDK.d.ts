import { BigNumber, ethers } from "ethers";
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
 * check if the user has approved amount of usdc/ eth (Asset) to the contract.
 * DEFAULT amount is: MAX_APPROVAL_AMOUNT/2
 * @returns boolean
 */
export declare function isApproved(product: AlpineProduct, amount?: number): Promise<boolean>;
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
export declare function mintUSDC(to: string, amountUSDC: number | BigNumber): Promise<GasInfo | SmallTxReceipt>;
/**
 * Mint NFTs for whitelisted users.
 * @param quantity how many NFTs to mint
 * @param proof a merkle proof generated using the Whitelist merkle tree
 */
export declare function mintWhitelist(quantity: number, proof: string[]): Promise<GasInfo | SmallTxReceipt>;
/**
 * Mint NFTs during public sale.
 * @param quantity how many NFTs to mint
 */
export declare function mint(quantity: number): Promise<GasInfo | SmallTxReceipt>;
/**
 * check if the user is whitelisted.
 * @returns boolean
 */
export declare function isWhitelisted(address: string, proof: string[]): Promise<boolean>;
/**
 * check affine pass whitelist mint is live.
 * @returns boolean
 */
export declare function whitelistSaleIsActive(): Promise<boolean>;
/**
 * check affine pass public mint is live.
 * @returns boolean
 */
export declare function saleIsActive(): Promise<boolean>;
