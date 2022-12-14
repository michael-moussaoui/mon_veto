import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	secret: process.env.JWT_SECRET,
});
