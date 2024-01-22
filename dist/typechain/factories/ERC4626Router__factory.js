"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC4626Router__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "MaxAmountError",
        type: "error",
    },
    {
        inputs: [],
        name: "MaxSharesError",
        type: "error",
    },
    {
        inputs: [],
        name: "MinAmountError",
        type: "error",
    },
    {
        inputs: [],
        name: "MinSharesError",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minSharesOut",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [
            {
                internalType: "uint256",
                name: "sharesOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minSharesOut",
                type: "uint256",
            },
        ],
        name: "depositMax",
        outputs: [
            {
                internalType: "uint256",
                name: "sharesOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minSharesOut",
                type: "uint256",
            },
        ],
        name: "depositToVault",
        outputs: [
            {
                internalType: "uint256",
                name: "sharesOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "shares",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxAmountIn",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "shares",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
        ],
        name: "redeem",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
        ],
        name: "redeemMax",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "fromVault",
                type: "address",
            },
            {
                internalType: "contract IERC4626",
                name: "toVault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "shares",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minSharesOut",
                type: "uint256",
            },
        ],
        name: "redeemToDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "sharesOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxSharesOut",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "sharesOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC4626",
                name: "fromVault",
                type: "address",
            },
            {
                internalType: "contract IERC4626",
                name: "toVault",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxSharesIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minSharesOut",
                type: "uint256",
            },
        ],
        name: "withdrawToDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "sharesOut",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class ERC4626Router__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC4626Router__factory = ERC4626Router__factory;
ERC4626Router__factory.abi = _abi;
