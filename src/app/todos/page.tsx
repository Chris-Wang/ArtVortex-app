import prisma from "@/db/prisma";
import Todo from "@/src/components/todo";

export default async function ToDos() {
    const todos = await prisma.todo.findMany();

    return (
        <main>
            <h1 className="font-bold">Todos</h1>
            <ul>
            {todos.map((todo) => (
                <Todo todo={todo} key="todo.id"/>
            ))}
            </ul>
        </main>
    );
}