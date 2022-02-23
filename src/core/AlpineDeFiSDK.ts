import axios from "axios";
import { ethers } from "ethers";

import {
  AlpineContracts,
  TxnReceipt,
  PolygonScanAPIResponse,
  UserBalance,
} from "./types";
import {
  TransactionResponse,
  TransactionReceipt,
} from "@ethersproject/abstract-provider";
import { JsonRpcProvider } from "@ethersproject/providers";
/**
 * Fet all supported contracts in the alpine protocol
 * @returns an object with all alpine contracts. Currently has
 * `usdc`, `alpSave`, `alpBal` and `alpAggr`.
 */

export async function getAllContracts(
  provider: ethers.providers.JsonRpcProvider
): Promise<AlpineContracts> {
  const s3Root = "https://sc-abis.s3.us-east-2.amazonaws.com/v0.0.5-book.1";
  const usdcABI = (await axios.get(`${s3Root}/abi/ERC20.json`)).data;
  const allData = (await axios.get(`${s3Root}/addressbook.json`)).data;

  const alpSave = allData["polygonMumbai Alpine Save"];
  const relayer = allData["polygonMumbai Relayer"];

  // Hardcoding USDC address on mumbai for now. TODO: add to addressbook
  const usdcAddr = "0x5fD6A096A23E95692E37Ec7583011863a63214AA";
  return {
    usdc: new ethers.Contract(usdcAddr, usdcABI, provider),
    alpSave: new ethers.Contract(alpSave.address, alpSave.abi, provider),
    relayer: new ethers.Contract(relayer.address, relayer.abi, provider),
  };
}

/**
 * get the current best estimate for gas price
 * @returns the best estimate for gas price in eth
 */
export async function getGasPrice(
  provider: ethers.providers.JsonRpcProvider
): Promise<string> {
  const gas = await provider.getGasPrice(); // gas price in wei
  // return gas price in ether
  return ethers.utils.formatEther(gas);
}

/**
 * Get current usdc price of an alpine token. If there's 0 token in circulation
 * returns null.
 * @param contract an alpine contract
 * @returns current token price
 */
export async function getTokenPrice(
  contract: ethers.Contract
): Promise<String | null> {
  // total value in micro usdc locked in the contract
  const tvlUSDC = await contract.globalTVL();
  // number of circulating micro tokens
  const numTokens = await contract.totalSupply();
  if (numTokens.isZero()) {
    return null;
  } else {
    const price = tvlUSDC.div(numTokens);
    return price.toString();
  }
}

/**
 * get transaction history of the user with alpine smart contracts
 * @param {string} userAddress The user's address
 * @param {string} polygonscanApiKey
 * @param {Number} page the page number
 * @param {Number} offset number of transanctions in the page
 * @param {String} sort `asc` or `desc`; sorts the transactions in ascending or decensing order
 *                      default is `desc`.
 * @returns An array of user transaction receipts
 **/
export async function getTransactionHistory(
  provider: ethers.providers.JsonRpcProvider,
  userAddress: string,
  polygonscanApiKey: string,
  page: number,
  offset: number,
  sort: string = "desc"
): Promise<Array<TxnReceipt>> {
  const polygonscanUrl =
    "https://api-testnet.polygonscan.com/api?module=account&action=txlist" +
    `&address=${userAddress}` +
    "&startblock=0&endblock=99999999" +
    `&page=${page}&offset=${offset}&sort=${sort}` +
    `&apikey=${polygonscanApiKey}`;

  let data = [] as Array<PolygonScanAPIResponse>;
  data = (await axios.get(polygonscanUrl)).data.result;
  const parsedTxHistory: Array<TxnReceipt> = [];

  for (const tx of data) {
    const ticker = await _getContractTicker(provider, tx.to);
    // filter by outgoing transactions that were sent to alpine contracts
    if (ticker === "unknown") continue;

    // fake TransactionResponse constructed from polygonscan data
    const fakeTx = {
      to: tx.to,
      data: tx.input,
      timestamp: Number(tx.timeStamp),
      hash: tx.hash,
      gasPrice: ethers.BigNumber.from(tx.gasPrice),
    } as TransactionResponse;

    const fakeReceipt = {
      gasUsed: tx.gasUsed,
      blockNumber: Number(tx.blockNumber),
    } as unknown as TransactionReceipt;

    const parsedTx = await _parseTransaction(provider, fakeTx, fakeReceipt);
    parsedTxHistory.push(parsedTx);
  }

  return parsedTxHistory;
}

/**
 * Find ticker for alpine and usdc contract addresses
 * @param {String} address
 * @returns contract ticker for alpine and usdc
 * contracts, and unknown otherwise
 */
async function _getContractTicker(
  provider: ethers.providers.JsonRpcProvider,
  address: string,
  contracts?: AlpineContracts
): Promise<string> {
  if (contracts === undefined) {
    contracts = await getAllContracts(provider);
  }
  switch (address.toLowerCase()) {
    case contracts.alpSave.address.toLowerCase():
      return "alpSave";
    case contracts.usdc.address.toLowerCase():
      return "usdc";
    default:
      return "unknown";
  }
}

/**
 * parse blockchain response for a transaction
 * @param {TransactionResponse} tx transaction response
 * @param {TransactionReceipt} receipt transaction block
 * parse a transaction if its sent to an alpine contract
 * @returns the parsed receipt of the transaction
 */
async function _parseTransaction(
  provider: ethers.providers.JsonRpcProvider,
  tx: TransactionResponse,
  receipt: TransactionReceipt,
  contracts?: AlpineContracts
): Promise<TxnReceipt> {
  if (contracts === undefined) contracts = await getAllContracts(provider);
  const ticker = await _getContractTicker(provider, tx.to || "", contracts);
  const contract = contracts[ticker];
  const { data, value } = tx;
  const txDescription = contract.interface.parseTransaction({ data, value });
  const { name } = txDescription;

  // Deposit uses "amountToken", withdraw uses "shares", while transfer/approve use "amount"
  let amount =
    txDescription.args.amountToken ||
    txDescription.args.amount ||
    txDescription.args.shares;
  amount = ethers.BigNumber.from(amount);
  // for withdraw method of the smart contract, amount is in tokens, so
  // convert that to usdc
  if (name === "withdraw") {
    const tokenPrice = ethers.BigNumber.from(await getTokenPrice(contract));
    amount = amount.mul(tokenPrice);
  }
  // convert smart contract method names to app's method names
  const methodDict: { [key: string]: string | undefined } = {
    deposit: "buy",
    withdraw: "sell",
    transfer: "transfer",
    approve: "approve",
  };

  const txnCost = ethers.BigNumber.from(tx.gasPrice || 0).mul(receipt.gasUsed);
  return {
    method: methodDict[txDescription.name] || "",
    amount: String(ethers.utils.formatUnits(amount, 6)),
    timestamp: tx.timestamp || 0,
    gasPrice: String(ethers.utils.formatEther(tx.gasPrice || 0)),
    txnCost: txnCost.toString(),
    contractAddress: tx.to || "",
    txnHash: tx.hash,
    blockNumber: receipt.blockNumber,
    status: true,
    ticker: await _getContractTicker(provider, tx.to || ""),
  };
}

/**
 * gets user's current balance at the vault.
 * @param {ethers.Contract} contract a known smart contract.
 * @returns {Promise<UserBalance>} user balance as both usdc
 * and token denominated values.
 */
export async function getUserBalance(
  userAddress: string,
  contract: ethers.Contract
): Promise<UserBalance> {
  // the returned amounts are in micro units
  // need to divide them by 10^6 to convert to usdc and alpTokens
  const balance = await contract.balanceOf(userAddress);
  if (
    (await _getContractTicker(
      contract.provider as ethers.providers.JsonRpcProvider,
      contract.address
    )) === "usdc"
  ) {
    return {
      balanceUSDC: _removeDecimals(balance),
    };
  } else {
    let tokenPrice = await getTokenPrice(contract);
    // no token in circulation, so assume the price is 0
    if (tokenPrice == null) {
      tokenPrice = "0";
    }
    return {
      balanceUSDC: _removeDecimals(
        balance.mul(ethers.BigNumber.from(tokenPrice))
      ),
    };
  }
}

/**
 * Converts a unit amount to equivalent micro unit amount
 * @param {string} amount an amount in unit eg. usdc.
 * @returns {ethers.BigNumber} equivalent amount in micro unit eg. micro usdc.
 */
function _addDecimals(amount: string): ethers.BigNumber {
  return ethers.utils.parseUnits(amount, 6);
}

/**
 * converts a micro unit amount to equivalent unit amount
 * @param {ethers.BigNumber} amount an amount in micro unit eg. micro usdc.
 * @returns {string} equivalent amount in unit.
 */
function _removeDecimals(amount: ethers.BigNumber): string {
  return ethers.utils.formatUnits(amount, 6);
}

/**
 * call a smart contract method with arguments
 * @param {ethers.Contract} contract smart contract
 * @param {String} method the method name
 * @param {Array} args the arguments to the method
 * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
 * @returns {Promise<String>} a transaction receipt from the blockchain
 */
async function _blockchainCall(
  contract: ethers.Contract,
  signer: ethers.Signer,
  method: string,
  args: Array<any>,
  biconomy?: ethers.providers.Web3Provider
) {
  contract = contract.connect(signer);

  if (biconomy) {
    const contracts = await getAllContracts(
      contract.provider as JsonRpcProvider
    );
    contract = contracts.relayer.connect(signer);
    console.log({ contract });

    console.log({ biconomy });

    console.log({ method }, args);
    const { data } = await contract.populateTransaction[method](...args);

    console.log({ data });
    const txParams = {
      data,
      to: contracts.relayer.address,
      from: await signer.getAddress(),
      signatureType: "EIP712_SIGN",
    };
    console.log({ txParams });

    // Biconomy team note: Ethers does not allow providing custom options while sending transaction
    // See comment from CTO of biconomy: https://github.com/ethers-io/ethers.js/discussions/1313#discussioncomment-399944
    // Also See https://ethereumbuilders.gitbooks.io/guide/content/en/ethereum_json_rpc.html#eth_sendtransaction
    // Signature type is not an expected field in the object passed into the array
    // Biconomy reads this field and passes on your transaction

    if (biconomy === undefined) throw Error("No biconomy provider found");
    const tx = await biconomy.send("eth_sendTransaction", [txParams]);
    console.log(`Transaction hash ${tx}`);

    // Wait for tx to be mined
    // biconomy.once(tx, (transaction) => {
    //   console.log(transaction);
    //   return "success";
    // });
  }

  const tx = await contract[method].apply(null, args);
  await tx.wait();
}

/**
 * approve outgoing transaction with another wallet or smart contract for
 * the specified amount
 * @param to the receipient address
 * @param amountUSDC transaction amount in usdc
 * @param biconomy A biconomy provider. If provided, we'll submit a gasless transaction
 */
export async function approve(
  signer: ethers.Signer,
  biconomy: ethers.providers.Web3Provider | undefined,
  to: string,
  amountUSDC: string
) {
  // convert to micro usdc
  const amount = _addDecimals(amountUSDC);

  const contracts = await getAllContracts(signer.provider as JsonRpcProvider);
  const usdcContract = contracts.usdc.connect(signer);
  return _blockchainCall(
    usdcContract,
    signer,
    "approve",
    [to, amount],
    biconomy
  );
}

/**
 * Deposit usdc to a vault, and get alp tokens in return
 * @param {ethers.Contract} contract the vault to deposit usdc to
 * @param {String} amountUSDC amount in usdc
 * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
 */
export async function buyToken(
  contract: ethers.Contract,
  signer: ethers.Signer,
  biconomy: ethers.providers.Web3Provider | undefined,
  amountUSDC: string
) {
  const contracts = await getAllContracts(signer.provider as JsonRpcProvider);
  const userAddress = await signer.getAddress();
  const amount = _addDecimals(amountUSDC);
  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  const walletBalance = await contracts.usdc.balanceOf(userAddress);
  // wallet balance < amount to buy
  if (walletBalance.lt(amount)) {
    throw new Error(
      `Insuffient balance at user wallet. Balance: ${_removeDecimals(
        walletBalance
      )}, Requested to buy: ${amountUSDC}`
    );
  }

  // check if user has sufficient allowance
  const allowance = await contracts.usdc.allowance(
    userAddress,
    contract.address
  );

  // allowance < amount
  if (allowance.lt(amount)) {
    throw new Error(
      `Insufficient allowance. Allowance: ${_removeDecimals(
        allowance
      )} USDC, Required: ${amountUSDC} USDC. ` +
        "Call approve() to increase the allowance."
    );
  }
  return _blockchainCall(contract, signer, "deposit", [amount], biconomy);
}

/**
 * sell alp token and withdraw usdc from a vault (to user's wallet by default)
 * @param {ethers.Contract} contract the vault to withdraw usdc from
 * @param {String} amountUSDC amount in usdc to sell
 * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
 */
export async function sellToken(
  contract: ethers.Contract,
  signer: ethers.Signer,
  biconomy: ethers.providers.Web3Provider | undefined,
  amountUSDC: string
) {
  const tokenPrice = ethers.BigNumber.from(await getTokenPrice(contract));
  const amount = _addDecimals(amountUSDC);

  const balanceStr = (await getUserBalance(await signer.getAddress(), contract))
    .balanceUSDC;
  const balance = ethers.BigNumber.from(balanceStr);

  // balance at vault < amount requested to sell
  if (balance.lt(amount)) {
    const ticker = await contract.symbol();
    throw new Error(
      "Insufficient token balance. " +
        `Balance: ${_removeDecimals(balance)} ${ticker},` +
        `Requested to sell: ${_removeDecimals(amount)} ${ticker},`
    );
  }
  return _blockchainCall(contract, signer, "withdraw", [amount], biconomy);
}

/**
 * transfer usdc from user's wallet to another wallet
 * @param {String} to receipient address
 * @param {String} amountUSDC amount in usdc
 * @param {boolean} gas If set to true, the user pays gas. If false, we do a transaction via biconomy
 */
export async function transfer(
  contract: ethers.Contract,
  signer: ethers.Signer,
  biconomy: ethers.providers.Web3Provider | undefined,
  to: string,
  amountUSDC: string
) {
  const usdcContract = contract.connect(signer);
  const amount = _addDecimals(amountUSDC);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }

  const balance = _addDecimals(
    (await getUserBalance(await signer.getAddress(), usdcContract)).balanceUSDC
  );

  // balance at wallet < amount requested to transfer
  if (balance.lt(amount)) {
    throw new Error(
      "Insuffient balance at user's wallet. " +
        `Balance: ${_removeDecimals(balance)}, ` +
        `Requested to transfer: ${_removeDecimals(amount)}`
    );
  }

  return _blockchainCall(
    usdcContract,
    signer,
    "transfer",
    [to, amount],
    biconomy
  );
}

export async function mintUSDC(
  contract: ethers.Contract,
  signer: ethers.Signer,
  biconomy: ethers.providers.Web3Provider | undefined,
  to: string,
  amountUSDC: string,
  gas: boolean = true
) {
  const usdc = contract.connect(signer);
  const amount = _addDecimals(amountUSDC);

  if (amount.isNegative() || amount.isZero()) {
    throw new Error("amount must be positive.");
  }
  return _blockchainCall(usdc, signer, "mint", [to, amount], biconomy);
}
