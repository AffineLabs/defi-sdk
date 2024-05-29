var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { getContracts } from "./cache";
import { _getVaultAndAsset } from "./product";
import { ethers } from "ethers";
function getUltraEthContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getContracts();
        if (contracts.ultraLRT == undefined) {
            throw Error("UltraETH is not initialized");
        }
        const { ultraLRT } = contracts;
        return ultraLRT;
    });
}
function getEscrowContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getContracts();
        if (contracts.withdrawalEscrowV2 == undefined) {
            throw Error("WithdrawalEscrowV2 is not initialized");
        }
        const { withdrawalEscrowV2 } = contracts;
        return withdrawalEscrowV2;
    });
}
function getEigenStETHContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getContracts();
        if (contracts.eigenStETH == undefined) {
            throw Error("EigenStETH is not initialized");
        }
        const { eigenStETH } = contracts;
        return eigenStETH;
    });
}
const eigenStETHStrategy = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3";
const stETHAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
function getEigenDelegatorContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getContracts();
        if (contracts.eigenDelegator == undefined) {
            throw Error("EigenDelegator is not initialized");
        }
        const { eigenDelegator } = contracts;
        return eigenDelegator;
    });
}
// Vault
export function canWithdraw(amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { vault, asset } = yield _getVaultAndAsset("ultraLRT");
        const lrtVault = vault;
        const value = yield lrtVault.canWithdraw(_addDecimals(amount.toString(), yield asset.decimals()));
        return value;
    });
}
export function withdraw(amount, address) {
    return __awaiter(this, void 0, void 0, function* () {
        const ultraEth = yield getUltraEthContract();
        return blockchainCall(ultraEth, "withdraw", [amount, address, address]);
    });
}
// Escrow
export function redeem(address, epoch) {
    return __awaiter(this, void 0, void 0, function* () {
        const withdrawalEscrowV2 = yield getEscrowContract();
        return blockchainCall(withdrawalEscrowV2, "redeem", [address, epoch]);
    });
}
export function canWithdrawEscrow(epoch) {
    return __awaiter(this, void 0, void 0, function* () {
        const withdrawalEscrowV2 = yield getEscrowContract();
        const value = yield withdrawalEscrowV2.canWithdraw(epoch);
        return value;
    });
}
export function withdrawableAssets(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const withdrawalEscrowV2 = yield getEscrowContract();
        const { vault, asset } = yield _getVaultAndAsset("ultraLRT");
        const vaultDecimals = yield vault.decimals();
        const assetDecimals = yield asset.decimals();
        const resolvingEpoch = (yield withdrawalEscrowV2.resolvingEpoch()).toNumber();
        const currentEpoch = (yield withdrawalEscrowV2.currentEpoch()).toNumber();
        let totalAmount = 0;
        const epochData = [];
        for (let i = 0; i <= currentEpoch; i++) {
            const shares = yield withdrawalEscrowV2.userDebtShare(ethers.BigNumber.from(i), address);
            const assets = yield withdrawalEscrowV2.withdrawableAssets(address, i);
            epochData.push({
                epoch: i,
                assets: _removeDecimals(assets, assetDecimals),
                shares: _removeDecimals(shares, vaultDecimals),
                canWithdraw: i < resolvingEpoch && shares.gt(0),
            });
            totalAmount += parseFloat(_removeDecimals(assets, assetDecimals));
        }
        return { totalAmount, epochData };
    });
}
export function migratableAssets(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const eigenStETH = yield getEigenStETHContract();
        const value = yield eigenStETH.userUnderlyingView(address);
        return parseFloat(_removeDecimals(value, 18));
    });
}
export function queueMigrationWithdrawal(address, assets) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("queueMigrationWithdrawal");
        const eigenDelegator = yield getEigenDelegatorContract();
        const eigenStETH = yield getEigenStETHContract();
        const assetUnits = ethers.utils.parseUnits(assets, 18);
        const shares = yield eigenStETH.underlyingToShares(assetUnits);
        console.log("shares", shares.toString());
        const queuedWithdrawalParams = [
            {
                strategies: [eigenStETHStrategy],
                shares: [ethers.BigNumber.from(shares)],
                recipient: address,
            },
        ];
        const queuedWithdrawalParams2 = [[[[eigenStETHStrategy], [ethers.BigNumber.from(shares)], address]]];
        console.log("queuedWithdrawalParams2", queuedWithdrawalParams2);
        return blockchainCall(eigenDelegator, "queueWithdrawals", queuedWithdrawalParams2);
    });
}
export function completeMigrationWithdrawal(address, delegator, nonce, blockNumber, shares) {
    return __awaiter(this, void 0, void 0, function* () {
        const eigenDelegator = yield getEigenDelegatorContract();
        const withdrawalInfos = [
            {
                staker: address,
                delegatedTo: delegator,
                withdrawer: address,
                nonce: ethers.BigNumber.from(nonce),
                startBlock: parseInt(blockNumber),
                strategies: [eigenStETHStrategy],
                shares: [ethers.BigNumber.from(shares)],
            },
        ];
        // Define the additional parameters
        const assetsArray = [[stETHAddress]];
        const uint256Array = [ethers.BigNumber.from("0")];
        const boolArray = [true];
        return blockchainCall(eigenDelegator, "completeQueuedWithdrawals", [
            withdrawalInfos,
            assetsArray,
            uint256Array,
            boolArray,
        ]);
    });
}
