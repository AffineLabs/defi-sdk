import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VaultErrors, VaultErrorsInterface } from "../VaultErrors";
export declare class VaultErrors__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "OnlyEscrow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyWormholeRouter";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ProfitUnlocking";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SharesExceedBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TooManyStrategyBps";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TvlLimitReached";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroShares";
        readonly type: "error";
    }];
    static createInterface(): VaultErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VaultErrors;
}
