import { utils } from "ethers";
import { contracts, getPolygonContracts, PROVIDER } from "../cache";

function _getMappingStorage(slot: number, key: string): string {
  const paddedSlot = utils.hexZeroPad(utils.hexValue(slot), 32);
  const paddedKey = utils.hexZeroPad(key, 32);
  return utils.keccak256(paddedKey + paddedSlot.slice(2));
}

export async function setUSDCBalance(address: string, balance: number) {
  const contracts = getPolygonContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    contracts.usdc.address,
    _getMappingStorage(0, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

export async function setAlpSaveBalance(address: string, balance: number) {
  const contracts = getPolygonContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    contracts.alpSave.address,
    _getMappingStorage(51, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

export async function setAlpLargeBalance(address: string, balance: number) {
  const contracts = getPolygonContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    contracts.alpLarge.address,
    _getMappingStorage(51, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

export async function setAlpSaveL1LockedValue(value: number) {
  const contracts = getPolygonContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    contracts.alpSave.address,
    // L1TotalLockedValue is found at slot 284 of L2Vault contract. (Run `forge inspect L2Vault storage`)
    utils.hexValue(284),
    utils.hexZeroPad(utils.hexValue(value), 32),
  ]);
}
