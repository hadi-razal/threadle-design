import { NextResponse } from "next/server";

export async function GET() {

    try {
        const response = NextResponse.json({ message: "LogOut successful", success: true })

        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) })
        response.cookies.set("isAdmin", "", { httpOnly: true, expires: new Date(0) })

        return response

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: error.message, success: false })
    }
}

