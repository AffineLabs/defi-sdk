import { ethers } from "ethers";
import axios from "axios";
import { EthContracts, PolygonContracts } from "./types";
import {
  Forwarder__factory,
  L2Vault__factory,
  TwoAssetBasket__factory,
  Router__factory,
  EmergencyWithdrawalQueue__factory,
  Vault__factory,
} from "../typechain";
import { AllowedChainId } from "../types/account";
import { DEFAULT_RAW_CHAIN_ID } from "./constants";

let CONTRACTS: PolygonContracts | EthContracts;
let CHAIN_ID: AllowedChainId;
export let SIGNER: ethers.Signer;
export let userAddress: string;
export let SIMULATE = false;
export let BICONOMY: ethers.providers.Web3Provider | undefined;

const CONTRACT_VERSION = process.env.CONTRACT_VERSION ?? "test";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

export let PROVIDER: ethers.providers.StaticJsonRpcProvider;

export const RPC_URLS: { [index: AllowedChainId]: string } = {
  1: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  5: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  137: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  80001: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
};

export function getProviderByChainId(chainId: AllowedChainId): ethers.providers.StaticJsonRpcProvider {
  PROVIDER = new ethers.providers.StaticJsonRpcProvider(RPC_URLS[chainId]);
  return PROVIDER;
}

/**
 * @param provider The current provider
 * @param version The addressbook version
 * @returns A map of contract names to ethers.Contract objects
 */
export async function getAllContracts(
  provider: ethers.providers.JsonRpcProvider,
  version: string,
): Promise<PolygonContracts | EthContracts> {
  const s3Root = `https://raw.githubusercontent.com/AffineLabs/addressbook/main/${version}`;
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
    EthUsdcEarn: ethEarnData,
    EthWethEarn: ethWethEarnData,
  } = allData;

  const chainId = getChainId();

  if (chainId === 80001 || chainId === 137) {
    const alpSave = L2Vault__factory.connect(alpSaveData.address, provider);
    return {
      alpSave,
      alpLarge: TwoAssetBasket__factory.connect(alpLarge.address, provider),
      forwarder: Forwarder__factory.connect(forwarder.address, provider),
      usdc: new ethers.Contract(await alpSave.asset(), erc20Abi, provider),
      router: Router__factory.connect(router.address, provider),
      ewQueue: EmergencyWithdrawalQueue__factory.connect(await alpSave.emergencyWithdrawalQueue(), provider),
    };
  } else if (chainId === 1 || chainId === 5) {
    const ethEarn = Vault__factory.connect(ethEarnData.address, provider);
    const ethWethEarn = Vault__factory.connect(ethWethEarnData.address, provider);
    return {
      ethEarn,
      ethWethEarn,
      usdc: new ethers.Contract(await ethEarn.asset(), erc20Abi, provider),
      weth: new ethers.Contract(await ethWethEarn.asset(), erc20Abi, provider),
    };
  } else {
    throw Error("Bad chainId");
  }
}

export function getContracts(): PolygonContracts | EthContracts {
  return CONTRACTS;
}
export function getEthContracts(): EthContracts {
  return CONTRACTS as EthContracts;
}
export function getPolygonContracts(): PolygonContracts {
  return CONTRACTS as PolygonContracts;
}

export async function init(
  signerOrAddress: ethers.Signer | string,
  biconomy: ethers.providers.Web3Provider | undefined,
  contractVersion: string = CONTRACT_VERSION,
  chainId: AllowedChainId = DEFAULT_RAW_CHAIN_ID,
) {
  CHAIN_ID = chainId;

  // Use the user's wallet's provider if possible
  if (ethers.Signer.isSigner(signerOrAddress)) {
    SIGNER = signerOrAddress;
    PROVIDER = SIGNER.provider as ethers.providers.JsonRpcProvider;
    userAddress = await SIGNER.getAddress();
  } else {
    PROVIDER = getProviderByChainId(chainId);
    userAddress = signerOrAddress;
  }

  CONTRACTS = await getAllContracts(PROVIDER, contractVersion);

  BICONOMY = biconomy;
}

export function getChainId() {
  return CHAIN_ID;
}

export function setProvider(provider: ethers.providers.JsonRpcProvider) {
  PROVIDER = provider;
}

export async function setSimulationMode(mode: boolean) {
  SIMULATE = mode;
}
