import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { L1BridgeEscrow, L1BridgeEscrowInterface } from "../../../src/ethereum/L1BridgeEscrow";
type L1BridgeEscrowConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L1BridgeEscrow__factory extends ContractFactory {
    constructor(...args: L1BridgeEscrowConstructorParams);
    deploy(_vault: PromiseOrValue<string>, _manager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<L1BridgeEscrow>;
    getDeployTransaction(_vault: PromiseOrValue<string>, _manager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): L1BridgeEscrow;
    connect(signer: Signer): L1BridgeEscrow__factory;
    static readonly bytecode = "0x61012060405234801561001157600080fd5b50604051610a28380380610a28833981016040819052610030916101c0565b81806001600160a01b0316638c4554a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561006f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061009391906101fa565b6001600160a01b031660a0816001600160a01b031681525050806001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010e91906101fa565b6001600160a01b03166080816001600160a01b031681525050806001600160a01b0316635aa6e6756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610165573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018991906101fa565b6001600160a01b0390811660c05292831660e05250166101005261021e565b6001600160a01b03811681146101bd57600080fd5b50565b600080604083850312156101d357600080fd5b82516101de816101a8565b60208401519092506101ef816101a8565b809150509250929050565b60006020828403121561020c57600080fd5b8151610217816101a8565b9392505050565b60805160a05160c05160e051610100516107976102916000396000818161013a0152610326015260008181610174015281816104e2015261053c01526000818160ec01526101ae0152600081816101130152610262015260008181609c015281816103ba01526104c001526107976000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638c4554a81161005b5780638c4554a81461010e578063bd07018d14610135578063f29874ac1461015c578063fbfa77cf1461016f57600080fd5b80630f73cc4f1461008257806338d52e0f146100975780635aa6e675146100e7575b600080fd5b61009561009036600461067f565b610196565b005b6100be7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100be7f000000000000000000000000000000000000000000000000000000000000000081565b6100be7f000000000000000000000000000000000000000000000000000000000000000081565b6100be7f000000000000000000000000000000000000000000000000000000000000000081565b61009561016a36600461067f565b61024a565b6100be7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461023a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f42453a204f6e6c7920476f7665726e616e63650000000000000000000000000060448201526064015b60405180910390fd5b6102458383836102e9565b505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461023a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f42453a204f6e6c7920776f726d686f6c6520726f7574657200000000000000006044820152606401610231565b6040517f3805550f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690633805550f9061035d90859085906004016106fb565b600060405180830381600087803b15801561037757600080fd5b505af1925050508015610388575060015b506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610416573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043a9190610748565b9050838110156104a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f42453a2046756e6473206e6f74207265636569766564000000000000000000006044820152606401610231565b61050773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000836105c0565b6040518181527fb6760579a8d570a6e3d00f8ce3e7ac735d0f138c120c1d01c9d9aa56b7312ab09060200160405180910390a17f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342dc25186040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105a257600080fd5b505af11580156105b6573d6000803e3d6000fd5b5050505050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610231565b50505050565b60008060006040848603121561069457600080fd5b83359250602084013567ffffffffffffffff808211156106b357600080fd5b818601915086601f8301126106c757600080fd5b8135818111156106d657600080fd5b8760208285010111156106e857600080fd5b6020830194508093505050509250925092565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60006020828403121561075a57600080fd5b505191905056fea2646970667358221220b4aab2d7b851956db9636d7a09670d8bd077507cff6f3cbbca3e2ef73f6c2a4164736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): L1BridgeEscrowInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1BridgeEscrow;
}
export {};
