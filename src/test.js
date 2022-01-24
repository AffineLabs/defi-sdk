// import { Magic } from "magic-sdk"; // v7
// import { ethers } from "ethers";
// const main = async () => {
//   const email = "adib@multiplyr.ai";
//   const customNodeOptions = {
//     rpcUrl: 'https://rpc-mumbai.matic.today',
//     chainId: 80001,
//   };

//   // Setting network to Matic
//   const magicMatic = new Magic("pk_live_1EF4B8FEB56F7AA4", { network: customNodeOptions });
//   magicMatic.network = 'matic';
//   await magicMatic.auth.loginWithMagicLink({ email });
//   const provider = new ethers.providers.Web3Provider(magicMatic.rpcProvider);
//   const signer = provider.getSigner();
//   userAddress = await signer.getAddress();

//   console.log(userAddress);
//   console.log("exiting");

// };

// main()
//   .then(res => console.log(res))
//   .catch(err => console.log({ err }));


// @ts-check
import { Account } from "./Account.js";

import { Magic } from "magic-sdk";
import { ethers } from "ethers";
// aave's testnet usdc smart contract
import * as usdcJson from "./smart_contracts/usdc.json";

const main = async () => {
  const email = "adib@multiplyr.ai";
  console.log("Alpine DeFi SDK");
  const alpAccount = new Account("mumbai");
  await alpAccount.connect(email);

  const contracts = alpAccount.getAllContracts();

  // 0xEd370B1ad6edEc14E043Beb9D03A8329a399Dc2e
  const addr = await alpAccount.getUserAddress();
  console.log({ getUserAddress: addr });

  let balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ usdc: balance });

  balance = await alpAccount.getUserBalance(contracts.alpSave);
  console.log({ alpSave: balance });

  let response;

  // response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  // console.log({ approveEstimate: response });

  // response = await alpAccount.approve(contracts.alpSave.address, "5");
  // console.log({ alpSave: response });

  // response = await alpAccount.buyToken(contracts.alpSave, "5");
  // console.log({ alpSave: response });

  // balance = await alpAccount.getUserBalance(contracts.alpSave);
  // console.log({ alpSave: balance });

  // response = await alpAccount.sellToken(contracts.alpSave, "5");
  // console.log({ alpSave: response });

  // balance = await alpAccount.getUserBalance(contracts.usdc);
  // console.log({ usdc: balance });

  response = await alpAccount.getTransactionHistory(0, 10);
  console.log({ response });


  // response = await alpAccount.approve(contracts.alpBal.address, "6");
  // console.log({ alpBal: response });

  // response = await alpAccount.buyToken(contracts.alpBal, "6");
  // console.log({ alpBal: response });

  // response = await alpAccount.sellToken(contracts.alpBal, "6");
  // console.log({ alpBal: response });

  // balance = await alpAccount.getUserBalance(contracts.alpBal);
  // console.log({ alpBal: balance });


  // response = await alpAccount.approve(contracts.alpAggr.address, "6");
  // console.log({ alpAggr: response });

  // response = await alpAccount.buyToken(contracts.alpAggr, "6");
  // console.log({ alpAggr: response });

  // balance = await alpAccount.getUserBalance(contracts.alpAggr);
  // console.log({ alpAggr: balance });

  // response = await alpAccount.sellToken(contracts.alpAggr, "6");
  // console.log({ AlpAggr: response });

  // balance = await alpAccount.getUserBalance(contracts.usdc);
  // console.log({ usdc: balance });

  console.log("exiting");

  // let response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  // console.log({ approveEstimate: response });
  // console.log("done");
};

main();
  // .then(res => console.log(res))
  // .catch(err => console.log({ err }));
