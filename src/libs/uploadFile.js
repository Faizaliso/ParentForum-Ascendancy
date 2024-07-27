import { s3Clients } from "@/utils/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile({ key, folder, body }) {
  const bytes = await body.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const fileUpload = await s3Clients.send(
      new PutObjectCommand({
        Key: `${folder}/${key}`,
        ContentType: body.type,
        Bucket: process.env.R2_BUCKETNAME,
        Body: buffer,
      })
    );
    console.log(fileUpload, "Upload success");
  } catch (error) {
    console.log(error);
  }
}
