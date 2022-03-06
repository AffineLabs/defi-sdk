import concurrently from "concurrently";
import { program } from "commander";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// The ganache process does not exit. The process exits successfully if the `yarn test` process exits correctly

program.argument(
  "[testFiles]",
  "Glob of tests files, e.g. test/product.test.ts"
);

program.parse();

let [testFiles] = program.args;
if (!testFiles) testFiles = "test/**/*.test.ts";

const { result } = concurrently(
  [
    `yarn ganache --fork.url ${process.env.POLYGON_ALCHEMY_URL}`,
    `yarn run-test ${testFiles}`,
  ],
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
