import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IComptroller, IComptrollerInterface } from "../../../../src/interfaces/compound/IComptroller";
export declare class IComptroller__factory {
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
    static createInterface(): IComptrollerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IComptroller;
}
