import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC4626Upgradeable, ERC4626UpgradeableInterface } from "../../../../../../@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC4626Upgradeable";
export declare class ERC4626Upgradeable__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ERC4626UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Upgradeable;
}
