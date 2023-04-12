import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConvexRewards, IConvexRewardsInterface } from "../../../../src/interfaces/convex/IConvexRewards";
export declare class IConvexRewards__factory {
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
    static createInterface(): IConvexRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConvexRewards;
}
