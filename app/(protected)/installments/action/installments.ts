'use server'
import { db } from '@/lib/db';

export const viewInstallments = async (loanId: number) => {
  return await db.installments.findMany({ where: { loanId: loanId } });
}

export const payInstallment = async (installmentId: number) => {
  return await db.installments.update({ where: { id: installmentId }, data: { statusId: 2, paidDate: new Date() } });
}
