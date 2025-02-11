// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/postitems/Arrabbiata-Pasta") {
    return NextResponse.redirect("https://www.fastcookiteasy.com/postitems/arrabbiata-pasta", 301); // Permanent Redirect
  }

  if (pathname === "/postitems/curried-sausage") {
    return NextResponse.redirect("https://www.fastcookiteasy.com/postitems/curried-sausages", 301); // Permanent Redirect
  }

  // If no match, just continue the request
  return NextResponse.next();
}
