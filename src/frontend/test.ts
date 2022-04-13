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

  // await alpAccount.setGasMode(true);
  // await alpAccount.approve("alpLarge", "100000000000");
  // await alpAccount.buyProduct("alpLarge", 10);

  let response;

  await alpAccount.setGasMode(true);
  const info = await alpAccount.getTokenInfo("usdc");
  console.log({ info });

  console.log("exiting");
};

main().catch((err) => console.log({ err }));
