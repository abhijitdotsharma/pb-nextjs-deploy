import { connect } from "@/lib/connect-db";
import Conversation from "@/model/Conversation";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const url = new URL(request.url);

    const orderId = url.searchParams.get("order");

    // filter conversations by orderid and return
    // const conversations = await Conversation.find({ order: orderId });
    const conversations = await Conversation.find();
    if (!conversations) {
      return NextResponse.json(
        { error: "No Conversations found" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: 200,
      conversations,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
