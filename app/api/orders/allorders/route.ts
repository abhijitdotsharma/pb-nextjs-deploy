import { connect } from "@/lib/connect-db";
import Order from "@/model/Order";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const orders = await Order.find();
    if (!orders) {
      return NextResponse.json({ error: "No orders found" }, { status: 400 });
    }

    return NextResponse.json({
      status: 200,
      orders,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
