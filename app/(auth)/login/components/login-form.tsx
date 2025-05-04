'use client'
import * as z from "zod"
import { zodResolver }from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema } from "@/schema";
import { FormSuccess } from "../../components/form-success";
import { FormError } from "../../components/form-error";
import { useState, useTransition } from "react";
import { login } from "../actions/login";
export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    }); 

    const onSubmit = (value: z.infer<typeof LoginSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            login(value).then((data) => {
                setSuccess(data?.success);
                setError(data?.error);    
            });
        })
    }
    return (  
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input 
                    {...register('email')}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="ejemplo@email.com" 
                    disabled={isPending}
                />
                {errors.email && ( <p className="text-sm text-danger">{errors.email.message}</p> )} 
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Contraseña</label>
                <input 
                    {...register('password')}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="********" 
                    disabled={isPending}   
                />
                {errors.password && ( <p className="text-sm text-danger">{errors.password.message}</p> )} 

            </div>
            <div className="flex flex-col gap-2">
                <button className="w-full bg-primary text-white py-2 rounded-md">Iniciar Sesión</button>
            </div>
            <FormSuccess message={success} />
            <FormError message={error} />
        </form> 
    )
};