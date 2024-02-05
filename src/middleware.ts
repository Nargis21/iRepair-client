import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hybridRoutes = ["/login", "/register"];
const commonAuthenticatedRoutes = ["/dashboard", "/booking"];
const userAccesibleRoutes = ["/user/my-bookings"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    if (commonAuthenticatedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(
        `${process.env.SERVER_URL}/login?redirect=${pathname}`
      );
    }
    return NextResponse.redirect(
      `${process.env.SERVER_URL}/login?redirect=${pathname}`
    );
  }

  const role = token?.role as string;
  if (
    (token &&
      commonAuthenticatedRoutes.some((route) => pathname.startsWith(route))) ||
    (role === "admin" && pathname.startsWith("/admin")) ||
    (role === "user" && userAccesibleRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(`${process.env.SERVER_URL}`);
}

export const config = {
  matcher: [
    //hybrid routes
    "/login",
    "/register",
    //user routes
    "/user/:page*",
    //admin routes
    "/admin/:page*",
    //common authenticated routes
    "/dashboard",
    "/booking/:page*",
  ],
};
