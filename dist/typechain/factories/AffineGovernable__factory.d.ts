import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AffineGovernable, AffineGovernableInterface } from "../AffineGovernable";
export declare class AffineGovernable__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "governance";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AffineGovernableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AffineGovernable;
}
