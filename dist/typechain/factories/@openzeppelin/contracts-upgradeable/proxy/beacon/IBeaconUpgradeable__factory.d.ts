import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBeaconUpgradeable, IBeaconUpgradeableInterface } from "../../../../../@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable";
export declare class IBeaconUpgradeable__factory {
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
    static createInterface(): IBeaconUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBeaconUpgradeable;
}
