import { NextResponse } from "next/server";
/**
 *
 * @param req
 * @returns
 */

export { default } from "next-auth/middleware";

// export function middleware(req: Request) {
//   const time = Date.now();
//   const timeStr = new Date(time).toLocaleDateString();

//   const logData = {
//     time: timeStr,
//     url: req.url,
//   };
//   // console.log('logData', logData)
//   return NextResponse.next();
// }
