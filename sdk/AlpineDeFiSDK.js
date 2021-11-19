import { Magic } from "magic-sdk";
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";

import * as usdcAbi from "./abi/usdc.json";

export class AlpineDeFiSDK {
  constructor(web3Provider, seed) {
    this.provider = web3Provider;
    this.signer = ethers.Wallet.fromMnemonic(seed).connect(web3Provider);
    this.userAddress = this.signer.address;
    // circle usdc smart contract
    const usdcAddress = "0xe22da380ee6B445bb8273C81944ADEB6E8450422";
    this.usdcContract = new ethers.Contract(usdcAddress, usdcAbi, this.signer);

    // biconomy integration
    // the api key is not secret and meant to be used in the frontend
    // this.provider = new Biconomy(
    //   new ethers.providers.Web3Provider(web3Provider),
    //   {
    //     apiKey: "CTGkNtqm8.bce042dc-0ed2-4845-869a-4d178f2465b0",
    //     debug: true,
    //   }
    // );
  }

  getUserAddress() {
    /**
     * Return user public address
     */
    return this.userAddress;
  }

  toMicroUSDC(usdc) {
    /**
     * usdc: string representation of usdc
     */
    return ethers.utils.parseUnits(usdc, 6);
  }

  toUSDC(microUSDC) {
    /**
     * microUSDC: ethers bignumber representation of micro usdc
     */
    return String(ethers.utils.formatUnits(microUSDC, 6));
  }

  async _balanceOf(contract) {
    try {
      const balance = await contract.balanceOf(this.userAddress);
      return { status: 1, response: balance };
    } catch (e) {
      console.log(e);
      return {
        status: 0,
        details: "failed to call balanceOf on contract " + contract.address,
      };
    }
  }

  async _deposit(contract, amount) {
    try {
      const tx = await contract.deposit(this.userAddress, amount);
      const receipt = await tx.wait();
      return { status: 1, response: receipt };
    } catch (e) {
      console.log(e);
      return {
        status: 0,
        details: "failed to call deposit on contract " + contract.address,
      };
    }
  }

  async _withdraw(contract, amount) {
    try {
      const tx = await contract.withdraw(this.userAddress, amount);
      const receipt = await tx.wait();
      return { status: 1, response: receipt };
    } catch (e) {
      console.log(e);
      return {
        status: 0,
        details: "failed to call withdraw on contract " + contract.address,
      };
    }
  }

  async _approve(vaultAddress, amount) {
    try {
      const tx = await this.usdcContract.approve(vaultAddress, amount);
      const receipt = await tx.wait();
      return { status: 1, response: receipt };
    } catch (e) {
      console.log(e);
      return {
        status: 0,
        details:
          "failed to call approve on contract " + this.usdcContract.address,
      };
    }
  }

  async _allowance(vaultAddress) {
    try {
      const amount = await this.usdcContract.allowance(
        this.userAddress,
        vaultAddress
      );
      return { status: 1, response: amount };
    } catch (e) {
      console.log(e);
      return {
        status: 0,
        details:
          "failed to call allowance on contract " + this.usdcContract.address,
      };
    }
  }

  async getUserVaultBalance(vaultAddress, vaultAbi) {
    /**
     * gets user current balance at the vault
     * params:  user address, vault address, vault abi
     *
     * returns: user balance as both usdc and token
     *          denominated values. if the token price is
     *          is 1 usdc, then both values are the same.
     */
    const vaultContract = new ethers.Contract(
      vaultAddress,
      vaultAbi,
      this.signer
    );
    const balance = await this._balanceOf(vaultContract);
    if (balance.status === 1) {
      const [balanceMUSDC, balanceMTokens] = balance.response;
      // the returned amounts are in micro units
      // need to divide them by 10^6 to convert to usdc and alpTokens
      const balanceTokens = ethers.utils.formatUnits(balanceMTokens, 6);
      return {
        status: 1,
        balanceUSDC: String(balanceTokens), // the price of each alpToken is 1 for now
        balanceTokens: String(balanceTokens),
      };
    }
    return {
      status: 0,
      details: "failed to call balanceOf() on smart contract.",
    };
  }

  async getUserUSDCBalance() {
    /**
     * Get USDC balance in the user wallet
     */
    const balance = await this._balanceOf(this.usdcContract);
    if (balance.status === 1) {
      // the returned amount is in micro usdc
      // need to divide by 10^6 to convert to usdc
      return { status: 1, balanceUSDC: this.toUSDC(balance.response) };
    }
    return {
      status: 0,
      details: "failed to call balanceOf() on smart contract.",
    };
  }

  async approveTransaction(vaultAddress, amountUSDC) {
    /**
     * approve to spend amountUSDC from user's wallet
     */
    // convert to micro usdc
    const amount = this.toMicroUSDC(amountUSDC);
    // get current wallet balance in micro usdc
    const balance = await this._balanceOf(this.usdcContract);
    if (balance.status === 0) {
      return balance;
    }
    // wallet balance < amount requested to approve
    if (balance.response.lt(amount)) {
      return {
        status: 0,
        details:
          "Insufficient balance at user wallet. Balance: " +
          this.toUSDC(balance.response) +
          ", Requested to spend: " +
          this.toUSDC(amount),
      };
    }

    const allowance = await this._allowance(vaultAddress);
    if (allowance.status === 0) {
      return allowance;
    }
    // allowed amount < requested amount for approval
    if (allowance.response.lt(amount)) {
      const response = await this._approve(vaultAddress, amount);
      return {
        status: response.status,
        details:
          "allowance in user wallet was insufficient. called approve() on smart contract.",
      };
    }
    return { status: 1, details: "allowance in user wallet was sufficient" };
  }

  async buyToken(vaultAddress, vaultAbi, amountUSDC) {
    const vaultContract = new ethers.Contract(
      vaultAddress,
      vaultAbi,
      this.signer
    );
    const amount = this.toMicroUSDC(amountUSDC);
    const balance = await this._balanceOf(this.usdcContract);
    if (balance.status === 0) {
      return balance;
    }
    if (balance.response.lt(amount)) {
      return { status: 0, details: "Insuffient balance at user wallet." };
    }
    const deposit = await this._deposit(vaultContract, amount);
    return deposit;
  }
  async sellToken(vaultAddress, vaultAbi, amountUSDC) {
    const vaultContract = new ethers.Contract(
      vaultAddress,
      vaultAbi,
      this.signer
    );
    const amount = this.toMicroUSDC(amountUSDC);
    const balance = await this.getUserVaultBalance(vaultAddress, vaultAbi);
    if (balance.status === 0) {
      return balance;
    }
    const balanceMUSDC = this.toMicroUSDC(balance.balanceUSDC);
    if (balanceMUSDC.lt(amount)) {
      return {
        status: 0,
        details:
          "Insuffient balance at user's vault account." +
          " Balance: " +
          balance.balanceUSDC +
          "," +
          " Requested to withdraw: " +
          this.toUSDC(amount),
      };
    }
    const withdraw = await this._withdraw(vaultContract, amount);
    return withdraw;
  }
}
