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
const AlpineDeFiSDK_1 = require("../AlpineDeFiSDK");
const cache_1 = require("../cache");
const product_1 = require("../product");
const utils_1 = require("./utils");
describe("Buy products", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    let contracts;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testProvider = (0, utils_1.getTestProvider)("poly");
        wallet = ethers_1.ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        (0, cache_1.setProvider)(testProvider);
        yield (0, cache_1.init)(wallet, undefined);
        yield (0, AlpineDeFiSDK_1.mintUSDC)(wallet.address, 100);
        contracts = (0, cache_1.getPolygonContracts)();
    }));
    it("Buy/Sell alpSave", () => __awaiter(void 0, void 0, void 0, function* () {
        const { alpSave } = contracts;
        console.log("APPROVING....");
        yield (0, AlpineDeFiSDK_1.approve)("alpSave", "100000");
        yield (0, product_1.buyProduct)("alpSave", 10);
        const res = yield alpSave.balanceOf(wallet.address);
        console.log("alpSave Shares...", res);
        expect(res.gt(0)).to.be.true;
        yield (0, product_1.sellProduct)("alpSave", 10);
        const newBal = yield alpSave.balanceOf(wallet.address);
        expect(newBal.lt(res)).to.be.true;
    }));
    it("Buy/Sell alpLarge", () => __awaiter(void 0, void 0, void 0, function* () {
        const { alpLarge } = contracts;
        yield (0, AlpineDeFiSDK_1.approve)("alpLarge", "100000");
        console.log("buying alpLarge");
        yield (0, product_1.buyProduct)("alpLarge", 5, 100 * 50);
        const res = yield alpLarge.balanceOf(wallet.address);
        console.log("alpLarge shares....", res.toString());
        expect(res.gt(0)).to.be.true;
        yield (0, product_1.sellProduct)("alpLarge", 1);
        const newBal = yield alpLarge.balanceOf(wallet.address);
        console.log("newBal: ", newBal.toString());
        expect(newBal.lt(res)).to.be.true;
    }));
}));
describe("Buy products Eth", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    let testProvider;
    let contracts;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        testProvider = new ethers_1.ethers.providers.JsonRpcProvider("http://localhost:8546");
        wallet = ethers_1.ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        yield (0, cache_1.init)(wallet, undefined, undefined, 5);
        yield (0, AlpineDeFiSDK_1.mintUSDC)(wallet.address, 100);
        contracts = (0, cache_1.getEthContracts)();
    }));
    it("Buy/Sell ethEarn", () => __awaiter(void 0, void 0, void 0, function* () {
        const { ethEarn } = contracts;
        yield (0, AlpineDeFiSDK_1.approve)("ethEarn", "100000");
        yield (0, product_1.buyProduct)("ethEarn", 10);
        const shares = yield ethEarn.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield (0, product_1.sellProduct)("ethEarn", 10);
        const newBal = yield ethEarn.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
    it("Buy/Sell ethWethEarn", () => __awaiter(void 0, void 0, void 0, function* () {
        const { ethWethEarn } = contracts;
        yield (0, AlpineDeFiSDK_1.approve)("ethWethEarn", "100000");
        yield (0, product_1.buyProduct)("ethWethEarn", 10);
        const shares = yield ethWethEarn.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield (0, product_1.sellProduct)("ethWethEarn", 10);
        const newBal = yield ethWethEarn.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
    it("EthEarn info", () => __awaiter(void 0, void 0, void 0, function* () {
        const ethInfo = yield (0, product_1.getTokenInfo)("ethEarn");
        console.log({ ethInfo });
        expect(Number(ethInfo.amount) * Number(ethInfo.price)).to.closeTo(Number(ethInfo.equity), 1);
    }));
    it("EthWethEarn info", () => __awaiter(void 0, void 0, void 0, function* () {
        const ethWethInfo = yield (0, product_1.getTokenInfo)("ethWethEarn");
        console.log({ ethWethInfo });
        expect(Number(ethWethInfo.amount) * Number(ethWethInfo.price)).to.closeTo(Number(ethWethInfo.equity), 1);
    }));
}));
describe("Buy products Base", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    let contracts;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testProvider = (0, utils_1.getTestProvider)("base");
        wallet = ethers_1.ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        yield (0, cache_1.init)(wallet, undefined, "v1.0-beta", 8453);
        yield testProvider.send("anvil_setBalance", [wallet.address, ethers_1.ethers.BigNumber.from(10).pow(18).toHexString()]);
        console.log("INIT DONE");
        yield (0, utils_1.setBaseUsdcBalance)(wallet.address, ethers_1.ethers.BigNumber.from(100).mul(utils_1.oneUSDC));
        console.log("usdc balance set");
        contracts = (0, cache_1.getBaseContracts)();
    }));
    it("Buy/Sell usdEarnBase", () => __awaiter(void 0, void 0, void 0, function* () {
        let { baseUsdEarn } = contracts;
        baseUsdEarn = baseUsdEarn;
        yield (0, AlpineDeFiSDK_1.approve)("baseUsdEarn", "100000");
        yield (0, product_1.buyProduct)("baseUsdEarn", 10);
        console.log("shares bought");
        const shares = yield baseUsdEarn.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield (0, product_1.sellProduct)("baseUsdEarn", 9);
        const newBal = yield baseUsdEarn.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
    it("BaseUsdEarn info", () => __awaiter(void 0, void 0, void 0, function* () {
        const baseInfo = yield (0, product_1.getTokenInfo)("baseUsdEarn");
        console.log({ baseInfo });
        expect(Number(baseInfo.amount) * Number(baseInfo.price)).to.closeTo(Number(baseInfo.equity), 1);
    }));
}));
describe("Product info", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testProvider = new ethers_1.ethers.providers.JsonRpcProvider("http://localhost:8545");
        wallet = ethers_1.ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        yield (0, cache_1.init)(wallet, undefined);
        yield (0, AlpineDeFiSDK_1.mintUSDC)(wallet.address, 100);
    }));
    it("Can get token info", () => __awaiter(void 0, void 0, void 0, function* () {
        const { usdc } = (0, cache_1.getContracts)();
        const saveInfo = yield (0, product_1.getTokenInfo)("alpSave");
        console.log({ saveInfo });
        expect(Number(saveInfo.amount) * Number(saveInfo.price)).to.closeTo(Number(saveInfo.equity), 0.1);
        const largeInfo = yield (0, product_1.getTokenInfo)("alpLarge");
        console.log({ largeInfo });
        expect(Number(largeInfo.amount) * Number(largeInfo.price)).to.closeTo(Number(largeInfo.equity), 1);
        const usdcInfo = yield (0, product_1.getTokenInfo)("usdc");
        console.log({ usdcInfo });
        expect(usdcInfo.amount).to.equal(ethers_1.ethers.utils.formatUnits(yield usdc.balanceOf(wallet.address), 6));
        expect(usdcInfo.price).to.equal("1");
        expect(usdcInfo.equity).to.equal(usdcInfo.amount);
        expect(usdcInfo.amount).to.equal(ethers_1.ethers.utils.formatUnits(yield usdc.balanceOf(wallet.address), 6));
    }));
}));
