var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { ethers } from "ethers";
import axios from "axios";
import { Forwarder__factory, L2Vault__factory, TwoAssetBasket__factory, Router__factory, EmergencyWithdrawalQueue__factory, Vault__factory, WithdrawalEscrow__factory, StrategyVault__factory, AffineGenesis__factory, AffinePass__factory, AffinePassBridge__factory, VaultV2__factory, AffineReStaking__factory, UltraLRT__factory, WithdrawalEscrowV2__factory, } from "../typechain";
import { DEFAULT_RAW_CHAIN_ID, FORKED_NODE_URL_FOR_BASE, FORKED_NODE_URL_FOR_ETH, FORKED_NODE_URL_FOR_MATIC, IS_USING_FORKED_MAINNET, } from "./constants";
let CONTRACTS;
let CHAIN_ID;
export let SIGNER;
export let userAddress;
export let SIMULATE = false;
export let BICONOMY;
const CONTRACT_VERSION = (_a = process.env.CONTRACT_VERSION) !== null && _a !== void 0 ? _a : "test";
export let PROVIDER;
export const RPC_URLS = {
    1: IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_ETH
        ? FORKED_NODE_URL_FOR_ETH
        : `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    5: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    17000: `https://ethereum-holesky-rpc.publicnode.com`,
    137: IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_MATIC
        ? FORKED_NODE_URL_FOR_MATIC
        : `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    80001: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    8453: IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_BASE
        ? FORKED_NODE_URL_FOR_BASE
        : `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_BASE_MAINNET_KEY}`,
    84531: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_BASE_TESTNET_KEY}`,
};
export function getProviderByChainId(chainId) {
    PROVIDER = new ethers.providers.StaticJsonRpcProvider(RPC_URLS[chainId]);
    return PROVIDER;
}
/**
 * @param provider The current provider
 * @param version The addressbook version
 * @returns A map of contract names to ethers.Contract objects
 */
export function getAllContracts(provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const s3Root = `https://raw.githubusercontent.com/AffineLabs/addressbook/main/${CONTRACT_VERSION}`;
        const allData = (yield axios.get(`${s3Root}/addressbook.json`)).data;
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
        //   interface IDelegationManager {
        //     function delegateTo(address, ApproverSignatureAndExpiryParams calldata, bytes32) external;
        //     function queueWithdrawals(QueuedWithdrawalParams[] calldata) external;
        //     function completeQueuedWithdrawals(
        //         WithdrawalInfo[] calldata,
        //         address[][] calldata,
        //         uint256[] calldata,
        //         bool[] calldata
        //     ) external;
        // }
        const eigenDelegatorAbi = [
            "function queueWithdrawals((address[],uint256[],address)[])",
            "function completeQueuedWithdrawals((address,address,address,uint256,uint32,address[],uint256[])[],address[][],uint256[],bool[])",
        ];
        const eigenStEthAbi = ["function userUnderlyingView(address) view returns (uint256)"];
        const { PolygonAlpSave: alpSaveData, PolygonBtcEthVault: alpLargeData, Forwarder: forwarder, ERC4626Router: router, EthUsdcEarn: ethEarnData, EthWethEarn: ethWethEarnData, EthRouter: ethRouter, EthSushiLpUsdcWeth: ssvEthSushiUSDEarn, Degen: degenData, PolygonDegen: polygonDegenData, EthStEthLev: ethLeverageData, PolygonStEthLev: polygonLeverageData, AffineGenesis: affineGenesisData, AffinePass: affinePassData, AffinePassBridgePolygon: affinePassBridgePolygonData, AffinePassBridgeEthereum: affinePassBridgeEthereumData, BaseUsdEarn: baseUsdEarnData, BaseStEthLev: baseStEthLevData, BaseRouter: baseRouterData, PolygonLevMaticX: polygonLevMaticXData, AffineReStaking: affineReStakingData, Polygon6xLevMaticX: Polygon6xLevMaticXData, UltraLRT: UltraLRTData, WithdrawalEscrowV2: withdrawalEscrowV2Data, } = allData;
        const chainId = getChainId();
        if (chainId === 80001 || chainId === 137) {
            const alpSave = L2Vault__factory.connect(alpSaveData.address, provider);
            const alpLarge = TwoAssetBasket__factory.connect(alpLargeData.address, provider);
            const polygonLevMaticX = Vault__factory.connect(polygonLevMaticXData.address, provider);
            const matic = new ethers.Contract(yield polygonLevMaticX.asset(), erc20Abi, provider);
            const polygon6xLevMaticX = Vault__factory.connect(Polygon6xLevMaticXData.address, provider);
            return {
                alpSave,
                alpLarge,
                forwarder: Forwarder__factory.connect(forwarder.address, provider),
                usdc: new ethers.Contract(yield alpSave.asset(), erc20Abi, provider),
                weth: new ethers.Contract(yield alpLarge.weth(), erc20Abi, provider),
                router: Router__factory.connect(router.address, provider),
                ewQueue: EmergencyWithdrawalQueue__factory.connect(yield alpSave.emergencyWithdrawalQueue(), provider),
                polygonDegen: StrategyVault__factory.connect(polygonDegenData.address, provider),
                polygonLeverage: chainId === 137 ? Vault__factory.connect(polygonLeverageData.address, provider) : undefined,
                affineGenesis: chainId === 137 && typeof affineGenesisData !== "undefined"
                    ? AffineGenesis__factory.connect(affineGenesisData.address, provider)
                    : undefined,
                affinePass: chainId === 137 && typeof affinePassData !== "undefined"
                    ? AffinePass__factory.connect(affinePassData.address, provider)
                    : undefined,
                affinePassBridgePolygon: chainId === 137 && typeof affinePassBridgePolygonData !== "undefined"
                    ? AffinePassBridge__factory.connect(affinePassBridgePolygonData.address, provider)
                    : undefined,
                polygonLevMaticX,
                polygon6xLevMaticX,
                matic,
            };
        }
        else if (chainId === 1 || chainId === 5) {
            const ethEarn = Vault__factory.connect(ethEarnData.address, provider);
            const ethWethEarn = Vault__factory.connect(ethWethEarnData.address, provider);
            const ssvEthUSDEarn = StrategyVault__factory.connect(ssvEthSushiUSDEarn.address, provider);
            const withdrawalEscrow = WithdrawalEscrow__factory.connect(yield ssvEthUSDEarn.debtEscrow(), provider);
            const degen = Vault__factory.connect(degenData.address, provider);
            const ethLeverage = chainId === 1 ? Vault__factory.connect(ethLeverageData.address, provider) : undefined;
            const eigenStETHStrategy = "0x93c4b944D05dfe6df7645A86cd2206016c51564D";
            const eigenDelegatorAddress = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
            // reStaking
            const affineReStaking = chainId == 1 ? AffineReStaking__factory.connect(affineReStakingData.address, provider) : undefined;
            const ultraLRT = (chainId == 1) ? UltraLRT__factory.connect(UltraLRTData.address, provider) : undefined;
            const withdrawalEscrowV2 = (chainId == 1) ? WithdrawalEscrowV2__factory.connect(withdrawalEscrowV2Data.address, provider) : undefined;
            return {
                ethEarn,
                ethWethEarn,
                ssvEthUSDEarn,
                withdrawalEscrow,
                degen,
                ethLeverage,
                usdc: new ethers.Contract(yield ethEarn.asset(), erc20Abi, provider),
                weth: new ethers.Contract(yield ethWethEarn.asset(), erc20Abi, provider),
                router: Router__factory.connect(ethRouter.address, provider),
                affinePassBridgeEthereum: chainId === 1 && typeof affinePassBridgeEthereumData !== "undefined"
                    ? AffinePassBridge__factory.connect(affinePassBridgeEthereumData.address, provider)
                    : undefined,
                affineReStaking,
                ultraLRT,
                withdrawalEscrowV2,
                eigenStETH: new ethers.Contract(eigenStETHStrategy, eigenStEthAbi, provider),
                eigenDelegator: new ethers.Contract(eigenDelegatorAddress, eigenDelegatorAbi, provider),
            };
        }
        else if (chainId == 17000) {
            const ultraLRT = UltraLRT__factory.connect("0x3A6B57ea121fbAB06f5A7Bf0626702EcB0Db7f11", provider);
            const withdrawalEscrowV2 = WithdrawalEscrowV2__factory.connect("0x5315839366615a087c993f87913D94932dCa0Df1", provider);
            return {
                usdc: new ethers.Contract("0x74A4A85C611679B73F402B36c0F84A7D2CcdFDa3", erc20Abi, provider),
                weth: new ethers.Contract("0x6B5817E7091BC0C747741E96820b0199388245EA", erc20Abi, provider),
                router: Router__factory.connect(ethRouter.address, provider),
                ultraLRT,
                withdrawalEscrowV2,
            };
        }
        else if (chainId == 8453 || chainId == 84531) {
            const baseUsdEarn = chainId == 8453 ? VaultV2__factory.connect(baseUsdEarnData.address, provider) : undefined;
            const baseLeverage = VaultV2__factory.connect(baseStEthLevData.address, provider);
            return {
                baseUsdEarn,
                baseLeverage,
                usdc: new ethers.Contract(baseUsdEarn ? yield baseUsdEarn.asset() : "0x2e668Bb88287675e34c8dF82686dfd0b7F0c0383", erc20Abi, provider),
                weth: new ethers.Contract("0x4200000000000000000000000000000000000006", erc20Abi, provider),
                router: Router__factory.connect(baseRouterData.address, provider),
            };
        }
        else {
            throw Error("Bad chainId");
        }
    });
}
export function getContracts() {
    console.log("getContracts: ", CONTRACTS);
    return CONTRACTS;
}
export function getEthContracts() {
    return CONTRACTS;
}
export function getPolygonContracts() {
    return CONTRACTS;
}
export function getBaseContracts() {
    return CONTRACTS;
}
export function getHoleskyContract() {
    return CONTRACTS;
}
export function init(signerOrAddress, biconomy, chainId = DEFAULT_RAW_CHAIN_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        CHAIN_ID = chainId;
        // Use the user's wallet's provider if possible
        if (ethers.Signer.isSigner(signerOrAddress)) {
            SIGNER = signerOrAddress;
            PROVIDER = SIGNER.provider;
            userAddress = yield SIGNER.getAddress();
        }
        else {
            PROVIDER = getProviderByChainId(chainId);
            userAddress = signerOrAddress;
        }
        CONTRACTS = yield getAllContracts(PROVIDER);
        // BICONOMY = biconomy;
    });
}
export function getChainId() {
    return CHAIN_ID;
}
export function setProvider(provider) {
    PROVIDER = provider;
}
export function setSimulationMode(mode) {
    return __awaiter(this, void 0, void 0, function* () {
        SIMULATE = mode;
    });
}
