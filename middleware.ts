import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/register')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("country", request.geo?.country ?? "nCnty")
    requestHeaders.set("region", request.geo?.region ?? "nRgin")
    requestHeaders.set("ip", request.ip ?? "noIp")
    return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
    }
}