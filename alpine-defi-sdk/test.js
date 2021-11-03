import { ethers } from "ethers";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";

const main = async () => {
  // run
  // await window.ethereum.enable()
  // biconomy integration
  // the api key is not secret and meant to be used in the frontend
  // const biconomy = new Biconomy(
  //     new ethers.providers.Web3Provider(window.ethereum),
  //     {
  //         apiKey: "CTGkNtqm8.bce042dc-0ed2-4845-869a-4d178f2465b0",
  //         debug: true,
  //     }
  // );
  const provider = new ethers.providers.StaticJsonRpcProvider(
    "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
  );
  const alpSDK = new AlpineDeFiSDK(provider);
  const balance = await alpSDK.getUserCurrentBalance(
    "0x69b3ce79B05E57Fc31156fEa323Bd96E6304852D",
    "0x6076f3011c987A19a04e2B6a37A96Aed1ee01492",
    [
      {
        inputs: [
          {
            internalType: "address",
            name: "alpUsdcAddress_",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "alpUsdcAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "usdc",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "alpine",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountUsdc",
            type: "uint256",
          },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "usdcAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountAlpUsdc",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ]
  );
  console.log({ balance });
  // log
  // catch errors
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
