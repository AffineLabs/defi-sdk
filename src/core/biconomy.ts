import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import { BICONOMY } from "./cache";

// See https://docs.biconomy.io/products/enable-gasless-transactions/custom-implementation/sdk
export async function sendBiconomy(
  contract: ethers.Contract,
  signer: ethers.Signer,
  method: string,
  args: Array<any>
) {
  // Initialize Constants
  const domainType = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "verifyingContract", type: "address" },
    { name: "salt", type: "bytes32" },
  ];
  // metaTransaction type used by Polygon USDC
  const metaTransactionType = [
    { name: "nonce", type: "uint256" },
    { name: "from", type: "address" },
    { name: "functionSignature", type: "bytes" },
  ];
  // TODO: Configure chain id correctly
  let domainData = {
    name: await contract.name(),
    version: "1",
    verifyingContract: contract.address,
    salt: ethers.utils.hexZeroPad(
      ethers.BigNumber.from(80001).toHexString(),
      32
    ),
  };

  const userAddress = await signer.getAddress();
  // TODO: this will not work with polygon mainnet usdc. FIX.
  let nonce = await contract.getNonce(userAddress);
  console.log({ nonce });
  // This is the calldata for the contract function we want to call, e.g. transfer()
  const functionSignature = contract.interface.encodeFunctionData(method, args);

  let message = {
    nonce: parseInt(nonce),
    from: userAddress,
    functionSignature,
  };

  const dataToSign = JSON.stringify({
    types: {
      EIP712Domain: domainType,
      MetaTransaction: metaTransactionType,
    },
    domain: domainData,
    primaryType: "MetaTransaction",
    message,
  });

  /*Its important to use eth_signTypedData_v3 and not v4 to get EIP712 signature 
    because we have used salt in domain data instead of chainId*/
  // Get the EIP-712 Signature and send the transaction
  const provider: JsonRpcProvider = signer.provider as JsonRpcProvider;
  let signature = await provider.send("eth_signTypedData_v3", [
    userAddress,
    dataToSign,
  ]);
  let { r, s, v } = getSignatureParameters(signature);

  const { data: metaTxData } =
    await contract.populateTransaction.executeMetaTransaction(
      userAddress,
      functionSignature,
      r,
      s,
      v
    );

  const metaTxParams = {
    data: metaTxData,
    to: contract.address,
    from: userAddress,
    signatureType: "EIP712_SIGN",
  };

  console.log({ metaTxParams });
  const biconomy = BICONOMY as ethers.providers.Web3Provider;
  const tx = await biconomy.send("eth_sendTransaction", [metaTxParams]);

  console.log(`Transaction hash ${tx}`);
}

function getSignatureParameters(signature: string) {
  if (!ethers.utils.isHexString(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  let r = signature.slice(0, 66);
  let s = "0x".concat(signature.slice(66, 130));
  let vStr = "0x".concat(signature.slice(130, 132));
  let v = ethers.BigNumber.from(vStr).toNumber();
  if (![27, 28].includes(v)) v += 27;
  return {
    r,
    s,
    v,
  };
}
