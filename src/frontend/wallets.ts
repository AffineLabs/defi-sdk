import CoinbaseWalletSDK, { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import { Magic, MagicSDKAdditionalConfiguration } from "magic-sdk";
import { PROVIDER, RPC_URL } from "../core/cache";
import { CHAIN_ID } from "../core/constants";
import { AllowedWallet, EthWalletProvider } from "../types/account";
import WalletConnectProvider from "@walletconnect/web3-provider";

export async function initMagic({
  email,
  testMode,
}: {
  email: string;
  testMode: boolean;
}): Promise<{ magic?: Magic; provider?: ethers.providers.Web3Provider }> {
  let _magic: Magic | undefined, _provider: ethers.providers.Web3Provider | undefined;
  if (email) {
    const magicOptions: MagicSDKAdditionalConfiguration = {
      network: {
        rpcUrl: PROVIDER.connection.url,
        chainId: parseInt(CHAIN_ID, 16),
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
      _provider = new ethers.providers.Web3Provider(_magic.rpcProvider as unknown as ethers.providers.ExternalProvider);
    } catch (error) {
      console.error({ error });
    }
  }

  return { magic: _magic, provider: _provider };
}

export async function getExternalProvider(
  walletType: AllowedWallet,
): Promise<ethers.providers.ExternalProvider | CoinbaseWalletProvider | WalletConnectProvider | undefined> {
  switch (walletType) {
    case "metamask": {
      if (!window.ethereum) return;
      const _provider = window.ethereum as EthWalletProvider;

      return _provider.providers
        ? _provider.providers.find(p => p.isMetaMask)
        : _provider.isMetaMask
        ? _provider
        : undefined;
    }

    case "coinbase": {
      const _coinbaseWallet = new CoinbaseWalletSDK({
        appName: "Affine",
      });
      return _coinbaseWallet.makeWeb3Provider(RPC_URL, parseInt(CHAIN_ID, 16)) as CoinbaseWalletProvider;
    }

    case "walletConnect": {
      const provider = new WalletConnectProvider({
        rpc: {
          [CHAIN_ID]: RPC_URL,
        },
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      return provider;
    }

    default:
      return;
  }
}
