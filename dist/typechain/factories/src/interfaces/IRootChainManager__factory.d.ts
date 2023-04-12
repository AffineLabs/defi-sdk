import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRootChainManager, IRootChainManagerInterface } from "../../../src/interfaces/IRootChainManager";
export declare class IRootChainManager__factory {
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
    static createInterface(): IRootChainManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRootChainManager;
}
