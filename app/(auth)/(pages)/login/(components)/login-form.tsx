'use client'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { LoginSchema } from "@/schema";
import { FormSuccess } from "../../(components)/form-success";
import { FormError } from "../../(components)/form-error";
export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>();
    return ( 
        <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="emal">Email</label>
                <input type="email" name="email" id="email" placeholder="ejemplo@email.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="********" />

            </div>
            <div className="flex flex-col gap-2">
                <FormSuccess message="Login exitoso" />
                <FormError message="Error en el login" />
                <button className="w-full bg-primary text-white py-2 rounded-md">Iniciar Sesión</button>
            </div>
        </form> 
    )
};