import concurrently from "concurrently";
import { program } from "commander";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

program.argument(
  "[testFiles]",
  "Glob of tests files, e.g. test/product.test.ts"
);

program.parse();

let [testFiles] = program.args;
if (!testFiles) testFiles = "test/**/*.test.ts";

// We need to pin a block number because of this issue: https://github.com/trufflesuite/ganache/issues/2122
// The ganache issue links to this issue: https://github.com/mds1/convex-shutdown-simulation/issues/7, which links to
// this PR: https://github.com/mds1/convex-shutdown-simulation/pull/4 which shows that pinning a block number fixes the issue
const { result } = concurrently(
  [
    `yarn ganache --fork.url ${process.env.POLYGON_ALCHEMY_URL} --fork.blockNumber 25450771`,
    `yarn run-test ${testFiles}`,
  ],
  // The ganache process does not exit. The process exits successfully if the `yarn test` process exits correctly
  { successCondition: "first", killOthers: ["failure", "success"] }
);

result.then(
  (res) => {
    console.log("Tests finished successfully.");
    process.exit(0);
  },
  (err) => {
    console.log("Tests failed!");
    console.log({ err });
    process.exit(1);
  }
);
