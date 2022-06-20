export interface IConnectAccount {
  email: string;
  walletType: "magic" | "metamask";
  network: "mainnet" | "mumbai";
  shouldRunMagicTestMode?: boolean;
  getMessage?: (address: string) => Promise<string>;
  verify?: (message: string) => Promise<boolean | undefined>;
}
