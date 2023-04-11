"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concurrently_1 = __importDefault(require("concurrently"));
const commander_1 = require("commander");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../.env") });
commander_1.program.argument("[testFiles]", "Glob of tests files, e.g. test/product.test.ts");
commander_1.program.parse();
let [testFiles] = commander_1.program.args;
if (!testFiles)
    testFiles = "test/**/*.test.ts";
const { result } = (0, concurrently_1.default)([
    `anvil --fork-url https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY} --port 8545`,
    `anvil --fork-url https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY} --port 8546`,
    `sleep 5 && yarn run-test src/core/${testFiles}`,
], 
// The rpc processes do not exit. The process exits successfully if the `yarn test` process exits correctly
{ successCondition: "first", killOthers: ["failure", "success"] });
result.then(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
res => {
    console.log("Tests finished successfully.");
    process.exit(0);
}, err => {
    console.log("Tests failed!");
    console.log({ err });
    process.exit(1);
});
