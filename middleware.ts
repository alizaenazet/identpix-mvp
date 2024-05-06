import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/register')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("country", request.geo?.country ?? "ID")
    requestHeaders.set("region", request.geo?.region ?? "JI")
    requestHeaders.set("ip", request.ip ?? "192.168.1.1")
    return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
    }

  if (request.nextUrl.pathname.startsWith('/coming-soon')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("ip", request.ip ?? "192.168.1.1")
    return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
  }
}