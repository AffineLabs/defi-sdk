import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWormhole, IWormholeInterface } from "../../../src/interfaces/IWormhole";
export declare class IWormhole__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IWormholeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWormhole;
}
