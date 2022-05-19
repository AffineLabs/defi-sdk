import { Account, ReadAccount } from "./Account";

const main = async () => {
  const email: string = process.env.EMAIL || "";
  const wallet_address: string = process.env.WALLET_ADDRESS || "";

  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect(email, "metamask");
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setGasMode(true);
  await alpAccount.approve("alpSave", "1000000");
  await alpAccount.setSimulationMode(true);
  const receipt = await alpAccount.buyProduct("alpSave", 1);
  console.log({ receipt });

  const readAcc = new ReadAccount(wallet_address);
  await readAcc.init();
  const gas = await readAcc.getGasPrice();
  const balance = await readAcc.getMaticBalance();
  const infoAlpSave = await readAcc.getTokenInfo("alpSave");
  const infoAlpLarge = await readAcc.getTokenInfo("alpLarge");
  const infoUsdc = await readAcc.getTokenInfo("usdc");
  console.log({ gas, balance, infoAlpSave, infoAlpLarge, infoUsdc });

  console.log("exiting");
};

main();
