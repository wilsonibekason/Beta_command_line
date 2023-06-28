import { Todo } from "@/types";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/users";
const API_KEY: string = process.env.API_KEY as string;

export async function GET() {
  try {
    const res = await fetch(DATA_SOURCE_URL);
    const todos: Todo[] = await res.json();
    return NextResponse.json(todos);
  } catch (error: unknown) {
    console.error("Error fetching todos:", error);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { id }: Partial<Todo> = await request.json();
    if (!id) return NextResponse.json({ message: "Todo ID not found" });

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "API-Key": API_KEY },
    });

    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.error();
  }
}

export async function PUT(request: Request) {
  try {
    const { id, completed, description, name }: Todo = await request.json();
    if (!id || !description || !name)
      return NextResponse.json({ message: "Enter a valid field" });

    const newPost = await fetch(`${DATA_SOURCE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "API-Key": API_KEY },
      body: JSON.stringify({ completed, description, name }),
    });

    const updatedTodo: Todo = await newPost.json();
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const { name, id, description }: Partial<Todo> = await request.json();
    if (!id || !name || !description)
      return NextResponse.json({ message: "Enter a valid field" });

    const response = await fetch(DATA_SOURCE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "API-Key": API_KEY },
      body: JSON.stringify({ name, id, description }),
    });

    const createdTodo: Todo = await response.json();
    return NextResponse.json(createdTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.error();
  }
}
