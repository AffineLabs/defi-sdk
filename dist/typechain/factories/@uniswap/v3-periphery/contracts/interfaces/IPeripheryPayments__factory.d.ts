import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeripheryPayments, IPeripheryPaymentsInterface } from "../../../../../@uniswap/v3-periphery/contracts/interfaces/IPeripheryPayments";
export declare class IPeripheryPayments__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPeripheryPaymentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeripheryPayments;
}
