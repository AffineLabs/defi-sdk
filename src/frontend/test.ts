import { Account, ReadAccount } from "./Account";

const main = async () => {
  const email = process.env.EMAIL || "";

  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect(email, "metamask");
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setGasMode(true);
  const simRes = await alpAccount.approve("alpSave", "1000000").simulate();
  console.log({ simRes });
  // const realApproval = await alpAccount.approve("alpSave", "1000000").call();
  // console.log({ realApproval });
  const receipt = await alpAccount.sellProduct("alpSave", 1).simulate();
  console.log({ receipt });

  const readAcc = new ReadAccount(alpAccount.userAddress || "");
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
