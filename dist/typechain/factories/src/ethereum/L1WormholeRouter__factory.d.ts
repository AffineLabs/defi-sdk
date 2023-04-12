import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { L1WormholeRouter, L1WormholeRouterInterface } from "../../../src/ethereum/L1WormholeRouter";
type L1WormholeRouterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L1WormholeRouter__factory extends ContractFactory {
    constructor(...args: L1WormholeRouterConstructorParams);
    deploy(_vault: PromiseOrValue<string>, _wormhole: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<L1WormholeRouter>;
    getDeployTransaction(_vault: PromiseOrValue<string>, _wormhole: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): L1WormholeRouter;
    connect(signer: Signer): L1WormholeRouter__factory;
    static readonly bytecode = "0x60c06040526000805460ff60a01b1916600160a21b1790553480156200002457600080fd5b50604051620017b3380380620017b383398101604081905262000047916200010d565b8181816001600160a01b03166080816001600160a01b0316815250506080516001600160a01b0316635aa6e6756040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ca91906200014c565b600080546001600160a01b0319166001600160a01b039283161790551660a0525062000173915050565b6001600160a01b03811681146200010a57600080fd5b50565b600080604083850312156200012157600080fd5b82516200012e81620000f4565b60208401519092506200014181620000f4565b809150509250929050565b6000602082840312156200015f57600080fd5b81516200016c81620000f4565b9392505050565b60805160a0516115d4620001df60003960008181610192015281816102930152818161066e0152818161071c0152818161093a015281816109e80152610aa201526000818161026a0152818161044a015281816105680152818161083c0152610c7d01526115d46000f3fe6080604052600436106100bc5760003560e01c806384acd1bb11610074578063dd5f8aad1161004e578063dd5f8aad146101f8578063e8dfd50814610214578063fbfa77cf1461025857600080fd5b806384acd1bb14610180578063a64fa6e3146101b4578063ae850d31146101d457600080fd5b8063538ee295116100a5578063538ee295146100f65780635aa6e675146101165780636c5af8c71461016d57600080fd5b806304fb0438146100c15780633593d993146100e3575b600080fd5b3480156100cd57600080fd5b506100e16100dc366004610f1b565b61028c565b005b6100e16100f1366004610f95565b610550565b34801561010257600080fd5b506100e1610111366004610fd4565b6107d0565b34801561012257600080fd5b506000546101439073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100e161017b366004610ff8565b610824565b34801561018c57600080fd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c057600080fd5b506100e16101cf366004611011565b610a9b565b3480156101e057600080fd5b506101ea60015481565b604051908152602001610164565b34801561020457600080fd5b5060405160058152602001610164565b34801561022057600080fd5b506000546102469074010000000000000000000000000000000000000000900460ff1681565b60405160ff9091168152602001610164565b34801561026457600080fd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c0fd8bde88886040518363ffffffff1660e01b81526004016102ec92919061107e565b600060405180830381865afa158015610309573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261033191908101906112f2565b92509250925081819061037a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103719190611476565b60405180910390fd5b5061038483610cf7565b6040830151610394906001611489565b63ffffffff166001819055506000808460e001518060200190518101906103bb91906114d4565b915091507f41e1bd8868090e46c482a7fbb97488f60e594d62bdce153a0798da6113a389008214610448576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f57523a20626164206d73672074797065000000000000000000000000000000006044820152606401610371565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335dd5e956040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d791906114f8565b73ffffffffffffffffffffffffffffffffffffffff1663f29874ac8289896040518463ffffffff1660e01b81526004016105139392919061152e565b600060405180830381600087803b15801561052d57600080fd5b505af1158015610541573d6000803e3d6000fd5b50505050505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f57523a206f6e6c79207661756c740000000000000000000000000000000000006044820152606401610371565b604080517f0ec4fbf776bb6953385447ec267acdb2866a2411ff552b4eb42d3e6f604190dc6020820152908101839052811515606082015260009060800160408051808303601f19018152908290527f4cf842b500000000000000000000000000000000000000000000000000000000825230600483015291506000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634cf842b590602401602060405180830381865afa1580156106ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ee9190611551565b6000546040517fb19a437e0000000000000000000000000000000000000000000000000000000081529192507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163b19a437e913491610786918691889174010000000000000000000000000000000000000000900460ff169060040161156c565b60206040518083038185885af11580156107a4573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906107c99190611551565b5050505050565b6107d8610e4f565b6000805460ff90921674010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff909216919091179055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146108c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f57523a206f6e6c79207661756c740000000000000000000000000000000000006044820152606401610371565b604080517fd46f53cc9a73b20946751f83c9ea3fa4a449cc9fd6bfb0130f5ae494e399da86602082015290810182905260009060600160408051808303601f19018152908290527f4cf842b500000000000000000000000000000000000000000000000000000000825230600483015291506000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634cf842b590602401602060405180830381865afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190611551565b6000546040517fb19a437e0000000000000000000000000000000000000000000000000000000081529192507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163b19a437e913491610a52918691889174010000000000000000000000000000000000000000900460ff169060040161156c565b60206040518083038185885af1158015610a70573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a959190611551565b50505050565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c0fd8bde86866040518363ffffffff1660e01b8152600401610afb92919061107e565b600060405180830381865afa158015610b18573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b4091908101906112f2565b925092509250818190610b80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103719190611476565b50610b8a83610cf7565b6040830151610b9a906001611489565b63ffffffff166001819055506000808460e00151806020019051810190610bc191906114d4565b915091507f73c7c6b329d87423fc69778cd50751b239ec3aa52085be0151d2116c5ef552b58214610c4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f57523a20626164206d73672074797065000000000000000000000000000000006044820152606401610371565b6040517f1b0f5fc2000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631b0f5fc290602401600060405180830381600087803b158015610cd657600080fd5b505af1158015610cea573d6000803e3d6000fd5b5050505050505050505050565b60808101513014610d64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f57523a2062616420656d697474657220616464726573730000000000000000006044820152606401610371565b606081015161ffff16600514610dd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f57523a2062616420656d697474657220636861696e00000000000000000000006044820152606401610371565b600154816040015163ffffffff161015610e4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f57523a206f6c64207472616e73616374696f6e000000000000000000000000006044820152606401610371565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ed0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4f6e6c7920476f7665726e616e63652e000000000000000000000000000000006044820152606401610371565b565b60008083601f840112610ee457600080fd5b50813567ffffffffffffffff811115610efc57600080fd5b602083019150836020828501011115610f1457600080fd5b9250929050565b60008060008060408587031215610f3157600080fd5b843567ffffffffffffffff80821115610f4957600080fd5b610f5588838901610ed2565b90965094506020870135915080821115610f6e57600080fd5b50610f7b87828801610ed2565b95989497509550505050565b8015158114610e4c57600080fd5b60008060408385031215610fa857600080fd5b823591506020830135610fba81610f87565b809150509250929050565b60ff81168114610e4c57600080fd5b600060208284031215610fe657600080fd5b8135610ff181610fc5565b9392505050565b60006020828403121561100a57600080fd5b5035919050565b6000806020838503121561102457600080fd5b823567ffffffffffffffff81111561103b57600080fd5b61104785828601610ed2565b90969095509350505050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b602081526000611092602083018486611053565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156110ec576110ec61109a565b60405290565b604051610160810167ffffffffffffffff811182821017156110ec576110ec61109a565b604051601f8201601f1916810167ffffffffffffffff8111828210171561113f5761113f61109a565b604052919050565b805161115281610fc5565b919050565b805163ffffffff8116811461115257600080fd5b805161ffff8116811461115257600080fd5b805167ffffffffffffffff8116811461115257600080fd5b60005b838110156111b0578181015183820152602001611198565b50506000910152565b600082601f8301126111ca57600080fd5b815167ffffffffffffffff8111156111e4576111e461109a565b6111f76020601f19601f84011601611116565b81815284602083860101111561120c57600080fd5b611092826020830160208701611195565b600082601f83011261122e57600080fd5b8151602067ffffffffffffffff82111561124a5761124a61109a565b611258818360051b01611116565b82815260079290921b8401810191818101908684111561127757600080fd5b8286015b848110156112dc57608081890312156112945760008081fd5b61129c6110c9565b8151815284820151858201526040808301516112b781610fc5565b908201526060828101516112ca81610fc5565b9082015283529183019160800161127b565b509695505050505050565b805161115281610f87565b60008060006060848603121561130757600080fd5b835167ffffffffffffffff8082111561131f57600080fd5b90850190610160828803121561133457600080fd5b61133c6110f2565b61134583611147565b815261135360208401611157565b602082015261136460408401611157565b60408201526113756060840161116b565b60608201526080830151608082015261139060a0840161117d565b60a08201526113a160c08401611147565b60c082015260e0830151828111156113b857600080fd5b6113c4898286016111b9565b60e0830152506101006113d8818501611157565b9082015261012083810151838111156113f057600080fd5b6113fc8a82870161121d565b91830191909152506101408381015190820152945061141d602087016112e7565b9350604086015191508082111561143357600080fd5b50611440868287016111b9565b9150509250925092565b60008151808452611462816020860160208601611195565b601f01601f19169290920160200192915050565b602081526000610ff1602083018461144a565b63ffffffff8181168382160190808211156114cd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5092915050565b600080604083850312156114e757600080fd5b505080516020909101519092909150565b60006020828403121561150a57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610ff157600080fd5b838152604060208201526000611548604083018486611053565b95945050505050565b60006020828403121561156357600080fd5b610ff18261117d565b63ffffffff8416815260606020820152600061158b606083018561144a565b905060ff8316604083015294935050505056fea26469706673582212208927963580cd3e977b0b07ae80e57df5af842c2ba0918613f3cd13b4d714c31264736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
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
    })[];
    static createInterface(): L1WormholeRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1WormholeRouter;
}
export {};
