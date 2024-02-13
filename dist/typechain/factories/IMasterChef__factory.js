/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "harvest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "pendingSushi",
        outputs: [
            {
                internalType: "uint256",
                name: "pending",
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
                name: "pid",
                type: "uint256",
            },
        ],
        name: "poolInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "contract IERC20",
                        name: "lpToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "allocPoint",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lastRewardBlock",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "accSushiPerShare",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMasterChef.PoolInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolLength",
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
        name: "totalAllocPoint",
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
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "updatePool",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "allocPoint",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lastRewardTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "accSushiPerShare",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMasterChef.PoolInfoV2",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "userInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "rewardDebt",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMasterChef.UserInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "withdrawAndHarvest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class IMasterChef__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
IMasterChef__factory.abi = _abi;
