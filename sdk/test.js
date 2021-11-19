import { ethers } from "ethers";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";
import { Magic } from "magic-sdk";
import * as vaultAbi from "./abi/vault.json";

const magic = new Magic("pk_test_93B08330447C2AAB", { network: "kovan" });

const main = async () => {
  const seed =
    "midnight ozone usual pioneer physical reunion shuffle bachelor window menu taxi census";
  const provider = new ethers.providers.StaticJsonRpcProvider(
    "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
  );

  const vaultAddr = "0x0355b41edb7a29169dfee31c60597835867ba4a7";
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
