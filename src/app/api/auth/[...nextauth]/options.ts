import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
    providers: [
        Auth0Provider({
            issuer: process.env.CLIENT_ISSUER as string,
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username...",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password...",
                },
            },
            async authorize(credentials) {
                console.log("authorize", credentials);
                const user = { id: "1", name: "ian", password: "123"};

                if (credentials?.username === user.name
                    && credentials.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        })
    ],
};

export default options;
