import { Account } from "./Account";

import { Magic } from "magic-sdk";
import { ethers } from "ethers";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  console.log("Alpine DeFi SDK");
  const alpAccount = new Account("mumbai");
  await alpAccount.connect(email, "metamask");

  const contracts = await alpAccount.getAllContracts();

  const addr = await alpAccount.getUserAddress();
  console.log({ getUserAddress: addr });

  let balance = await alpAccount.getUserBalance(contracts.usdc);
  console.log({ usdc: balance });

  balance = await alpAccount.getUserBalance(contracts.alpSave);
  console.log({ alpSave: balance });

  let response;

  // response = await alpAccount.approve(
  //   contracts.alpSave.address,
  //   "1000000000000000000"
  // );
  // console.log("approved");

  // await alpAccount.mintUSDCTokens(
  //   "0x69b3ce79B05E57Fc31156fEa323Bd96E6304852D",
  //   "55",
  //   false
  // );

  // response = await alpAccount.transfer(
  //   "0x69b3ce79B05E57Fc31156fEa323Bd96E6304852D",
  //   "1"
  // );
  // console.log({ transfer: response });

  // response = await alpAccount.buyToken(contracts.alpSave, "5", false);
  // console.log({ alpSave: response });

  // response = await alpAccount.sellToken(contracts.alpSave, "5", true);
  // console.log({ alpSave: response });

  response = await alpAccount.getTransactionHistory(0, 10);
  console.log({ response });

  console.log("gas...", await alpAccount.getGasPrice());
  console.log("exiting");
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
