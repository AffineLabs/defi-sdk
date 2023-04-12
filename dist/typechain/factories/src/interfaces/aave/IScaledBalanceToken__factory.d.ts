import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IScaledBalanceToken, IScaledBalanceTokenInterface } from "../../../../src/interfaces/aave/IScaledBalanceToken";
export declare class IScaledBalanceToken__factory {
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
    static createInterface(): IScaledBalanceTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IScaledBalanceToken;
}
