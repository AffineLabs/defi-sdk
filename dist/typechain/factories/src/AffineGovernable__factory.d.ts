import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { AffineGovernable, AffineGovernableInterface } from "../../src/AffineGovernable";
type AffineGovernableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AffineGovernable__factory extends ContractFactory {
    constructor(...args: AffineGovernableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AffineGovernable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AffineGovernable;
    connect(signer: Signer): AffineGovernable__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060ab8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635aa6e67514602d575b600080fd5b600054604c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea2646970667358221220500a2c693f2a2f9c41093c5efde0217a23b35e2ebf431b4162e11db281a0a35664736f6c63430008100033";
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
    static createInterface(): AffineGovernableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AffineGovernable;
}
export {};
