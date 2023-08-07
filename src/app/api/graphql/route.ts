import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import resolvers from "@/src/graphql/resolvers";
import typeDefs from "@/src/graphql/types.graphql";

// const resolvers = {
//     Query: {
//         hello: () => "world",
//     },
// };

// const typeDefs = gql`
//     type Query {
//         hello: String
//     }
// `;

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}