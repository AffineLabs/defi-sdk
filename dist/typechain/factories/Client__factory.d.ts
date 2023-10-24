import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Client, ClientInterface } from "../Client";
export declare class Client__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "EVM_EXTRA_ARGS_V1_TAG";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ClientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Client;
}
