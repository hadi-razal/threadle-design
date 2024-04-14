import { getDataFromToken } from "@/helpers/getDataFromToken";
import CartModel from "@/models/cartItemModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const shippedOrders = await CartModel.find({ isPaid: true, isShipped: true, isDelivered: false })
        return NextResponse.json({ message: " fetched the delivered orders", shippedOrders });
    } catch (error) {
        console.error(error);
        return NextResponse.json(new Error("Error in fetching the delivered orders"));
    }
}



export async function POST(req: NextRequest) {
    try {

        const { cartId } = await req.json()

        if (!cartId) {
            return NextResponse.json({ message: "Unauthenticated Access Error while fetching the cart items", success: false });
        }

        const cartItem = await CartModel.findByIdAndUpdate({ _id: cartId }, { isShipped: true, shippedDate: Date.now() });

        return NextResponse.json({ message: "Marked all cart items as paid", success: true, cartItem });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error while marking all cart items as paid", success: false, error });
    }
}


export async function PUT(req: NextRequest) {
    try {

        const { cartId } = await req.json()

        if (!cartId) {
            return NextResponse.json({ message: "Unauthenticated Access Error while fetching the cart items", success: false });
        }

        const cartItem = await CartModel.findByIdAndUpdate({ _id: cartId }, { isShipped: false });

        return NextResponse.json({ message: "Marked all cart items as paid", success: true, cartItem });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error while marking all cart items as paid", success: false, error });
    }
}

