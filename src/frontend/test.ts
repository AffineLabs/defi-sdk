import { Account } from "./Account";
import { Magic } from "magic-sdk";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  const alpAccount = new Account();
  // const customNodeOptions = {
  //   rpcUrl: `https://rpc-mumbai.maticvigil.com`,
  //   chainId: 80001,
  // };
  // // the magic api key is public
  // const magic = new Magic("pk_live_1EF4B8FEB56F7AA4", {
  //   network: customNodeOptions,
  // });

  // await magic.user.logout();
  console.time("entire-connect");
  await alpAccount.connect(email, "metamask");
  console.timeEnd("entire-connect");

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
