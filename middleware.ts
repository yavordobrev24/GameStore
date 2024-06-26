import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";

const guestRoutes = ["/user/login", "/user/register"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isGuestRoute = guestRoutes.includes(path);
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (isGuestRoute && session) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
