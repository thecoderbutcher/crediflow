'use server' 
import { db } from "@/lib/db";

export const listLoanCustomer = async (customerId?: string) => { 
    return await db.loan.findMany({
        where: {
            customerId: customerId 
        }, 
    });
}