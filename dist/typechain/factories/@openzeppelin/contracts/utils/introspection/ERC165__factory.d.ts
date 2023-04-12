import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC165, ERC165Interface } from "../../../../../@openzeppelin/contracts/utils/introspection/ERC165";
export declare class ERC165__factory {
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
    static createInterface(): ERC165Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165;
}
