'use server'
import * as z from "zod"
import { CustomerSchema } from "@/schema";
import { db } from "@/lib/db"; 

interface CustomerData {
    firstName: string;
    lastName: string;
    email: string;
    idperson: string;
    address: string;
    phone: string;
    notes: string | undefined;
    employeeId?: string;
}

export const createCustomer = async (values: z.infer<typeof CustomerSchema>, employeeId?: string) => {
    
    const validateFields = CustomerSchema.safeParse(values);   

    if (!validateFields.success) {
        return { error: validateFields.error.issues[0].message };
    }

    const { firstName, lastName, email, idperson, address, phone, notes } = validateFields.data;

    const customerData: CustomerData = {
        firstName,
        lastName,
        email,
        idperson,
        address,
        phone,
        notes,
    };

    if (employeeId) customerData.employeeId = employeeId;
    

    await db.customer.create({
        data: customerData,
    });

    return { success: 'Cliente creado' };
};