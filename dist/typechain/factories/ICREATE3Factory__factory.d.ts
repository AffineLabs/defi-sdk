import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICREATE3Factory, ICREATE3FactoryInterface } from "../ICREATE3Factory";
export declare class ICREATE3Factory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "creationCode";
            readonly type: "bytes";
        }];
        readonly name: "deploy";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "deployed";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "getDeployed";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "deployed";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ICREATE3FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICREATE3Factory;
}
