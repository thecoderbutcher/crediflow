'use server'
import * as z from "zod"
import { LoanSchema } from "@/schema";
import { db } from "@/lib/db"

interface LoanData {
  loanTypeId: string;
  amount: number;
  interest: number;
  installments: number;
  paymentFrequencyId: string;
  paymentDate: string;
  customerId: string;
  notes?: string;
}

export const getLoanType = async () => {
    return await db.loanType.findMany();
}

export const getPaymentType = async () => {
    return await db.paymentFrequency.findMany()
}

export const create = async (values: z.infer<typeof LoanSchema>, customerId: string) => {
    const validateFields = LoanSchema.safeParse(values);

    if (!validateFields.success) return { error: validateFields.error.issues[0].message }  
 
    const { loanTypeId, amount, interest, installments, paymentFrequencyId, paymentDate, notes} = validateFields.data;

    const loanData: LoanData = {
        loanTypeId,
        amount,
        interest,
        installments,
        paymentFrequencyId,
        paymentDate,
        notes,
        customerId
    };

    try {
        console.log(loanData);
        return { success: 'Préstamo creado con éxito' };
    } 
    catch{ return { error: 'Error al crear el préstamo' } }
}