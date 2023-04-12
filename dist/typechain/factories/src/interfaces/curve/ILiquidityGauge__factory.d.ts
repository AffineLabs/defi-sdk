import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILiquidityGauge, ILiquidityGaugeInterface } from "../../../../src/interfaces/curve/ILiquidityGauge";
export declare class ILiquidityGauge__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ILiquidityGaugeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiquidityGauge;
}