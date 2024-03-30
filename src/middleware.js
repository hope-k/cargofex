import { NextResponse } from "next/server";

export function middleware(request) {
  //   const cookieStore = cookies(request);
  const tracking_number = request.cookies.get("tracking_number")?.value || null;
  const { pathname, origin } = request.nextUrl;
  console.log("SERVER COOKIES ==>", tracking_number, pathname);

  // redirect to the tracking page with ?tracking_number=tracking_number if the cookie exists
  if (tracking_number && pathname !== "/shipment/tracking") {
    return NextResponse.redirect(
      `${origin}/shipment/tracking/?tracking_number=${tracking_number}`
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
