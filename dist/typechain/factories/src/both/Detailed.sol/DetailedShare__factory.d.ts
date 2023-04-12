import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DetailedShare, DetailedShareInterface } from "../../../../src/both/Detailed.sol/DetailedShare";
export declare class DetailedShare__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): DetailedShareInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DetailedShare;
}
