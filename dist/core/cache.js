"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSimulationMode = exports.setProvider = exports.getChainId = exports.init = exports.getBaseContracts = exports.getPolygonContracts = exports.getEthContracts = exports.getContracts = exports.getAllContracts = exports.getProviderByChainId = exports.RPC_URLS = exports.PROVIDER = exports.BICONOMY = exports.SIMULATE = exports.userAddress = exports.SIGNER = void 0;
const ethers_1 = require("ethers");
const axios_1 = __importDefault(require("axios"));
const typechain_1 = require("../typechain");
const constants_1 = require("./constants");
let CONTRACTS;
let CHAIN_ID;
exports.SIMULATE = false;
const CONTRACT_VERSION = (_a = process.env.CONTRACT_VERSION) !== null && _a !== void 0 ? _a : "test";
const { ALCHEMY_API_KEY, ALCHEMY_BASE_TESTNET_KEY, ALCHEMY_BASE_MAINNET_KEY } = process.env;
exports.RPC_URLS = {
    1: constants_1.IS_USING_FORKED_MAINNET && constants_1.FORKED_NODE_URL_FOR_ETH
        ? constants_1.FORKED_NODE_URL_FOR_ETH
        : `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    5: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    137: constants_1.IS_USING_FORKED_MAINNET && constants_1.FORKED_NODE_URL_FOR_MATIC
        ? constants_1.FORKED_NODE_URL_FOR_MATIC
        : `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    80001: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    8453: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_BASE_MAINNET_KEY}`,
    84531: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_BASE_TESTNET_KEY}`,
};
function getProviderByChainId(chainId) {
    exports.PROVIDER = new ethers_1.ethers.providers.StaticJsonRpcProvider(exports.RPC_URLS[chainId]);
    return exports.PROVIDER;
}
exports.getProviderByChainId = getProviderByChainId;
/**
 * @param provider The current provider
 * @param version The addressbook version
 * @returns A map of contract names to ethers.Contract objects
 */
function getAllContracts(provider, version) {
    return __awaiter(this, void 0, void 0, function* () {
        const s3Root = `https://raw.githubusercontent.com/AffineLabs/addressbook/main/${version}`;
        const allData = (yield axios_1.default.get(`${s3Root}/addressbook.json`)).data;
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
        const { PolygonAlpSave: alpSaveData, PolygonBtcEthVault: alpLargeData, Forwarder: forwarder, ERC4626Router: router, EthUsdcEarn: ethEarnData, EthWethEarn: ethWethEarnData, EthRouter: ethRouter, EthSushiLpUsdcWeth: ssvEthSushiUSDEarn, Degen: degenData, PolygonDegen: polygonDegenData, EthStEthLev: ethLeverageData, PolygonStEthLev: polygonLeverageData, AffineGenesis: affineGenesisData, BaseUsdEarn: baseUsdEarnData, } = allData;
        const chainId = getChainId();
        if (chainId === 80001 || chainId === 137) {
            const alpSave = typechain_1.L2Vault__factory.connect(alpSaveData.address, provider);
            const alpLarge = typechain_1.TwoAssetBasket__factory.connect(alpLargeData.address, provider);
            return {
                alpSave,
                alpLarge,
                forwarder: typechain_1.Forwarder__factory.connect(forwarder.address, provider),
                usdc: new ethers_1.ethers.Contract(yield alpSave.asset(), erc20Abi, provider),
                weth: new ethers_1.ethers.Contract(yield alpLarge.weth(), erc20Abi, provider),
                router: typechain_1.Router__factory.connect(router.address, provider),
                ewQueue: typechain_1.EmergencyWithdrawalQueue__factory.connect(yield alpSave.emergencyWithdrawalQueue(), provider),
                polygonDegen: typechain_1.StrategyVault__factory.connect(polygonDegenData.address, provider),
                polygonLeverage: chainId === 137 ? typechain_1.Vault__factory.connect(polygonLeverageData.address, provider) : undefined,
                affineGenesis: chainId === 137 && typeof affineGenesisData !== "undefined"
                    ? typechain_1.AffineGenesis__factory.connect(affineGenesisData.address, provider)
                    : undefined,
            };
        }
        else if (chainId === 1 || chainId === 5) {
            const ethEarn = typechain_1.Vault__factory.connect(ethEarnData.address, provider);
            const ethWethEarn = typechain_1.Vault__factory.connect(ethWethEarnData.address, provider);
            const ssvEthUSDEarn = typechain_1.StrategyVault__factory.connect(ssvEthSushiUSDEarn.address, provider);
            const withdrawalEscrow = typechain_1.WithdrawalEscrow__factory.connect(yield ssvEthUSDEarn.debtEscrow(), provider);
            const degen = typechain_1.Vault__factory.connect(degenData.address, provider);
            const ethLeverage = chainId === 1 ? typechain_1.Vault__factory.connect(ethLeverageData.address, provider) : undefined;
            return {
                ethEarn,
                ethWethEarn,
                ssvEthUSDEarn,
                withdrawalEscrow,
                degen,
                ethLeverage,
                usdc: new ethers_1.ethers.Contract(yield ethEarn.asset(), erc20Abi, provider),
                weth: new ethers_1.ethers.Contract(yield ethWethEarn.asset(), erc20Abi, provider),
                router: typechain_1.Router__factory.connect(ethRouter.address, provider),
            };
        }
        else if (chainId == 8453 || chainId == 84531) {
            const baseUsdEarn = typechain_1.VaultV2__factory.connect(baseUsdEarnData.address, provider);
            console.log("baseUsdEarn USDC: ", yield baseUsdEarn.asset());
            return {
                baseUsdEarn,
                usdc: new ethers_1.ethers.Contract(yield baseUsdEarn.asset(), erc20Abi, provider),
                weth: new ethers_1.ethers.Contract("0x4200000000000000000000000000000000000006", erc20Abi, provider),
            };
        }
        else {
            throw Error("Bad chainId");
        }
    });
}
exports.getAllContracts = getAllContracts;
function getContracts() {
    return CONTRACTS;
}
exports.getContracts = getContracts;
function getEthContracts() {
    return CONTRACTS;
}
exports.getEthContracts = getEthContracts;
function getPolygonContracts() {
    return CONTRACTS;
}
exports.getPolygonContracts = getPolygonContracts;
function getBaseContracts() {
    return CONTRACTS;
}
exports.getBaseContracts = getBaseContracts;
function init(signerOrAddress, biconomy, contractVersion = CONTRACT_VERSION, chainId = constants_1.DEFAULT_RAW_CHAIN_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        CHAIN_ID = chainId;
        // Use the user's wallet's provider if possible
        if (ethers_1.ethers.Signer.isSigner(signerOrAddress)) {
            exports.SIGNER = signerOrAddress;
            exports.PROVIDER = exports.SIGNER.provider;
            exports.userAddress = yield exports.SIGNER.getAddress();
        }
        else {
            exports.PROVIDER = getProviderByChainId(chainId);
            exports.userAddress = signerOrAddress;
        }
        CONTRACTS = yield getAllContracts(exports.PROVIDER, contractVersion);
        exports.BICONOMY = biconomy;
    });
}
exports.init = init;
function getChainId() {
    return CHAIN_ID;
}
exports.getChainId = getChainId;
function setProvider(provider) {
    exports.PROVIDER = provider;
}
exports.setProvider = setProvider;
function setSimulationMode(mode) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.SIMULATE = mode;
    });
}
exports.setSimulationMode = setSimulationMode;
