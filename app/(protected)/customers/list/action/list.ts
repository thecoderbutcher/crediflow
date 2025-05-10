'use server' 
import { db } from "@/lib/db";

export const list = async (employeeId?: string) => { 
    return await db.customer.findMany({
        where: {
            employeeId: employeeId 
        }
    });
}