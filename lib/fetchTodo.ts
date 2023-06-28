import { Todo } from "@/types"

export default async function fetchTodo(id: string) {
    const res = await fetch(`http://127.0.0.1:4500/todos/${id}`)
    if (!res.ok) return undefined
    const todo: Partial<Todo> = await res.json()
    return todo
}
