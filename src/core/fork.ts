import concurrently from "concurrently";
import { program } from "commander";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "../../.env") });

program.argument("[testFiles]", "Glob of tests files, e.g. test/product.test.ts");

program.parse();

let [testFiles] = program.args;
if (!testFiles) testFiles = "test/**/*.test.ts";

const { result } = concurrently(
  [
    `anvil --fork-url https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY} --port 8545`,
    `anvil --fork-url https://eth-goerli.g.alchemy.comm/v2/${process.env.ALCHEMY_API_KEY} --port 8546`,
    `sleep 5 && yarn run-test src/core/${testFiles}`,
  ],
  // The rpc process does not exit. The process exits successfully if the `yarn test` process exits correctly
  { successCondition: "first", killOthers: ["failure", "success"] },
);

result.then(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res => {
    console.log("Tests finished successfully.");
    process.exit(0);
  },
  err => {
    console.log("Tests failed!");
    console.log({ err });
    process.exit(1);
  },
);
