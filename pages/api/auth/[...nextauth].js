import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
// api/auth/xxx の全てのリクエストがNextAuthによって自動的に処理される
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0", // opt-in to Twitter OAuth 2.0
        }),
        // ...add more providers here
    ],
});