'use server'
import * as z from "zod"
import { LoanSchema } from "@/schema";
import { db } from "@/lib/db"

interface LoanData {
  loanTypeId: number;
  amount: number;
  amountWithInstallments: number;
  interest: number;
  totalInstallments: number;
  paymentFrequencyId: number;
  paymentDate: string;
  customerId: string;
  notes?: string;
}

export const getLoanType = async () => { return await db.loanType.findMany(); }

export const getPaymentType = async () => { return await db.paymentFrequency.findMany() }

export const create = async (values: z.infer<typeof LoanSchema>, customerId: string) => {
    const validateFields = LoanSchema.safeParse(values);

    if (!validateFields.success) return { error: validateFields.error.issues[0].message }  
 
    const { loanTypeId, amount, interest, totalInstallments, paymentFrequencyId, paymentDate, notes} = validateFields.data;
    
    const loanWithInstallments = () => {
        let result = 0;
        switch (Number(loanTypeId)) {
            case 1:
                result = (amount + (amount * ( interest / 100 ) * totalInstallments)) 
                break;
            case 2:
                const amortization = amount / totalInstallments;
                let rest = amount;
                for (let i = 1; i <= totalInstallments; i++) {
                    result += amortization + (rest * ( interest / 100 ));
                    rest -= amortization;
                }
                break;
            case 3:
                result = amount * Math.pow(1 + (interest / 100), totalInstallments);
                break;
        }
        return Math.ceil(result);
    } 

    const loanData: LoanData = {
        amount,
        amountWithInstallments: loanWithInstallments(),
        customerId,
        loanTypeId: Number(loanTypeId),
        paymentFrequencyId: Number(paymentFrequencyId),
        interest,
        totalInstallments,
        paymentDate: new Date(paymentDate).toISOString(),
        notes,
    };

    try {
        await db.loan.create({ data: loanData });
        return { success: 'Préstamo creado con éxito' };
    } 
    catch(err){ return { error: 'Error al crear el préstamo' + err } }
}

export const getLoanByCustomerID = async (id: string) => {
    return await db.loan.findFirstOrThrow({
        where: {
            customerId: id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}