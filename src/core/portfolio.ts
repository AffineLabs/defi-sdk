import { buyProduct, sellProduct, tokensFromShares } from "./product";
import { AlpineProduct, productAllocation, productAmounts, productBalances } from "./types";
import { getSignature, sendToForwarder } from "./biconomy";
import { Contract, ethers } from "ethers";
import { BICONOMY, CONTRACTS, SIGNER, userAddress } from "./cache";
import { _addDecimals } from "./AlpineDeFiSDK";

const ALLOCSUM = 100;

async function portfolioUpdate(buyAmounts: productAmounts, sellAmounts: productAmounts) {
  let signatures: string[] = [];
  let requests: any[] = [];
  for (let [key,value] of Object.entries(sellAmounts)) {
    if (key === "alpSave" || key == "alpLarge") {
      const usdcAmount = _addDecimals(value.toString());
      const {signature, request} = await getSignature(CONTRACTS[key], SIGNER, "withdraw", [usdcAmount]);
      signatures.push(signature);
      requests.push(request);
    }
  }

  for (let [key,value] of Object.entries(buyAmounts)) {
    if (key === "alpSave" || key == "alpLarge") {
      const usdcAmount = _addDecimals(value.toString());
      const {signature, request} = await getSignature(CONTRACTS[key], SIGNER, "deposit", [usdcAmount]);;
      signatures.push(signature);
      requests.push(request);
    }
  }
  const { forwarder } = CONTRACTS;
  const encodedCall = forwarder.interface.encodeFunctionData("executeBatch", [
    requests.map(req => [req.from, req.to, req.value, req.gas, req.nonce, req.data]),
    ethers.utils.hexConcat(signatures),
  ]);
}

async function portfolioPurchase(allocations: productAllocation, amount:number){
  let buyAmounts: productAmounts = {};
  for (let [product,alloc] of Object.entries(allocations)) {
    if (product === "alpSave" || product == "alpLarge") {
      buyAmounts[product] = (alloc*amount/ALLOCSUM).toString();
    }
  }
  portfolioUpdate(buyAmounts, {});
}

async function portfolioRebalance(allocations:productAllocation){
  // difference between current vs desired allocation * amount to buy or sell for every product
  const user = userAddress;
  const contracts = CONTRACTS;
  let coinBalance:productBalances = {};
  let total: ethers.BigNumber = ethers.BigNumber.from(0);
  let buyAmounts:productAmounts = {};
  let sellAmounts:productAmounts = {};
  for (let [product,alloc] of Object.entries(allocations)){
    if (product == "alpSave" || product == "alpLarge"){
      const contract = CONTRACTS[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance!);
      coinBalance[product] = dollarsBalance;
    }
  }
  for (let [product,currentBalance]of Object.entries(coinBalance)){
    if (product == "alpSave" || product == "alpLarge"){
      // Ideal Amount is the desired proportion * total money
        let idealAmount = total.mul(allocations[product]!).div(ALLOCSUM);
        if (idealAmount > currentBalance){
          const amount = idealAmount.sub(currentBalance);
          buyAmounts[product] = amount.div(CONTRACTS[product].decimals()).toString();
        }
        else if(currentBalance > idealAmount){
          const amount = currentBalance.sub(idealAmount);
          sellAmounts[product] = amount.div(CONTRACTS[product].decimals()).toString();
        }
    }
  }
  portfolioUpdate(buyAmounts, sellAmounts);
}

async function portfolioSell(allocations:productAllocation, amount:number){
  let sellAmounts: productAmounts = {};
  for (let [product,alloc] of Object.entries(allocations)) {
    if (product === "alpSave" || product == "alpLarge") {
      sellAmounts[product] = (alloc*amount/ALLOCSUM).toString();
    }
  }
  portfolioUpdate({}, sellAmounts);
}
