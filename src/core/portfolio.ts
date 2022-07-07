import { sharesFromTokens, tokensFromShares } from "./product";
import { productAllocation, productAmounts, productBalances, alpineProducts } from "./types";
import { getSignature } from "./biconomy";
import { ethers } from "ethers";
import { CONTRACTS, SIGNER, userAddress } from "./cache";
import { blockchainCall, _addDecimals, _removeDecimals } from "./AlpineDeFiSDK";

const ALLOCSUM = 100;

export async function portfolioUpdate(buyAmounts: productAmounts, sellAmounts: productAmounts) {
  const data: string[] = [];
  const router = CONTRACTS.router;
  for (const product of alpineProducts) {
    const sellAmount = sellAmounts[product];
    if (sellAmount === undefined || Number(sellAmount) === 0) continue;
    const usdcAmount = _addDecimals(sellAmount.toString());
    let iface = router.interface;
    data.push(
      (iface as any).encodeFunctionData("withdraw", [
        CONTRACTS[product].address,
        userAddress,
        usdcAmount,
        ethers.BigNumber.from(2).pow(256).sub(1),
      ]),
    );
  }
  for (const product of alpineProducts) {
    const buyAmount = buyAmounts[product];
    if (buyAmount === undefined || Number(buyAmount) === 0) continue;
    const usdcAmount = _addDecimals(buyAmount.toString());
    let iface = router.interface;
    data.push(
      (iface as any).encodeFunctionData("depositToVault", [CONTRACTS[product].address, userAddress, usdcAmount, 0]),
    );
  }
  return blockchainCall(router, "multicall", [data]);
}

export async function portfolioPurchase(allocations: productAllocation, amount: number) {
  const buyAmounts: productAmounts = {};
  for (const product of alpineProducts) {
    buyAmounts[product] = ((allocations[product]! * amount) / ALLOCSUM).toString();
  }
  return portfolioUpdate(buyAmounts, {});
}

export async function portfolioSell(allocations: productAllocation, amount: number) {
  const sellAmounts: productAmounts = {};
  for (const product of alpineProducts) {
    sellAmounts[product] = ((allocations[product]! * amount) / ALLOCSUM).toString();
  }
  return portfolioUpdate({}, sellAmounts);
}

export async function portfolioRebalance(allocations: productAllocation) {
  // difference between current vs desired allocation * amount to buy or sell for every product
  const user = userAddress;
  const contracts = CONTRACTS;
  const coinBalance: productBalances = {};
  let total: ethers.BigNumber = ethers.BigNumber.from(0);
  const buyAmounts: productAmounts = {};
  const sellAmounts: productAmounts = {};
  for (const product of alpineProducts) {
    const contract = CONTRACTS[product];
    const tokenBalance: ethers.BigNumber = await contract.balanceOf(user);
    const dollarsBalance = await tokensFromShares(product, tokenBalance);
    total = total.add(dollarsBalance!);
    coinBalance[product] = dollarsBalance;
  }
  for (const product of alpineProducts) {
    // Ideal Amount is the desired proportion * total money
    const idealAmount = total.mul(allocations[product]!).div(ALLOCSUM);
    const currentBalance = coinBalance[product]!;
    if (idealAmount > currentBalance) {
      const amount = idealAmount.sub(currentBalance);
      buyAmounts[product] = _removeDecimals(amount);
    } else if (currentBalance > idealAmount) {
      const amount = currentBalance.sub(idealAmount);
      sellAmounts[product] = _removeDecimals(amount);
    }
  }
  return portfolioUpdate(buyAmounts, sellAmounts);
}
