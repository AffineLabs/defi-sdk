import axios from "axios";
const fse = require("fs-extra");
let AWS = require("aws-sdk");

const awsKey: string = process.env.AWS_ACCESS_KEY_ID || "";
const awsSecret: string = process.env.AWS_SECRET_ACCESS_KEY || "";
const awsRegion: string = process.env.AWS_REGION || "";
const smartContractBucket: string = process.env.S3_BUCKET_FOR_SMART_CONTRACTS || "";
const contractVersion: string = process.env.CONTRACT_VERSION || "";

// configure AWS
AWS.config.update({ accessKeyId: awsKey, secretAccessKey: awsSecret, region: awsRegion });

// get all typechain file names from the s3 bucket
// the s3 directory is https://sc-abis.s3.us-east-2.amazonaws.com/<VERSION>/typechain
async function getTypechainFiles(): Promise<Array<any>> {
  let s3 = new AWS.S3();
  let params = {
    Bucket: smartContractBucket, // we will access the files only from the smart contract bucket
    Delimiter: "", // this will make sure that all subdirectories will also get accessed
    Prefix: contractVersion + "/typechain/src/testnet/", // get only those files which are under '<VERSION>/typechain'
  };
  const { Contents: files } = await s3.listObjects(params).promise();
  return files;
}

// read data from the given typechain file
async function readTypechainFile(fileName: string): Promise<string> {
  const { data: typechainData } = await axios.get(fileName);
  return typechainData;
}

// write typechain data to the given file path
async function WriteTypechainFile(filePath: string, fileData: string): Promise<void> {
  // make sure that each file get's uploaded to the 'typechain' folder
  // so first remove the '<VERSION>/' prefix from the path
  const prefix: string = `${contractVersion}/`;
  filePath = filePath.replace(prefix, "");
  // fs-extra will make sure that if a directory doesn't exist then it will create one
  await fse.outputFile(filePath, fileData);
}

// get the typechain file names from the s3 bucket,
// read the files
// and finally write them to the 'typechain' subdirectory in the user's sdk repo
async function importTypechain(): Promise<void> {
  const files = await getTypechainFiles();
  for (let i = 0; i < files.length; i++) {
    const { Key } = files[i];
    const filePath: string = Key;
    const fileName = "https://sc-abis.s3.us-east-2.amazonaws.com/" + filePath;
    const typechainData = await readTypechainFile(fileName);
    await WriteTypechainFile(filePath, typechainData);
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
