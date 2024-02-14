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
import { getContracts, init, PROVIDER, setProvider } from "../cache";
const testProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "").connect(testProvider);
before(() => __awaiter(void 0, void 0, void 0, function* () {
    setProvider(testProvider);
    yield init(wallet, undefined);
    yield PROVIDER.send("anvil_setBalance", [wallet.address, ethers.BigNumber.from(10).pow(18).toHexString()]);
}));
it("Mint some usdc", () => __awaiter(void 0, void 0, void 0, function* () {
    const { usdc } = getContracts();
    const beforeBal = yield usdc.balanceOf(wallet.address);
    const oneUSDC = ethers.BigNumber.from(10).pow(6);
    yield AlpineDeFiSDK.mintUSDC(wallet.address, 1);
    const afterBal = yield usdc.balanceOf(wallet.address);
    expect(afterBal.eq(beforeBal.add(oneUSDC))).to.be.true;
}));
