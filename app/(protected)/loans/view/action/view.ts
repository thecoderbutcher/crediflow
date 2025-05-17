'use server'
import { db } from "@/lib/db";
 
export const viewLoan = async (loanId: number) => {
    return await db.loan.findUnique({where:{id: loanId}, include: {paymentFrequency: true, loanType: true}});
}