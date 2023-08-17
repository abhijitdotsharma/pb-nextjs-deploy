import connectDB from "@/lib/connect-db";
import { NextResponse } from "next/server";

connectDB();


export async function GET(request : Request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}