import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ReStakingErrors, ReStakingErrorsInterface } from "../ReStakingErrors";
export declare class ReStakingErrors__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyApprovedToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotDepositForZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DepositAmountCannotBeZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsDelegatorWithdrawableAssets";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsDepositLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsMaxDelegatorLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsMintLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsRedeemLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsWithdrawLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExistingEscrowDebt";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InactiveDelegator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientLiquidAssets";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidEscrowVault";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidWithdrawalAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NonZeroEmptyDelegatorTVL";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotApprovedToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ProfitUnlocking";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RequireHarvest";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenNotAllowedForStaking";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WithdrawAmountCannotBeZero";
        readonly type: "error";
    }];
    static createInterface(): ReStakingErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReStakingErrors;
}
