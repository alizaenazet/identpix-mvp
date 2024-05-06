import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/register')) {
    console.log("coook");
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("country", request.geo?.country ?? "noCountry")
    requestHeaders.set("region", request.geo?.region ?? "noRegion")
    requestHeaders.set("ip", request.ip ?? "noIp")
    return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
    }
}