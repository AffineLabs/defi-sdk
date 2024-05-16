var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MockERC20__factory } from "../typechain";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { getContracts } from "./cache";
function getReStakingContract() {
    return __awaiter(this, void 0, void 0, function* () {
        const contracts = getContracts();
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
        const asset = MockERC20__factory.connect(token, affineReStaking.provider);
        return {
            affineReStaking,
            asset,
        };
    });
}
export function depositERC20(token, to, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { affineReStaking, asset } = yield getReStakingContractAndAssets(token);
        const decimalAmount = _addDecimals(amount.toString(), yield asset.decimals());
        return blockchainCall(affineReStaking, "depositFor", [token, to, decimalAmount]);
    });
}
export function depositEth(to, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const affineReStaking = yield getReStakingContract();
        const decimalAmount = _addDecimals(amount.toString(), 18); // ether
        return blockchainCall(affineReStaking, "depositETHFor", [to], false, decimalAmount);
    });
}
export function withdraw(token, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { affineReStaking, asset } = yield getReStakingContractAndAssets(token);
        const decimalAmount = _addDecimals(amount.toString(), yield asset.decimals());
        return blockchainCall(affineReStaking, "withdraw", [token, decimalAmount]);
    });
}
export function getReStakedBalance(token, address) {
    return __awaiter(this, void 0, void 0, function* () {
        const { affineReStaking, asset } = yield getReStakingContractAndAssets(token);
        const value = yield affineReStaking.balance(token, address);
        const amount = _removeDecimals(value, yield asset.decimals());
        return amount;
    });
}
