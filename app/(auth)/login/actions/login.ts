'use server'
import * as z from "zod"
import { LoginSchema } from "@/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";


export const login = async(values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);   

    if (!validateFields.success) {
        return {error: "validateFields.error.issues[0].message"}
    }

    const { email, password } = validateFields.data;
    
    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch(error) {
        if (error instanceof AuthError) {
            switch(error.type) {
                case 'CredentialsSignin':
                    return { error: "Email o contraseña incorrectos" }
                default:
                    return { error: "Algo salió mal" }
            }
        }
        throw error;        
    } 
}