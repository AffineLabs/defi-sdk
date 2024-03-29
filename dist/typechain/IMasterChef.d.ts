import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IMasterChef {
    type PoolInfoStruct = {
        lpToken: PromiseOrValue<string>;
        allocPoint: PromiseOrValue<BigNumberish>;
        lastRewardBlock: PromiseOrValue<BigNumberish>;
        accSushiPerShare: PromiseOrValue<BigNumberish>;
    };
    type PoolInfoStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accSushiPerShare: BigNumber;
    };
    type PoolInfoV2Struct = {
        allocPoint: PromiseOrValue<BigNumberish>;
        lastRewardTime: PromiseOrValue<BigNumberish>;
        accSushiPerShare: PromiseOrValue<BigNumberish>;
    };
    type PoolInfoV2StructOutput = [BigNumber, BigNumber, BigNumber] & {
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accSushiPerShare: BigNumber;
    };
    type UserInfoStruct = {
        amount: PromiseOrValue<BigNumberish>;
        rewardDebt: PromiseOrValue<BigNumberish>;
    };
    type UserInfoStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
    };
}
export interface IMasterChefInterface extends utils.Interface {
    functions: {
        "deposit(uint256,uint256,address)": FunctionFragment;
        "deposit(uint256,uint256)": FunctionFragment;
        "harvest(uint256,address)": FunctionFragment;
        "pendingSushi(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "totalAllocPoint()": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(uint256,uint256)": FunctionFragment;
        "withdrawAndHarvest(uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit(uint256,uint256,address)" | "deposit(uint256,uint256)" | "harvest" | "pendingSushi" | "poolInfo" | "poolLength" | "totalAllocPoint" | "updatePool" | "userInfo" | "withdraw" | "withdrawAndHarvest"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit(uint256,uint256,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "deposit(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "harvest", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pendingSushi", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePool", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawAndHarvest", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "deposit(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingSushi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndHarvest", data: BytesLike): Result;
    events: {};
}
export interface IMasterChef extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMasterChefInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        "deposit(uint256,uint256,address)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deposit(uint256,uint256)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvest(pid: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pendingSushi(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            pending: BigNumber;
        }>;
        poolInfo(pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IMasterChef.PoolInfoStructOutput]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userInfo(pid: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IMasterChef.UserInfoStructOutput]>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAndHarvest(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    "deposit(uint256,uint256,address)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deposit(uint256,uint256)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvest(pid: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pendingSushi(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    poolInfo(pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IMasterChef.PoolInfoStructOutput>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
    updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userInfo(pid: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IMasterChef.UserInfoStructOutput>;
    withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAndHarvest(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "deposit(uint256,uint256,address)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "deposit(uint256,uint256)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        harvest(pid: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        pendingSushi(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IMasterChef.PoolInfoStructOutput>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IMasterChef.PoolInfoV2StructOutput>;
        userInfo(pid: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IMasterChef.UserInfoStructOutput>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawAndHarvest(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        "deposit(uint256,uint256,address)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deposit(uint256,uint256)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvest(pid: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pendingSushi(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userInfo(pid: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAndHarvest(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "deposit(uint256,uint256,address)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deposit(uint256,uint256)"(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvest(pid: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pendingSushi(_pid: PromiseOrValue<BigNumberish>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userInfo(pid: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAndHarvest(_pid: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
