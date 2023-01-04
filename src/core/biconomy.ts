/* eslint-disable  @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import { BICONOMY, getPolygonContracts, SIGNER } from "./cache";
import { DEFAULT_RAW_CHAIN_ID } from "./constants";

// See https://docs.biconomy.io/products/enable-gasless-transactions/custom-implementation/sdk
export async function sendBiconomy(contract: ethers.Contract, signer: ethers.Signer, method: string, args: Array<any>) {
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
  const domainData = {
    name: await contract.name(),
    version: "1",
    verifyingContract: contract.address,
    salt: ethers.utils.hexZeroPad(ethers.BigNumber.from(80001).toHexString(), 32),
  };

  const userAddress = await signer.getAddress();
  // TODO: this will not work with polygon mainnet usdc. FIX.
  const nonce = await contract.getNonce(userAddress);
  console.log({ nonce });
  // This is the calldata for the contract function we want to call, e.g. transfer()
  const functionSignature = contract.interface.encodeFunctionData(method, args);

  const message = {
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
  const signature = await provider.send("eth_signTypedData_v3", [userAddress, dataToSign]);
  const { r, s, v } = getSignatureParameters(signature);

  const { data: metaTxData } = await contract.populateTransaction.executeMetaTransaction(
    userAddress,
    functionSignature,
    r,
    s,
    v,
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
  await biconomy.waitForTransaction(tx);
}

function getSignatureParameters(signature: string) {
  if (!ethers.utils.isHexString(signature)) {
    throw new Error('Given value "'.concat(signature, '" is not a valid hex string.'));
  }
  const r = signature.slice(0, 66);
  const s = "0x".concat(signature.slice(66, 130));
  const vStr = "0x".concat(signature.slice(130, 132));
  let v = ethers.BigNumber.from(vStr).toNumber();
  if (![27, 28].includes(v)) v += 27;
  return {
    r,
    s,
    v,
  };
}

// See https://github.com/MetaMask/test-dapp/blob/f3ce3e6972e9fe2b239caf8069740c5e84a156b0/src/index.js#L1024
export async function getSignature(
  contract: ethers.Contract,
  signer: ethers.Signer,
  method: string,
  args: Array<any>,
  nonce?: number,
) {
  const userAddress = await signer.getAddress();
  const { forwarder } = getPolygonContracts();
  const domain = {
    chainId: DEFAULT_RAW_CHAIN_ID,
    name: "MinimalForwarder",
    verifyingContract: forwarder.address,
    version: "0.0.1",
  };

  const message = {
    from: userAddress,
    to: contract.address,
    value: 0,
    // See https://github.com/OpenZeppelin/openzeppelin-contracts/blob/f81b80fb3957ad9c86bb9f9504dd49a8ef409022/contracts/metatx/MinimalForwarder.sol#L56
    // This number only has to be small enough to not trigger the condition in the MinimalForwarder code linked above
    // TODO: consider getting a real gas estimate
    gas: 2e6,
    nonce: nonce ? nonce : (await forwarder.getNonce(userAddress)).toNumber(),
    data: contract.interface.encodeFunctionData(method, args),
  };

  console.log({ message });

  const msgParams = {
    domain,
    primaryType: "ForwardRequest",
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      ForwardRequest: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "value", type: "uint256" },
        { name: "gas", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
    },
    message,
  };

  const provider: JsonRpcProvider = signer.provider as JsonRpcProvider;
  const signature: string = await provider.send("eth_signTypedData_v4", [userAddress, JSON.stringify(msgParams)]);
  console.log({ signature });

  return { signature, request: message };
}

export async function sendToForwarder(signatures: Array<string>, requests: Array<any>) {
  // Call executeBatch

  const { forwarder } = getPolygonContracts();
  const encodedCall = (forwarder as any).interface.encodeFunctionData("executeBatch", [
    requests.map(req => [req.from, req.to, req.value, req.gas, req.nonce, req.data]),
    ethers.utils.hexConcat(signatures),
  ]);

  const metaTxParams = {
    data: encodedCall,
    to: forwarder.address,
    from: await SIGNER.getAddress(),
    signatureType: "EIP712_SIGN",
  };

  console.log({ metaTxParams });

  // Actually send transaction here

  // Biconomy team note: Ethers does not allow providing custom options while sending transaction
  // See comment from CTO of biconomy: https://github.com/ethers-io/ethers.js/discussions/1313#discussioncomment-399944
  // Also See https://ethereumbuilders.gitbooks.io/guide/content/en/ethereum_json_rpc.html#eth_sendtransaction
  // Signature type is not an expected field in the object passed into the array
  // Biconomy reads this field and passes on your transaction

  const biconomy = BICONOMY as ethers.providers.Web3Provider;
  const tx = await biconomy.send("eth_sendTransaction", [metaTxParams]);
  console.log(`Biconomy Transaction hash ${tx}`);
  await biconomy.waitForTransaction(tx);
  console.log("Tx confirmed");
}
