// @ts-check
import { ethers, providers } from "ethers";
import { Account } from "./Account.js";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";

const main = async () => {
  const contracts = AlpineDeFiSDK.getAllContracts();

  console.log("Alpine DeFi SDK");

  const email = "adib@multiplyr.ai";
  const alpAccount = new Account();
  await alpAccount.connect(email);

  // 0x3F91193d3080778fa66BC5cda19Be1f149049Ef9
  const addr = await alpAccount.getUserAddress();
  console.log({ getUserAddress: addr });

  let balance = await alpAccount.getUserBalance(contracts.alpSave);
  console.log({ balance });

  let response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  console.log({ approveEstimate: response });

  response = await alpAccount.approve(contracts.alpBal.address, "10");
  console.log({ approve: response });

  response = await alpAccount.buyToken(contracts.alpBal, "6");
  console.log({ buyToken: response });

  balance = await alpAccount.getUserBalance(contracts.alpBal);
  console.log({ getUserBalance: balance });

  response = await alpAccount.sellToken(contracts.alpBal, "4");
  console.log({ sellToken: response });

  balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ getUserBalance: balance });

  console.log("exiting");

  // let response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  // console.log({ approveEstimate: response });
  // console.log("done");
};

main()
  .then(res => console.log(res))
  .catch(err => console.log({ err }));
