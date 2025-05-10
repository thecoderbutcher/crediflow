'use server'
import { db } from "@/lib/db";
 
export const viewCustomers = async (customerId: string) => {
    return await db.customer.findUnique({where:{id: customerId}});
}