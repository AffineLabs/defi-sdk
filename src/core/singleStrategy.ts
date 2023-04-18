import { SIGNER, getEthContracts } from "./cache";
import { SSVWithdrawalRequestInfo } from "./types";
import { blockchainCall } from "./AlpineDeFiSDK";

export async function getWithdrawalRequest(): Promise<SSVWithdrawalRequestInfo[]> {
  const { withdrawalEscrow } = getEthContracts();
  const withdrawalRequests = await withdrawalEscrow.queryFilter(
    withdrawalEscrow.filters.WithdrawalRequest(SIGNER.getAddress(), null, null),
  );

  const currentEpoch = await withdrawalEscrow.currentEpoch();

  let ret: SSVWithdrawalRequestInfo[] = [];

  for (let req of withdrawalRequests) {
    if (req.args[1] < currentEpoch) {
      const shares = await withdrawalEscrow.withdrawableShares(SIGNER.getAddress(), req.args[1]);
      const assets = await withdrawalEscrow.withdrawableAssets(SIGNER.getAddress(), req.args[1]);
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
  const txReceipt = await blockchainCall(withdrawalEscrow, "redeem", [SIGNER.getAddress(), reqInfo.epoch]);
  return txReceipt;
}
