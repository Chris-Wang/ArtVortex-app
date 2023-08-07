"use client";

import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import apolloClient from "@/src/apolloClient";
import { gql } from "@apollo/client";

export default function ToDo({ todo } : { todo: Todo }) {
    const router = useRouter();
    const update = async (todo: Todo) => {
        await fetch('api', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: !todo.completed,
                id: todo.id,
            }),
        });
        router.refresh();
    }

    const mutateTodo = async (todo: Todo) => {
        const res = await apolloClient.mutate({
            mutation: gql`
                mutation ($id: Int, $completed: Boolean) {
                    updateTodo(id: $id, completed: $completed)
                }
            `,
            variables: {
                id: +todo.id,
                completed: !todo.completed,
            },
        });
    }

    return (
        <li key={todo.id} className="space-x-4">
          <input
            onChange={() => mutateTodo(todo)}
            type="checkbox"
            checked={todo.completed}
          />
          {todo.title}
        </li>
    );
}