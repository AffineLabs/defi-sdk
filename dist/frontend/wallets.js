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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeb3Provider = exports.getWalletconnectProvider = exports.initMagic = void 0;
const wallet_sdk_1 = __importDefault(require("@coinbase/wallet-sdk"));
const ethers_1 = require("ethers");
const magic_sdk_1 = require("magic-sdk");
const cache_1 = require("../core/cache");
function initMagic({ email, testMode, chainId, }) {
    return __awaiter(this, void 0, void 0, function* () {
        let _magic, _provider;
        if (email) {
            const PROVIDER = (0, cache_1.getProviderByChainId)(chainId);
            const magicOptions = {
                network: {
                    rpcUrl: PROVIDER.connection.url,
                    chainId: Number(chainId),
                },
            };
            if (testMode) {
                magicOptions.testMode = true;
            }
            try {
                // the magic api key is public
                _magic = new magic_sdk_1.Magic(process.env.MAGIC_API_KEY || "", magicOptions);
                yield _magic.auth.loginWithMagicLink({ email });
                // change to magic
                _provider = new ethers_1.ethers.providers.Web3Provider(_magic.rpcProvider, "any");
            }
            catch (error) {
                console.error({ error });
            }
        }
        return { magic: _magic, provider: _provider };
    });
}
exports.initMagic = initMagic;
function getWalletconnectProvider(modal) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!modal) {
            throw new Error("Web3Modal is not initialized, call Account.initWeb3Modal() first");
        }
        const _isConnected = modal.getIsConnected();
        if (!_isConnected) {
            // open the modal
            yield modal.open();
        }
        // get the provider
        const wcProvider = modal.getWalletProvider();
        if (!wcProvider) {
            return;
        }
        //  Create Web3 Provider
        return new ethers_1.ethers.providers.Web3Provider(wcProvider, "any");
    });
}
exports.getWalletconnectProvider = getWalletconnectProvider;
// This is for getting the wallet provider (except the Magic one)
// For WalletConnect, we need to initialize the WalletConnect provider by invoking the Account.initWalletConnectProvider() function
function getWeb3Provider(walletType, chainId, web3modal) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (walletType) {
            case "metamask": {
                if (!window.ethereum)
                    throw new Error("Metamask not found");
                const _provider = window.ethereum;
                const _metamaskProvider = _provider.providers
                    ? _provider.providers.find(p => p.isMetaMask)
                    : _provider.isMetaMask
                        ? _provider
                        : undefined;
                if (!_metamaskProvider)
                    return;
                // We have to pass "any" if we want to change networks. See https://github.com/ethers-io/ethers.js/issues/1107
                const _web3Provider = new ethers_1.ethers.providers.Web3Provider(_metamaskProvider, "any");
                yield _web3Provider.send("eth_requestAccounts", []);
                return _web3Provider;
            }
            case "coinbase": {
                const _coinbaseWallet = new wallet_sdk_1.default({
                    appName: "Affine",
                    appLogoUrl: process.env.APP_LOGO_URL,
                });
                const _cbProvider = _coinbaseWallet.makeWeb3Provider(cache_1.RPC_URLS[chainId], Number(chainId));
                // We have to pass "any" if we want to change networks. See https://github.com/ethers-io/ethers.js/issues/1107
                const _web3Provider = new ethers_1.ethers.providers.Web3Provider(_cbProvider, "any");
                yield _web3Provider.send("eth_requestAccounts", []);
                return _web3Provider;
            }
            case "walletConnect": {
                return yield getWalletconnectProvider(web3modal);
            }
            default:
                return;
        }
    });
}
exports.getWeb3Provider = getWeb3Provider;
