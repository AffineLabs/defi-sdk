"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2AAVEStrategy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract BaseVault",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "_registry",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "aToken",
        outputs: [
            {
                internalType: "contract ERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "asset",
        outputs: [
            {
                internalType: "contract ERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "balanceOfAsset",
        outputs: [
            {
                internalType: "uint256",
                name: "assets",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "divest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "invest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "lendingPool",
        outputs: [
            {
                internalType: "contract ILendingPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "token",
                type: "address",
            },
        ],
        name: "sweep",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "totalLockedValue",
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
        inputs: [],
        name: "vault",
        outputs: [
            {
                internalType: "contract BaseVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6101006040523480156200001257600080fd5b506040516200149f3803806200149f83398101604081905262000035916200036b565b81806001600160a01b03166080816001600160a01b031681525050806001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200008f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000b59190620003aa565b6001600160a01b031660a0816001600160a01b031681525050506000816001600160a01b031663365ccbbf6040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000110573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200013a919081019062000446565b905080600182516200014d919062000504565b815181106200016057620001606200052c565b60200260200101516001600160a01b0316630261bf8b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001a6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001cc9190620003aa565b6001600160a01b0390811660c081905260a0516040516335ea6a7560e01b815292166004830152906335ea6a759060240161018060405180830381865afa1580156200021c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002429190620005c7565b60e001516001600160a01b031660e0816001600160a01b0316815250506200028a60c05160001960a0516001600160a01b0316620002be60201b620006a4179092919060201c565b620002b560c05160001960e0516001600160a01b0316620002be60201b620006a4179092919060201c565b505050620006cf565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806200033a5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640160405180910390fd5b50505050565b6001600160a01b03811681146200035657600080fd5b50565b8051620003668162000340565b919050565b600080604083850312156200037f57600080fd5b82516200038c8162000340565b60208401519092506200039f8162000340565b809150509250929050565b600060208284031215620003bd57600080fd5b8151620003ca8162000340565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b03811182821017156200040d576200040d620003d1565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200043e576200043e620003d1565b604052919050565b600060208083850312156200045a57600080fd5b82516001600160401b03808211156200047257600080fd5b818501915085601f8301126200048757600080fd5b8151818111156200049c576200049c620003d1565b8060051b9150620004af84830162000413565b8181529183018401918481019088841115620004ca57600080fd5b938501935b83851015620004f85784519250620004e78362000340565b8282529385019390850190620004cf565b98975050505050505050565b818103818111156200052657634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156200055557600080fd5b604051602081016001600160401b03811182821017156200057a576200057a620003d1565b6040529151825250919050565b80516001600160801b03811681146200036657600080fd5b805164ffffffffff811681146200036657600080fd5b805160ff811681146200036657600080fd5b60006101808284031215620005db57600080fd5b620005e5620003e7565b620005f1848462000542565b8152620006016020840162000587565b6020820152620006146040840162000587565b6040820152620006276060840162000587565b60608201526200063a6080840162000587565b60808201526200064d60a0840162000587565b60a08201526200066060c084016200059f565b60c08201526200067360e0840162000359565b60e08201526101006200068881850162000359565b908201526101206200069c84820162000359565b90820152610140620006b084820162000359565b90820152610160620006c4848201620005b5565b908201529392505050565b60805160a05160c05160e051610d3c6200076360003960008181610157015281816104ac0152610a3b01526000818161017e015281816109660152610b2001526000818160f00152818161044a015281816105740152818161092a01528181610ae80152610bbc0152600081816101a5015281816101c9015281816102f40152818161060e0152610bde0152610d3c6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063797bf34311610076578063a0c1f15e1161005b578063a0c1f15e14610152578063a59a997314610179578063fbfa77cf146101a057600080fd5b8063797bf343146101375780638ca179951461013f57600080fd5b806301681a62146100a85780632afcf480146100bd578063357be446146100d057806338d52e0f146100eb575b600080fd5b6100bb6100b6366004610c45565b6101c7565b005b6100bb6100cb366004610c62565b610430565b6100d861047b565b6040519081526020015b60405180910390f35b6101127f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e2565b6100d8610543565b6100d861014d366004610c62565b6105f4565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635aa6e6756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102569190610c7b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f42533a206f6e6c7920676f7665726e616e63650000000000000000000000000060448201526064015b60405180910390fd5b61042d7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635aa6e6756040518163ffffffff1660e01b8152600401602060405180830381865afa15801561035d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103819190610c7b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156103eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040f9190610c98565b73ffffffffffffffffffffffffffffffffffffffff84169190610763565b50565b61047273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308461081c565b61042d816108e2565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610508573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052c9190610c98565b610534610543565b61053e9190610ce0565b905090565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156105d0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053e9190610c98565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f42533a206f6e6c79207661756c7400000000000000000000000000000000000060448201526064016102e6565b61069e826109be565b92915050565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061075d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c454400000000000000000000000000000000000060448201526064016102e6565b50505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061075d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016102e6565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806108db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016102e6565b5050505050565b806000036108ed5750565b6040517fe8eda9df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201839052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df90608401600060405180830381600087803b1580156109aa57600080fd5b505af11580156108db573d6000803e3d6000fd5b6000806109c9610543565b90506000838210156109e4576109df8285610cf3565b6109e7565b60005b90508015610b92576040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090610aab90839073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610a82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa69190610c98565b610c0b565b6040517f69328dec00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390523060448301529192507f0000000000000000000000000000000000000000000000000000000000000000909116906369328dec906064016020604051808303816000875af1158015610b6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8f9190610c98565b50505b6000610ba085610aa6610543565b9050610c0373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610763565b949350505050565b6000818310610c1a5781610c1c565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461042d57600080fd5b600060208284031215610c5757600080fd5b8135610c1c81610c23565b600060208284031215610c7457600080fd5b5035919050565b600060208284031215610c8d57600080fd5b8151610c1c81610c23565b600060208284031215610caa57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561069e5761069e610cb1565b8181038181111561069e5761069e610cb156fea2646970667358221220f76e03fa04f77f6baa87fed02a8594a14aa588d86cfe0f12b43ff55d1515b11c64736f6c63430008100033";
const isSuperArgs = (xs) => xs.length > 1;
class L2AAVEStrategy__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_vault, _registry, overrides) {
        return super.deploy(_vault, _registry, overrides || {});
    }
    getDeployTransaction(_vault, _registry, overrides) {
        return super.getDeployTransaction(_vault, _registry, overrides || {});
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
exports.L2AAVEStrategy__factory = L2AAVEStrategy__factory;
L2AAVEStrategy__factory.bytecode = _bytecode;
L2AAVEStrategy__factory.abi = _abi;
