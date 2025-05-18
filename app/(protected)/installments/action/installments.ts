'use server'
import { db } from '@/lib/db';

export const viewInstallments = async (loanId: number) => {
  return await db.installments.findMany({where:{loanId: loanId}});
}
