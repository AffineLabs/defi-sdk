import { userAddress, getEthContracts } from "./cache";
import { FullTxReceipt, SSVWithdrawalRequestInfo, SmallTxReceipt, TxnReceipt } from "./types";
import { blockchainCall, _removeDecimals } from "./AlpineDeFiSDK";

export async function getWithdrawalRequest(): Promise<SSVWithdrawalRequestInfo[]> {
  const { withdrawalEscrow, ssvEthUSDEarn, usdc } = getEthContracts();

  const currentEpoch = await ssvEthUSDEarn.epoch();
  const epochEnded = await ssvEthUSDEarn.epochEnded();

  const withdrawalRequests = await withdrawalEscrow.queryFilter(
    withdrawalEscrow.filters.WithdrawalRequest(userAddress, null, null),
  );

  const ret: SSVWithdrawalRequestInfo[] = [];

  for (const req of withdrawalRequests) {
    if (req.args[1] < currentEpoch || (req.args[1] == currentEpoch && epochEnded)) {
      const shares = await withdrawalEscrow.withdrawableShares(userAddress, req.args[1]);
      const assets = await withdrawalEscrow.withdrawableAssets(userAddress, req.args[1]);
      ret.push({
        epoch: req.args[1].toNumber(),
        token: _removeDecimals(shares, await ssvEthUSDEarn.decimals()),
        value: _removeDecimals(assets, await usdc.decimals()),
        claimed: shares.eq(0),
        claimable: shares.gt(0),
      });
    } else {
      ret.push({
        epoch: req.args[1].toNumber(),
        token: _removeDecimals(req.args[2], await ssvEthUSDEarn.decimals()),
        value: "0",
        claimed: false,
        claimable: false,
      });
    }
  }
  return ret;
}

export async function redeemWithdrawRequest(reqInfo: SSVWithdrawalRequestInfo): Promise<FullTxReceipt> {
  const { withdrawalEscrow } = getEthContracts();
  const basicInfo = {
    alpFee: "0",
    alpFeePercent: "0",
    dollarAmount: reqInfo.value,
    tokenAmount: reqInfo.token,
  };
  const txReceipt = (await blockchainCall(withdrawalEscrow, "redeem", [userAddress, reqInfo.epoch])) as SmallTxReceipt;
  return {
    ...txReceipt,
    ...basicInfo,
  };
}

export async function getAssets(): Promise<number> {
  const { withdrawalEscrow } = getEthContracts();
  const withdrawalRequests = await withdrawalEscrow.queryFilter(
    withdrawalEscrow.filters.WithdrawalRequest(userAddress, null, null),
  );
  const epochs = withdrawalRequests.map(req => req.args[1]);

  const assets = await withdrawalEscrow.getAssets(userAddress, epochs);

  return assets.toNumber();
}

export async function isLiquidToWithdraw() {
  const { ssvEthUSDEarn } = getEthContracts();
  return ssvEthUSDEarn.epochEnded();
}

export async function epochStartTime(): Promise<number> {
  const { ssvEthUSDEarn } = getEthContracts();
  return (await ssvEthUSDEarn.epochStartTime()).toNumber();
}
