var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userAddress, getEthContracts } from "./cache";
import { blockchainCall, _removeDecimals } from "./AlpineDeFiSDK";
export function getWithdrawalRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow, ssvEthUSDEarn, usdc } = getEthContracts();
        const currentEpoch = yield ssvEthUSDEarn.epoch();
        const epochEnded = yield ssvEthUSDEarn.epochEnded();
        const withdrawalRequests = yield withdrawalEscrow.queryFilter(withdrawalEscrow.filters.WithdrawalRequest(userAddress, null, null));
        const ret = [];
        for (const req of withdrawalRequests) {
            if (req.args[1].lt(currentEpoch) || (req.args[1].eq(currentEpoch) && epochEnded === true)) {
                const shares = yield withdrawalEscrow.withdrawableShares(userAddress, req.args[1]);
                const assets = yield withdrawalEscrow.withdrawableAssets(userAddress, req.args[1]);
                ret.push({
                    epoch: req.args[1].toNumber(),
                    token: _removeDecimals(shares, yield ssvEthUSDEarn.decimals()),
                    value: _removeDecimals(assets, yield usdc.decimals()),
                    claimed: shares.eq(0),
                    claimable: shares.gt(0),
                });
            }
            else {
                ret.push({
                    epoch: req.args[1].toNumber(),
                    token: _removeDecimals(req.args[2], yield ssvEthUSDEarn.decimals()),
                    value: "0",
                    claimed: false,
                    claimable: false,
                });
            }
        }
        return ret;
    });
}
export function redeemWithdrawRequest(reqInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow } = getEthContracts();
        const basicInfo = {
            alpFee: "0",
            alpFeePercent: "0",
            dollarAmount: reqInfo.value,
            tokenAmount: reqInfo.token,
        };
        const txReceipt = (yield blockchainCall(withdrawalEscrow, "redeem", [userAddress, reqInfo.epoch]));
        return Object.assign(Object.assign({}, txReceipt), basicInfo);
    });
}
export function getAssets() {
    return __awaiter(this, void 0, void 0, function* () {
        const { withdrawalEscrow, usdc } = getEthContracts();
        const withdrawalRequests = yield withdrawalEscrow.queryFilter(withdrawalEscrow.filters.WithdrawalRequest(userAddress, null, null));
        const epochs = withdrawalRequests.map(req => req.args[1]);
        const assets = yield withdrawalEscrow.getAssets(userAddress, epochs);
        return _removeDecimals(assets, yield usdc.decimals());
    });
}
export function isLiquidToWithdraw() {
    return __awaiter(this, void 0, void 0, function* () {
        const { ssvEthUSDEarn } = getEthContracts();
        return ssvEthUSDEarn.epochEnded();
    });
}
export function epochStartTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const { ssvEthUSDEarn } = getEthContracts();
        return (yield ssvEthUSDEarn.epochStartTime()).toNumber();
    });
}
