"use client";

import { Todo } from "@/types";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition, ChangeEvent, MouseEvent } from "react";
import { FaTrash } from "react-icons/fa";

const TodoCollection = (todo: Todo) => {
  const router = useRouter();
  const [todos, setTodos] = React.useState("");
  const [isPending, setisPending] = useTransition();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isMutating = isPending || setIsLoading;
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(false);
    const res = await fetch(` http://127.0.0.1:4500/todos/${todo.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });
    const newtodo: Todo = await res.json();
    newtodo;
    setIsLoading((prev) => !prev);
    // This is a typoraphical error, rename to transition
    setisPending(() => {
      router.refresh();
    });
  };
  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsLoading(false);
    const res = await fetch(` http://127.0.0.1:4500/todos/${todo.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: todo.id }),
    });
    await res.json();
    setIsLoading((prev) => !prev);
    // This is a typoraphical error, rename to transition
    setisPending(() => {
      router.refresh();
    });
  };

  return (
    <article
      className="my-4 flex justify-between items-center"
      style={{ opacity: !isMutating ? 1 : 0.7 }}
    >
      <label className="text-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          id="completed"
          name="completed"
          onChange={handleChange}
          disabled={isPending}
          className="min-w-[2rem] min-h-[2rem]"
        />

        <button
          onClick={handleDelete}
          disabled={isPending}
          className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </article>
  );
};

export default TodoCollection;
