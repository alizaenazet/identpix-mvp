import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    
  if (request.nextUrl.pathname.startsWith('/register-account')) {
    return NextResponse.rewrite(new URL('/register', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/register-member')) {
    return NextResponse.rewrite(new URL('/register', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/register-trial')) {
    return NextResponse.rewrite(new URL('/register', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/register-guest')) {
    return NextResponse.rewrite(new URL('/register', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/pricings')) {
    return NextResponse.rewrite(new URL('/pricing', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/register')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("country", request.geo?.country ?? "nCnty")
    requestHeaders.set("region", request.geo?.region ?? "nRgin")
    requestHeaders.set("ip", request.ip ?? "noIP")
    return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
    }

  if (request.nextUrl.pathname.startsWith('/coming-soon')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("ip", request.ip ?? "noIP")
    return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
  }
}