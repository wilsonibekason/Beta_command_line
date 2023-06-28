import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export default async function GET(request: Request) {
  const origin = request.headers.get("Origin");
  const remaining = await limiter.removeTokens(1);
  console.log("remaining", remaining);

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 409,
      statusText: "Too many Request",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }
  return new Response("welcome back, Wilson Ibekason");
}
