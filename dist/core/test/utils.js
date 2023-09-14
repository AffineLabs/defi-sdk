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
exports.oneUSDC = exports.getTestProvider = exports.setAlpSaveL1LockedValue = exports.setAlpLargeBalance = exports.setAlpSaveBalance = exports.setBaseUsdcBalance = exports.setUSDCBalance = void 0;
const ethers_1 = require("ethers");
const cache_1 = require("../cache");
function _getMappingStorage(slot, key) {
    const paddedSlot = ethers_1.utils.hexZeroPad(ethers_1.utils.hexValue(slot), 32);
    const paddedKey = ethers_1.utils.hexZeroPad(key, 32);
    return ethers_1.utils.keccak256(paddedKey + paddedSlot.slice(2));
}
function setUSDCBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc } = (0, cache_1.getContracts)();
        yield cache_1.PROVIDER.send("anvil_setStorageAt", [
            usdc.address,
            _getMappingStorage(0, address),
            ethers_1.utils.hexZeroPad(ethers_1.utils.hexValue(balance), 32),
        ]);
    });
}
exports.setUSDCBalance = setUSDCBalance;
// https://basescan.org/address/0x1833c6171e0a3389b156eaedb301cffbf328b463#code
// There's 1 slot in `Initializable` and  50 slots used in ContextUpgradeable
function setBaseUsdcBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc } = (0, cache_1.getContracts)();
        yield cache_1.PROVIDER.send("anvil_setStorageAt", [
            usdc.address,
            _getMappingStorage(51, address),
            ethers_1.utils.hexZeroPad(ethers_1.utils.hexValue(balance), 32),
        ]);
    });
}
exports.setBaseUsdcBalance = setBaseUsdcBalance;
function setAlpSaveBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getPolygonContracts)();
        yield cache_1.PROVIDER.send("anvil_setStorageAt", [
            contracts.alpSave.address,
            _getMappingStorage(51, address),
            ethers_1.utils.hexZeroPad(ethers_1.utils.hexValue(balance), 32),
        ]);
    });
}
exports.setAlpSaveBalance = setAlpSaveBalance;
function setAlpLargeBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getPolygonContracts)();
        yield cache_1.PROVIDER.send("anvil_setStorageAt", [
            contracts.alpLarge.address,
            _getMappingStorage(51, address),
            ethers_1.utils.hexZeroPad(ethers_1.utils.hexValue(balance), 32),
        ]);
    });
}
exports.setAlpLargeBalance = setAlpLargeBalance;
function setAlpSaveL1LockedValue(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave } = (0, cache_1.getPolygonContracts)();
        yield cache_1.PROVIDER.send("anvil_setStorageAt", [
            alpSave.address,
            // L1TotalLockedValue is found at this slot of L2Vault contract. (Run `forge inspect L2Vault storage`)
            ethers_1.utils.hexValue(385),
            ethers_1.utils.hexZeroPad(ethers_1.utils.hexValue(value), 32),
        ]);
    });
}
exports.setAlpSaveL1LockedValue = setAlpSaveL1LockedValue;
function getTestProvider(network) {
    const networkToPort = {
        poly: 8545,
        eth: 8546,
        base: 8547,
    };
    const port = networkToPort[network];
    const url = `http://localhost:${port}`;
    const testProvider = new ethers_1.ethers.providers.StaticJsonRpcProvider({
        url,
        throttleLimit: 10,
    });
    return testProvider;
}
exports.getTestProvider = getTestProvider;
exports.oneUSDC = ethers_1.ethers.BigNumber.from(10).pow(6);
