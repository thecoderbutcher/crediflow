import NextAuth from "next-auth"
import  authConfig from "@/auth.config"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getUserById } from "@/app/(auth)/lib/user"
import { UserRole } from "@prisma/client"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/login",
        error: "/error"
    },
    events: {
        async linkAccount({user}) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            // Allow OAuth without email verification
            if (account?.provider !== "credentials" ) return true;

            if (!user.id) return false;
            const existingUser = await getUserById(user.id);
            if(!existingUser?.emailVerified) return false;

            return true;
        },
        async session({ token, session }){
          if(token.sub && session.user){
              session.user.id = token.sub
          } 

          if(token.role && session.user){
              session.user.role = token.role as UserRole
          }
          return session; 
        },
        async jwt({ token }){
            if(!token.sub) return token;
            
            const user = await getUserById(token.sub);
            if(!user) return token;
            
            token.role = user.role;

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})