import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

type Feedback = {
  name: string;
  email: string;
  message: string;
};

export default async function POST(req: Request) {
  const data: Feedback = await req.json();
  console.log(data);
  const { name, email, message } = data;
  return NextResponse.json({ name, email, message });
}
