import { uploadFileToS3 } from "@/actions/awsS3Upload";
import connectMongoDB from "@/libs/db";
import CategoryModel from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";



// creating a new category and uploading its cover photo to amazon s3 and saving the url and other datas to database

export async function POST(request: NextRequest) {
    try {
        connectMongoDB();
        const formData = await request.formData();
        const title = formData.get("title");

        const file = formData?.get("file");
        console.error("1");

        console.error("2");

        let aws; // Declare aws variable outside the if block

        if (file instanceof Blob) {
            const fileBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(fileBuffer);
            aws = await uploadFileToS3(buffer, title as string);
        }

        console.error("3");

        const slugifyCategoryName = slugify(title as string, { lower: true });

        console.error("4");

        await CategoryModel.create({
            categoryName: title,
            slugifyName: slugifyCategoryName,
            imageURL: aws?.s3Url || undefined
        });

        console.error("7");
        console.log("Category created successfully");

        return NextResponse.json({ data: title, message: slugifyCategoryName });
    } catch (error) {
        console.error("Error creating new category:", error);
        return NextResponse.json({ message: "Error in creating a new category", success: false, error });
    }
}



// Getting all categories from database

export async function GET(request: NextRequest) {
    try {
        connectMongoDB();

        const tdCategory = await CategoryModel.find({})

        return NextResponse.json({ tdCategory, success: true });
    } catch (error) {
        console.error("error fetching all categories:", error);
        return NextResponse.json({ message: "Error fetching all categories", success: false, error });
    }
}