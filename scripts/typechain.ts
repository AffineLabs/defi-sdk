import axios from "axios";
import * as fse from "fs-extra";
import readline from "readline";
import * as AWS from "aws-sdk";

// load environment variables from a .env file into process.env
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "../.env") });

const awsRegion: string = process.env.AWS_REGION || "";
const smartContractBucket: string = "sc-abis";
const contractVersion: string = process.env.CONTRACT_VERSION || "";

// we won't import the following files
const EXCLUDED_FILES = ["typechain/hardhat.d.ts"];

// get all typechain file names from the s3 bucket
// the s3 directory is https://sc-abis.s3.us-east-2.amazonaws.com/<VERSION>/typechain
async function getTypechainFiles(): Promise<Array<any>> {
  // configure AWS
  AWS.config.update({ region: awsRegion });
  let s3 = new AWS.S3();
  let params = {
    Bucket: smartContractBucket, // we will access the files only from the smart contract bucket
    Delimiter: "", // this will make sure that all subdirectories will also get accessed
    Prefix: contractVersion + "/typechain/", // get only those files which are under '<VERSION>/typechain'
  };
  const { Contents: files } = await s3.makeUnauthenticatedRequest("listObjects", params).promise();
  return files;
}

// read data from the given typechain file
async function readTypechainFile(fileName: string): Promise<string> {
  const { data: typechainData } = await axios.get(fileName);
  return typechainData;
}

// get the typechain file names from the s3 bucket,
// read the files
// and finally write them to the 'typechain' subdirectory in the user's sdk repo
async function importTypechain(): Promise<void> {
  const files = await getTypechainFiles();
  for (let i = 0; i < files.length; i++) {
    const { Key } = files[i];
    let filePath: string = Key;
    const fileName = `https://sc-abis.s3.us-east-2.amazonaws.com/${filePath}`;
    const typechainData = await readTypechainFile(fileName);

    // make sure that each file get's uploaded to the 'typechain' folder
    // so first remove the '<VERSION>/' prefix from the path
    const prefix: string = `${contractVersion}/`;
    filePath = filePath.replace(prefix, "");
    if (EXCLUDED_FILES.includes(filePath)) continue;

    // write typechain data to the given file path
    // fs-extra will make sure that if a directory doesn't exist then it will create one
    await fse.outputFile(filePath, typechainData);

    // log the progress percentage
    const progress = Math.floor(((i + 1) / files.length) * 100);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(progress + "%");
  }
}

importTypechain()
  .then(() => {
    console.log("All typechain files have been imported from the s3 bucket");
    process.exit(0);
  })
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
