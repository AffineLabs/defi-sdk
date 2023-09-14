import { ethers } from "ethers";
import axios from "axios";
import { BaseContracts, EthContracts, PolygonContracts } from "./types";
import {
  Forwarder__factory,
  L2Vault__factory,
  TwoAssetBasket__factory,
  Router__factory,
  EmergencyWithdrawalQueue__factory,
  Vault__factory,
  WithdrawalEscrow__factory,
  StrategyVault__factory,
  AffineGenesis__factory,
  VaultV2__factory,
} from "../typechain";
import { AllowedChainId } from "../types/account";
import {
  DEFAULT_RAW_CHAIN_ID,
  FORKED_NODE_URL_FOR_ETH,
  FORKED_NODE_URL_FOR_MATIC,
  IS_USING_FORKED_MAINNET,
} from "./constants";

let CONTRACTS: PolygonContracts | EthContracts | BaseContracts;
let CHAIN_ID: AllowedChainId;
export let SIGNER: ethers.Signer;
export let userAddress: string;
export let SIMULATE = false;
export let BICONOMY: ethers.providers.Web3Provider | undefined;

const CONTRACT_VERSION = process.env.CONTRACT_VERSION ?? "test";

const { ALCHEMY_API_KEY, ALCHEMY_BASE_TESTNET_KEY, ALCHEMY_BASE_MAINNET_KEY } = process.env;

export let PROVIDER: ethers.providers.StaticJsonRpcProvider;

export const RPC_URLS: { [index: AllowedChainId]: string } = {
  1:
    IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_ETH
      ? FORKED_NODE_URL_FOR_ETH
      : `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  5: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  137:
    IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_MATIC
      ? FORKED_NODE_URL_FOR_MATIC
      : `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  80001: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  8453: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_BASE_MAINNET_KEY}`,
  84531: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_BASE_TESTNET_KEY}`,
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
): Promise<PolygonContracts | EthContracts | BaseContracts> {
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
    PolygonBtcEthVault: alpLargeData,
    Forwarder: forwarder,
    ERC4626Router: router,
    EthUsdcEarn: ethEarnData,
    EthWethEarn: ethWethEarnData,
    EthRouter: ethRouter,
    EthSushiLpUsdcWeth: ssvEthSushiUSDEarn,
    Degen: degenData,
    PolygonDegen: polygonDegenData,
    EthStEthLev: ethLeverageData,
    PolygonStEthLev: polygonLeverageData,
    AffineGenesis: affineGenesisData,
    BaseUsdEarn: baseUsdEarnData,
  } = allData;

  const chainId = getChainId();

  if (chainId === 80001 || chainId === 137) {
    const alpSave = L2Vault__factory.connect(alpSaveData.address, provider);
    const alpLarge = TwoAssetBasket__factory.connect(alpLargeData.address, provider);

    return {
      alpSave,
      alpLarge,
      forwarder: Forwarder__factory.connect(forwarder.address, provider),
      usdc: new ethers.Contract(await alpSave.asset(), erc20Abi, provider),
      weth: new ethers.Contract(await alpLarge.weth(), erc20Abi, provider),
      router: Router__factory.connect(router.address, provider),
      ewQueue: EmergencyWithdrawalQueue__factory.connect(await alpSave.emergencyWithdrawalQueue(), provider),
      polygonDegen: StrategyVault__factory.connect(polygonDegenData.address, provider),
      polygonLeverage: chainId === 137 ? Vault__factory.connect(polygonLeverageData.address, provider) : undefined,
      affineGenesis:
        chainId === 137 && typeof affineGenesisData !== "undefined"
          ? AffineGenesis__factory.connect(affineGenesisData.address, provider)
          : undefined,
    };
  } else if (chainId === 1 || chainId === 5) {
    const ethEarn = Vault__factory.connect(ethEarnData.address, provider);
    const ethWethEarn = Vault__factory.connect(ethWethEarnData.address, provider);
    const ssvEthUSDEarn = StrategyVault__factory.connect(ssvEthSushiUSDEarn.address, provider);
    const withdrawalEscrow = WithdrawalEscrow__factory.connect(await ssvEthUSDEarn.debtEscrow(), provider);
    const degen = Vault__factory.connect(degenData.address, provider);
    const ethLeverage = chainId === 1 ? Vault__factory.connect(ethLeverageData.address, provider) : undefined;
    return {
      ethEarn,
      ethWethEarn,
      ssvEthUSDEarn,
      withdrawalEscrow,
      degen,
      ethLeverage,
      usdc: new ethers.Contract(await ethEarn.asset(), erc20Abi, provider),
      weth: new ethers.Contract(await ethWethEarn.asset(), erc20Abi, provider),
      router: Router__factory.connect(ethRouter.address, provider),
    };
  } else if (chainId == 8453 || chainId == 84531) {
    const baseUsdEarn = chainId == 8453 ? VaultV2__factory.connect(baseUsdEarnData.address, provider) : undefined;

    return {
      baseUsdEarn,
      usdc: new ethers.Contract(
        baseUsdEarn ? await baseUsdEarn.asset() : "0x2e668Bb88287675e34c8dF82686dfd0b7F0c0383",
        erc20Abi,
        provider,
      ),
      weth: new ethers.Contract("0x4200000000000000000000000000000000000006", erc20Abi, provider),
    };
  } else {
    throw Error("Bad chainId");
  }
}

export function getContracts(): PolygonContracts | EthContracts | BaseContracts {
  return CONTRACTS;
}
export function getEthContracts(): EthContracts {
  return CONTRACTS as EthContracts;
}
export function getPolygonContracts(): PolygonContracts {
  return CONTRACTS as PolygonContracts;
}
export function getBaseContracts(): BaseContracts {
  return CONTRACTS as BaseContracts;
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
