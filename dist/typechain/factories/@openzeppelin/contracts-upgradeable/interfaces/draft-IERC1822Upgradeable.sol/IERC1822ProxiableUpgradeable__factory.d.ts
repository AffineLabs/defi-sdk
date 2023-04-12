import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1822ProxiableUpgradeable, IERC1822ProxiableUpgradeableInterface } from "../../../../../@openzeppelin/contracts-upgradeable/interfaces/draft-IERC1822Upgradeable.sol/IERC1822ProxiableUpgradeable";
export declare class IERC1822ProxiableUpgradeable__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IERC1822ProxiableUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1822ProxiableUpgradeable;
}
