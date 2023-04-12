import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMasterChef, IMasterChefInterface } from "../../../../src/interfaces/sushiswap/IMasterChef";
export declare class IMasterChef__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IMasterChefInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMasterChef;
}
