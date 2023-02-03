import CoinbaseWalletSDK, { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import { getProviderByChainId, RPC_URLS } from "../core/cache";
import { AllowedChainId, AllowedWallet, EthWalletProvider, MagicSDKOptions } from "../types/account";
import Provider, { UniversalProvider } from "@walletconnect/universal-provider";
import { ALLOWED_CHAIN_IDS, WALLETCONNECT_PROJECT_ID } from "../core/constants";

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
  setWCProvider: (wcProvider: Provider) => void,
): Promise<ethers.providers.Web3Provider | undefined> {
  // Setup Modal
  const Web3ModalStandalone = await import("@web3modal/standalone"); // dynamic import to support it on commonjs
  const modal = new Web3ModalStandalone.Web3Modal({
    projectId: WALLETCONNECT_PROJECT_ID,
    standaloneChains: ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
  });

  // Initialize Universal Provider
  const universalProvider = await UniversalProvider.init({
    logger: process.env.NODE_ENV !== "production" ? "debug" : undefined,
    relayUrl: "wss://relay.walletconnect.com",
    projectId: WALLETCONNECT_PROJECT_ID,
  });

  // Open modal on `display_uri` event
  universalProvider.on("display_uri", async (uri?: string) => {
    console.log({ uri });
    modal?.openModal({ uri, standaloneChains: ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`) });
  });

  // Trigger `display_uri` event
  await universalProvider.connect({
    namespaces: {
      eip155: {
        methods: [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "personal_sign",
          "eth_signTypedData",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
        ],
        chains: ALLOWED_CHAIN_IDS.map(c => `eip155:${c}`),
        events: ["chainChanged", "accountsChanged"],
        rpcMap: RPC_URLS,
      },
    },
  });

  if (universalProvider?.session) {
    // we have an active session
    setWCProvider(universalProvider);
    universalProvider.setDefaultChain(`eip155:${chainId}`);

    const _web3Provider = new ethers.providers.Web3Provider(
      universalProvider as unknown as ethers.providers.ExternalProvider,
      "any",
    );
    modal?.closeModal();
    return _web3Provider;
  }

  console.log("No session found");
  return;
}

export async function getWeb3Provider(
  walletType: AllowedWallet,
  chainId: AllowedChainId,
  setWCProvider: (provider: Provider) => void,
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
      return await getWalletconnectProvider(chainId, setWCProvider);
    }

    default:
      return;
  }
}
