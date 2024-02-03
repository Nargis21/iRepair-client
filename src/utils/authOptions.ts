import { db } from "@/lib/db-connect";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "irepair",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your email.....",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        try {
          const mongodb = await db();
          const data = await mongodb.collection("users").findOne(
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            { projection: { _id: 0, password: 0 } }
          );
          console.log("data", data);
          if (data) {
            return {
              ...data,
            };
          }
        } catch (error: any) {
          console.log("error", error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token, "token auth option")
      // console.log(user, "user auth option")
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      // console.log(session, "session auth option")
      // console.log(token, "token auth option inside session")

      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
