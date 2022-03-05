import { ethers } from "ethers";
import axios from "axios";
import { AlpineContracts } from ".";

export let CONTRACTS: AlpineContracts;
export let SIGNER: ethers.Signer;
export let BICONOMY: ethers.providers.Web3Provider | undefined;

/**
 * Fet all supported contracts in the alpine protocol
 * @returns an object with all alpine contracts. Currently has
 * `usdc`, `alpSave`, `alpBal` and `alpAggr`.
 */

export async function getAllContracts(
  provider: ethers.providers.JsonRpcProvider
): Promise<AlpineContracts> {
  const s3Root = "https://sc-abis.s3.us-east-2.amazonaws.com/latest";
  const usdcABI = (await axios.get(`${s3Root}/abi/MintableToken.json`)).data;
  const allData = (await axios.get(`${s3Root}/addressbook.json`)).data;

  const {
    PolygonAlpSave: alpSave,
    PolygonRelayer: relayer,
    PolygonBtcEthVault: alpLarge,
  } = allData;

  // Hardcoding USDC address on mumbai for now. TODO: add to addressbook
  const usdcAddr = "0x5fD6A096A23E95692E37Ec7583011863a63214AA";
  return {
    usdc: new ethers.Contract(usdcAddr, usdcABI, provider),
    alpSave: new ethers.Contract(alpSave.address, alpSave.abi, provider),
    relayer: new ethers.Contract(relayer.address, relayer.abi, provider),
    alpLarge: new ethers.Contract(alpLarge.address, alpLarge.abi, provider),
  };
}

export async function init(
  provider: ethers.providers.JsonRpcProvider,
  signer: ethers.Signer,
  biconomy: ethers.providers.Web3Provider | undefined
) {
  CONTRACTS = await getAllContracts(provider);
  SIGNER = signer;
  BICONOMY = biconomy;
}
