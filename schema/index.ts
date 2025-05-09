import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Email es requerido"}),
    password: z.string().min(1, {message: "Contraseña es requerido"})
});

export const RegisterSchema = z.object({
    name: z.string().min(3, {message: "El nombre es requerido"}),
    email: z.string().email({message: "El email es requerido"}),
    password: z.string().min(8, {message: "Minimo 8 caracteres requerido"})
})

export const ResetSchema = z.object({
    email: z.string().email({  message: "El email es requerido", }),
})

export const NewPasswordSchema = z.object({
    password: z.string().min(8,{  message: "Minimo 8 caracteres requerido", }),
    confirmPassword: z.string().min(8,{  message: "Minimo 8 caracteres requerido", }),
}).refine((data) => data.password === data.confirmPassword,{
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
})
