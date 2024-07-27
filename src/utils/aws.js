import { S3Client } from "@aws-sdk/client-s3";

export const s3Clients = new S3Client({
  region: "apac",
  endpoint: process.env.R2_CLOUDFLARE_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESSID,
    secretAccessKey: process.env.R2_SECRETKEY,
  },
});
