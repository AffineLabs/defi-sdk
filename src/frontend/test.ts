import { Account, ReadAccount } from "./Account";

const main = async () => {
  const email = process.env.EMAIL || "";
  const alpAccount = new Account();
  console.time("entire-connect");

  await alpAccount.connect({ email, walletType: "metamask" });
  console.log("wallet: ", await alpAccount.getUserAddress());
  console.timeEnd("entire-connect");

  await alpAccount.setSimulationMode(false);
  // await approve("router", "1000000");
  // //This approval allows the alpLarge vault to spend USDC
  // await blockchainCall(CONTRACTS.router, "approve", [CONTRACTS.usdc.address, CONTRACTS.alpLarge.address, MAX_INT]);
  // //This approval allows the alpSave vault to spend USDC
  // await blockchainCall(CONTRACTS.router, "approve", [CONTRACTS.usdc.address, CONTRACTS.alpSave.address, MAX_INT]);
  // //This approval lets the router burn alpLarge shares
  // await blockchainCall(CONTRACTS.alpLarge, "approve", [CONTRACTS.router.address, MAX_INT]);
  // //This approval lets the router burn alpSave shares
  // await blockchainCall(CONTRACTS.alpSave, "approve", [CONTRACTS.router.address, MAX_INT]);
  // await mintUSDC(alpAccount.userAddress || "", 10000);
  // let allocation:productAllocation = { alpLarge: 50, alpSave: 50 };
  // await alpAccount.portfolioPurchase(allocation, 1000);
  // await alpAccount.portfolioSell(allocation, 100);
  const receipt = await alpAccount.buyProduct("alpLarge", 1);
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

const handleButtonClick = () => {
  document.addEventListener(
    "click",
    async function (event) {
      if (!event || !event.target) return;

      const element = event.target as HTMLInputElement;

      // If the clicked element doesn't have the right selector, bail
      if (!element.matches("#switchToPolygon")) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      console.log(event.target);

      const account = new Account();
      try {
        await account.switchMetamaskToAllowedNetwork();
      } catch (error) {
        console.log("ERROR ===>", error);
      }
      await account.connect({ walletType: "metamask" });
      console.log("Metamask connected!!");
      const isConnected = await account.isConnectedToAllowedNetwork();
      console.log({ isConnected });
    },
    false,
  );
};

main();
handleButtonClick();
