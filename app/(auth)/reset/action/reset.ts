'use server';
import * as z from 'zod';

import { ResetSchema } from '@/schema';
import { getUserByEmail } from '../../lib/user';
import { sendPasswordReset } from '../../lib/mail';
import { generatePasswordResetToken } from '../../lib/token';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Email no valido!" };
  }

  const { email } = validateFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email no encontrado!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordReset(
    passwordResetToken.email,
    passwordResetToken.token,
  )


  return { success: "Email de restablecimiento enviado!" }
}
