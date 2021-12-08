// @ts-check
import { ethers } from "ethers";
import * as usdcJson from "./smart_contracts/usdc.json";
import * as vaultJson from "./smart_contracts/dummyvault.json";
import * as typedefs from "./typedefs.js";

/**
 * @typedef {typedefs.AlpineContracts} AlpineContracts
 */

class AlpineDeFiSDK {
  /**
   * creates an instance of the `AlpineDeFiSDK` class
   */
  constructor() {}

  /**
   * get all supported contracts in the alpine protocol
   * @returns {AlpineContracts} an object with all alpine contracts. Currently has
   * `usdcContract` and `vaultContract`.
   */

  static getAllContracts() {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
    );
    const usdcContract = new ethers.Contract(
      usdcJson.address,
      usdcJson.abi,
      provider
    );
    const vaultContract = new ethers.Contract(
      vaultJson.address,
      vaultJson.abi,
      provider
    );
    return {
      usdc: usdcContract,
      alpSave: vaultContract,
      alpBal: vaultContract,
      alpAggr: vaultContract,
    };
  }
}

export { AlpineDeFiSDK };
