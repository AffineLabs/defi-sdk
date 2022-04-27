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
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setGasMode(true);
  await alpAccount.setSimulationMode(true);
  const dryRunReceipt = await alpAccount.buyProduct("alpLarge", 1);
  console.log({ dryRunReceipt });

  // console.time("check-login");
  // await alpAccount.magic?.user.isLoggedIn();
  // console.timeEnd("check-login");

  console.time("check-id-token");
  const res = await alpAccount.magic?.user.getIdToken();
  console.timeEnd("check-id-token");
  console.log({ res });

  // await alpAccount.setGasMode(true);
  // await alpAccount.approve("alpSave", "1000000000000");
  // await alpAccount.buyProduct("alpSave", 10);

  let response;

  const info = await alpAccount.getTokenInfo("usdc");
  console.log({ info });

  console.log("exiting");
};

main().catch((err) => console.log({ err }));
