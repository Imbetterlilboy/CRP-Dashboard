import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Simple auth check - in a real app, you'd verify JWT tokens or session cookies
  const isAuthenticated = request.cookies.get("auth-token")
  const isAuthPage = request.nextUrl.pathname.startsWith("/login")
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard")

  // Redirect unauthenticated users trying to access dashboard
  if (isDashboard && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Redirect authenticated users away from login page
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
