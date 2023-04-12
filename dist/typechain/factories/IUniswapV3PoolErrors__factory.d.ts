import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolErrors, IUniswapV3PoolErrorsInterface } from "../IUniswapV3PoolErrors";
export declare class IUniswapV3PoolErrors__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "AI";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "F0";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "F1";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IIA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "L";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LOK";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "M0";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "M1";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TLM";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TLU";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TUM";
        readonly type: "error";
    }];
    static createInterface(): IUniswapV3PoolErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolErrors;
}
