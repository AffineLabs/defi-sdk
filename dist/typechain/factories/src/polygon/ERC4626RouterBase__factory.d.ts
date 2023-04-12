import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC4626RouterBase, ERC4626RouterBaseInterface } from "../../../src/polygon/ERC4626RouterBase";
export declare class ERC4626RouterBase__factory {
    static readonly abi: ({
        inputs: never[];
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
    })[];
    static createInterface(): ERC4626RouterBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626RouterBase;
}
