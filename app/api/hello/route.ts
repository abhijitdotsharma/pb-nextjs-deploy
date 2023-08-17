import connectDB from "@/lib/connect-db";
import { NextApiRequest } from "next/types";

connectDB();

export async function GET(Request: NextApiRequest) {
    return new Response("This is a new API route");
}