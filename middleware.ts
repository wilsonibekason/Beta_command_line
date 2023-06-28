import { NextResponse, NextRequest } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["www.wilson.com", "www.wanbek.com"]
    : ["localhost:3000", "127.0.0.1"];

export function middleware(request: NextResponse) {
  const origin = request.headers.get("Origin");
  console.log(origin);
  if ((origin && !allowedOrigins.includes(origin)) || origin) {
    return new NextResponse(null, {
      headers: {
        "Content-Type": "text/plain",
      },
      status: 400,
      statusText: "Bad Request",
    });
  }
}

export const config = {
  matcher: "",
};
