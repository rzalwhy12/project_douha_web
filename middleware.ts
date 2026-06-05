import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Izinkan akses ke halaman login itu sendiri
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  // Proteksi semua route /admin/*
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get("admin_session");

    if (!session || session.value !== "authenticated") {
      // Redirect ke halaman login
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
