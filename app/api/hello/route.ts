import connectDB from "@/lib/connect-db";

connectDB();

export async function GET(Request) {
    return new Response("This is a new API route");
}