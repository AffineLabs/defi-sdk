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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = exports.withdraw = exports.depositEth = exports.depositERC20 = void 0;
const typechain_1 = require("../typechain");
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
const cache_1 = require("./cache");
function getReStakingContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (contracts.affineReStaking == undefined) {
            throw Error("ReStaking is not initialized");
        }
        const { affineReStaking } = contracts;
        return affineReStaking;
    });
}
function getReStakingContractAndAssets(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const affineReStaking = yield getReStakingContract();
        const asset = typechain_1.MockERC20__factory.connect(token, affineReStaking.provider);
        return {
            affineReStaking,
            asset,
        };
    });
}
function depositERC20(token, to, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { affineReStaking, asset } = yield getReStakingContractAndAssets(token);
        const decimalAmount = (0, AlpineDeFiSDK_1._addDecimals)(amount.toString(), yield asset.decimals());
        return (0, AlpineDeFiSDK_1.blockchainCall)(affineReStaking, "depositFor", [token, to, decimalAmount]);
    });
}
exports.depositERC20 = depositERC20;
function depositEth(to, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const affineReStaking = yield getReStakingContract();
        const decimalAmount = (0, AlpineDeFiSDK_1._addDecimals)(amount.toString(), 18); // ether
        return (0, AlpineDeFiSDK_1.blockchainCall)(affineReStaking, "depositETHFor", [to], false, decimalAmount);
    });
}
exports.depositEth = depositEth;
function withdraw(token, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { affineReStaking, asset } = yield getReStakingContractAndAssets(token);
        const decimalAmount = (0, AlpineDeFiSDK_1._addDecimals)(amount.toString(), yield asset.decimals());
        return (0, AlpineDeFiSDK_1.blockchainCall)(affineReStaking, "withdraw", [token, decimalAmount]);
    });
}
exports.withdraw = withdraw;
function getBalance(token, address) {
    return __awaiter(this, void 0, void 0, function* () {
        const { affineReStaking, asset } = yield getReStakingContractAndAssets(token);
        const value = yield affineReStaking.balance(token, address);
        const amount = (0, AlpineDeFiSDK_1._removeDecimals)(value, yield asset.decimals());
        return amount;
    });
}
exports.getBalance = getBalance;
