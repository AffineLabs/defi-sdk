/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "contract AffineVault",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "contract ILendingPool",
                name: "_lendingPool",
                type: "address",
            },
            {
                internalType: "contract ERC20",
                name: "_borrow",
                type: "address",
            },
            {
                internalType: "contract AggregatorV3Interface",
                name: "_borrowFeed",
                type: "address",
            },
            {
                internalType: "contract ISwapRouter",
                name: "_router",
                type: "address",
            },
            {
                internalType: "contract INonfungiblePositionManager",
                name: "_lpManager",
                type: "address",
            },
            {
                internalType: "contract IUniswapV3Pool",
                name: "_pool",
                type: "address",
            },
            {
                internalType: "contract IUniPositionValue",
                name: "_positionValue",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "strategists",
                type: "address[]",
            },
            {
                internalType: "uint256",
                name: "_assetToDepositRatioBps",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_collateralToBorrowRatioBps",
                type: "uint256",
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
                name: "assetsFromUni",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowsFromUni",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetFees",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowFees",
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
                internalType: "int24",
                name: "tickLow",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickHigh",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetsToUni",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowsToUni",
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
                name: "slippageBps",
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
        name: "lpId",
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
        name: "lpLiquidity",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lpManager",
        outputs: [
            {
                internalType: "contract INonfungiblePositionManager",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pool",
        outputs: [
            {
                internalType: "contract IUniswapV3Pool",
                name: "",
                type: "address",
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
        inputs: [],
        name: "positionFees",
        outputs: [
            {
                internalType: "uint256",
                name: "assets",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "borrows",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "positionValue",
        outputs: [
            {
                internalType: "contract IUniPositionValue",
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
                internalType: "contract ISwapRouter",
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
                internalType: "int24",
                name: "tickLow",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickHigh",
                type: "int24",
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
        name: "valueOfLpPosition",
        outputs: [
            {
                internalType: "uint256",
                name: "assetsLp",
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
                internalType: "contract AffineVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
export class DeltaNeutralLpV3__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
DeltaNeutralLpV3__factory.abi = _abi;
