import { ethers, providers } from "ethers";
import { Magic } from "magic-sdk";
import browserEnv from "@ikscodes/browser-env";
import { Account } from "./Account.js";

const main = async () => {
  browserEnv();
  // const seed = process.env.MV0_SEED;
  // const provider = new ethers.providers.StaticJsonRpcProvider(
  //   "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
  // );

  const vaultAbi = [{ "inputs": [{ "internalType": "address", "name": "alpUsdcAddress_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "alpUsdcAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "usdc", "type": "uint256" }, { "internalType": "uint256", "name": "alpine", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amountUsdc", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdcAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amountAlpUsdc", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
  const vaultAddr = "0x0355b41edb7a29169dfee31c60597835867ba4a7"
  // const alpAccount = new Account(provider, seed);
  // let balance = await alpAccount.getVaultBalance(vaultAddr, vaultAbi);
  // console.log({ balance });
  // balance = await alpAccount.approveTransaction(vaultAddr, "5");
  // let response = await alpAccount.buyToken(vaultAddr, vaultAbi, "5");
  // console.log({ response });
  // response = await alpAccount.sellToken(vaultAddr, vaultAbi, "2");
  // console.log({ response });


  const magic = new Magic(process.env.MAGIC_API_KEY, { network: 'kovan' });
  // magic.preload();
  await magic.auth.loginWithMagicLink({ email: "adib@multiplyr.ai" });
  console.log(magic.user.isLoggedIn());
  // const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
  // const signer = provider.getSigner();
  // const metadata = await magic.user.getMetadata();
  // console.log(signer.address);
  // const { email, publicAddress } = metadata;

};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
