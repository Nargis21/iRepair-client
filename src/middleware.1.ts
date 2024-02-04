import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  commonAuthenticatedRoutes,
  hybridRoutes,
  userAccesibleRoutes,
} from "./middleware";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  //   console.log(token, "token middleware");
  const { pathname } = request.nextUrl;

  //get the forwarded pathname
  // const forwardedPathname = request.headers.get("x-forwarded-pathname");
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    if (commonAuthenticatedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(`${process.env.SERVER_URL}/login`);
    }
    return NextResponse.redirect(`${process.env.SERVER_URL}/login`);
  }

  const role = token?.role as string;
  // console.log(role, "role middleware")
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
