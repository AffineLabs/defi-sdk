import { ethers } from "ethers";
import { Magic, MagicSDKAdditionalConfiguration } from "magic-sdk";
import { PROVIDER } from "../core/cache";
import { CHAIN_ID } from "../core/constants";
import { AllowedWallet } from "../types/account";

export const initMagic = async ({
  email,
  testMode,
}: {
  email: string;
  testMode: boolean;
}): Promise<{ magic?: Magic; provider?: ethers.providers.Web3Provider }> => {
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
};

export const getExternalProvider = (walletType: AllowedWallet) => {
  if (!window.ethereum) return;

  return (
    window.ethereum.providers
      ? window.ethereum.providers.find(
          p => (walletType === "metamask" && p.isMetaMask) || (walletType === "coinbase" && p.isCoinbaseWallet),
        )
      : (walletType === "metamask" && window.ethereum.isMetaMask) ||
        (walletType === "coinbase" && window.ethereum.isCoinbaseWallet)
      ? window.ethereum
      : undefined
  ) as ethers.providers.ExternalProvider | undefined;
};
