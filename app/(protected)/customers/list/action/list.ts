'use server' 
import { db } from "@/lib/db";

export const list = async (employeeId?: string) => { 
    return await db.customer.findMany({
        select: { 
            id: true,
            firstName: true,
            lastName: true,   
            statusPay: true,
        },
        where: {
            employeeId: employeeId 
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}