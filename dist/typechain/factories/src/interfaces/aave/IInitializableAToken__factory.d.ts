import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IInitializableAToken, IInitializableATokenInterface } from "../../../../src/interfaces/aave/IInitializableAToken";
export declare class IInitializableAToken__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IInitializableATokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInitializableAToken;
}
