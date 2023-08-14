import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPoolAddressesProvider, IPoolAddressesProviderInterface } from "../IPoolAddressesProvider";
export declare class IPoolAddressesProvider__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "ACLAdminUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "ACLManagerUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "AddressSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "proxyAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldImplementationAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newImplementationAddress";
            readonly type: "address";
        }];
        readonly name: "AddressSetAsProxy";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "oldMarketId";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "newMarketId";
            readonly type: "string";
        }];
        readonly name: "MarketIdSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "PoolConfiguratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "PoolDataProviderUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "PoolUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "PriceOracleSentinelUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "PriceOracleUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "proxyAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementationAddress";
            readonly type: "address";
        }];
        readonly name: "ProxyCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "getACLAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getACLManager";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "getAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMarketId";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPoolConfigurator";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPoolDataProvider";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPriceOracle";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPriceOracleSentinel";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAclAdmin";
            readonly type: "address";
        }];
        readonly name: "setACLAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAclManager";
            readonly type: "address";
        }];
        readonly name: "setACLManager";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "setAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "newImplementationAddress";
            readonly type: "address";
        }];
        readonly name: "setAddressAsProxy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "newMarketId";
            readonly type: "string";
        }];
        readonly name: "setMarketId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newPoolConfiguratorImpl";
            readonly type: "address";
        }];
        readonly name: "setPoolConfiguratorImpl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newDataProvider";
            readonly type: "address";
        }];
        readonly name: "setPoolDataProvider";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newPoolImpl";
            readonly type: "address";
        }];
        readonly name: "setPoolImpl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newPriceOracle";
            readonly type: "address";
        }];
        readonly name: "setPriceOracle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newPriceOracleSentinel";
            readonly type: "address";
        }];
        readonly name: "setPriceOracleSentinel";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IPoolAddressesProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPoolAddressesProvider;
}
