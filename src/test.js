// @ts-check
import { ethers, providers } from "ethers";
import { Account } from "./Account.js";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";
import * as usdcJson from "./smart_contracts/usdc.json";
import * as vaultJson from "./smart_contracts/dummyvault.json";

const main = async () => {
  const contracts = AlpineDeFiSDK.getAllContracts();

  console.log("Alpine DeFi SDK");

  const email = "adib@multiplyr.ai";
  const alpAccount = new Account();
  await alpAccount.connect(email);

  // 0x3F91193d3080778fa66BC5cda19Be1f149049Ef9
  const addr = await alpAccount.getUserAddress();
  console.log({ addr });

  let balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ getUserBalance: balance });

  let response = await alpAccount.approve(contracts.alpSave.address, "5");
  console.log({ approve: response });

  response = await alpAccount.buyToken(contracts.alpSave, "5");
  console.log({ buyToken: response });

  balance = await alpAccount.getUserBalance(contracts.alpSave);
  console.log({ getUserBalance: balance });

  response = await alpAccount.sellToken(contracts.alpSave, "5");
  console.log({ sellToken: response });

  balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ getUserBalance: balance });

  // const withdraw = await alpAccount.withdraw(
  //   "0x2458B4DDCA1a688E3E19dE91E0d0068fDd278EC3",
  //   "5"
  // );
  // console.log({ withdraw: withdraw });

  // let address = "0x3F91193d3080778fa66BC5cda19Be1f149049Ef9";
  const txHistory = await alpAccount.getTransactionHistory();
  txHistory.forEach((tx) => {
    console.log(tx);
  });
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
