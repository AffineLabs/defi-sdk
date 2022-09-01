export const DEFAULT_WALLET = "magic";

// The chain id is a hexadecimal string preceeded by "0x"
const rawId = process.env.CHAIN_ID || "80001";
export const CHAIN_ID = `0x${Number(rawId).toString(16)}`;

export const NETWORK_TYPE: "mumbai" | "mainnet" =
  process.env.NEXT_PUBLIC_NETWORK_TYPE === "mainnet" ? "mainnet" : "mumbai";
