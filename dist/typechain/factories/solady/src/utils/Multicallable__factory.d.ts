import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Multicallable, MulticallableInterface } from "../../../../solady/src/utils/Multicallable";
export declare class Multicallable__factory {
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
    static createInterface(): MulticallableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Multicallable;
}
