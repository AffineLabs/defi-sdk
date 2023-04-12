import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProtocolDataProvider, IProtocolDataProviderInterface } from "../../../../src/interfaces/aave/IProtocolDataProvider";
export declare class IProtocolDataProvider__factory {
    static readonly abi: ({
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
    static createInterface(): IProtocolDataProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolDataProvider;
}
