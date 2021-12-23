// @ts-check
import { ethers } from "ethers";
import * as usdcJson from "./smart_contracts/usdc.json";
import * as alpSave from "./smart_contracts/alpSave.json";
import * as alpBal from "./smart_contracts/alpBal.json";
import * as alpAggr from "./smart_contracts/alpAggr.json";
import * as typedefs from "./typedefs.js";

/**
 * @typedef {typedefs.AlpineContracts} AlpineContracts
 */

class AlpineDeFiSDK {
  /**
   * creates an instance of the `AlpineDeFiSDK` class
   */
  constructor () { }

  /**
   * get all supported contracts in the alpine protocol
   * @param {String} network blockchain network, default is kovan
   * @returns {AlpineContracts} an object with all alpine contracts. Currently has
   * `usdc`, `alpSave`, `alpBal` and `alpAggr`.
   */

  static getAllContracts(network = "kovan") {
    const provider = ethers.providers.getDefaultProvider(network);
    return {
      usdc: new ethers.Contract(usdcJson.address, usdcJson.abi, provider),
      alpSave: new ethers.Contract(alpSave.address, alpSave.abi, provider),
      alpBal: new ethers.Contract(alpBal.address, alpBal.abi, provider),
      alpAggr: new ethers.Contract(alpAggr.address, alpAggr.abi, provider),
    };
  }

  /**
   * get the current best estimate for gas price
   * @param {String} network blockchain network, default is kovan
   * @returns {Promise<String>} the best estimate for gas price in eth
   */
  static async getGasPrice(network = "kovan") {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      `https://${network}.infura.io/v3/6a4677f9b8014a239fb68742f752fb62`
    );
    const gas = await provider.getGasPrice(); // gas price in wei
    // return gas price in ether
    return ethers.utils.formatEther(gas);
  }

  /**
   * get current usdc price of an alpine token 
   * @param {ethers.Contract} contract an alpine contract
   * @param {String} network blockchain network, default is kovan
   * @returns {Promise<ethers.BigNumber>} current token price
   */
  static async getTokenPrice(contract, network = "kovan") {
    // total value in micro usdc locked in the contract
    const tvlUSDC = await contract.globalTVL();
    // number of circulating micro tokens
    const numTokens = await contract.totalSupply();
    if (numTokens.gt(ethers.BigNumber.from(0))) {
      return tvlUSDC.div(numTokens);
    } else {
      return ethers.BigNumber.from(0);
    }
  }
}

export { AlpineDeFiSDK };
