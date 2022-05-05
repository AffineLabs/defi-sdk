import { Account } from "./Account";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect(
    email,
    "metamask",
    process.env.MAGIC_API_KEY || "",
    process.env.POLYGONSCAN_API_KEY || ""
  );
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  const bal = await alpAccount.getTokenInfo("usdc");
  console.log({ bal });

  // await alpAccount.setGasMode(true);
  // await alpAccount.approve("alpSave", "1000000");
  // await alpAccount.setSimulationMode(true);
  // const receipt = await alpAccount.buyProduct("alpSave", 1);
  // console.log({ receipt });

  const history = await alpAccount.getTransactionHistory(1, 0);
  console.log({ history });

  console.log("exiting");
};

main().catch((err) => console.log({ err }));
