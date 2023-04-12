import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolActions, IUniswapV3PoolActionsInterface } from "../../../../../../@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolActions";
export declare class IUniswapV3PoolActions__factory {
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
    static createInterface(): IUniswapV3PoolActionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolActions;
}
