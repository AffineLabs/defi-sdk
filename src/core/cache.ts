import { ethers } from "ethers";
import axios from "axios";
import { AlpineContracts } from "./types";
import {
  Forwarder__factory,
  L2Vault__factory,
  TwoAssetBasket__factory,
  Router__factory,
  EmergencyWithdrawalQueue__factory,
} from "../typechain";
import { NETWORK_TYPE } from "./constants";

export let CONTRACTS: AlpineContracts;
export let SIGNER: ethers.Signer;
export let userAddress: string;
export let SIMULATE = false;
export let BICONOMY: ethers.providers.Web3Provider | undefined;

const CONTRACT_VERSION = process.env.CONTRACT_VERSION ?? "test";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
export const RPC_URL = `https://polygon-${NETWORK_TYPE}.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
export let PROVIDER = new ethers.providers.StaticJsonRpcProvider(RPC_URL);

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

  const erc20Abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function allowance(address owner, address spender) view returns (uint)",

    // write
    "function transfer(address to, uint amount) returns (bool)",
    "function mint(address,uint)",
    "function approve(address,uint)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];
  const {
    PolygonAlpSave: alpSave,
    PolygonBtcEthVault: alpLarge,
    Forwarder: forwarder,
    ERC4626Router: router,
  } = allData;
  const alpSaveContract = L2Vault__factory.connect(alpSave.address, provider);
  return {
    alpSave: alpSaveContract,
    alpLarge: TwoAssetBasket__factory.connect(alpLarge.address, provider),
    forwarder: Forwarder__factory.connect(forwarder.address, provider),
    usdc: new ethers.Contract(await alpSaveContract.asset(), erc20Abi, provider),
    router: Router__factory.connect(router.address, provider),
    ewQueue: EmergencyWithdrawalQueue__factory.connect(await alpSaveContract.emergencyWithdrawalQueue(), provider),
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
