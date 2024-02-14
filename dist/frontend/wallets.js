var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import { getProviderByChainId, RPC_URLS } from "../core/cache";
export function initMagic({ email, testMode, chainId, }) {
    return __awaiter(this, void 0, void 0, function* () {
        let _magic, _provider;
        if (email) {
            const PROVIDER = getProviderByChainId(chainId);
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
                _magic = new Magic(process.env.MAGIC_API_KEY || "", magicOptions);
                yield _magic.auth.loginWithMagicLink({ email });
                // change to magic
                _provider = new ethers.providers.Web3Provider(_magic.rpcProvider, "any");
            }
            catch (error) {
                console.error({ error });
            }
        }
        return { magic: _magic, provider: _provider };
    });
}
// This is for getting the wallet provider (except the Magic and WalletConnect providers)
// For WalletConnect, we need to initialize the WalletConnect provider by invoking the Account.initWalletConnectProvider() function
export function getWeb3Provider(walletType, chainId) {
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
                const _web3Provider = new ethers.providers.Web3Provider(_metamaskProvider, "any");
                yield _web3Provider.send("eth_requestAccounts", []);
                return _web3Provider;
            }
            case "coinbase": {
                const _coinbaseWallet = new CoinbaseWalletSDK({
                    appName: "Affine",
                    appLogoUrl: process.env.APP_LOGO_URL,
                });
                const _cbProvider = _coinbaseWallet.makeWeb3Provider(RPC_URLS[chainId], Number(chainId));
                // We have to pass "any" if we want to change networks. See https://github.com/ethers-io/ethers.js/issues/1107
                const _web3Provider = new ethers.providers.Web3Provider(_cbProvider, "any");
                yield _web3Provider.send("eth_requestAccounts", []);
                return _web3Provider;
            }
            default:
                return;
        }
    });
}
