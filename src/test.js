// @ts-check
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

  let balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ usdc: balance });

  let response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  console.log({ approveEstimate: response });

  response = await alpAccount.approve(contracts.alpSave.address, "10");
  console.log({ alpSave: response });

  response = await alpAccount.buyToken(contracts.alpSave, "6");
  console.log({ alpSave: response });

  balance = await alpAccount.getUserBalance(contracts.alpSave);
  console.log({ alpSave: balance });


  response = await alpAccount.approve(contracts.alpBal.address, "10");
  console.log({ alpBal: response });

  response = await alpAccount.buyToken(contracts.alpBal, "6");
  console.log({ alpBal: response });

  balance = await alpAccount.getUserBalance(contracts.alpBal);
  console.log({ alpBal: balance });


  response = await alpAccount.approve(contracts.alpAggr.address, "10");
  console.log({ alpAggr: response });

  response = await alpAccount.buyToken(contracts.alpAggr, "6");
  console.log({ alpAggr: response });

  balance = await alpAccount.getUserBalance(contracts.alpAggr);
  console.log({ alpAggr: balance });

  response = await alpAccount.sellToken(contracts.alpAggr, "30");
  console.log({ AlpAggr: response });

  balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ usdc: balance });

  console.log("exiting");

  // let response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  // console.log({ approveEstimate: response });
  // console.log("done");
};

main()
  .then(res => console.log(res))
  .catch(err => console.log({ err }));
