var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ethers, utils } from "ethers";
import { getContracts, getPolygonContracts, PROVIDER } from "../cache";
function _getMappingStorage(slot, key) {
    const paddedSlot = utils.hexZeroPad(utils.hexValue(slot), 32);
    const paddedKey = utils.hexZeroPad(key, 32);
    return utils.keccak256(paddedKey + paddedSlot.slice(2));
}
export function setUSDCBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc } = getContracts();
        yield PROVIDER.send("anvil_setStorageAt", [
            usdc.address,
            _getMappingStorage(0, address),
            utils.hexZeroPad(utils.hexValue(balance), 32),
        ]);
    });
}
// https://basescan.org/address/0x1833c6171e0a3389b156eaedb301cffbf328b463#code
// There's 1 slot in `Initializable` and  50 slots used in ContextUpgradeable
export function setBaseUsdcBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const { usdc } = getContracts();
        yield PROVIDER.send("anvil_setStorageAt", [
            usdc.address,
            _getMappingStorage(51, address),
            utils.hexZeroPad(utils.hexValue(balance), 32),
        ]);
    });
}
export function setAlpSaveBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getPolygonContracts();
        yield PROVIDER.send("anvil_setStorageAt", [
            contracts.alpSave.address,
            _getMappingStorage(51, address),
            utils.hexZeroPad(utils.hexValue(balance), 32),
        ]);
    });
}
export function setAlpLargeBalance(address, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getPolygonContracts();
        yield PROVIDER.send("anvil_setStorageAt", [
            contracts.alpLarge.address,
            _getMappingStorage(51, address),
            utils.hexZeroPad(utils.hexValue(balance), 32),
        ]);
    });
}
export function setAlpSaveL1LockedValue(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const { alpSave } = getPolygonContracts();
        yield PROVIDER.send("anvil_setStorageAt", [
            alpSave.address,
            // L1TotalLockedValue is found at this slot of L2Vault contract. (Run `forge inspect L2Vault storage`)
            utils.hexValue(385),
            utils.hexZeroPad(utils.hexValue(value), 32),
        ]);
    });
}
export function getTestProvider(network) {
    const networkToPort = {
        poly: 8545,
        eth: 8546,
        base: 8547,
    };
    const port = networkToPort[network];
    const url = `http://localhost:${port}`;
    const testProvider = new ethers.providers.StaticJsonRpcProvider({
        url,
        throttleLimit: 10,
    });
    return testProvider;
}
export const oneUSDC = ethers.BigNumber.from(10).pow(6);
