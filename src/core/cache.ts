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
import { AllowedChainId } from "../types/account";

export let CONTRACTS: AlpineContracts;
export let SIGNER: ethers.Signer;
export let userAddress: string;
export let SIMULATE = false;
export let BICONOMY: ethers.providers.Web3Provider | undefined;

const CONTRACT_VERSION = process.env.CONTRACT_VERSION ?? "test";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
// export const RPC_URL = `https://polygon-${NETWORK_TYPE}.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
// export let PROVIDER = new ethers.providers.StaticJsonRpcProvider(RPC_URL);

export function getRpcUrlByChainId(chainId: AllowedChainId): string {
  switch (chainId) {
    case "1":
      return `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}}`;
    case "5":
      return `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}}`;
    case "137":
      return `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
    case "80001":
      return `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
    default:
      return "";
  }
}

export function getProviderByChainId(chainId: AllowedChainId): ethers.providers.StaticJsonRpcProvider {
  return new ethers.providers.StaticJsonRpcProvider(getRpcUrlByChainId(chainId));
}

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

  // Using this abi so that we mint usdc (the tests run on testnet)
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
    PolygonAlpSave: alpSaveData,
    PolygonBtcEthVault: alpLarge,
    Forwarder: forwarder,
    ERC4626Router: router,
  } = allData;
  const alpSave = L2Vault__factory.connect(alpSaveData.address, provider);
  return {
    alpSave,
    alpLarge: TwoAssetBasket__factory.connect(alpLarge.address, provider),
    forwarder: Forwarder__factory.connect(forwarder.address, provider),
    usdc: new ethers.Contract(await alpSave.asset(), erc20Abi, provider),
    router: Router__factory.connect(router.address, provider),
    ewQueue: EmergencyWithdrawalQueue__factory.connect(await alpSave.emergencyWithdrawalQueue(), provider),
  };
}

export async function init(
  signerOrAddress: ethers.Signer | string,
  biconomy: ethers.providers.Web3Provider | undefined,
  chainId: AllowedChainId,
  contractVersion: string = CONTRACT_VERSION,
) {
  const provider = getProviderByChainId(chainId);
  CONTRACTS = await getAllContracts(provider, contractVersion);

  if (ethers.Signer.isSigner(signerOrAddress)) {
    SIGNER = signerOrAddress;
    userAddress = await SIGNER.getAddress();
  } else {
    userAddress = signerOrAddress;
  }

  BICONOMY = biconomy;
}

export async function setSimulationMode(mode: boolean) {
  SIMULATE = mode;
}
