import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = "sample_test_token_12345";
  const { pathname } = req.nextUrl;

  const isRoot = pathname === "/";
  const PROTECTED_ROUTES = ["/dashboard", "/products"];

  // 🔹 If user is already authenticated, block /login
  if (token && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 🔹 If user is not authenticated, block root & private routes
  const needsAuth =
    isRoot || PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  if (!token && needsAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔹 Allow request and add header
  const res = NextResponse.next();
  res.headers.set("x-powered-by", "Culinex Middleware - Secure Access Layer");
  return res;
}

// Include root, login, and protected routes
export const config = {
  matcher: ["/", "/login", "/dashboard/:path*", "/products/:path*"],
};
