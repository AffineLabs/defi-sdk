export type AllowedWallet = "magic" | "metamask" | "coinbase" | "walletConnect";

export interface IConnectAccount {
  email?: string;
  walletType: AllowedWallet;
  network?: "mainnet" | "mumbai";
  shouldRunMagicTestMode?: boolean;
  getMessage?: (address: string) => Promise<string>;
  verify?: (message: string, address: string) => Promise<boolean | undefined>;
}

export interface MetamaskError {
  code: number;
  message: string;
  stack: string;
}

export interface IProvider {
  isMetaMask?: boolean;
  isCoinbaseWallet?: boolean;
  setAppInfo?: (appName: string | undefined, appLogoUrl: string | null | undefined) => void;
}

export interface EthWalletProvider extends IProvider {
  providers?: IProvider[];
}
