import { userAddress, getEthContracts } from "./cache";
import { SSVWithdrawalRequestInfo } from "./types";
import { blockchainCall } from "./AlpineDeFiSDK";

export async function getWithdrawalRequest(): Promise<SSVWithdrawalRequestInfo[]> {
  const { withdrawalEscrow, ssvEthUSDEarn } = getEthContracts();

  const currentEpoch = await ssvEthUSDEarn.epoch();

  const withdrawalRequests = await withdrawalEscrow.queryFilter(
    withdrawalEscrow.filters.WithdrawalRequest(userAddress, null, null),
  );

  console.log({ withdrawalRequests });

  const ret: SSVWithdrawalRequestInfo[] = [];

  for (const req of withdrawalRequests) {
    if (req.args[1] < currentEpoch) {
      const shares = await withdrawalEscrow.withdrawableShares(userAddress, req.args[1]);
      const assets = await withdrawalEscrow.withdrawableAssets(userAddress, req.args[1]);
      ret.push({
        epoch: req.args[1].toNumber(),
        token: shares.toNumber(),
        value: assets.toNumber(),
        claimed: shares.eq(0),
        claimable: shares.gt(0),
      });
    } else {
      ret.push({
        epoch: req.args[1].toNumber(),
        token: req.args[2].toNumber(),
        value: 0,
        claimed: false,
        claimable: false,
      });
    }
  }
  return ret;
}

export async function redeemWithdrawRequest(reqInfo: SSVWithdrawalRequestInfo): Promise<any> {
  const { withdrawalEscrow } = getEthContracts();
  const txReceipt = await blockchainCall(withdrawalEscrow, "redeem", [userAddress, reqInfo.epoch]);
  return txReceipt;
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
