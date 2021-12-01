import { ethers } from "ethers";
import * as usdcJson from "./smart_contracts/usdc.json"
import * as vaultJson from "./smart_contracts/dummyvault.json"

export class AlpineDeFiSDK {
    constructor() {
        this.provider = new ethers.providers.StaticJsonRpcProvider(
            "https://kovan.infura.io/v3/6a4677f9b8014a239fb68742f752fb62"
        );
        this.etherscanProvider = new ethers.providers.EtherscanProvider('kovan');
        this.abiDecoder = require('abi-decoder'); // NodeJS
        this.abiDecoder.addABI(vaultJson.abi);
        this.abiDecoder.addABI(usdcJson.abi);
    }

    async parseTransaction(tx, receipt) {
        /**
         * @param {ethers.providers.TransactionResponse} tx transaction response
         * parse a transaction if its sent to an alpine contract
         */
        if (receipt === undefined) {
            receipt = await this.provider.getTransactionReceipt(tx.hash);
        }
        const method = this.abiDecoder.decodeMethod(tx.data);
        const amount = ethers.BigNumber.from(method.params[1].value);
        return {
            method: method.name,
            amountUSDC: String(ethers.utils.formatUnits(amount, 6)),
            timestamp: tx.timestamp,
            gasPrice: String(ethers.utils.formatEther(tx.gasPrice)),
            txnFee: String(ethers.utils.formatEther(tx.gasPrice.mul(receipt.gasUsed))),
            contract: tx.to,
            txnHash: tx.hash,
            blockNumber: receipt.blockNumber
        }
    }

    async getTransactionHistory(address) {
        const txHistory = await this.etherscanProvider.getHistory(address);
        const parsedTxHistory = [];
        for (const tx of txHistory) {
            if (tx.to.toLowerCase() === vaultJson.address.toLowerCase()
                || tx.to.toLowerCase() === usdcJson.address.toLowerCase()) {
                parsedTxHistory.push(await this.parseTransaction(tx));
            }
        }
        return parsedTxHistory;

    }
}