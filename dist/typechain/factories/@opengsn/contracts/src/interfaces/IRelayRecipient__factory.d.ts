import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRelayRecipient, IRelayRecipientInterface } from "../../../../../@opengsn/contracts/src/interfaces/IRelayRecipient";
export declare class IRelayRecipient__factory {
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
    static createInterface(): IRelayRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRelayRecipient;
}
