import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RebalanceModule, RebalanceModuleInterface } from "../RebalanceModule";
export declare class RebalanceModule__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract AffineVault";
            readonly name: "vault";
            readonly type: "address";
        }];
        readonly name: "Rebalance";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "rebalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RebalanceModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RebalanceModule;
}
