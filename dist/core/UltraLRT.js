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
exports.completeMigrationWithdrawal = exports.queueMigrationWithdrawal = exports.migratableAssets = exports.withdrawableAssets = exports.canWithdrawEscrow = exports.redeem = exports.withdraw = exports.canWithdraw = void 0;
const AlpineDeFiSDK_1 = require("./AlpineDeFiSDK");
const cache_1 = require("./cache");
const ethers_1 = require("ethers");
function getUltraEthContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (contracts.ultraLRT == undefined) {
            throw Error("UltraETH is not initialized");
        }
        const { ultraLRT } = contracts;
        return ultraLRT;
    });
}
function getEscrowContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (contracts.withdrawalEscrowV2 == undefined) {
            throw Error("WithdrawalEscrowV2 is not initialized");
        }
        const { withdrawalEscrowV2 } = contracts;
        return withdrawalEscrowV2;
    });
}
function getEigenStETHContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (contracts.eigenStETH == undefined) {
            throw Error("EigenStETH is not initialized");
        }
        const { eigenStETH } = contracts;
        return eigenStETH;
    });
}
const eigenStETHStrategy = "0x93c4b944D05dfe6df7645A86cd2206016c51564D";
const stETHAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
function getEigenDelegatorContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = (0, cache_1.getContracts)();
        if (contracts.eigenDelegator == undefined) {
            throw Error("EigenDelegator is not initialized");
        }
        const { eigenDelegator } = contracts;
        return eigenDelegator;
    });
}
// Vault
function canWithdraw(amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const ultraEth = yield getUltraEthContract();
        const value = yield ultraEth.canWithdraw(amount);
        return value;
    });
}
exports.canWithdraw = canWithdraw;
function withdraw(amount, address) {
    return __awaiter(this, void 0, void 0, function* () {
        const ultraEth = yield getUltraEthContract();
        return (0, AlpineDeFiSDK_1.blockchainCall)(ultraEth, "withdraw", [amount, address, address]);
    });
}
exports.withdraw = withdraw;
// Escrow
function redeem(address, epoch) {
    return __awaiter(this, void 0, void 0, function* () {
        const withdrawalEscrowV2 = yield getEscrowContract();
        return (0, AlpineDeFiSDK_1.blockchainCall)(withdrawalEscrowV2, "redeem", [address, epoch]);
    });
}
exports.redeem = redeem;
function canWithdrawEscrow(epoch) {
    return __awaiter(this, void 0, void 0, function* () {
        const withdrawalEscrowV2 = yield getEscrowContract();
        const value = yield withdrawalEscrowV2.canWithdraw(epoch);
        return value;
    });
}
exports.canWithdrawEscrow = canWithdrawEscrow;
function withdrawableAssets(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const withdrawalEscrowV2 = yield getEscrowContract();
        const lastEpoch = yield withdrawalEscrowV2.resolvingEpoch();
        let totalAmount = 0;
        const epochData = [];
        for (let i = 0; i <= lastEpoch.toNumber(); i++) {
            const value = parseFloat((0, AlpineDeFiSDK_1._removeDecimals)(yield withdrawalEscrowV2.withdrawableAssets(address, i), 18));
            if (value > 0) {
                epochData.push({ epoch: i, value: value });
                totalAmount += value;
            }
        }
        return { totalAmount, epochData };
    });
}
exports.withdrawableAssets = withdrawableAssets;
function migratableAssets(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const eigenStETH = yield getEigenStETHContract();
        const value = yield eigenStETH.userUnderlyingView(address);
        return parseFloat((0, AlpineDeFiSDK_1._removeDecimals)(value, 18));
    });
}
exports.migratableAssets = migratableAssets;
function queueMigrationWithdrawal(address, shares) {
    return __awaiter(this, void 0, void 0, function* () {
        const eigenDelegator = yield getEigenDelegatorContract();
        const queuedWithdrawalParams = [
            {
                strategies: [eigenStETHStrategy],
                shares: [ethers_1.ethers.BigNumber.from(shares)],
                recipient: address
            }
        ];
        return (0, AlpineDeFiSDK_1.blockchainCall)(eigenDelegator, "queueWithdrawals", [queuedWithdrawalParams]);
    });
}
exports.queueMigrationWithdrawal = queueMigrationWithdrawal;
function completeMigrationWithdrawal(address, delegator, nonce, blockNumber, shares) {
    return __awaiter(this, void 0, void 0, function* () {
        const eigenDelegator = yield getEigenDelegatorContract();
        const withdrawalInfos = [
            {
                staker: address,
                delegatedTo: delegator,
                withdrawer: address,
                nonce: ethers_1.ethers.BigNumber.from(nonce),
                startBlock: parseInt(blockNumber),
                strategies: [eigenStETHStrategy],
                shares: [ethers_1.ethers.BigNumber.from(shares)]
            }
        ];
        // Define the additional parameters
        const assetsArray = [
            [stETHAddress]
        ];
        const uint256Array = [
            ethers_1.ethers.BigNumber.from("0"),
        ];
        const boolArray = [true];
        return (0, AlpineDeFiSDK_1.blockchainCall)(eigenDelegator, "completeQueuedWithdrawals", [withdrawalInfos, assetsArray, uint256Array, boolArray]);
    });
}
exports.completeMigrationWithdrawal = completeMigrationWithdrawal;
