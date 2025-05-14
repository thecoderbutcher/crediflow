'use client'
import * as z from "zod"
import { zodResolver }from "@hookform/resolvers/zod"
import FormGroup from "@/app/(protected)/components/FormGroup";
import { LoanSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FaMoneyBillAlt,FaPercent, FaCalendarDay, FaStickyNote } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";  
import { FormSuccess } from "@/app/(auth)/components/form-success";
import { FormError } from "@/app/(auth)/components/form-error";
import { create } from "../action/create";
import { useCustomersStore } from "@/app/(protected)/customers/store/customerStore";
interface FormCreateLoanProps {
  loanType: { id: string; name: string }[];
  paymentType: { id: string; name: string }[];
}

const FormCreateLoan = ({ loanType, paymentType }: FormCreateLoanProps) => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { customerId } = useCustomersStore();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof LoanSchema>>({ resolver: zodResolver(LoanSchema) })

    const onSubmit = (values: z.infer<typeof LoanSchema>) => {
        setError('');
        setSuccess(''); 
        startTransition(() => { 
            create(values, customerId).then((data) => {
                if(data.error) { setError(data.error) }
                else{
                    setSuccess(data.success);
                    setTimeout(() => {
                        router.push(`/customers/view/${customerId}`)
                        reset();
                    },2000)

                }
            })
        })
    }
    
    return (
        <form className="flex flex-col gap-6 px-4 py-8 bg-darkText shadow-md" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup Icon={FaMoneyBillAlt} labelFor="typeinteres" labelText="Tipo de interes" errorMessage={errors.loanTypeId?.message}> 
                <select 
                    {...register("loanTypeId")}
                    name="loanTypeId" 
                    className="w-full outline-none focus:outline-none active:outline-none border-none p-2" 
                    disabled={isPending}
                    id="typeinteres"
                > 
                    {loanType.map((item) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))} 
                </select> 
            </FormGroup>
            <FormGroup Icon={FaMoneyBillAlt} labelFor="amount" labelText="Valor" errorMessage={errors.amount?.message}>
                <input 
                    {...register("amount")}
                    type="number"  
                    name="amount" 
                    id="amount" 
                    placeholder="Valor del prestamo" 
                    className=" w-full outline-none focus:outline-none active:outline-none border-none"
                    disabled={isPending} 
                />
            </FormGroup> 
            <FormGroup Icon={FaPercent} labelFor="interest" labelText="Intereses" errorMessage={errors.interest?.message}> 
                <input 
                    {...register("interest")}
                    type="text" 
                    name="interest"
                    placeholder="Ingresar porcentaje de intereses" 
                    className=" w-full outline-none focus:outline-none active:outline-none border-none" 
                    disabled={isPending}
                />  
            </FormGroup>
            <FormGroup Icon={GiReceiveMoney} labelFor="totalInstallments" labelText="Cuotas" errorMessage={errors.totalInstallments?.message}> 
                <input 
                    {...register("totalInstallments")}
                    type="number" 
                    name="totalInstallments"
                    placeholder="Ingrese cantidad de coutas" 
                    className=" w-full outline-none focus:outline-none active:outline-none border-none" 
                    disabled={isPending}
                />  
            </FormGroup>
            <FormGroup Icon={FaMoneyBillAlt} labelFor="paymentFrequencyId" labelText="Frecuencia del pago" errorMessage={errors.paymentFrequencyId?.message}> 
                <select 
                    {...register("paymentFrequencyId")}
                    name="paymentFrequencyId" 
                    className="w-full outline-none focus:outline-none active:outline-none border-none p-2" 
                    disabled={isPending}
                    id="typeinteres"
                >
                    {paymentType.map((item) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))} 
                </select> 
            </FormGroup>
            <FormGroup Icon={FaCalendarDay} labelFor="paymentDate" labelText="Fecha del pago" errorMessage={errors.paymentDate?.message}> 
                <input 
                    {...register("paymentDate")}
                    type="date"
                    name="paymentDate"
                    placeholder="Ingresar fecha de pago"
                    className="w-full outline-none focus:outline-none active:outline-none border-none py-2"
                    disabled={isPending} 
                /> 
            </FormGroup>
            <FormGroup Icon={FaStickyNote} labelFor="notes" labelText="Notas" errorMessage={errors.notes?.message}> 
                <input 
                    {...register("notes")}
                    type="text" 
                    name="notes"
                    placeholder="Notas" 
                    className=" w-full outline-none focus:outline-none active:outline-none border-none"
                    disabled={isPending}
                /> 
            </FormGroup>
            <FormSuccess message={success} />
            <FormError message={error} />
            <div className='flex w-full items-center gap-2  shadow-md'> 
                <button type="submit" className='bg-primary text-darkText py-2 w-full text-center rounded-md'>
                    Guardar
                </button>  
            </div> 
        </form>
    )
}

export default FormCreateLoan