# Alpine DeFi SDK

## Installation

```
yarn install
```

To play with the sdk, run `yarn parcel index.html`. Open the url provided by parcel and open your browser's console.

## Getting Started

```
const alpAccount = new Account();
await alpAccount.connect("email");
let addr = await alpAccount.getUserAddress();
console.log({ addr: addr });
```

Then check the email address provided for the magic link. Once logged in, check the console for your public address. **You'll need ethereum and usdc in this address to execute transactions.** You have two options:

1. Either get the eth and the usdc from the links provided in dj-multiplyr.
2. Share the above address in `dj-multiplyr` and request some tokens from Adib.

### Connect and Disconnect

```
await alpAccount.connect()
```

connects the user to Magic's provider.

```
await alpAccount.disconnect()
```

disconnects the user from the Magic's provider.

```
await alpAccount.isConnected()
```

checks if the user is connected.

## Checking Balance

The SDK will only interact with trusted smart contracts, namely, the
Circle USDC smart contract, and Alpine Vault Contracts. In MV1, these contracts
can be directly accessed in the code like this:

```
\\ first call connect() like above
const contracts = AlpineDeFiSDK.getAllContracts();
```

Then check balance like this:

```
let balance = await alpAccount.getUserBalance(contracts.alpSave);
console.log({ balance });
```

For the vault contract(s), this function returns the user's balance in both token denominated value and usdc denominated value.

### Getting the Idle Cash

```
let balance = await alpAccount.getUserBalance(contracts.usdc);
console.log({ balance });
```

For the usdc contract, this function returns user balance only in usdc denominated
value. This is the idle cash.

## Buy Tokens

Buying alp tokens is a two step process:

1. Approve funds to transfer from user's wallet to the vault.
2. Buy tokens from the vault.

```
// call connect() like before
const contracts = AlpineDeFiSDK.getAllContracts();
let approve = await alpAccount.approve(contracts.alpSave, "5");
console.log({ approve });
let receipt = await alpAccount.buyToken(contracts.alpSave, "5");
console.log({ receipt });
let balance = await alpAccount.getUserBalance(contracts.alpSave);
console.log({ balance });
```

**Note: the transaction cost (`txnCost` in `receipt`) and `gasPrice` are in ETH denominated values, not USDC.**

## Sell Tokens

```
// call connect() like before
const contracts = AlpineDeFiSDK.getAllContracts();
let receipt = await alpAccount.sellToken(contracts.alpSave, "4");
console.log({ receipt });
let balance = await alpAccount.getUserBalance(contracts.alpSave);
console.log({ balance });
```

the `to` parameter can be set to withdraw to a different wallet.

## Transfer

The following code transfers usdc from the user's wallet to another wallet

```
// call connect() like before
const contracts = AlpineDeFiSDK.getAllContracts();
const otherAddress = "0x3F91193d3080778fa66BC5cda19Be1f149049Ef9";
let receipt = await alpAccount.transfer(otherAddress, "4");
console.log({ receipt });
let balance = await alpAccount.getUserBalance(contracts.usdc);
console.log({ balance });
```

## Get Transaction History

```
// call connect() like before
const txHistory = await alpAccount.getTransactionHistory();
txHistory.forEach((tx) => {console.log(tx);});
```

## Documentation

```
jsdoc src/ -R README.md -d docs
```

then see the `docs` folder.

## TODOs

- Use [karma](https://karma-runner.github.io/latest/intro/configuration.html) or [mocha](https://mochajs.org/#running-mocha-in-the-browser) for testing.
