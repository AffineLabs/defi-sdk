// Testing miscellaneous sdk functions
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
import chai from "chai";
const { expect } = chai;
import { AlpineDeFiSDK } from "..";
import { init, setProvider, SIGNER } from "../cache";
const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
describe("Balances", () => __awaiter(void 0, void 0, void 0, function* () {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        setProvider(testProvider);
        yield init(wallet, undefined);
    }));
    it("getGasBalance", () => __awaiter(void 0, void 0, void 0, function* () {
        const balance = yield SIGNER.getBalance();
        const balStr = yield AlpineDeFiSDK.getGasBalance();
        expect(ethers.utils.formatEther(balance)).to.equal(balStr);
    }));
}));
