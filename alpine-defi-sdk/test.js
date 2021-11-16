import { ethers } from "ethers";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";

const main = async () => {
  const seed = process.env.MV0_SEED;
  const provider = new ethers.providers.StaticJsonRpcProvider(
    "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
  );

  const vaultAbi = [{ "inputs": [{ "internalType": "address", "name": "alpUsdcAddress_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "alpUsdcAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "usdc", "type": "uint256" }, { "internalType": "uint256", "name": "alpine", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amountUsdc", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdcAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amountAlpUsdc", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
  const vaultAddr = "0x0355b41edb7a29169dfee31c60597835867ba4a7"
  // const vaultAddr = "0x6076f3011c987A19a04e2B6a37A96Aed1ee01492"
  const alpSDK = new AlpineDeFiSDK(provider, seed);
  let balance = await alpSDK.getUserVaultBalance(vaultAddr, vaultAbi);
  console.log({ balance });
  // balance = await alpSDK.approveTransaction(vaultAddr, "5");
  // let response = await alpSDK.buyToken(vaultAddr, vaultAbi, "5");
  // console.log({ response });
  // response = await alpSDK.sellToken(vaultAddr, vaultAbi, "2");
  // console.log({ response });

};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
