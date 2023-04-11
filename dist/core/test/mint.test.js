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
before(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, cache_1.setProvider)(testProvider);
    yield (0, cache_1.init)(wallet, undefined);
    yield cache_1.PROVIDER.send("anvil_setBalance", [wallet.address, ethers_1.ethers.BigNumber.from(10).pow(18).toHexString()]);
}));
it("Mint some usdc", () => __awaiter(void 0, void 0, void 0, function* () {
    const { usdc } = (0, cache_1.getContracts)();
    const beforeBal = yield usdc.balanceOf(wallet.address);
    const oneUSDC = ethers_1.ethers.BigNumber.from(10).pow(6);
    yield __1.AlpineDeFiSDK.mintUSDC(wallet.address, 1);
    const afterBal = yield usdc.balanceOf(wallet.address);
    expect(afterBal.eq(beforeBal.add(oneUSDC))).to.be.true;
}));
