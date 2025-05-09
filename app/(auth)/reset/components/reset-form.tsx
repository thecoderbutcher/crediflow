'use client'
import * as z from "zod"
import { zodResolver }from "@hookform/resolvers/zod"
import { useState, useTransition } from "react";
import { FormError } from "../../components/form-error"
import { FormSuccess } from "../../components/form-success"
import { ResetSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { reset } from "../action/reset";

const ResetForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState:{ errors }} = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    }); 

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            reset(values).then((data) => {
                setSuccess(data?.success);
                setError(data?.error);    
            });
        })
    }
    return (
        <form className="flex flex-col gap-4" onSubmit={ handleSubmit(onSubmit) }>
            <div className="flex flex-col gap-2">
            <label htmlFor="email" className={`${errors.email ? 'text-danger' : ''}`}>Email</label>
                <input
                    { ...register('email') } 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Ingreasa tu email de registro" 
                    disabled={ isPending }
                />
                {errors.email && ( <p className="text-sm text-danger">{errors.email.message}</p> )} 
            </div>
            <FormSuccess message={success}/>
            <FormError message={error}/>
            <div>
                <button className="w-full bg-primary text-white py-2 rounded-md">Restablecer contraseña</button>
            </div>
        </form>
    )
}

export default ResetForm