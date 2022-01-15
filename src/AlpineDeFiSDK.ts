import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import usdcJson from "./smart_contracts/usdc.json";
import alpSave from "./smart_contracts/alpSave.json";
import alpBal from "./smart_contracts/alpBal.json";
import alpAggr from "./smart_contracts/alpAggr.json";
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

  static getAllContracts(network: string = "kovan"): AlpineContracts {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      `https://${network}.infura.io/v3/6a4677f9b8014a239fb68742f752fb62`
    );
    return {
      usdc: new ethers.Contract(usdcJson.address, usdcJson.abi, provider),
      alpSave: new ethers.Contract(alpSave.address, alpSave.abi, provider),
      alpBal: new ethers.Contract(alpBal.address, alpBal.abi, provider),
      alpAggr: new ethers.Contract(alpAggr.address, alpAggr.abi, provider),
    };
  }

  /**
   * get the current best estimate for gas price
   * @param network blockchain network, default is kovan
   * @returns the best estimate for gas price in eth
   */
  static async getGasPrice(network: string = "kovan"): Promise<string> {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      `https://${network}.infura.io/v3/6a4677f9b8014a239fb68742f752fb62`
    );
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
  static async getTokenPrice(contract: Contract): Promise<String | null> {
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
