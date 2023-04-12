import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConvexBooster, IConvexBoosterInterface } from "../../../../src/interfaces/convex/IConvexBooster";
export declare class IConvexBooster__factory {
    static readonly abi: ({
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
    } | {
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
    })[];
    static createInterface(): IConvexBoosterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConvexBooster;
}
