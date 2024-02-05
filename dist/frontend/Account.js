"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mexa_1 = require("@biconomy/mexa");
const ethers_1 = require("ethers");
const portfolio_1 = require("../core/portfolio");
const core_1 = require("../core");
const productActions = __importStar(require("../core/product"));
const cache_1 = require("../core/cache");
const lockedWithdrawal = __importStar(require("../core/singleStrategy"));
const constants_1 = require("../core/constants");
const ewqueue_1 = require("../core/ewqueue");
const wallets_1 = require("./wallets");
const ethers5_1 = require("@web3modal/ethers5");
class Account {
    constructor() {
        this.walletType = constants_1.DEFAULT_WALLET;
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
     * account.initWeb3Modal(); // initialize web3modal
     * await account.connect({
     *  walletType: "metamask",
     *  chainId: 1,
     * });
     * ```
     */
    connect({ walletType, email, shouldRunMagicTestMode, getMessage, verify, chainId, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // get wallet provider based on wallet type
            let walletProvider;
            if (walletType === "magic" && email) {
                const { magic, provider } = yield (0, wallets_1.initMagic)({ email, testMode: Boolean(shouldRunMagicTestMode), chainId });
                if (magic)
                    this.magic = magic;
                walletProvider = provider;
            }
            else {
                walletProvider = yield (0, wallets_1.getWeb3Provider)(walletType, chainId, this.web3ModalInstance);
            }
            if (!walletProvider)
                return;
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
            console.time("init-contracts");
            yield (0, core_1.init)(this.signer, this.biconomy, chainId);
            console.timeEnd("init-contracts");
        });
    }
    initContracts(chainId, address) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!address && !this.signer) {
                throw new Error("Address or signer is required to initialize contracts, try calling connect() first");
            }
            yield (0, core_1.init)((_a = this.signer) !== null && _a !== void 0 ? _a : address, this.biconomy, chainId);
        });
    }
    setSimulationMode(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, cache_1.setSimulationMode)(mode);
        });
    }
    initBiconomy(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const biconomyRaw = new mexa_1.Biconomy(provider, {
                apiKey: "M4hdEfQhs.60f473cf-c78f-4658-8a02-153241eff1b2",
                debug: true,
                strictMode: true,
            });
            return new Promise((resolve, reject) => {
                biconomyRaw
                    .onEvent(biconomyRaw.READY, () => {
                    // set the biconomy provider
                    this.biconomy = new ethers_1.ethers.providers.Web3Provider(biconomyRaw);
                    resolve(null);
                })
                    .onEvent(biconomyRaw.ERROR, (error, message) => {
                    reject(message);
                });
            });
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
            else if (walletType === "walletConnect" && this.web3ModalInstance) {
                /**
                 * we need to disconnect the wallet connect provider to close provider session
                 * or this will cause the wallet connect provider to connect to the same session
                 * when the user tries to connect again, For more info,
                 * see: https://docs.walletconnect.com/2.0/specs/clients/sign/client-api
                 */
                yield this.web3ModalInstance.disconnect();
                if (typeof window !== "undefined") {
                    // clear local storage to remove the wallet connect session + pairings
                    window.localStorage.clear();
                }
            }
            this.userAddress = undefined;
            this.walletType = undefined;
            this.selectedChainId = undefined;
        });
    }
    /**
     * Check if a user is connected to the magic provider
     * @returns Whether the user is connected to the magic provider
     */
    isConnected(walletType = constants_1.DEFAULT_WALLET, chainId) {
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
        const slippages = Object.assign({}, constants_1.WITHDRAW_SLIPPAGE_BY_PRODUCT);
        return slippages[product];
    }
    setGasMode(useGas) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.biconomy is created upon connection and will always exist
            this.gas = useGas;
            const biconomyProvider = useGas ? undefined : this.biconomy;
            return (0, core_1.init)(this.signer, biconomyProvider, this.selectedChainId);
        });
    }
    /**
     * It checks if the user has approved the outgoing transaction, amount is optional.
     * If the 'amount' is not present, it checks if the user has approved the max amount (BigNumber.maxUint256 / 2)
     * @returns {Promise<boolean>} boolean indicating whether the user has approved the outgoing transaction
     */
    isApproved(product, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.isApproved(product, amount);
        });
    }
    /**
     * approve outgoing transaction with another wallet or smart contract for
     * the specified amount
     * @param {String} to the receipient address
     * @param {String} amountUSDC transaction amount in usdc
     */
    approve(to, amountUSDC) {
        return core_1.AlpineDeFiSDK.approve(to, amountUSDC);
    }
    portfolioSell(allocations, amount) {
        return (0, portfolio_1.portfolioSell)(allocations, amount);
    }
    portfolioPurchase(alloctions, amount) {
        return (0, portfolio_1.portfolioPurchase)(alloctions, amount);
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
            return core_1.AlpineDeFiSDK.transfer(to, amountUSDC);
        });
    }
    /**
     * Mint USDC token to a wallet
     * @param {String} to receipient address
     * @param {number} amountUSDC amount in usdc
     */
    mintUSDCTokens(to, amountUSDC) {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.mintUSDC(to, amountUSDC);
        });
    }
    mintAffinePass() {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.mint();
        });
    }
    mintWhitelistAffinePass(proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.mintWhitelist(proof);
        });
    }
    getUserEmergencyWithdrawalQueueRequests(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ewqueue_1.getUserEmergencyWithdrawalQueueRequests)(product);
        });
    }
    vaultWithdrawableAssetAmount(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ewqueue_1.vaultWithdrawableAssetAmount)(product);
        });
    }
    txHasEnqueueEvent(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ewqueue_1.txHasEnqueueEvent)(txHash);
        });
    }
    getEmergencyWithdrawalQueueTransfers(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ewqueue_1.getEmergencyWithdrawalQueueTransfers)(product);
        });
    }
    isLoggedInToMagic() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return ((_a = this.magic) === null || _a === void 0 ? void 0 : _a.user) ? yield this.magic.user.isLoggedIn() : false;
        });
    }
    getChainId(walletType) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * `provider?.send("eth_chainId", [])` doesn't work for magic, but it works for other wallets
             * also, this.walletProvider is undefined when the user is not connected
             */
            if (walletType === "walletConnect") {
                return (_a = this.web3ModalInstance) === null || _a === void 0 ? void 0 : _a.getChainId();
            }
            else if (walletType !== "magic" && this.selectedChainId) {
                const provider = yield (0, wallets_1.getWeb3Provider)(walletType, this.selectedChainId, this.web3ModalInstance);
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
    switchWalletToAllowedNetwork(walletType, chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!window.ethereum && walletType === "metamask") {
                throw new Error("Metamask is not installed!");
            }
            if (walletType === "walletConnect" && !this.web3ModalInstance) {
                this.initWeb3Modal();
            }
            const _provider = yield (0, wallets_1.getWeb3Provider)(walletType, chainId, this.web3ModalInstance);
            if (!_provider) {
                throw new Error("Provider is not available");
            }
            try {
                yield _provider.send("wallet_switchEthereumChain", [{ chainId: (0, constants_1.getChainIdFromRaw)(chainId) }]);
            }
            catch (error) {
                const err = error;
                console.warn("Error on switching ethereum chain", error);
                if (err.code === 4902) {
                    /**
                     * case - 4902 indicates that the chain has not been added to MetaMask.
                     * @see https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
                     */
                    yield _provider.send("wallet_addEthereumChain", [
                        Object.assign(Object.assign({}, constants_1.NETWORK_PARAMS[chainId]), { chainId: (0, constants_1.getChainIdFromRaw)(chainId) }),
                    ]);
                }
            }
            if (chainId !== this.selectedChainId && _provider) {
                this.signer = _provider.getSigner();
                this.selectedChainId = chainId;
                return (0, core_1.init)(this.signer, this.biconomy, chainId);
            }
        });
    }
    /**
     * Initiates the web3modal instance.
     * @returns {Web3Modal} the web3modal instance
     *
     * @remarks
     * This needs to be called before calling Account.connect() to initialize the web3modal instance
     *
     * @example
     * ```typescript
     * const account = new Account();
     * account.initWeb3Modal();
     * ```
     */
    initWeb3Modal() {
        if (this.web3ModalInstance) {
            // case - we already have an instance of Web3Modal
            return this.web3ModalInstance;
        }
        // Initialize Web3Modal
        const modal = (0, ethers5_1.createWeb3Modal)({
            ethersConfig: (0, ethers5_1.defaultConfig)({
                metadata: {
                    description: "Connect to your favorite wallet",
                    name: "Affine DeFi",
                    url: "https://affinedefi.com",
                    icons: ["https://affinedefi.com/favicon.ico"],
                },
            }),
            chains: Object.keys(constants_1.NETWORK_PARAMS).map(chainId => {
                var _a, _b;
                return ({
                    chainId: Number(chainId),
                    name: constants_1.NETWORK_PARAMS[Number(chainId)].chainName,
                    currency: constants_1.NETWORK_PARAMS[Number(chainId)].nativeCurrency.symbol,
                    rpcUrl: constants_1.NETWORK_PARAMS[Number(chainId)].rpcUrls[0],
                    explorerUrl: (_b = (_a = constants_1.NETWORK_PARAMS[Number(chainId)].blockExplorerUrls) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "",
                });
            }),
            projectId: constants_1.WALLETCONNECT_PROJECT_ID,
        });
        this.web3ModalInstance = modal;
        return modal;
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
            return core_1.AlpineDeFiSDK.getGasPrice();
        });
    }
    getGasBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.getGasBalance();
        });
    }
    saleIsActive() {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.saleIsActive();
        });
    }
    whitelistSaleIsActive() {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.whitelistSaleIsActive();
        });
    }
    isWhitelisted(address, proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.isWhitelisted(address, proof);
        });
    }
    mint() {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.mint();
        });
    }
    mintWhitelist(proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return core_1.AlpineDeFiSDK.mintWhitelist(proof);
        });
    }
    getTokenInfo(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return productActions.getTokenInfo(product);
        });
    }
}
exports.Account = Account;
