'use server'
import { db } from "@/lib/db";

export const viewCustomers = async (customerId: string) => {
  return await db.customer.findUnique({ where: { id: customerId } });
}

export const blockCustomer = async (customerId: string) => {
  return await db.customer.update({ where: { id: customerId }, data: { status: false } });
}

export const unblockCustomer = async (customerId: string) => {
  return await db.customer.update({ where: { id: customerId }, data: { status: true } });
}
