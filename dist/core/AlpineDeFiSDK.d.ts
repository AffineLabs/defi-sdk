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
 * @param proof a merkle proof generated using the Whitelist merkle tree
 */
export declare function mintWhitelist(proof: string[]): Promise<GasInfo | SmallTxReceipt>;
/**
 * Mint NFTs during public sale.
 * @param quantity how many NFTs to mint
 */
export declare function mint(): Promise<GasInfo | SmallTxReceipt>;
/**
 * Mint NFTs for Accolades.
 * @param quantity how many NFTs to mint
 */
export declare function mintGuaranteed(): Promise<GasInfo | SmallTxReceipt>;
/**
 * check if the user is whitelisted.
 * @returns boolean
 */
export declare function isWhitelisted(address: string, proof: string[]): Promise<boolean>;
/**
 * check if the user has an Accolade.
 * @returns boolean
 * TODO: remove this function after FE confirms
 */
export declare function isAccolade(address: string): Promise<boolean>;
/**
 * check the user's accolade allocation.
 * @returns number
 * TODO: Remove this function after FE confirms
 */
export declare function accoladeAllocation(address: string): Promise<number>;
/**
 * check the user's Affine Pass balance.
 * @returns number
 */
export declare function passBalanceOf(address: string): Promise<number>;
/**
 * check if there is remaining supply minus the guaranatees.
 * @returns boolean
 */
export declare function hasRemainingSupply(): Promise<boolean>;
/**
 * check if the user has minted during whitelist.
 * @returns boolean
 */
export declare function hasMintedWhitelist(address: string): Promise<boolean>;
/**
 * check if a user minted during the public sale.
 * @returns boolean
 */
export declare function hasMinted(address: string): Promise<boolean>;
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
/**
 * This function will return the tvl cap of the product,
 * but some of the products don't have tvl cap so it will return error in that case.
 * So, make sure to handle the error or use try catch block.
 * @param product {AlpineProduct} the product name
 * @returns {Promise<string>} the tvl cap of the product in unit
 */
export declare function getTVLCap(product: AlpineProduct): Promise<string>;
