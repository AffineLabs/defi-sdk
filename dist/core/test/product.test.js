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
import { approve, mintUSDC } from "../AlpineDeFiSDK";
import { getBaseContracts, getContracts, getEthContracts, getPolygonContracts, init, setProvider } from "../cache";
import { buyProduct, sellProduct, getTokenInfo } from "../product";
import { getTestProvider, oneUSDC, setBaseUsdcBalance } from "./utils";
describe("Buy products", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    let contracts;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testProvider = getTestProvider("poly");
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        setProvider(testProvider);
        yield init(wallet, undefined);
        yield mintUSDC(wallet.address, 100);
        contracts = getPolygonContracts();
    }));
    it("Buy/Sell alpSave", () => __awaiter(void 0, void 0, void 0, function* () {
        const { alpSave } = contracts;
        console.log("APPROVING....");
        yield approve("alpSave", "100000");
        yield buyProduct("alpSave", 10);
        const res = yield alpSave.balanceOf(wallet.address);
        console.log("alpSave Shares...", res);
        expect(res.gt(0)).to.be.true;
        yield sellProduct("alpSave", 10);
        const newBal = yield alpSave.balanceOf(wallet.address);
        expect(newBal.lt(res)).to.be.true;
    }));
    it("Buy/Sell alpLarge", () => __awaiter(void 0, void 0, void 0, function* () {
        const { alpLarge } = contracts;
        yield approve("alpLarge", "100000");
        console.log("buying alpLarge");
        yield buyProduct("alpLarge", 5, 100 * 50);
        const res = yield alpLarge.balanceOf(wallet.address);
        console.log("alpLarge shares....", res.toString());
        expect(res.gt(0)).to.be.true;
        yield sellProduct("alpLarge", 1);
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
        testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8546");
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        yield init(wallet, undefined, 5);
        yield mintUSDC(wallet.address, 100);
        contracts = getEthContracts();
    }));
    it("Buy/Sell ethEarn", () => __awaiter(void 0, void 0, void 0, function* () {
        const { ethEarn } = contracts;
        yield approve("ethEarn", "100000");
        yield buyProduct("ethEarn", 10);
        const shares = yield ethEarn.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield sellProduct("ethEarn", 10);
        const newBal = yield ethEarn.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
    it("Buy/Sell ethWethEarn", () => __awaiter(void 0, void 0, void 0, function* () {
        const { ethWethEarn } = contracts;
        yield approve("ethWethEarn", "100000");
        yield buyProduct("ethWethEarn", 10);
        const shares = yield ethWethEarn.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield sellProduct("ethWethEarn", 10);
        const newBal = yield ethWethEarn.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
    it("EthEarn info", () => __awaiter(void 0, void 0, void 0, function* () {
        const ethInfo = yield getTokenInfo("ethEarn");
        console.log({ ethInfo });
        expect(Number(ethInfo.amount) * Number(ethInfo.price)).to.closeTo(Number(ethInfo.equity), 1);
    }));
    it("EthWethEarn info", () => __awaiter(void 0, void 0, void 0, function* () {
        const ethWethInfo = yield getTokenInfo("ethWethEarn");
        console.log({ ethWethInfo });
        expect(Number(ethWethInfo.amount) * Number(ethWethInfo.price)).to.closeTo(Number(ethWethInfo.equity), 1);
    }));
}));
describe("Buy products Base", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    let contracts;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testProvider = getTestProvider("base");
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        yield init(wallet, undefined, 8453);
        const oneEth = ethers.BigNumber.from(10).pow(18);
        yield testProvider.send("anvil_setBalance", [wallet.address, oneEth.mul(100).toHexString()]);
        console.log("INIT DONE");
        yield setBaseUsdcBalance(wallet.address, ethers.BigNumber.from(100).mul(oneUSDC));
        console.log("usdc balance set");
        contracts = getBaseContracts();
    }));
    it("Buy/Sell usdEarnBase", () => __awaiter(void 0, void 0, void 0, function* () {
        let { baseUsdEarn } = contracts;
        baseUsdEarn = baseUsdEarn;
        yield approve("baseUsdEarn", "100000");
        yield buyProduct("baseUsdEarn", 10);
        console.log("shares bought");
        const shares = yield baseUsdEarn.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield sellProduct("baseUsdEarn", 9);
        const newBal = yield baseUsdEarn.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
    it("BaseUsdEarn info", () => __awaiter(void 0, void 0, void 0, function* () {
        const baseInfo = yield getTokenInfo("baseUsdEarn");
        console.log({ baseInfo });
        expect(Number(baseInfo.amount) * Number(baseInfo.price)).to.closeTo(Number(baseInfo.equity), 1);
    }));
    it("Buy/Sell baseLeverage", () => __awaiter(void 0, void 0, void 0, function* () {
        const { baseLeverage } = contracts;
        yield buyProduct("baseLeverage", 2);
        const shares = yield baseLeverage.balanceOf(wallet.address);
        expect(shares.gt(0)).to.be.true;
        yield sellProduct("baseLeverage", 1);
        const newBal = yield baseLeverage.balanceOf(wallet.address);
        expect(newBal.lt(shares)).to.be.true;
    }));
}));
describe("Product info", () => __awaiter(void 0, void 0, void 0, function* () {
    let wallet;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
        yield init(wallet, undefined);
        yield mintUSDC(wallet.address, 100);
    }));
    it("Can get token info", () => __awaiter(void 0, void 0, void 0, function* () {
        const { usdc } = getContracts();
        const saveInfo = yield getTokenInfo("alpSave");
        console.log({ saveInfo });
        expect(Number(saveInfo.amount) * Number(saveInfo.price)).to.closeTo(Number(saveInfo.equity), 0.1);
        const largeInfo = yield getTokenInfo("alpLarge");
        console.log({ largeInfo });
        expect(Number(largeInfo.amount) * Number(largeInfo.price)).to.closeTo(Number(largeInfo.equity), 1);
        const usdcInfo = yield getTokenInfo("usdc");
        console.log({ usdcInfo });
        expect(usdcInfo.amount).to.equal(ethers.utils.formatUnits(yield usdc.balanceOf(wallet.address), 6));
        expect(usdcInfo.price).to.equal("1");
        expect(usdcInfo.equity).to.equal(usdcInfo.amount);
        expect(usdcInfo.amount).to.equal(ethers.utils.formatUnits(yield usdc.balanceOf(wallet.address), 6));
    }));
}));
