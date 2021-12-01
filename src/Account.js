import { Magic, RPCError } from "magic-sdk";
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";
import * as usdcJson from "./smart_contracts/usdc.json"
import * as vaultJson from "./smart_contracts/dummyvault.json"

export class Account {
    constructor() {
        /**
         * Creates an alpine account object
         */
        // the api key is public
        this.magic = new Magic("pk_test_4BC74945EEEA1A8A", { network: 'kovan' });
        this.alpsdk = new AlpineDeFiSDK();
        this.connected = false;
    }

    async connect(email) {
        /**
         * connect the user account to magic's sdk. In particular,
         * login with with magic, get provider, signer and set up
         * the smart contracts.
         * @param {String} email user's email address
         */
        if (!(await this.isLoggedIn())) {
            await this.magic.auth.loginWithMagicLink({ email: email });
        }
        // case: the user is logged in
        this.provider = new ethers.providers.Web3Provider(this.magic.rpcProvider);
        this.signer = this.provider.getSigner();
        this.userAddress = await this.signer.getAddress();
        this.usdcContract = new ethers.Contract(
            usdcJson.address, usdcJson.abi, this.signer);

        this.connected = true;
    }

    async isLoggedIn() {
        const status = await this.magic.user.isLoggedIn();
        return status
    }

    async verifyInput(contract) {
        if (!(await this.isLoggedIn())) {
            throw new Error("Aborted. The user is not logged in.");
        }
        if (!this.connected) {
            throw new Error("Aborted. Account is not connected to magic. Call connect() first.");
        }
        if (contract !== undefined && !this._isTrustedContract(contract)) {
            throw new Error("Aborted. Unknown contract: " + contract.address);
        }
    }

    async getUserAddress() {
        /**
         * get user's public address
         * @returns {string} user's public address
         */
        await this.verifyInput();
        return this.userAddress;
    }

    _isTrustedContract(contract) {
        /**
         * check that the given contract is a trusted contract.
         * @param {ethers.Contract} contract the contract to test
         * @returns {boolean} whether the contract can be trusted
         */
        return (contract.address.toLowerCase() === usdcJson.address.toLowerCase())
            || (contract.address.toLowerCase() === vaultJson.address.toLowerCase());
    }

    _toMicroUnit(amount) {
        /**
         * converts a unit amount to equivalent micro unit amount
         * @param {string} amount an amount in unit eg. usdc.
         * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
         */
        return ethers.utils.parseUnits(amount, 6);
    }

    _toUnit(amount) {
        /**
         * converts a micro unit amount to equivalent unit amount
         * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
         * @returns {string} equivalent amount in unit.
         */
        return String(ethers.utils.formatUnits(amount, 6));
    }

    async _deposit(contract, amount) {
        /**
         * call deposit with amount on a smart contract for the current user.
         * @param {ethers.Contract} contract an ethers smart contract object
         * @param {ethers.BigNumber} amount the amount to deposit
         * @returns {blockchainResponse} returns the status of the blockchain 
         *     call with raw blockchain response. For failed calls, returns details.
         */
        const contractWithSigner = contract.connect(this.signer);
        const tx = await contractWithSigner.deposit(this.userAddress, amount);
        const receipt = await tx.wait();
        console.log(tx);
        console.log(receipt);
        return this.alpsdk.parseTransaction(tx, receipt);
    }

    async _withdraw(contract, amount) {
        /**
         * call withdraw with amount on a smart contract for the current user.
         * @param {ethers.Contract} contract an ethers smart contract object
         * @param {ethers.BigNumber} amount the amount to withdraw
         * @returns {Object} returns the status of the blockchain 
         *     call with raw blockchain response. For failed calls, returns details.
         */

        const contractWithSigner = contract.connect(this.signer);
        const tx = await contractWithSigner.withdraw(this.userAddress, amount);
        const receipt = await tx.wait();
        return this.alpsdk.parseTransaction(tx, receipt);
    }

    async _approve(contractAddress, amount) {
        /**
         * call approve with amount on the usdc contract for the given contract address.
         * @param {string} contractAddress the receipient contract address
         * @param {ethers.BigNumber} amount the amount to approve
         * @returns {Object} returns the status of the blockchain 
         *     call with raw blockchain response. For failed calls, returns details.
         */

        const tx = await this.usdcContract.approve(contractAddress, amount);
        const receipt = await tx.wait();
        return this.alpsdk.parseTransaction(tx, receipt);
    }

    async getUserBalance(contract) {
        /**
         * gets user's current balance at the vault.
         * @param {ethers.Contract} contract a known smart contract.
         * @returns {Object} user balance as both usdc and token denominated values.
         */
        await this.verifyInput(contract);
        // the returned amounts are in micro units 
        // need to divide them by 10^6 to convert to usdc and alpTokens
        const balance = await contract.balanceOf(this.userAddress);

        // contract returns only usdc balance
        if (contract.address === usdcJson.address) {
            return { balanceUSDC: this._toUnit(balance) };
        }
        else {
            const [balanceMUSDC, balanceMToken] = balance;
            const balanceToken = this._toUnit(balanceMToken);
            return {
                balanceUSDC: balanceToken, // the price of each alpToken is 1 for now
                balanceToken: balanceToken
            };
        }
    }

    async approveTransfer(contract, amountUSDC) {
        /**
         * approve to transfer amountUSDC from user's wallet to contract
         * @param {ethers.Contract} contract the contract to transfer to
         * @param {String} amountUSDC amount in usdc to approve
         * @returns {boolean} status of the approval
         */
        await this.verifyInput(contract);
        // convert to micro usdc
        const amount = this._toMicroUnit(amountUSDC);
        const allowance = await this.usdcContract.allowance(
            this.userAddress, contract.address);
        // allowance < requested amount for approval
        if (allowance.lt(amount)) {
            const response = await this._approve(contract.address, amount)
            return response;
        } else return { status: 1, details: "Transfer has been approved already." }
    }

    async deposit(contract, amountUSDC) {
        /**
         * deposit usdc to a vault
         * @param {ethers.Contract} contract the vault to deposit usdc to
         * @param {String} amountUSDC amount in usdc
         * @returns {Object} the confirmation from the blockchain
         */
        await this.verifyInput(contract);
        const amount = this._toMicroUnit(amountUSDC);
        const balance = await this.usdcContract.balanceOf(this.userAddress);
        if (balance.lt(amount)) {
            return { status: 0, details: "Insuffient balance at user wallet." }
        }
        // check if user has sufficient allowance
        const allowance = await this.usdcContract.allowance(
            this.userAddress, contract.address);
        if (allowance.lt(amount)) {
            return {
                status: 0, details: "Insufficient allowance. Allowance: " +
                    this._toUnit(allowance) + ", Required: " + amountUSDC
            }
        }
        const deposit = await this._deposit(contract, amount);
        return deposit;
    }
    async withdraw(contract, amountUSDC) {
        /**
         * withdraw usdc from a vault
         * @param {ethers.Contract} contract the vault to withdraw usdc from
         * @param {String} amountUSDC amount in usdc
         * @returns {Object} the confirmation from the blockchain
         */
        await this.verifyInput(contract);
        const amount = this._toMicroUnit(amountUSDC);
        const balance = await this.getUserBalance(contract);
        const balanceMUSDC = this._toMicroUnit(balance.balanceUSDC);
        if (balanceMUSDC.lt(amount)) {
            return {
                status: 0,
                details: "Insuffient balance at user's vault account." +
                    " Balance: " + balance.balanceUSDC + "," +
                    " Requested to withdraw: " + this._toUnit(amount)
            }
        }
        const withdraw = await this._withdraw(contract, amount);
        return withdraw;
    }

}
