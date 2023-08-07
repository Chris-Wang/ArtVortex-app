import { gql } from "graphql-tag";
import prisma from "@/db/prisma";
import { Todo } from "@prisma/client";

const resolvers = {
    Query: {
        todos: async () => await prisma.todo.findMany(),
    },
    Mutation: {
        updateTodo: async (parent:Todo, {id, completed}: {id: number, completed: boolean }) => {
            const res = await prisma.todo.update({
                where: {
                    id,
                },
                data: {
                    completed: completed,
                },
            });

            return res.id;
        },
    }
};

export default resolvers;