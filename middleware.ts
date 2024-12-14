import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  console.dir("request 👇 ");
  console.log(request);

  // Example: Redirect unauthorized users
  // if (pathname.startsWith("/admin") && !request.cookies.has("token")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify the routes where the middleware should apply
export const config = {
  // matcher: ["/admin/:path*"], // Only applies to /admin and sub-routes
  matcher: "/news", // Only applies to /news
};
