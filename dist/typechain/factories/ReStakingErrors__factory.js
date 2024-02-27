"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReStakingErrors__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "AlreadyApprovedToken",
        type: "error",
    },
    {
        inputs: [],
        name: "CannotDepositForZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "DepositAmountCannotBeZero",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidWithdrawalAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "NonZeroTokenBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "NotApprovedToken",
        type: "error",
    },
    {
        inputs: [],
        name: "TokenNotAllowedForStaking",
        type: "error",
    },
    {
        inputs: [],
        name: "WithdrawAmountCannotBeZero",
        type: "error",
    },
];
class ReStakingErrors__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReStakingErrors__factory = ReStakingErrors__factory;
ReStakingErrors__factory.abi = _abi;
