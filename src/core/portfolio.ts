import { tokensFromShares } from "./product";
import { productAllocation, productAmounts, productBalances, alpineProducts } from "./types";
import { getSignature } from "./biconomy";
import { ethers } from "ethers";
import { CONTRACTS, SIGNER, userAddress } from "./cache";
import { _addDecimals } from "./AlpineDeFiSDK";

const ALLOCSUM = 100;

async function portfolioUpdate(buyAmounts: productAmounts, sellAmounts: productAmounts) {
  const data: any[] = [];
  let router = CONTRACTS.router;
  let IERC4626 = CONTRACTS.IERC4626;

  for (const product of alpineProducts) {//unsure about how to withdraw
    const sellAmount = sellAmounts[product];
    if (sellAmount === undefined)
      continue;
    const usdcAmount = _addDecimals(sellAmount.toString());
    const {signature, request} = await getSignature(CONTRACTS[product], SIGNER, "withdraw", [usdcAmount]);
    data.push(abi.encodeWithSelector(router.depositToVault.selector, IERC4626(userAddress), usdcAmount, 0));
  }

  for (const product of alpineProducts) {
      const buyAmount = buyAmounts[product];
      if (buyAmount === undefined)
        continue;
      const usdcAmount = _addDecimals(buyAmount.toString());
      console.log(`${product}: ${usdcAmount}`);
      const {signature, request} = await getSignature(CONTRACTS[product], SIGNER, "deposit", [usdcAmount]);
      data.push(abi.encodeWithSelector(router.depositToVault.selector, IERC4626(userAddress), usdcAmount, 0));   
  }
  router.multicall(data);
}

export async function portfolioPurchase(allocations: productAllocation, amount:number){
  const buyAmounts: productAmounts = {};
  for (const product of alpineProducts) {
      buyAmounts[product] = (allocations[product]!*amount/ALLOCSUM).toString();
  }
  console.log({buyAmounts});
  return portfolioUpdate(buyAmounts, {});
}

export async function portfolioSell(allocations:productAllocation, amount:number){
  const sellAmounts: productAmounts = {};
  for (const product of alpineProducts) {
      sellAmounts[product] = (allocations[product]!*amount/ALLOCSUM).toString();
  }
  return portfolioUpdate({}, sellAmounts);
}


export async function portfolioRebalance(allocations:productAllocation){
  // difference between current vs desired allocation * amount to buy or sell for every product
  const user = userAddress;
  const contracts = CONTRACTS;
  const coinBalance:productBalances = {};
  const total: ethers.BigNumber = ethers.BigNumber.from(0);
  const buyAmounts:productAmounts = {};
  const sellAmounts:productAmounts = {};
  for (const product of alpineProducts){
      const contract = CONTRACTS[product];
      const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
      const dollarsBalance = await tokensFromShares(product, tokenBalance);
      total.add(dollarsBalance!);
      coinBalance[product] = dollarsBalance;
  }
  for (const product of alpineProducts){
      // Ideal Amount is the desired proportion * total money
        const idealAmount = total.mul(allocations[product]!).div(ALLOCSUM);
        const currentBalance = coinBalance[product]!;
        if (idealAmount > currentBalance){
          const amount = idealAmount.sub(currentBalance);
          buyAmounts[product] = amount.div(CONTRACTS[product].decimals()).toString();
        }
        else if(currentBalance > idealAmount){
          const amount = currentBalance.sub(idealAmount);
          sellAmounts[product] = amount.div(CONTRACTS[product].decimals()).toString();
        }
  }
  return portfolioUpdate(buyAmounts, sellAmounts);
}