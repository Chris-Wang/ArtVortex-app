import { gql } from "graphql-tag";

const typeDefs = gql`
    type Query {
        todos: [todo!]!
    }

    type Mutation {
        updateTodo(id: Int, completed: Boolean): Int
    }

    type todo {
        id: Int!
        title: String
        completed: Boolean
    }
`; 

export default typeDefs;