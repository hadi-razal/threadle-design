import { S3Client, PutObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";



// Assuming that you have AWS credentials and region set in environment variables
const region = process.env.NEXT_PUBLIC_AWS_S3_REGION;
const accessKeyId = process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY;

if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error("AWS S3 credentials are missing.");
}

const s3ClientConfig: S3ClientConfig = {
    region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
};

const s3Client = new S3Client(s3ClientConfig);


function sanitizeFileName(originalFileName: string) {
    const sanitizedFileName = originalFileName.replace(/\s+/g, '-');
    const cleanedFileName = sanitizedFileName.replace(/[^a-zA-Z0-9-]/g, '');

    return cleanedFileName;
}

function generateUniqueFileName(originalFileName: string) {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(7);
    const sanitizedFileName = sanitizeFileName(originalFileName);
    
    const uniqueFileName = `${timestamp}_${randomString}_${sanitizedFileName}`;
    return uniqueFileName;
}


export async function uploadFileToS3(file: Buffer, originalFileName: string) {
    try {
        const fileBuffer = file;
        const uniqueFileName = generateUniqueFileName(originalFileName);

        const params = {
            Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
            Key: `images/${uniqueFileName}`,
            Body: fileBuffer,
            ContentType: "image/jpg"
        };

        const command = new PutObjectCommand(params);

        await s3Client.send(command);

        const s3Url = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/images/${uniqueFileName}`;

        console.log(s3Url);

        return { fileName: uniqueFileName, s3Url };
    } catch (error) {
        console.log(error)
    }
}
