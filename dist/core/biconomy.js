var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";
import { BICONOMY, getPolygonContracts, SIGNER } from "./cache";
import { DEFAULT_RAW_CHAIN_ID } from "./constants";
// See https://docs.biconomy.io/products/enable-gasless-transactions/custom-implementation/sdk
export function sendBiconomy(contract, signer, method, args) {
    return __awaiter(this, void 0, void 0, function* () {
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
            name: yield contract.name(),
            version: "1",
            verifyingContract: contract.address,
            salt: ethers.utils.hexZeroPad(ethers.BigNumber.from(80001).toHexString(), 32),
        };
        const userAddress = yield signer.getAddress();
        // TODO: this will not work with polygon mainnet usdc. FIX.
        const nonce = yield contract.getNonce(userAddress);
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
        const provider = signer.provider;
        const signature = yield provider.send("eth_signTypedData_v3", [userAddress, dataToSign]);
        const { r, s, v } = getSignatureParameters(signature);
        const { data: metaTxData } = yield contract.populateTransaction.executeMetaTransaction(userAddress, functionSignature, r, s, v);
        const metaTxParams = {
            data: metaTxData,
            to: contract.address,
            from: userAddress,
            signatureType: "EIP712_SIGN",
        };
        console.log({ metaTxParams });
        const biconomy = BICONOMY;
        const tx = yield biconomy.send("eth_sendTransaction", [metaTxParams]);
        console.log(`Transaction hash ${tx}`);
        yield biconomy.waitForTransaction(tx);
    });
}
function getSignatureParameters(signature) {
    if (!ethers.utils.isHexString(signature)) {
        throw new Error('Given value "'.concat(signature, '" is not a valid hex string.'));
    }
    const r = signature.slice(0, 66);
    const s = "0x".concat(signature.slice(66, 130));
    const vStr = "0x".concat(signature.slice(130, 132));
    let v = ethers.BigNumber.from(vStr).toNumber();
    if (![27, 28].includes(v))
        v += 27;
    return {
        r,
        s,
        v,
    };
}
// See https://github.com/MetaMask/test-dapp/blob/f3ce3e6972e9fe2b239caf8069740c5e84a156b0/src/index.js#L1024
export function getSignature(contract, signer, method, args, nonce) {
    return __awaiter(this, void 0, void 0, function* () {
        const userAddress = yield signer.getAddress();
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
            nonce: nonce ? nonce : (yield forwarder.getNonce(userAddress)).toNumber(),
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
        const provider = signer.provider;
        const signature = yield provider.send("eth_signTypedData_v4", [userAddress, JSON.stringify(msgParams)]);
        console.log({ signature });
        return { signature, request: message };
    });
}
export function sendToForwarder(signatures, requests) {
    return __awaiter(this, void 0, void 0, function* () {
        // Call executeBatch
        const { forwarder } = getPolygonContracts();
        const encodedCall = forwarder.interface.encodeFunctionData("executeBatch", [
            requests.map(req => [req.from, req.to, req.value, req.gas, req.nonce, req.data]),
            ethers.utils.hexConcat(signatures),
        ]);
        const metaTxParams = {
            data: encodedCall,
            to: forwarder.address,
            from: yield SIGNER.getAddress(),
            signatureType: "EIP712_SIGN",
        };
        console.log({ metaTxParams });
        // Actually send transaction here
        // Biconomy team note: Ethers does not allow providing custom options while sending transaction
        // See comment from CTO of biconomy: https://github.com/ethers-io/ethers.js/discussions/1313#discussioncomment-399944
        // Also See https://ethereumbuilders.gitbooks.io/guide/content/en/ethereum_json_rpc.html#eth_sendtransaction
        // Signature type is not an expected field in the object passed into the array
        // Biconomy reads this field and passes on your transaction
        const biconomy = BICONOMY;
        const tx = yield biconomy.send("eth_sendTransaction", [metaTxParams]);
        console.log(`Biconomy Transaction hash ${tx}`);
        yield biconomy.waitForTransaction(tx);
        console.log("Tx confirmed");
    });
}
