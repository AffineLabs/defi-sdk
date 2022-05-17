import { Account } from "./Account";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect(email, "metamask");
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  const bal = await alpAccount.getTokenInfo("usdc");
  console.log({ bal });

  // await alpAccount.setGasMode(true);
  // await alpAccount.approve("alpSave", "1000000");
  // await alpAccount.setSimulationMode(true);
  // const receipt = await alpAccount.buyProduct("alpSave", 1);
  // console.log({ receipt });
  console.log("exiting");
};

main().catch((err) => console.log({ err }));
