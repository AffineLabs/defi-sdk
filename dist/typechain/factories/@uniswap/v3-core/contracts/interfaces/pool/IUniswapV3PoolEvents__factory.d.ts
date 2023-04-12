import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolEvents, IUniswapV3PoolEventsInterface } from "../../../../../../@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolEvents";
export declare class IUniswapV3PoolEvents__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IUniswapV3PoolEventsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolEvents;
}
