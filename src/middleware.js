import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  if (/[A-Z]/.test(pathname)) {
    const lowercasePathname = pathname.toLowerCase();
    return NextResponse.redirect(new URL(lowercasePathname, request.url), 301);
  }

  return NextResponse.next();
}