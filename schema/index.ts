import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Email is required"}),
    password: z.string().min(1, {message: "Password is required"})
});

export const RegisterSchema = z.object({
    name: z.string().min(3, {message: "Name is required"}),
    email: z.string().email({message: "Email is required"}),
    password: z.string().min(8, {message: "Minimun 8 characters required"})
})

export const CustomerSchema = z.object({
    firstName: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
    lastName: z.string().min(3, 'El apellido debe tener al menos 3 caracteres'),
    email: z.string().email('El email es inválido'),
    idperson: z.string().min(6, 'El DNI debe tener al menos 6 caracteres'),
    address: z.string().min(5, 'La dirección debe tener al menos 5 caracteres'),
    phone: z.string().min(6, 'Teléfono inválido'),
    notes: z.string().optional(),
  })