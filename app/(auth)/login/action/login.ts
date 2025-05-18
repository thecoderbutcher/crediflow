'use server'
import * as z from "zod"
import { LoginSchema } from "@/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "../../lib/token";
import { getUserByEmail } from "../../lib/user";
import { sendVerificationEmail } from "../../lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "validateFields.error.issues[0].message" }
  }

  const { email, password } = validateFields.data;

  const exiistingUser = await getUserByEmail(email);
  if (!exiistingUser || !exiistingUser.password || !exiistingUser.email) return { error: 'El email ingresado no está registrado' }

  if (!exiistingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);
    return { success: 'Email de confirmación enviado' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: "Email o contraseña incorrectos" }
        default:
          return { error: "Algo salió mal" }
      }
    }
    throw error;
  }
}
