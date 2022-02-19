import axios from "axios";
import { ethers } from "ethers";

import { AlpineContracts } from "./types";

export class AlpineDeFiSDK {
  /**
   * creates an instance of the `AlpineDeFiSDK` class
   */
  constructor() {}

  /**
   * get all supported contracts in the alpine protocol
   * @param network blockchain network, default is kovan
   * @returns an object with all alpine contracts. Currently has
   * `usdc`, `alpSave`, `alpBal` and `alpAggr`.
   */

  static async getAllContracts(
    provider: ethers.providers.JsonRpcProvider
  ): Promise<AlpineContracts> {
    const s3Root = "https://sc-abis.s3.us-east-2.amazonaws.com/v0.0.5-book.1";
    const usdcABI = (await axios.get(`${s3Root}/abi/ERC20.json`)).data;
    const allData = (await axios.get(`${s3Root}/addressbook.json`)).data;

    const alpSave = allData["polygonMumbai Alpine Save"];
    const relayer = allData["polygonMumbai Relayer"];

    // Hardcoding USDC address on mumbai for now. TODO: add to addressbook
    const usdcAddr = "0x5fD6A096A23E95692E37Ec7583011863a63214AA";
    return {
      usdc: new ethers.Contract(usdcAddr, usdcABI, provider),
      alpSave: new ethers.Contract(alpSave.address, alpSave.abi, provider),
      relayer: new ethers.Contract(relayer.address, relayer.abi, provider),
    };
  }

  /**
   * get the current best estimate for gas price
   * @param network blockchain network, default is kovan
   * @returns the best estimate for gas price in eth
   */
  static async getGasPrice(
    provider: ethers.providers.JsonRpcProvider
  ): Promise<string> {
    const gas = await provider.getGasPrice(); // gas price in wei
    // return gas price in ether
    return ethers.utils.formatEther(gas);
  }

  /**
   * Get current usdc price of an alpine token. If there's 0 token in circulation
   * returns null.
   * @param contract an alpine contract
   * @returns current token price
   */
  static async getTokenPrice(
    contract: ethers.Contract
  ): Promise<String | null> {
    // total value in micro usdc locked in the contract
    const tvlUSDC = await contract.globalTVL();
    // number of circulating micro tokens
    const numTokens = await contract.totalSupply();
    if (numTokens.isZero()) {
      return null;
    } else {
      const price = tvlUSDC.div(numTokens);
      return price.toString();
    }
  }
}