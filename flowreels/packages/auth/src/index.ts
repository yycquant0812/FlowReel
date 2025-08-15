import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

import { db } from "@acme/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Discord({ clientId: "", clientSecret: "" })],
});