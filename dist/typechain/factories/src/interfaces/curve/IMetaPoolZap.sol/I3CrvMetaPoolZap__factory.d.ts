import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { I3CrvMetaPoolZap, I3CrvMetaPoolZapInterface } from "../../../../../src/interfaces/curve/IMetaPoolZap.sol/I3CrvMetaPoolZap";
export declare class I3CrvMetaPoolZap__factory {
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
    static createInterface(): I3CrvMetaPoolZapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): I3CrvMetaPoolZap;
}
