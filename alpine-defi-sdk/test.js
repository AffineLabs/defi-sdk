import { ethers, providers } from "ethers";
import { Account } from "./Account.js";

const main = async () => {
  // const seed = process.env.MV0_SEED;
  // const provider = new ethers.providers.StaticJsonRpcProvider(
  //   "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
  // );

  // const email = "adib@multiplyr.ai";
  // const alpAccount = new Account();
  // await alpAccount.connect(email);
  // const contracts = await alpAccount.getAllContracts();
  // // 0x3F91193d3080778fa66BC5cda19Be1f149049Ef9
  // let addr = await alpAccount.getUserAddress();
  // console.log({ addr: addr });

  // let balance = await alpAccount.getUserBalance(contracts.usdcContract);
  // console.log({ balance });
  // let response = await alpAccount.approveTransfer(contracts.vaultContract, "5");
  // console.log({ response });
  // // response = await alpAccount.deposit(contracts.vaultContract, "5");
  // console.log({ response });
  // balance = await alpAccount.getUserBalance(contracts.vaultContract);
  // console.log({ balance });

  // // response = await alpAccount.withdraw(contracts.vaultContract, "60");
  // console.log({ response });

  // // response = await alpAccount.withdraw(contracts.vaultContract, "6");
  // console.log({ response });
  // let etherscanProvider = new ethers.providers.EtherscanProvider(network = 'kovan');
  // let address = "0x3F91193d3080778fa66BC5cda19Be1f149049Ef9";
  // etherscanProvider.getHistory(address).then((history) => {
  //   history.forEach((tx) => {
  //     console.log(tx);
  //   })
  // });
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log({ err }));
