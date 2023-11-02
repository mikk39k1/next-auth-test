import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await fetch("http://localhost:4321/api/v1/kinde-user/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials?.email})
        })

        const user = await response.json();

        const passwordCorrect = await compare(credentials?.password || '', user?.password);

        console.log({passwordCorrect})

        if(passwordCorrect){
          return {
            id: user?.id,
            email: user?.email,
          }
        }

        console.log({user})
        return null;
      },
      }),
  ],
    })

export {handler as GET, handler as POST}
