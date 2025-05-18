'use server'
import { db } from "@/lib/db";

export const listCustomers = async (employeeId?: string) => {
  return await db.customer.findMany({
    where: {
      employeeId: employeeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}
