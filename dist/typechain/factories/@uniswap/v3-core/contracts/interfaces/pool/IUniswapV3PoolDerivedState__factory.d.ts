import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolDerivedState, IUniswapV3PoolDerivedStateInterface } from "../../../../../../@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolDerivedState";
export declare class IUniswapV3PoolDerivedState__factory {
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
    static createInterface(): IUniswapV3PoolDerivedStateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolDerivedState;
}
