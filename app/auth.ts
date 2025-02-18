import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb, saltAndHashPassword } from "@/app/lib/util/auth-utils";
import { signInSchema } from "@/app/lib/schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } =
            await signInSchema.parseAsync(credentials);

          const pwHash: string = saltAndHashPassword(password);

          user = await getUserFromDb(email, pwHash);

          if (!user) {
            throw new Error("Invalid credentials.");
          }

          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
});
