import { UltraLRT, WithdrawalEscrowV2, MockERC20, MockERC20__factory } from "../typechain";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { getContracts } from "./cache";
import { _getVaultAndAsset } from "./product";
import { EthContracts } from "./types";
import { ethers } from "ethers";

async function getUltraEthContract(): Promise<UltraLRT> {
  const contracts = getContracts() as EthContracts;
  if (contracts.ultraLRT == undefined) {
    throw Error("UltraETH is not initialized");
  }
  const { ultraLRT } = contracts;
  return ultraLRT;
}

async function getEscrowContract(): Promise<WithdrawalEscrowV2> {
  const contracts = getContracts() as EthContracts;
  if (contracts.withdrawalEscrowV2 == undefined) {
    throw Error("WithdrawalEscrowV2 is not initialized");
  }
  const { withdrawalEscrowV2 } = contracts;
  return withdrawalEscrowV2;
}

async function getEigenStETHContract(): Promise<ethers.Contract> {
  const contracts = getContracts() as EthContracts;
  if (contracts.eigenStETH == undefined) {
    throw Error("EigenStETH is not initialized");
  }
  const { eigenStETH } = contracts;
  return eigenStETH;
}

interface QueuedWithdrawalParams {
  strategies: string[];
  shares: ethers.BigNumber[];
  recipient: string;
}

interface WithdrawalInfo {
  staker: string;
  delegatedTo: string;
  withdrawer: string;
  nonce: ethers.BigNumber;
  startBlock: number;
  strategies: string[];
  shares: ethers.BigNumber[];
}

const eigenStETHStrategy = "0x93c4b944D05dfe6df7645A86cd2206016c51564D";

const stETHAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";

async function getEigenDelegatorContract(): Promise<ethers.Contract> {
  const contracts = getContracts() as EthContracts;
  if (contracts.eigenDelegator == undefined) {
    throw Error("EigenDelegator is not initialized");
  }
  const { eigenDelegator } = contracts;
  return eigenDelegator;
}

// Vault
export async function canWithdraw(amount: number) {
  const { vault, asset } = await _getVaultAndAsset("ultraLRT");
  const lrtVault: UltraLRT = vault as UltraLRT;
  const value = await lrtVault.canWithdraw(_addDecimals(amount.toString(), await asset.decimals()));
  return value;
}

export async function withdraw(amount: string, address: string) {
  const ultraEth = await getUltraEthContract();
  return blockchainCall(ultraEth, "withdraw", [amount, address, address]);
}

// Escrow

export async function redeem(address: string, epoch: string) {
  const withdrawalEscrowV2 = await getEscrowContract();
  return blockchainCall(withdrawalEscrowV2, "redeem", [address, epoch]);
}

export async function canWithdrawEscrow(epoch: string) {
  const withdrawalEscrowV2 = await getEscrowContract();
  const value = await withdrawalEscrowV2.canWithdraw(epoch);
  return value;
}

export async function withdrawableAssets(address: string) {
  const withdrawalEscrowV2 = await getEscrowContract();
  const { vault, asset } = await _getVaultAndAsset("ultraLRT");

  const vaultDecimals = await vault.decimals();
  const assetDecimals = await asset.decimals();

  const resolvingEpoch = (await withdrawalEscrowV2.resolvingEpoch()).toNumber();
  const currentEpoch = (await withdrawalEscrowV2.currentEpoch()).toNumber();

  let totalAmount = 0;
  const epochData = [];
  for (let i = 0; i <= currentEpoch; i++) {
    const shares = await withdrawalEscrowV2.userDebtShare(ethers.BigNumber.from(i), address);
    const assets = await withdrawalEscrowV2.withdrawableAssets(address, i);

    epochData.push({
      epoch: i,
      assets: _removeDecimals(assets, assetDecimals),
      shares: _removeDecimals(shares, vaultDecimals),
      canWithdraw: i < resolvingEpoch && shares.gt(0),
    });
    totalAmount += parseFloat(_removeDecimals(assets, assetDecimals));
  }
  return { totalAmount, epochData };
}

export async function migratableAssets(address: string) {
  const eigenStETH = await getEigenStETHContract();
  const value = await eigenStETH.userUnderlyingView(address);
  return parseFloat(_removeDecimals(value, 18));
}

export async function queueMigrationWithdrawal(address: string, assets: string) {
  const eigenDelegator = await getEigenDelegatorContract();
  const eigenStETH = await getEigenStETHContract();
  const assetUnits = ethers.utils.parseUnits(assets, 18);
  const shares = await eigenStETH.underlyingToShares(assetUnits);

  const queuedWithdrawalParams: QueuedWithdrawalParams[] = [
    {
      strategies: [eigenStETHStrategy],
      shares: [ethers.BigNumber.from(shares)],
      recipient: address,
    },
  ];
  return blockchainCall(eigenDelegator, "queueWithdrawals", [queuedWithdrawalParams]);
}

export async function completeMigrationWithdrawal(
  address: string,
  delegator: string,
  nonce: string,
  blockNumber: string,
  shares: string,
) {
  const eigenDelegator = await getEigenDelegatorContract();

  const withdrawalInfos: WithdrawalInfo[] = [
    {
      staker: address,
      delegatedTo: delegator,
      withdrawer: address,
      nonce: ethers.BigNumber.from(nonce),
      startBlock: parseInt(blockNumber),
      strategies: [eigenStETHStrategy],
      shares: [ethers.BigNumber.from(shares)],
    },
  ];

  // Define the additional parameters
  const assetsArray: string[][] = [[stETHAddress]];
  const uint256Array: ethers.BigNumber[] = [ethers.BigNumber.from("0")];
  const boolArray: boolean[] = [true];

  return blockchainCall(eigenDelegator, "completeQueuedWithdrawals", [
    withdrawalInfos,
    assetsArray,
    uint256Array,
    boolArray,
  ]);
}
