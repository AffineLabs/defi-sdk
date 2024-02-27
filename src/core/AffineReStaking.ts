import { AffineReStaking, MockERC20, MockERC20__factory } from "../typechain";
import { _addDecimals, _removeDecimals, blockchainCall } from "./AlpineDeFiSDK";
import { SIGNER, BICONOMY, PROVIDER, userAddress, SIMULATE, getContracts } from "./cache";
import { EthContracts } from "./types";

async function getReStakingContract(): Promise<AffineReStaking> {
  const contracts = getContracts() as EthContracts;
  if (contracts.affineReStaking == undefined) {
    throw Error("ReStaking is not initialized");
  }
  const { affineReStaking } = contracts;
  return affineReStaking;
}

async function getReStakingContractAndAssets(
  token: string,
): Promise<{ affineReStaking: AffineReStaking; asset: MockERC20 }> {
  const affineReStaking = await getReStakingContract();
  const asset = MockERC20__factory.connect(token, affineReStaking.provider);
  return {
    affineReStaking,
    asset,
  };
}

export async function depositERC20(token: string, to: string, amount: string) {
  const { affineReStaking, asset } = await getReStakingContractAndAssets(token);
  const decimalAmount = _addDecimals(amount.toString(), await asset.decimals());
  return blockchainCall(affineReStaking, "depositFor", [token, to, decimalAmount]);
}

export async function depositEth(to: string, amount: string) {
  const affineReStaking = await getReStakingContract();
  const decimalAmount = _addDecimals(amount.toString(), 18); // ether
  return blockchainCall(affineReStaking, "depositETHFor", [to], false, decimalAmount);
}

export async function getBalance(token: string, address: string) {
  const { affineReStaking, asset } = await getReStakingContractAndAssets(token);
  const value = await affineReStaking.balance(token, address);
  const amount = _removeDecimals(value, await asset.decimals());
  return amount;
}
