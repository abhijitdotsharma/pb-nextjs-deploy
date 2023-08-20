import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  console.log("middleware: path", path);

  const isPublicPath =
    path === "/signup" || path === "/verifyemail" || path === "/login";

  const token = request.cookies.get("token")?.value || "";
  console.log("token - ", token);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/any", "/dashboard"],
};
/*
  // Ideally there should be a regex in matcher that catches all routes and is private except /verifyemail
  // currently there is a bug in next, that doesnt allow the css to be loaded when that is done.
    export const config = { 
      matcher: "/((?!verifyemail).*)"
    }
  // refer to this - https://stackoverflow.com/a/73229290
  */
