var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ethers } from "ethers";
import { portfolioSell, portfolioPurchase } from "../core/portfolio";
import { AlpineDeFiSDK, init } from "../core";
import * as productActions from "../core/product";
import { setSimulationMode } from "../core/cache";
import * as lockedWithdrawal from "../core/singleStrategy";
import { DEFAULT_WALLET, getChainIdFromRaw, NETWORK_PARAMS, WITHDRAW_SLIPPAGE_BY_PRODUCT, } from "../core/constants";
import { getEmergencyWithdrawalQueueTransfers, getUserEmergencyWithdrawalQueueRequests, txHasEnqueueEvent, vaultWithdrawableAssetAmount, } from "../core/ewqueue";
import { getWeb3Provider, initMagic } from "./wallets";
class Account {
    constructor() {
        this.walletType = DEFAULT_WALLET;
        // if true, send regular transaction, if false, use biconomy
        this.gas = false;
    }
    /**
     * connect the user account to wallet provider and initialize
     * the smart contracts.
     * @param {IConnectAccount} options - the options to connect the account
     *
     * @returns {Promise<void>} a promise that resolves when the account is connected
     *
     * @example
     * ```typescript
     * const account = new Account();
     * await account.connect({
     *  walletType: "metamask",
     *  chainId: 1,
     * });
     * ```
     */
    connect({ walletType, email, shouldRunMagicTestMode, getMessage, verify, chainId, provider }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // get wallet provider based on wallet type
            let walletProvider;
            if (walletType === "magic" && email) {
                const { magic, provider } = yield initMagic({ email, testMode: Boolean(shouldRunMagicTestMode), chainId });
                if (magic)
                    this.magic = magic;
                walletProvider = provider;
            }
            else if (walletType === "walletConnect" && provider) {
                walletProvider = new ethers.providers.Web3Provider(provider);
            }
            else if (["metamask", "coinbase"].includes(walletType)) {
                walletProvider = yield getWeb3Provider(walletType, chainId);
            }
            if (!walletProvider) {
                throw new Error("Wallet provider is not available");
            }
            // One day biconomy will be activated again
            // await this.initBiconomy(walletProvider);
            this.walletProvider = walletProvider;
            this.signer = walletProvider.getSigner();
            this.userAddress = yield this.signer.getAddress();
            this.walletType = walletType;
            this.selectedChainId = chainId;
            if (getMessage && verify) {
                // case - user's wallet needs to be verified with nonce
                try {
                    const _message = yield getMessage(this.userAddress);
                    const _signedMessage = yield this.signer.signMessage(_message);
                    yield verify(_signedMessage, this.userAddress);
                }
                catch (error) {
                    const err = error;
                    // case - user is not verified, should disconnect
                    if (this.isConnected(walletType, this.selectedChainId))
                        yield this.disconnect(walletType);
                    throw new Error((_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : "Verification failed!");
                }
            }
            // FE needs to initialize the contracts or chainId is changed
            return walletProvider;
        });
    }
    /**
     * This method initializes the contracts for the user, this should be called
     * after the user is connected to the wallet, or the chainId is changed
     * @param chainId AllowedChainId - chain id
     * @param address string - user's address
     */
    initContracts(chainId, provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = provider.getSigner();
            yield init(signer, this.biconomy, chainId);
        });
    }
    setSimulationMode(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return setSimulationMode(mode);
        });
    }
    /**
     * Disconnect a user from the magic provider
     */
    disconnect(walletType) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (walletType === "magic" && ((_a = this.magic) === null || _a === void 0 ? void 0 : _a.user))
                yield this.magic.user.logout();
            this.userAddress = undefined;
            this.walletType = undefined;
            this.selectedChainId = undefined;
        });
    }
    /**
     * Check if a user is connected to the magic provider
     * @returns Whether the user is connected to the magic provider
     */
    isConnected(walletType = DEFAULT_WALLET, chainId) {
        return Boolean(this.userAddress) && walletType === this.walletType && this.selectedChainId === chainId;
    }
    /**
     * get the user's public address
     * @returns user's public address
     */
    getUserAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userAddress;
        });
    }
    getWithdrawSlippageByProduct(product) {
        const slippages = Object.assign({}, WITHDRAW_SLIPPAGE_BY_PRODUCT);
        return slippages[product];
    }
    setGasMode(useGas) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.biconomy is created upon connection and will always exist
            this.gas = useGas;
            const biconomyProvider = useGas ? undefined : this.biconomy;
            return init(this.signer, biconomyProvider, this.selectedChainId);
        });
    }
    /**
     * It checks if the user has approved the outgoing transaction, amount is optional.
     * If the 'amount' is not present, it checks if the user has approved the max amount (BigNumber.maxUint256 / 2)
     * @returns {Promise<boolean>} boolean indicating whether the user has approved the outgoing transaction
     */
    isApproved(product, amount, tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.isApproved(product, amount, tokenAddress);
        });
    }
    /**
     * approve outgoing transaction with another wallet or smart contract for
     * the specified amount
     * @param {String} to the receipient address
     * @param {String} amount transaction amount
     */
    approve(to, amount, tokenAddress) {
        return AlpineDeFiSDK.approve(to, amount, tokenAddress);
    }
    portfolioSell(allocations, amount) {
        return portfolioSell(allocations, amount);
    }
    portfolioPurchase(alloctions, amount) {
        return portfolioPurchase(alloctions, amount);
    }
    buyProduct(product, amount) {
        return productActions.buyProduct(product, amount);
    }
    sellProduct(product, amount) {
        return productActions.sellProduct(product, amount);
    }
    /**
     * Transfer usdc from user's wallet to another wallet
     * @param  to receipient address
     * @param amountUSDC amount in usdc
     * @param gas If set to true, the user pays gas. If false, we do a transaction via biconomy
     */
    transfer(to, amountUSDC) {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.transfer(to, amountUSDC);
        });
    }
    /**
     * Mint USDC token to a wallet
     * @param {String} to receipient address
     * @param {number} amountUSDC amount in usdc
     */
    mintUSDCTokens(to, amountUSDC) {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.mintUSDC(to, amountUSDC);
        });
    }
    mintAffinePass() {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.mint();
        });
    }
    mintWhitelistAffinePass(proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.mintWhitelist(proof);
        });
    }
    getUserEmergencyWithdrawalQueueRequests(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return getUserEmergencyWithdrawalQueueRequests(product);
        });
    }
    vaultWithdrawableAssetAmount(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return vaultWithdrawableAssetAmount(product);
        });
    }
    txHasEnqueueEvent(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return txHasEnqueueEvent(txHash);
        });
    }
    getEmergencyWithdrawalQueueTransfers(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return getEmergencyWithdrawalQueueTransfers(product);
        });
    }
    isLoggedInToMagic() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return ((_a = this.magic) === null || _a === void 0 ? void 0 : _a.user) ? yield this.magic.user.isLoggedIn() : false;
        });
    }
    getChainId(walletType) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * `provider?.send("eth_chainId", [])` doesn't work for magic, but it works for other wallets
             * also, this.walletProvider is undefined when the user is not connected
             */
            if (!["magic", "walletConnect"].includes(walletType) && this.selectedChainId) {
                // case - user is connected to the wallet except magic and walletConnect
                const provider = yield getWeb3Provider(walletType, this.selectedChainId);
                return yield (provider === null || provider === void 0 ? void 0 : provider.send("eth_chainId", []));
            }
            else if (this.walletProvider) {
                const { chainId } = yield this.walletProvider.getNetwork();
                return chainId.toString();
            }
            return;
        });
    }
    isConnectedToTheGivenChainId(walletType, chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getChainId(walletType)) === chainId.toString();
        });
    }
    /**
     * This method will switch the wallet to the given chain id
     */
    switchWalletToAllowedNetwork(walletType, chainId, provider) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!window.ethereum && walletType === "metamask") {
                throw new Error("Metamask is not installed!");
            }
            const _provider = provider ? new ethers.providers.Web3Provider(provider) : (_a = this.walletProvider) !== null && _a !== void 0 ? _a : yield getWeb3Provider(walletType, chainId);
            if (!_provider) {
                throw new Error("Provider is not available");
            }
            try {
                yield _provider.send("wallet_switchEthereumChain", [{ chainId: getChainIdFromRaw(chainId) }]);
            }
            catch (error) {
                const err = error;
                console.warn("Error on switching ethereum chain", error);
                try {
                    if (err.code === 4902) {
                        /**
                         * case - 4902 indicates that the chain has not been added to MetaMask.
                         * @see https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
                         */
                        yield _provider.send("wallet_addEthereumChain", [
                            Object.assign(Object.assign({}, NETWORK_PARAMS[chainId]), { chainId: getChainIdFromRaw(chainId) }),
                        ]);
                    }
                }
                catch (error) {
                    console.warn("Error on adding ethereum chain", error);
                }
            }
            if (chainId !== this.selectedChainId && _provider) {
                this.signer = _provider.getSigner();
                this.selectedChainId = chainId;
            }
            return init(this.signer, this.biconomy, chainId);
        });
    }
    /// Single strategy locked withdrawal request
    isStrategyLiquid() {
        return __awaiter(this, void 0, void 0, function* () {
            return lockedWithdrawal.isLiquidToWithdraw();
        });
    }
    getWithdrawalRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            return lockedWithdrawal.getWithdrawalRequest();
        });
    }
    redeemWithdrawalRequest(reqInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return lockedWithdrawal.redeemWithdrawRequest(reqInfo);
        });
    }
    getTotalWithdrawableAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            return lockedWithdrawal.getAssets();
        });
    }
    lastEpochBeginUTCTime() {
        return __awaiter(this, void 0, void 0, function* () {
            return lockedWithdrawal.epochStartTime();
        });
    }
    /**
     * get the current best estimate for gas price
     * @returns {Promise<String>} the best estimate for gas price in eth
     */
    getGasPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.getGasPrice();
        });
    }
    getGasBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.getGasBalance();
        });
    }
    saleIsActive() {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.saleIsActive();
        });
    }
    whitelistSaleIsActive() {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.whitelistSaleIsActive();
        });
    }
    isWhitelisted(address, proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.isWhitelisted(address, proof);
        });
    }
    mint() {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.mint();
        });
    }
    mintWhitelist(proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return AlpineDeFiSDK.mintWhitelist(proof);
        });
    }
    getTokenInfo(product, tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return productActions.getTokenInfo(product, tokenAddress);
        });
    }
}
export { Account };
