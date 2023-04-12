import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseRelayRecipient, BaseRelayRecipientInterface } from "../../../../@opengsn/contracts/src/BaseRelayRecipient";
export declare class BaseRelayRecipient__factory {
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
    static createInterface(): BaseRelayRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseRelayRecipient;
}
