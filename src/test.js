// @ts-check
import { ethers, providers } from "ethers";
import { Account } from "./Account.js";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";
import * as usdcJson from "./smart_contracts/usdc.json";
import * as vaultJson from "./smart_contracts/dummyvault.json";

const main = async () => {
  const alpsdk = new AlpineDeFiSDK();
  const contracts = alpsdk.getAllContracts();

  console.log("Alpine DeFi SDK");

  const email = "adib@multiplyr.ai";
  const alpAccount = new Account();
  await alpAccount.connect(email);

  // 0x3F91193d3080778fa66BC5cda19Be1f149049Ef9
  const addr = await alpAccount.getUserAddress();
  console.log({ addr });

  let balance = await alpAccount.getUserBalance(contracts.usdcContract);
  console.log({ getUserBalance: balance });

  let response = await alpAccount.approveTransfer(contracts.vaultContract, "5");
  console.log({ approveTransfer: response });

  response = await alpAccount.deposit(contracts.vaultContract, "5");
  console.log({ deposit: response });

  balance = await alpAccount.getUserBalance(contracts.vaultContract);
  console.log({ getUserBalance: balance });

  response = await alpAccount.withdraw(contracts.vaultContract, "5");
  console.log({ withdraw: response });

  balance = await alpAccount.getUserBalance(contracts.usdcContract);
  console.log({ getUserBalance: balance });

  // let address = "0x3F91193d3080778fa66BC5cda19Be1f149049Ef9";
  const txHistory = await alpAccount.getTransactionHistory();
  txHistory.forEach((tx) => {
    console.log(tx);
  });
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
