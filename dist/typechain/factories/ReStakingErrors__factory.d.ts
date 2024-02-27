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
        readonly name: "InvalidWithdrawalAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NonZeroTokenBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotApprovedToken";
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
