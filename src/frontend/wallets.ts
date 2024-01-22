import CoinbaseWalletSDK, { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import { getProviderByChainId, RPC_URLS } from "../core/cache";
import { AllowedChainId, AllowedWallet, EthWalletProvider, MagicSDKOptions } from "../types/account";
import Provider from "@walletconnect/universal-provider";
import { ALLOWED_CHAIN_IDS } from "../core/constants";

export async function initMagic({
  email,
  testMode,
  chainId,
}: {
  email: string;
  testMode: boolean;
  chainId: AllowedChainId;
}): Promise<{ magic?: Magic; provider?: ethers.providers.Web3Provider }> {
  let _magic: Magic | undefined, _provider: ethers.providers.Web3Provider | undefined;
  if (email) {
    const PROVIDER = getProviderByChainId(chainId);
    const magicOptions: MagicSDKOptions = {
      network: {
        rpcUrl: PROVIDER.connection.url,
        chainId: Number(chainId),
      },
    };

    if (testMode) {
      magicOptions.testMode = true;
    }

    try {
      // the magic api key is public
      _magic = new Magic(process.env.MAGIC_API_KEY || "", magicOptions);
      await _magic.auth.loginWithMagicLink({ email });
      // change to magic
      _provider = new ethers.providers.Web3Provider(
        _magic.rpcProvider as unknown as ethers.providers.ExternalProvider,
        "any",
      );
    } catch (error) {
      console.error({ error });
    }
  }

  return { magic: _magic, provider: _provider };
}

export async function getWalletconnectProvider(
  chainId: AllowedChainId,
  wcProvider?: Provider,
  modal?: import("@web3modal/standalone").Web3Modal,
): Promise<ethers.providers.Web3Provider | undefined> {
  if (!wcProvider || !modal) {
    throw new Error("WalletConnect provider or Web3Modal is not initialized");
  }
  console.log(
    "triggered display_uri event",
    ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
  );
  await wcProvider
    .connect({
      namespaces: {
        eip155: {
          methods: [
            "eth_sendTransaction",
            "eth_signTransaction",
            "eth_sign",
            "personal_sign",
            "eth_signTypedData",
            "wallet_switchEthereumChain",
          ],
          chains: ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
          events: ["chainChanged", "accountsChanged"],
          rpcMap: RPC_URLS,
        },
      },
    })
    .then(e => console.log(e))
    .catch((e: Error) => console.error("Error on wcProvider.connect: ", e));

  // choose chain id to trigger the function to
  console.log("Setting default chain to: ", `eip155:${chainId}`);
  wcProvider.setDefaultChain(`eip155:${chainId}`);

  modal.closeModal();

  //  Create Web3 Provider
  const web3Provider = new ethers.providers.Web3Provider(wcProvider, "any");
  return web3Provider;
}

// This is for getting the wallet provider (except the Magic one)
// For WalletConnect, we need to initialize the WalletConnect provider by invoking the Account.initWalletConnectProvider() function
export async function getWeb3Provider(
  walletType: AllowedWallet,
  chainId: AllowedChainId,
  wcProvider?: Provider,
  web3modal?: import("@web3modal/standalone").Web3Modal,
): Promise<ethers.providers.Web3Provider | undefined> {
  switch (walletType) {
    case "metamask": {
      if (!window.ethereum) throw new Error("Metamask not found");
      const _provider = window.ethereum as EthWalletProvider;

      const _metamaskProvider = _provider.providers
        ? _provider.providers.find(p => p.isMetaMask)
        : _provider.isMetaMask
        ? _provider
        : undefined;

      if (!_metamaskProvider) return;

      // We have to pass "any" if we want to change networks. See https://github.com/ethers-io/ethers.js/issues/1107
      const _web3Provider = new ethers.providers.Web3Provider(_metamaskProvider, "any");
      await _web3Provider.send("eth_requestAccounts", []);
      return _web3Provider;
    }

    case "coinbase": {
      const _coinbaseWallet = new CoinbaseWalletSDK({
        appName: "Affine",
        appLogoUrl: process.env.APP_LOGO_URL,
      });
      const _cbProvider = _coinbaseWallet.makeWeb3Provider(
        RPC_URLS[chainId],
        Number(chainId),
      ) as CoinbaseWalletProvider;

      // We have to pass "any" if we want to change networks. See https://github.com/ethers-io/ethers.js/issues/1107
      const _web3Provider = new ethers.providers.Web3Provider(
        _cbProvider as unknown as ethers.providers.ExternalProvider,
        "any",
      );
      await _web3Provider.send("eth_requestAccounts", []);
      return _web3Provider;
    }

    case "walletConnect": {
      return await getWalletconnectProvider(chainId, wcProvider, web3modal);
    }

    default:
      return;
  }
}
