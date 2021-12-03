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
  constructor() {
    this.provider = new ethers.providers.StaticJsonRpcProvider(
      "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
    );
    this.usdcContract = new ethers.Contract(
      usdcJson.address,
      usdcJson.abi,
      this.provider
    );
    this.vaultContract = new ethers.Contract(
      vaultJson.address,
      vaultJson.abi,
      this.provider
    );
  }

  /**
   * get all supported contracts in the alpine protocol
   * @returns {AlpineContracts} an object with all alpine contracts. Currently has
   * `usdcContract` and `vaultContract`.
   */

  getAllContracts() {
    return {
      usdcContract: this.usdcContract,
      vaultContract: this.vaultContract,
    };
  }
}

export { AlpineDeFiSDK };
