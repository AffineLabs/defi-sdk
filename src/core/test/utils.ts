import { ethers, utils } from "ethers";
import { getPolygonContracts, PROVIDER } from "../cache";

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
  const { alpSave } = getPolygonContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    alpSave.address,
    // L1TotalLockedValue is found at this slot of L2Vault contract. (Run `forge inspect L2Vault storage`)
    utils.hexValue(385),
    utils.hexZeroPad(utils.hexValue(value), 32),
  ]);
}

export function getTestProvider(network: "poly" | "eth") {
  const url = network === "poly" ? "http://localhost:8545" : "http://localhost:8546";
  const testProvider = new ethers.providers.StaticJsonRpcProvider({
    url,
    throttleLimit: 10,
  });
  return testProvider;
}
