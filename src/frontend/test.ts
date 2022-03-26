import { Account } from "./Account";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  const alpAccount = new Account();
  await alpAccount.connect(email, "metamask");

  const addr = await alpAccount.getUserAddress();
  console.log({ getUserAddress: addr });
  console.log("matic bal: ", await alpAccount.getMaticBalance());

  let response;

  // await alpAccount.setGasMode(false);
  // await alpAccount.transfer("0x8f954E7D7ec3A31D9568316fb0F472B03fc2a7d5", "5");

  await alpAccount.setGasMode(true);
  const info = await alpAccount.getTokenInfo("alpSave");
  console.log({ info });
  // await alpAccount.mintUSDCTokens(addr, 1000);
  // await alpAccount.approve("alpSave", "100000000");

  // await alpAccount.setGasMode(false);
  // await alpAccount.buyProduct("alpSave", 10);

  // await alpAccount.setGasMode(false);
  // await alpAccount.sellProduct("alpSave", 10);

  // console.log("BEFORE APPROVE");
  // response = await alpAccount.approve("alpLarge", "1000000000000000000");
  // console.log("approved");

  // response = await alpAccount.getTransactionHistory(0, 10);
  // console.log({ response });

  // console.log("gas...", await alpAccount.getGasPrice());
  console.log("exiting");
};

main().catch((err) => console.log({ err }));
