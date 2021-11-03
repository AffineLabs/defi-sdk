import { Magic } from "magic-sdk";
import { Biconomy } from "@biconomy/mexa";
import { ethers } from "ethers";

export class AlpineDeFiSDK {
  constructor(web3Provider) {
    // // wait for metamask to ask for user permission
    // await window.ethereum.enable()

    // biconomy integration
    // // the api key is not secret and meant to be used in the frontend
    // this.biconomy = new Biconomy(
    //     new ethers.providers.Web3Provider(web3Provider),
    //     {
    //         apiKey: "CTGkNtqm8.bce042dc-0ed2-4845-869a-4d178f2465b0",
    //         debug: true,
    //     }
    // );

    this.provider = new ethers.providers.StaticJsonRpcProvider(
      "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
    );
    // this.signer = this.provider.getSigner();
    // this.usdc = new ethers.Contract(,, signer)
  }

  async getUserCurrentBalance(userAddress, vaultAddress, vaultAbi) {
    const vaultContract = new ethers.Contract(
      vaultAddress,
      vaultAbi,
      this.provider
    );
    const [amountUSDC, amountTokens] = await vaultContract.balanceOf(
      userAddress
    );
    // TODO: need to write tests
    return {
      amountUSDC,
      amountTokens,
    };
  }

  buyVaultToken(userAddress, vaultAddress, vaultAbi, amountUSDC) {
    const vaultContract = new ethers.Contract(
      vaultAddress,
      vaultAbi,
      this.signer
    );
    vaultContract.deposit(userAddress, amountUSDC);
    // TODO: need to write tests
    return {
      success: True,
      transactionId: 1,
      transactionType: "buy",
      amountUnits: 1234,
      amountUSDC: amountUSDC,
      fees: 10.0,
      timestamp: 1626228689,
    };
  }
  sellVaultToken(userAddress, vaultAddress, vaultAbi, amountUSDC) {
    const vaultContract = new ethers.Contract(
      vaultAddress,
      vaultAbi,
      this.signer
    );
    vaultContract.withdraw(userAddress, amountUSDC);
    // TODO: need to write tests
    return {
      status: "success",
      transactionId: 1,
      transactionType: "sell",
      unitPrice: 30000,
      amountUnits: 1234,
      amountUSD: amountUSDC,
      fees: 10.0,
      timestamp: 1626228689,
    };
  }

  approveTransaction(userAddress, usdcVaultAddress, usdcVaultAbi) {
    return {
      status: "success",
      transactionId: 1,
      timestamp: 1626228689,
    };
  }
}
