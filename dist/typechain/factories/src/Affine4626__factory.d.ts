import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Affine4626, Affine4626Interface } from "../../src/Affine4626";
export declare class Affine4626__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): Affine4626Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Affine4626;
}
