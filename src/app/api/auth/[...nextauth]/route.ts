import NextAuth from "next-auth";
import { options } from "@/lib/authOptions";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
