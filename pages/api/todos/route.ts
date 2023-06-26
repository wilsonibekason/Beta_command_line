import { Todo } from "@/types";
import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https;//jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();
  return NextResponse.json(todos);
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json({ message: "Todo ID not found" });
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "API-Key": "" },
  });
}
