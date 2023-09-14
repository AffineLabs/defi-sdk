import { BigNumber, ethers, utils } from "ethers";
import { getContracts, getPolygonContracts, PROVIDER } from "../cache";

function _getMappingStorage(slot: number, key: string): string {
  const paddedSlot = utils.hexZeroPad(utils.hexValue(slot), 32);
  const paddedKey = utils.hexZeroPad(key, 32);
  return utils.keccak256(paddedKey + paddedSlot.slice(2));
}

export async function setUSDCBalance(address: string, balance: BigNumber) {
  const { usdc } = getContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    usdc.address,
    _getMappingStorage(0, address),
    utils.hexZeroPad(utils.hexValue(balance), 32),
  ]);
}

// https://basescan.org/address/0x1833c6171e0a3389b156eaedb301cffbf328b463#code
// There's 1 slot in `Initializable` and  50 slots used in ContextUpgradeable
export async function setBaseUsdcBalance(address: string, balance: BigNumber) {
  const { usdc } = getContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    usdc.address,
    _getMappingStorage(51, address),
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

export async function setAlpSaveL1LockedValue(value: BigNumber) {
  const { alpSave } = getPolygonContracts();
  await PROVIDER.send("anvil_setStorageAt", [
    alpSave.address,
    // L1TotalLockedValue is found at this slot of L2Vault contract. (Run `forge inspect L2Vault storage`)
    utils.hexValue(385),
    utils.hexZeroPad(utils.hexValue(value), 32),
  ]);
}

export function getTestProvider(network: "poly" | "eth" | "base") {
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
