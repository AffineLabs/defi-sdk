import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMinter, IMinterInterface } from "../../../../src/interfaces/curve/IMinter";
export declare class IMinter__factory {
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
    static createInterface(): IMinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMinter;
}
