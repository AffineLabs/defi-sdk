import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolErrors, IUniswapV3PoolErrorsInterface } from "../../../../../../@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolErrors";
export declare class IUniswapV3PoolErrors__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): IUniswapV3PoolErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolErrors;
}
