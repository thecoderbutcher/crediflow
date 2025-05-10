'use client'
import * as z from "zod"
import { zodResolver }from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useState, useTransition } from "react";
import { CustomerSchema } from "@/schema";

import FormGroup from '@/app/(protected)/components/FormGroup';
import Image from 'next/image'
import { FaLocationDot, FaPhoneFlip, FaNoteSticky, FaUser } from "react-icons/fa6";
import { createCustomer } from "../action/create";
import { FormSuccess } from "@/app/(auth)/components/form-success";
import { FormError } from "@/app/(auth)/components/form-error";
import { getSession } from "next-auth/react";
import { justNumbers } from "@/app/lib/utils";
const FormCreateCustomer = () => {
    const [employeeId, setEmployeeId] = useState<string | undefined>();

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            setEmployeeId(session?.user.id);
        };
        fetchSession();
    }, []); 
    
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof CustomerSchema>>({
        resolver: zodResolver(CustomerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            idperson: "",
            address: "",
            phone: "",
            notes: "",
        }        
    })

    const onSubmit = (values: z.infer<typeof CustomerSchema>) => {
        setError('');
        setSuccess('');
        startTransition(() => {
            createCustomer(values, employeeId).then((data) => {
                setSuccess(data?.success);
                setError(data?.error);    
            });
        })
    }
    return (
        <form className='flex flex-col gap-8 py-8 px-4 bg-darkText shadow-md items-center mt-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center justify-center'>
                <Image src={'/app/default-user.webp'} width={40} height={40} alt='userphoto'/> 
            </div>
            <FormGroup Icon={FaUser} labelFor="name" labelText="Nombre" errorMessage={errors.firstName?.message}>
                <input 
                    {...register('firstName')}
                    type="text" 
                    name='firstName' 
                    placeholder='Ingresar nombres' 
                    className="flex w-full outline-none focus:outline-none border-none"
                    disabled={isPending}
                /> 
            </FormGroup>
            <FormGroup Icon={FaUser} labelFor="lastname" labelText="Apellido" errorMessage={errors.lastName?.message}>
                <input 
                    {...register('lastName')}
                    type="text" 
                    name='lastName' 
                    placeholder='Ingresar apellidos' 
                    className="flex w-full outline-none focus:outline-none border-none" 
                    disabled={isPending}
                /> 
            </FormGroup>
            <FormGroup Icon={FaLocationDot} labelFor="idperson" labelText="DNI" errorMessage={errors.idperson?.message}>
                <input 
                    {...register('idperson')}
                    type="text" 
                    name='idperson' 
                    onKeyDown={(event)=> justNumbers(event)}
                    placeholder='Ingresar numero de documento' 
                    className="flex w-full outline-none focus:outline-none border-none" 
                    disabled={isPending}
                /> 
            </FormGroup> 
            <FormGroup Icon={FaLocationDot} labelFor="email" labelText="Email" errorMessage={errors.email?.message}>
                <input 
                    {...register('email')}
                    type="email" 
                    name='email' 
                    placeholder='Ingresar email' 
                    className="flex w-full outline-none focus:outline-none border-none" 
                    disabled={isPending}
                /> 
            </FormGroup> 
            <FormGroup Icon={FaLocationDot} labelFor="address" labelText="Dirección" errorMessage={errors.address?.message}>
                <input 
                    {...register('address')}
                    type="text" 
                    name='address' 
                    placeholder='Ingresar direccion' 
                    className="flex w-full outline-none focus:outline-none border-none" 
                    disabled={isPending}
                /> 
            </FormGroup> 
            <FormGroup Icon={FaPhoneFlip} labelFor="phone" labelText="Telefono" errorMessage={errors.phone?.message}>
                <input 
                    {...register('phone')}
                    type="text" 
                    name='phone' 
                    onKeyDown={(event)=> justNumbers(event)}
                    placeholder='Ingresar numero de telefono' 
                    className="flex w-full outline-none focus:outline-none border-none" 
                    disabled={isPending}
                    /> 
            </FormGroup> 
            <FormGroup Icon={FaNoteSticky} labelFor="note" labelText="Nota" errorMessage={errors.notes?.message}>
                <input 
                    {...register('notes')}
                    type="text" 
                    name='note' 
                    placeholder='Agregar nota' 
                    className="flex w-full outline-none focus:outline-none border-none" 
                    disabled={isPending}
                />
            </FormGroup>   
            <FormSuccess message={success} />
            <FormError message={error} />
            <div className='flex w-full items-center gap-2 shadow-md'> 
                <button type='submit' className='bg-primary text-white py-2 w-full text-center rounded-md'>
                    Guardar
                </button>  
            </div>
        </form>
  )
}

export default FormCreateCustomer