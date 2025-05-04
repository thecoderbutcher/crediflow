'use server';

import * as z from "zod";
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { RegisterSchema } from "@/schema"; 
import { getUserByEmail } from "../../lib/user";
/*import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail"; */

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if(!validateFields.success) return {error:'Error en los datos ingresados!'};

    const {email, password, name} = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);
    if(existingUser) return {error: "Este email ya fue registrado!"}

    await db.user.create({
        data:{
            name, 
            email,
            password: hashedPassword,
        }
    });

    /* const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token); */

    return {success: 'Email de confirmación enviado'};
}