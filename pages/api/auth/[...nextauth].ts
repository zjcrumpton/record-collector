import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FB_ID || "",
      clientSecret: process.env.FB_SECRET || "",
    }),
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID || "",
      clientSecret: process.env.SPOTIFY_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  jwt: { secret: "a-really-good-secret" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }

      return session;
    },
  },
});
