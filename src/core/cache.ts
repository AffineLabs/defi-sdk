import { ethers } from "ethers";
import axios from "axios";
import { AlpineContracts } from "./types";

const CONTRACT_VERSION = "stable";
export let CONTRACTS: AlpineContracts;
export let SIGNER: ethers.Signer;
export let userAddress: string;
export let SIMULATE = false;
export let BICONOMY: ethers.providers.Web3Provider | undefined;

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
export let PROVIDER = new ethers.providers.StaticJsonRpcProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
);

/**
 * Fet all supported contracts in the alpine protocol
 * @returns an object with all alpine contracts. Currently has
 * `usdc`, `alpSave`, `alpBal` and `alpAggr`.
 */

export async function getAllContracts(
  provider: ethers.providers.JsonRpcProvider,
  version: string,
): Promise<AlpineContracts> {
  const s3Root = `https://sc-abis.s3.us-east-2.amazonaws.com/${version}`;
  const allData = (await axios.get(`${s3Root}/addressbook.json`)).data;

  const { PolygonAlpSave: alpSave, PolygonBtcEthVault: alpLarge, PolygonUSDC: usdc, Forwarder: forwarder } = allData;

  return {
    usdc: new ethers.Contract(usdc.address, usdc.abi, provider),
    alpSave: new ethers.Contract(alpSave.address, alpSave.abi, provider),
    alpLarge: new ethers.Contract(alpLarge.address, alpLarge.abi, provider),
    forwarder: new ethers.Contract(forwarder.address, forwarder.abi, provider),
  };
}

export async function init(
  signerOrAddress: ethers.Signer | string,
  biconomy: ethers.providers.Web3Provider | undefined,
  contractVersion: string = CONTRACT_VERSION,
) {
  const provider = PROVIDER;
  CONTRACTS = await getAllContracts(provider, contractVersion);

  if (ethers.Signer.isSigner(signerOrAddress)) {
    SIGNER = signerOrAddress;
    userAddress = await SIGNER.getAddress();
  } else {
    userAddress = signerOrAddress;
  }

  BICONOMY = biconomy;
}

export function setProvider(provider: ethers.providers.StaticJsonRpcProvider) {
  PROVIDER = provider;
}

export async function setSimulationMode(mode: boolean) {
  SIMULATE = mode;
}
