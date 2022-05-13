import { Account, ReadAccount } from "./Account";

const main = async () => {
  const email = "tosin@multiplyr.ai";
  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect(email, "metamask");
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setGasMode(true);
  // await alpAccount.approve("alpSave", "1000000");
  await alpAccount.setSimulationMode(true);
  const receipt = await alpAccount.sellProduct("alpLarge", 1);
  console.log({ receipt });

  const readAcc = new ReadAccount("0x69b3ce79B05E57Fc31156fEa323Bd96E6304852D");
  await readAcc.init();
  const gas = await readAcc.getGasPrice();
  const balance = await readAcc.getMaticBalance();
  const info = await readAcc.getTokenInfo("usdc");
  console.log({ gas, balance, info });

  console.log("exiting");
};

main();
