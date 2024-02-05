import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  // const { email, role } = token;
  //   console.log(token, "token middleware");
  const { pathname } = request.nextUrl;

  const role = token?.role as string;
  // console.log(role, "role middleware")

  if (role === "admin" && pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(`${process.env.BASE_URL}`);
}

export const config = {
  matcher: ["/admin/:page*"],
};
