// @ts-check
import { Account } from "./Account.js";
import { AlpineDeFiSDK } from "./AlpineDeFiSDK.js";

import { Magic } from "magic-sdk";
import { ethers } from "ethers";
// aave's testnet usdc smart contract
import * as usdcJson from "./smart_contracts/usdc.json";

const main = async () => {
  // const magic = new Magic("pk_live_1EF4B8FEB56F7AA4", { network: 'kovan' });
  const email = "adib@multiplyr.ai";
  // await magic.auth.loginWithMagicLink({ email });
  // // @ts-ignore
  // const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
  // const signer = provider.getSigner();
  // // const usdcContract = new ethers.Contract(usdcJson.address, usdcJson.abi, signer);
  // // const amount = ethers.utils.parseUnits("5", 6); // usdc 5
  // // const mycontractAddr = "0x27C6274cd1A3FAbe09d2011AA6AC1c70675726fA";
  // // let response = await usdcContract.approve(mycontractAddr, amount);
  // let response = await signer.sendTransaction({
  //   to: "MY METAMASK ADDRESS",
  //   value: ethers.utils.parseEther("0.1")
  // });
  // console.log({ response });

  const contracts = AlpineDeFiSDK.getAllContracts();

  console.log("Alpine DeFi SDK");
  const alpAccount = new Account();
  await alpAccount.connect(email);

  // 0xEd370B1ad6edEc14E043Beb9D03A8329a399Dc2e
  const addr = await alpAccount.getUserAddress();
  console.log({ getUserAddress: addr });

  let balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ usdc: balance });

  let response;

  // let response = await alpAccount.approve(contracts.alpSave.address, "5", true);
  // console.log({ approveEstimate: response });

  // response = await alpAccount.approve(contracts.alpSave.address, "10");
  // console.log({ alpSave: response });

  // response = await alpAccount.buyToken(contracts.alpSave, "6");
  // console.log({ alpSave: response });

  // balance = await alpAccount.getUserBalance(contracts.alpSave);
  // console.log({ alpSave: balance });


  // response = await alpAccount.approve(contracts.alpBal.address, "6");
  // console.log({ alpBal: response });

  // response = await alpAccount.buyToken(contracts.alpBal, "6");
  // console.log({ alpBal: response });

  // response = await alpAccount.sellToken(contracts.alpBal, "6");
  // console.log({ alpBal: response });

  // balance = await alpAccount.getUserBalance(contracts.alpBal);
  // console.log({ alpBal: balance });


  response = await alpAccount.approve(contracts.alpAggr.address, "6");
  console.log({ alpAggr: response });

  response = await alpAccount.buyToken(contracts.alpAggr, "6");
  console.log({ alpAggr: response });

  balance = await alpAccount.getUserBalance(contracts.alpAggr);
  console.log({ alpAggr: balance });

  response = await alpAccount.sellToken(contracts.alpAggr, "6");
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
