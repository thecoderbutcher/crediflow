'use server'; 
import * as z from 'zod';
import { NewPasswordSchema } from '@/schema';
import { getPasswordResetTokenByToken } from '../../lib/reset-password-token';
import { getUserByEmail } from '../../lib/user';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';

export const newPassword = async ( 
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null,
) => {
    if(!token) {return {error: 'Token no válido!'}}

    const validateFields = NewPasswordSchema.safeParse(values);
    if(!validateFields.success){ return {error: "Campos no validos!"}}

    const { password } = validateFields.data;
    const existingToken = await getPasswordResetTokenByToken(token);

    if(!existingToken){ return {error: 'Token no valido!'}}

    const hasExpired = new Date(existingToken.expires) < new Date();
    if(hasExpired){ return {error:'El token ha expirado!'}};

    const existingUser = await getUserByEmail(existingToken.email);
    if(!existingUser){ return {error:'Email no registrado!'}}

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where:{id: existingUser.id},
        data:{ password: hashedPassword },
    });

    await db.passwordResetToken.delete({
        where:{id: existingToken.id}
    });

    return {success: "Contraseña actualizada!"}

}