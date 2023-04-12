import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC4626Upgradeable, IERC4626UpgradeableInterface } from "../../../../@openzeppelin/contracts-upgradeable/interfaces/IERC4626Upgradeable";
export declare class IERC4626Upgradeable__factory {
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
    static createInterface(): IERC4626UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC4626Upgradeable;
}
