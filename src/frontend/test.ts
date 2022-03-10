import { Account } from "./Account";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  const alpAccount = new Account();
  await alpAccount.connect(email, "metamask");

  console.log("before get address");
  const addr = await alpAccount.getUserAddress();
  console.log({ getUserAddress: addr });

  // let balance = await alpAccount.getUserBalance(contracts.usdc);
  // console.log({ usdc: balance });

  // balance = await alpAccount.getUserBalance(contracts.alpSave);
  // console.log({ alpSave: balance });

  let response;

  console.log("BEFORE APPROVE");

  response = await alpAccount.approve("alpLarge", "1000000000000000000");
  console.log("approved");

  // response = await alpAccount.getTransactionHistory(0, 10);
  // console.log({ response });

  // console.log("gas...", await alpAccount.getGasPrice());
  console.log("exiting");
};

main();
// .catch((err) => console.log({ err }));
