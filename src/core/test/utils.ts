import { utils } from "ethers";
import { CONTRACTS, PROVIDER } from "../cache";

function _getMappingStorage(slot: number, key: string): string {
  const paddedSlot = utils.hexZeroPad(utils.hexValue(slot), 32);
  const paddedKey = utils.hexZeroPad(key, 32);
  return utils.keccak256(paddedKey + paddedSlot.slice(2));
}

export async function setUSDCBalance(address: string, balance: number) {
  await PROVIDER.send("anvil_setStorageAt", [
    CONTRACTS.usdc.address,
    _getMappingStorage(0, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

export async function setAlpSaveBalance(address: string, balance: number) {
  await PROVIDER.send("anvil_setStorageAt", [
    CONTRACTS.alpSave.address,
    _getMappingStorage(51, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

export async function setAlpLargeBalance(address: string, balance: number) {
  await PROVIDER.send("anvil_setStorageAt", [
    CONTRACTS.alpLarge.address,
    _getMappingStorage(3, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

export async function setAlpSaveL1LockedValue(value: number) {
  await PROVIDER.send("anvil_setStorageAt", [
    CONTRACTS.alpSave.address,
    // L1TotalLockedValue is found at slot 282 of L2Vault contract.
    utils.hexValue(282),
    utils.hexZeroPad(utils.hexValue(value), 32),
  ]);
}
