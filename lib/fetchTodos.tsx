import { Todo } from "@/types";

export default async function FetchTodo() {
  const res = await fetch("http://127.0.0.1:4500/todos");
  const todos: Todo[] = await res.json();
  return todos;
}
