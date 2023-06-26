import type { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default async function GET(request: Response) {
  const { searchParams } = new URL(request.url);
  const obj = Object.fromEntries(searchParams.entries());
  return NextResponse.json(obj);
}
