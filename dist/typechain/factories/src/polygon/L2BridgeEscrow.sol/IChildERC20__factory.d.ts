import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IChildERC20, IChildERC20Interface } from "../../../../src/polygon/L2BridgeEscrow.sol/IChildERC20";
export declare class IChildERC20__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IChildERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IChildERC20;
}
