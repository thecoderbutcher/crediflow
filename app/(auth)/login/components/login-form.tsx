'use client'
import * as z from "zod"
import { zodResolver }from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema } from "@/schema";
import { FormSuccess } from "../../components/form-success";
import { FormError } from "../../components/form-error";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { login } from "../action/login";
import Link from "next/link";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get('error') === "OAuthAccountNotLinked" ? 'El email está asociado a otra cuenta' : '';
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm<z.infer<typeof LoginSchema>>({
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
                <label htmlFor="email" className={`${errors.email ? 'text-danger' : ''}`}>Email</label>
                <input 
                    {...register('email')}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="ejemplo@email.com" 
                    disabled={isSubmitting}
                    className={`${errors.email ? 'outline-danger outline-1' : ''}`}
                />
                {errors.email && ( <p className="text-sm text-danger">{errors.email.message}</p> )} 
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className={`${errors.password ? 'text-danger' : ''}`}>Contraseña</label>
                <input 
                    {...register('password')}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="********" 
                    disabled={isPending}   
                    className={`${errors.password ? 'outline-danger outline-1' : ''}`}
                />
                {errors.password && ( <p className="text-sm text-danger">{errors.password.message}</p> )} 

            </div>
            <div className="flex flex-col gap-2">
                <Link href="/reset" className="text-secondary/70 text-[14px]">¿Olvidaste tu contraseña?</Link> 
            </div>
            <FormSuccess message={success} />
            <FormError message={error || urlError} />
            <div className="flex flex-col gap-2">
                <button className="w-full bg-primary text-white py-2 rounded-md" disabled={isSubmitting}>Iniciar Sesión</button>
            </div>
        </form> 
    )
};