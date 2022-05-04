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

  await alpAccount.connect(
    email,
    "magic",
    process.env.MAGIC_API_KEY || "",
    process.env.POLYGONSCAN_API_KEY || ""
  );
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  // await alpAccount.setGasMode(true);
  // await alpAccount.setSimulationMode(true);
  // const receipt = await alpAccount.buyProduct("alpSave", 1);
  // console.log({ receipt });

  const history = await alpAccount.getTransactionHistory(1, 0);
  console.log({ history });

  console.log("exiting");
};

main().catch((err) => console.log({ err }));
