import { NextResponse } from "next/server";
/**
 * 
 * @param req 
 * @returns 
 */
export default function middleware(req) {
   
    const time = Date.now()
    const timeStr = new Date(time).toLocaleDateString();

    const logData = {
        time: timeStr,
        url: req.url
    }
    // console.log('logData', logData)
   return NextResponse.next();
   
}