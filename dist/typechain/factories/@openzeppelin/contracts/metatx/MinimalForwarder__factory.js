"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalForwarder__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct MinimalForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct MinimalForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x61014060405234801561001157600080fd5b50604080518082018252601081526f26b4b734b6b0b62337b93bb0b93232b960811b602080830191825283518085019094526005845264302e302e3160d81b908401528151902060e08190527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc1991638118856101008190524660a0529192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6100fb8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060c052610120525061011092505050565b60805160a05160c05160e0516101005161012051610d1b61015f60003960006105cc0152600061061b015260006105f60152600061054f01526000610579015260006105a30152610d1b6000f3fe6080604052600436106100345760003560e01c80632d0335ab1461003957806347153f821461008f578063bf5d3bdb146100b0575b600080fd5b34801561004557600080fd5b5061007c610054366004610a1d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6040519081526020015b60405180910390f35b6100a261009d366004610a5a565b6100e0565b604051610086929190610b1d565b3480156100bc57600080fd5b506100d06100cb366004610a5a565b6102e3565b6040519015158152602001610086565b600060606100ef8585856102e3565b610180576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f657360448201527f206e6f74206d617463682072657175657374000000000000000000000000000060648201526084015b60405180910390fd5b61018f60808601356001610b77565b60008061019f6020890189610a1d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808660200160208101906101f39190610a1d565b73ffffffffffffffffffffffffffffffffffffffff166060880135604089013561022060a08b018b610bb1565b61022d60208d018d610a1d565b60405160200161023f93929190610c16565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261027791610c4f565b600060405180830381858888f193505050503d80600081146102b5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ba565b606091505b5090925090506102cf603f6060890135610c6b565b5a116102d757fe5b90969095509350505050565b60008061040384848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506103fd92507fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e489150610353905060208a018a610a1d565b61036360408b0160208c01610a1d565b60408b013560608c013560808d013561037f60a08f018f610bb1565b60405161038d929190610ca6565b60408051918290038220602083019890985273ffffffffffffffffffffffffffffffffffffffff96871690820152949093166060850152608084019190915260a083015260c082015260e081019190915261010001604051602081830303815290604052805190602001206104a2565b90610511565b9050608085013560008061041a6020890189610a1d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054148015610499575061046a6020860186610a1d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b95945050505050565b600061050b6104af610535565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b60008060006105208585610669565b9150915061052d816106ae565b509392505050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801561059b57507f000000000000000000000000000000000000000000000000000000000000000046145b156105c557507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600080825160410361069f5760208301516040840151606085015160001a61069387828585610905565b945094505050506106a7565b506000905060025b9250929050565b60008160048111156106c2576106c2610cb6565b036106ca5750565b60018160048111156106de576106de610cb6565b03610745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610177565b600281600481111561075957610759610cb6565b036107c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610177565b60038160048111156107d4576107d4610cb6565b03610861576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610177565b600481600481111561087557610875610cb6565b03610902576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610177565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561093c5750600090506003610a14565b8460ff16601b1415801561095457508460ff16601c14155b156109655750600090506004610a14565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156109b9573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116610a0d57600060019250925050610a14565b9150600090505b94509492505050565b600060208284031215610a2f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610a5357600080fd5b9392505050565b600080600060408486031215610a6f57600080fd5b833567ffffffffffffffff80821115610a8757600080fd5b9085019060c08288031215610a9b57600080fd5b90935060208501359080821115610ab157600080fd5b818601915086601f830112610ac557600080fd5b813581811115610ad457600080fd5b876020828501011115610ae657600080fd5b6020830194508093505050509250925092565b60005b83811015610b14578181015183820152602001610afc565b50506000910152565b82151581526040602082015260008251806040840152610b44816060850160208701610af9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b8082018082111561050b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610be657600080fd5b83018035915067ffffffffffffffff821115610c0157600080fd5b6020019150368190038213156106a757600080fd5b8284823760609190911b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169101908152601401919050565b60008251610c61818460208701610af9565b9190910192915050565b600082610ca1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea264697066735822122025039c0e806d6064f8f8b9ecf83dbc830a73638ef234c499673ffa99a0c2347464736f6c63430008100033";
const isSuperArgs = (xs) => xs.length > 1;
class MinimalForwarder__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MinimalForwarder__factory = MinimalForwarder__factory;
MinimalForwarder__factory.bytecode = _bytecode;
MinimalForwarder__factory.abi = _abi;
