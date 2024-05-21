import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DummyRelay, DummyRelayInterface } from "../DummyRelay";
export declare class DummyRelay__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "trustedForwarder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DummyRelayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DummyRelay;
}
