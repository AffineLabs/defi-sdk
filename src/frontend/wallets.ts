import CoinbaseWalletSDK, { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import { Magic, MagicSDKAdditionalConfiguration } from "magic-sdk";
import { getProviderByChainId, RPC_URLS } from "../core/cache";
import { AllowedChainId, AllowedWallet, EthWalletProvider } from "../types/account";
import { UniversalProvider } from "@walletconnect/universal-provider";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { Web3Modal } from "@web3modal/standalone";
import { SignClient } from "@walletconnect/sign-client";

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
    const magicOptions: MagicSDKAdditionalConfiguration = {
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

export async function getWeb3Provider(
  walletType: AllowedWallet,
  chainId: AllowedChainId,
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
      const PROJECT_ID = "0aea81e348295af75127ce1afe81ba05";
      const web3Modal = new Web3Modal({
        projectId: PROJECT_ID,
        standaloneChains: ["eip155:1"],
      });
      const signClient = await SignClient.init({ projectId: PROJECT_ID });
      // const provider = new WalletConnect({
      //   bridge: "https://bridge.walletconnect.org", // Required
      //   qrcodeModal: QRCodeModal,
      // });

      const { uri, approval } = await signClient.connect({
        requiredNamespaces: {
          eip155: {
            methods: ["eth_sign"],
            chains: ["eip155:1"],
            events: ["accountsChanged"],
          },
        },
      });

      const provider = await UniversalProvider.init({
        logger: "info",
        projectId: PROJECT_ID,
        metadata: {
          name: "React App",
          description: "React App for WalletConnect",
          url: "https://walletconnect.com/",
          icons: ["https://avatars.githubusercontent.com/u/37784886"],
        },
        client: signClient, // optional instance of @walletconnect/sign-client
      });

      if (uri) {
        web3Modal.openModal({ uri, standaloneChains: ["eip155:1"] });
        await approval();
        await provider.connect({
          namespaces: {
            eip155: {
              methods: ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "personal_sign", "eth_signTypedData"],
              chains: ["eip155:1"],
              events: ["chainChanged", "accountsChanged"],
              rpcMap: {
                1: "https://rpc.walletconnect.com?chainId=eip155:1&projectId=" + PROJECT_ID,
              },
            },
          },
        });
        web3Modal.closeModal();
      }

      // We have to pass "any" if we want to change networks. See https://github.com/ethers-io/ethers.js/issues/1107
      return new ethers.providers.Web3Provider(provider as unknown as ethers.providers.ExternalProvider, "any");
    }

    default:
      return;
  }
}
