"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const chai_1 = __importDefault(require("chai"));
const { expect } = chai_1.default;
const __1 = require("..");
const cache_1 = require("../cache");
const testProvider = new ethers_1.ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers_1.ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
describe("Balances", () => __awaiter(void 0, void 0, void 0, function* () {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        (0, cache_1.setProvider)(testProvider);
        yield (0, cache_1.init)(wallet, undefined);
    }));
    it("getGasBalance", () => __awaiter(void 0, void 0, void 0, function* () {
        const balance = yield cache_1.SIGNER.getBalance();
        const balStr = yield __1.AlpineDeFiSDK.getGasBalance();
        expect(ethers_1.ethers.utils.formatEther(balance)).to.equal(balStr);
    }));
}));
