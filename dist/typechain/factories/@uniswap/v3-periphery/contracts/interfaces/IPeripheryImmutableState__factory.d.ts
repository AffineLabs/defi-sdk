import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeripheryImmutableState, IPeripheryImmutableStateInterface } from "../../../../../@uniswap/v3-periphery/contracts/interfaces/IPeripheryImmutableState";
export declare class IPeripheryImmutableState__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPeripheryImmutableStateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeripheryImmutableState;
}
