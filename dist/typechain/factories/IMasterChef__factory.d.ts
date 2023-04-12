import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMasterChef, IMasterChefInterface } from "../IMasterChef";
export declare class IMasterChef__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "harvest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_user";
            readonly type: "address";
        }];
        readonly name: "pendingSushi";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pending";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }];
        readonly name: "poolInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "lpToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "allocPoint";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastRewardBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accSushiPerShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IMasterChef.PoolInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalAllocPoint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }];
        readonly name: "updatePool";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "allocPoint";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastRewardTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accSushiPerShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IMasterChef.PoolInfoV2";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "userInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rewardDebt";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IMasterChef.UserInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "withdrawAndHarvest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMasterChefInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMasterChef;
}
