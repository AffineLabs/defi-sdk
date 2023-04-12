import { ethers } from "ethers";
export declare function sendBiconomy(contract: ethers.Contract, signer: ethers.Signer, method: string, args: Array<any>): Promise<void>;
export declare function getSignature(contract: ethers.Contract, signer: ethers.Signer, method: string, args: Array<any>, nonce?: number): Promise<{
    signature: string;
    request: {
        from: string;
        to: string;
        value: number;
        gas: number;
        nonce: number;
        data: string;
    };
}>;
export declare function sendToForwarder(signatures: Array<string>, requests: Array<any>): Promise<void>;
