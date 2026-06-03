import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /en → / and /en/anything → /anything
  // so the default locale (English) always lives at the root URL.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const destination = pathname === "/en" ? "/" : pathname.slice("/en".length);
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|_vercel|studio|.*\\..*).*)"],
};
