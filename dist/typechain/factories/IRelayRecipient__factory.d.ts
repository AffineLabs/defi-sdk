import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRelayRecipient, IRelayRecipientInterface } from "../IRelayRecipient";
export declare class IRelayRecipient__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "isTrustedForwarder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "versionRecipient";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IRelayRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRelayRecipient;
}
