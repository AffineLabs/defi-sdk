"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeltaNeutralLp__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract AffineVault",
                name: "_vault",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "contract ILendingPool",
                        name: "pool",
                        type: "address",
                    },
                    {
                        internalType: "contract ERC20",
                        name: "borrow",
                        type: "address",
                    },
                    {
                        internalType: "contract AggregatorV3Interface",
                        name: "priceFeed",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "assetToDepositRatioBps",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "collateralToBorrowRatioBps",
                        type: "uint256",
                    },
                ],
                internalType: "struct LendingInfo",
                name: "lendingInfo",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "contract IUniswapV2Router02",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "contract IMasterChef",
                        name: "masterChef",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "masterChefPid",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "useMasterChefV2",
                        type: "bool",
                    },
                    {
                        internalType: "contract ERC20",
                        name: "sushiToken",
                        type: "address",
                    },
                    {
                        internalType: "contract IUniswapV3Pool",
                        name: "pool",
                        type: "address",
                    },
                ],
                internalType: "struct LpInfo",
                name: "lpInfo",
                type: "tuple",
            },
            {
                internalType: "address[]",
                name: "strategists",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "position",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetsFromSushi",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowsFromSushi",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetsFromRewards",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256[2]",
                name: "borrowPrices",
                type: "uint256[2]",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "assetSold",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetsOrBorrowsSold",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetsOrBorrowsReceived",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetCollateral",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowDebtPaid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "PositionEnd",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "position",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetCollateral",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrows",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256[2]",
                name: "borrowPrices",
                type: "uint256[2]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetsToSushi",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowsToSushi",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "PositionStart",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_BPS",
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
        name: "STRATEGIST_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "V3ROUTER",
        outputs: [
            {
                internalType: "contract ISwapRouter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
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
        name: "abPair",
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
        name: "assetToDepositRatioBps",
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
        inputs: [],
        name: "borrow",
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
        name: "borrowFeed",
        outputs: [
            {
                internalType: "contract AggregatorV3Interface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "canStartNewPos",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "slippageBps",
                type: "uint256",
            },
        ],
        name: "claimAndSellSushi",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "collateralToBorrowRatioBps",
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
        name: "currentPosition",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "debtToken",
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
        name: "decimalAdjust",
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
        name: "decimalAdjustSign",
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
                name: "slippageToleranceBps",
                type: "uint256",
            },
        ],
        name: "endPosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
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
        name: "masterChef",
        outputs: [
            {
                internalType: "contract IMasterChef",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterChefPid",
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
        name: "poolFee",
        outputs: [
            {
                internalType: "uint24",
                name: "",
                type: "uint24",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "router",
        outputs: [
            {
                internalType: "contract IUniswapV2Router02",
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
                internalType: "uint256",
                name: "assets",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "slippageToleranceBps",
                type: "uint256",
            },
        ],
        name: "startPosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
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
    {
        inputs: [],
        name: "sushiToken",
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
        name: "useMasterChefV2",
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
    {
        inputs: [],
        name: "vault",
        outputs: [
            {
                internalType: "contract AffineVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class DeltaNeutralLp__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DeltaNeutralLp__factory = DeltaNeutralLp__factory;
DeltaNeutralLp__factory.abi = _abi;
