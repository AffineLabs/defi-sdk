"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bridgePass = exports.ccipFee = exports.getTVLCap = exports.saleIsActive = exports.whitelistSaleIsActive = exports.hasMinted = exports.hasMintedWhitelist = exports.hasRemainingSupply = exports.passBalanceOf = exports.accoladeAllocation = exports.isAccolade = exports.isWhitelisted = exports.mintGuaranteed = exports.mint = exports.mintWhitelist = exports.mintUSDC = exports.transfer = exports.approve = exports.isApproved = exports.blockchainCall = exports._removeDecimals = exports._addDecimals = exports.getGasBalance = exports.getGasPrice = void 0;
const ethers_1 = require("ethers");
const cache_1 = require("./cache");
const biconomy_1 = require("./biconomy");
const constants_1 = require("./constants");
/**
 * Get the current best estimate for gas price
 * @returns the best estimate for gas price in eth
 */
function getGasPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        const gas = yield cache_1.PROVIDER.getGasPrice(); // gas price in wei
        // return gas price in ether
        return ethers_1.ethers.utils.formatEther(gas);
    });
}
exports.getGasPrice = getGasPrice;
function getGasBalance() {
    return __awaiter(this, void 0, void 0, function* () {
        return ethers_1.ethers.utils.formatEther(yield cache_1.PROVIDER.getBalance(cache_1.userAddress));
    });
}
exports.getGasBalance = getGasBalance;
/**
 * Converts a unit amount to equivalent micro unit amount
 * @param {string} amount an amount in whole unit eg. usdc.
 * @param {number} decimals The amount of decimals this contract has
 * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
 */
function _addDecimals(amount, decimals) {
    // we will make it integer at first just to remove the decimal part
    // then we will parse it to ethers.BigNumber
    // see - https://docs.ethers.org/v5/troubleshooting/errors/#help-NUMERIC_FAULT-underflow
    return ethers_1.ethers.utils.parseUnits(amount, decimals);
}
exports._addDecimals = _addDecimals;
/**
 * converts a micro unit amount to equivalent unit amount
 * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
 * @param {number} decimals
 * @returns {string} equivalent amount in unit.
 */
function _removeDecimals(amount, decimals) {
    return ethers_1.ethers.utils.formatUnits(amount, decimals);
}
exports._removeDecimals = _removeDecimals;
// get the current matic price in usd
// we are using coingecko API to get the latest price
// export async function getMaticPrice(): Promise<number> {
//   // const apiAddress = "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd";
//   // const { data: maticData } = await axios.get(apiAddress);
//   // const maticPrices = maticData["matic-network"];
//   // const usdMaticPrice: number = maticPrices["usd"];
//   return 1.077;
// }
/**
 * Call a smart contract method with arguments
 * @param {ethers.Contract} contract smart contract
 * @param {String} method the method name
 * @param {Array} args the arguments to the method
 * @returns a transaction receipt from the blockchain
 */
function blockchainCall(contract, method, args, // eslint-disable-line @typescript-eslint/no-explicit-any
simulate = false, value) {
    return __awaiter(this, void 0, void 0, function* () {
        const signer = cache_1.SIGNER;
        const biconomy = cache_1.BICONOMY;
        const { usdc } = (0, cache_1.getContracts)();
        contract = contract.connect(signer);
        if (biconomy && contract.address !== usdc.address) {
            console.log({ method }, args);
            const { signature, request } = yield (0, biconomy_1.getSignature)(contract, signer, method, args);
            console.log({ signature, request });
            yield (0, biconomy_1.sendToForwarder)([signature], [request]);
            return { blockNumber: "", txnHash: "", txnCost: "", gasPrice: "" };
        }
        if (biconomy && contract.address == usdc.address) {
            yield (0, biconomy_1.sendBiconomy)(contract, signer, method, args);
            return { blockNumber: "", txnHash: "", txnCost: "", gasPrice: "" };
        }
        // regular (non-meta) tx
        let overrides = { value };
        args.push(overrides);
        const gasLimit = (yield contract.estimateGas[method].apply(null, args)).mul(12).div(10);
        overrides = { value, gasLimit };
        args[args.length - 1] = overrides;
        if (simulate) {
            const [gasEstimate, gasPrice] = yield Promise.all([
                contract.estimateGas[method].apply(null, args),
                cache_1.PROVIDER.getGasPrice(),
            ]);
            console.log(`gasEstimate: ${gasEstimate.toString()} and gasPrice: ${gasPrice.toString()}`);
            // cost is gas * gasPrice
            const cost = gasEstimate.mul(gasPrice);
            const txnCost = ethers_1.ethers.utils.formatEther(cost);
            return { txnCost, gasPrice: ethers_1.ethers.utils.formatEther(gasPrice) };
        }
        const tx = yield contract[method].apply(null, args);
        const receipt = yield tx.wait();
        const cost = receipt.gasUsed.mul(receipt.effectiveGasPrice);
        const txnCost = ethers_1.ethers.utils.formatEther(cost);
        return {
            blockNumber: receipt.blockNumber.toString(),
            txnHash: receipt.transactionHash,
            txnCost,
            gasPrice: ethers_1.ethers.utils.formatEther(receipt.effectiveGasPrice),
        };
    });
}
exports.blockchainCall = blockchainCall;
/**
 * check if the user has approved amount of usdc/ eth (Asset) to the contract.
 * DEFAULT amount is: MAX_APPROVAL_AMOUNT/2
 * @returns boolean
 */
function isApproved(product, amount) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc, alpSave, router, ethEarn, ssvEthUSDEarn, degen, polygonDegen, weth, polygonLeverage, baseUsdEarn, ethWethEarn, baseLeverage, ethLeverage, ethDegenEth, } = (0, cache_1.getContracts)();
        if (["ethWethEarn", "baseLeverage", "ethLeverage", "ethDegenEth"].includes(product))
            return true;
        const asset = product == "polygonLeverage" ? weth : usdc;
        const productToSpender = {
            alpSave,
            alpLarge: router,
            ethEarn,
            ssvEthUSDEarn,
            degen,
            polygonDegen,
            polygonLeverage,
            baseUsdEarn,
            // No approvals needed for these
            ethWethEarn,
            ethLeverage,
            baseLeverage,
            ethDegenEth,
        };
        if (!productToSpender[product]) {
            throw new Error("Product not found");
        }
        const allowance = yield asset.allowance(cache_1.userAddress, (_a = productToSpender[product]) === null || _a === void 0 ? void 0 : _a.address);
        /**
         * If the 'amount' is not specified then we will check the max amount, but
         * we are dividing the max approval amount by 2 because
         * user might have already deposited some amount after approving the max amount
         * and we found out 'allowance' decreases by the amount deposited for 'ethEarn' only.
         * Thats why we are dividing the max approval amount by 2 and comparing it with the allowance.
         */
        const maxApprovalAmount = amount
            ? _addDecimals(amount.toString(), yield asset.decimals())
            : constants_1.MAX_APPROVAL_AMOUNT.div(2);
        return allowance.gte(maxApprovalAmount);
    });
}
exports.isApproved = isApproved;
/**
 * approve outgoing transaction with another wallet or smart contract for
 * the specified amount
 * @param to the receipient contract
 * @param amountUSDC (optional) transaction amount in usdc, if not specified then approve max amount
 */
function approve(product, amountAsset) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { usdc, router, weth } = contracts;
        let asset = usdc;
        if (["ethWethEarn", "ethLeverage", "polygonLeverage"].includes(product)) {
            asset = weth;
        }
        const decimals = yield asset.decimals();
        const amount = amountAsset ? _addDecimals(amountAsset, decimals) : constants_1.MAX_APPROVAL_AMOUNT;
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: amountAsset || _removeDecimals(constants_1.MAX_APPROVAL_AMOUNT, decimals),
            tokenAmount: amountAsset || _removeDecimals(constants_1.MAX_APPROVAL_AMOUNT, decimals),
        };
        const approveArgs = [product === "alpLarge" ? router.address : (_a = contracts[product]) === null || _a === void 0 ? void 0 : _a.address, amount];
        if (cache_1.SIMULATE) {
            const dryRunInfo = (yield blockchainCall(asset, "approve", approveArgs, true));
            return Object.assign(Object.assign({}, basicInfo), dryRunInfo);
        }
        else {
            const receipt = (yield blockchainCall(asset, "approve", approveArgs, false));
            return Object.assign(Object.assign({}, basicInfo), receipt);
        }
    });
}
exports.approve = approve;
/**
 * Transfer usdc from user's wallet to another wallet
 * @param to receipient address
 * @param amountUSDC amount in usdc
 */
function transfer(to, amountUSDC) {
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc } = (0, cache_1.getContracts)();
        const amount = _addDecimals(amountUSDC, 6);
        if (amount.isNegative() || amount.isZero()) {
            throw new Error("amount must be positive.");
        }
        const balance = yield usdc.balanceOf(yield cache_1.SIGNER.getAddress());
        // balance at wallet < amount requested to transfer
        if (balance.lt(amount)) {
            throw new Error("Insufficient allowance");
        }
        return blockchainCall(usdc, "transfer", [to, amount]);
    });
}
exports.transfer = transfer;
function mintUSDC(to, amountUSDC) {
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc } = (0, cache_1.getContracts)();
        const amount = _addDecimals(amountUSDC.toString(), 6);
        if (amount.isNegative() || amount.isZero()) {
            throw new Error("amount must be positive.");
        }
        return blockchainCall(usdc, "mint", [to, amount]);
    });
}
exports.mintUSDC = mintUSDC;
// AffinePass
/**
 * Mint NFTs for whitelisted users.
 * @param proof a merkle proof generated using the Whitelist merkle tree
 */
function mintWhitelist(proof) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        if (!affinePass)
            throw new Error("affinePass contract not found");
        return blockchainCall(affinePass, "mintWhitelist", [proof]);
    });
}
exports.mintWhitelist = mintWhitelist;
/**
 * Mint NFTs during public sale.
 * @param quantity how many NFTs to mint
 */
function mint() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        if (!affinePass)
            throw new Error("affinePass contract not found");
        return blockchainCall(affinePass, "mint", []);
    });
}
exports.mint = mint;
/**
 * Mint NFTs for Accolades.
 * @param quantity how many NFTs to mint
 */
function mintGuaranteed() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        if (!affinePass)
            throw new Error("affinePass contract not found");
        return blockchainCall(affinePass, "mintGuaranteed", []);
    });
}
exports.mintGuaranteed = mintGuaranteed;
/**
 * check if the user is whitelisted.
 * @returns boolean
 */
function isWhitelisted(address, proof) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return (_a = affinePass === null || affinePass === void 0 ? void 0 : affinePass.isWhitelisted(address, proof)) !== null && _a !== void 0 ? _a : false;
    });
}
exports.isWhitelisted = isWhitelisted;
// TODO: Need to be removed after FE confirmation
/**
 * check if the user has an Accolade.
 * @returns boolean
 * TODO: remove this function after FE confirms
 */
function isAccolade(address) {
    return __awaiter(this, void 0, void 0, function* () {
        return false;
    });
}
exports.isAccolade = isAccolade;
// TODO: Need to be removed after FE confirmation
/**
 * check the user's accolade allocation.
 * @returns number
 * TODO: Remove this function after FE confirms
 */
function accoladeAllocation(address) {
    return __awaiter(this, void 0, void 0, function* () {
        return 0;
    });
}
exports.accoladeAllocation = accoladeAllocation;
/**
 * check the user's Affine Pass balance.
 * @returns number
 */
function passBalanceOf(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return affinePass ? (yield affinePass.balanceOf(address)).toNumber() : 0;
    });
}
exports.passBalanceOf = passBalanceOf;
/**
 * check if there is remaining supply minus the guaranatees.
 * @returns boolean
 */
function hasRemainingSupply() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return (_a = affinePass === null || affinePass === void 0 ? void 0 : affinePass.hasRemainingSupply()) !== null && _a !== void 0 ? _a : false;
    });
}
exports.hasRemainingSupply = hasRemainingSupply;
/**
 * check if the user has minted during whitelist.
 * @returns boolean
 */
function hasMintedWhitelist(address) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return (_a = affinePass === null || affinePass === void 0 ? void 0 : affinePass.hasMintedWhitelist(address)) !== null && _a !== void 0 ? _a : false;
    });
}
exports.hasMintedWhitelist = hasMintedWhitelist;
/**
 * check if a user minted during the public sale.
 * @returns boolean
 */
function hasMinted(address) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return (_a = affinePass === null || affinePass === void 0 ? void 0 : affinePass.hasMinted(address)) !== null && _a !== void 0 ? _a : false;
    });
}
exports.hasMinted = hasMinted;
/**
 * check affine pass whitelist mint is live.
 * @returns boolean
 */
function whitelistSaleIsActive() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return (_a = affinePass === null || affinePass === void 0 ? void 0 : affinePass.whitelistSaleIsActive()) !== null && _a !== void 0 ? _a : false;
    });
}
exports.whitelistSaleIsActive = whitelistSaleIsActive;
/**
 * check affine pass public mint is live.
 * @returns boolean
 */
function saleIsActive() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const { affinePass } = contracts;
        return (_a = affinePass === null || affinePass === void 0 ? void 0 : affinePass.saleIsActive()) !== null && _a !== void 0 ? _a : false;
    });
}
exports.saleIsActive = saleIsActive;
/**
 * This function will return the tvl cap of the product,
 * but some of the products don't have tvl cap so it will return error in that case.
 * So, make sure to handle the error or use try catch block.
 * @param product {AlpineProduct} the product name
 * @returns {Promise<string>} the tvl cap of the product in unit
 */
function getTVLCap(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        const _asset = ["ethLeverage", "polygonLeverage", "ethWethEarn"].includes(product) ? contracts.weth : contracts.usdc;
        const _contract = contracts[product];
        const tvlCap = yield _contract.tvlCap();
        const decimals = yield _asset.decimals();
        return _removeDecimals(tvlCap, decimals);
    });
}
exports.getTVLCap = getTVLCap;
/**
 * Get the fee in native asset for bridging pass to destination chain
 * @param destinationChianId the destination chain id
 * @returns
 */
function ccipFee(destinationChianId) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (![1, 137].includes(destinationChianId)) {
            throw new Error("Invalid chain id. Only 1 and 137 are supported.");
        }
        if (destinationChianId === 1) {
            const { affinePassBridgePolygon } = contracts;
            const _fee = affinePassBridgePolygon ? yield (affinePassBridgePolygon === null || affinePassBridgePolygon === void 0 ? void 0 : affinePassBridgePolygon.ccipFee(constants_1.CCIP_NETWORK_SELECTOR[destinationChianId])) : 0;
            const ethAmmount = parseFloat(ethers_1.ethers.utils.formatEther(_fee)) * 1.05;
            return ethAmmount;
        }
        else if (destinationChianId === 137) {
            const { affinePassBridgeEthereum } = contracts;
            const _fee = affinePassBridgeEthereum ? yield (affinePassBridgeEthereum === null || affinePassBridgeEthereum === void 0 ? void 0 : affinePassBridgeEthereum.ccipFee(constants_1.CCIP_NETWORK_SELECTOR[destinationChianId])) : 0;
            const ethAmmount = parseFloat(ethers_1.ethers.utils.formatEther(_fee)) * 1.05;
            return ethAmmount;
        }
        else {
            return 0;
        }
    });
}
exports.ccipFee = ccipFee;
/**
 * Bridge pass to destination chain
 * @param destinationChianId the destination chain id
 * @param destinationAddress the destination address
 * @param tokenId token id of the pass
 * @param fee fee in native asset
 * @returns
 */
function bridgePass(destinationChianId, destinationAddress, tokenId, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (![1, 137].includes(destinationChianId)) {
            throw new Error("Invalid chain id. Only 1 and 137 are supported.");
        }
        let bridge = undefined;
        if (destinationChianId === 1) {
            const { affinePassBridgePolygon } = contracts;
            bridge = affinePassBridgePolygon;
        }
        else {
            const { affinePassBridgeEthereum } = contracts;
            bridge = affinePassBridgeEthereum;
        }
        if (bridge) {
            return blockchainCall(bridge, "bridgePass", [constants_1.CCIP_NETWORK_SELECTOR[destinationChianId], destinationAddress, tokenId], false, ethers_1.ethers.utils.parseEther(fee.toString()));
        }
    });
}
exports.bridgePass = bridgePass;
