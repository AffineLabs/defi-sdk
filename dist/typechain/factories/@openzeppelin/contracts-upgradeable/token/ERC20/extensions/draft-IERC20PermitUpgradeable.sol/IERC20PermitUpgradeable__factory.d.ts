import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20PermitUpgradeable, IERC20PermitUpgradeableInterface } from "../../../../../../../@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-IERC20PermitUpgradeable.sol/IERC20PermitUpgradeable";
export declare class IERC20PermitUpgradeable__factory {
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
    static createInterface(): IERC20PermitUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20PermitUpgradeable;
}
