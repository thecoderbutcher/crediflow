'use server';
import { db } from '@/lib/db';

export const listPayments = async () => {
  return await db.installments.findMany({
    where: {
      statusId: 2, // payment id is paid
      confirmationPaid: false,
    },
    include: {
      loan: {
        include: {
          customer: {
            include: {
              employee: {
                select: {
                  id: true,
                  firstName: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

export const paymentDetails = async (id: number) => {
  return await db.installments.findUnique({
    where: {
      id,
    },
    include: {
      loan: {
        include: {
          customer: {
            include: {
              employee: true,
            },
          },
          loanType: true,
          paymentFrequency: true,
          status: true,
        },
      },
      status: true,
    },
  });
};

export const confirmPayment = async (installmentId: number) => {
  return await db.installments.update({
    where: { id: installmentId },
    data: {confirmationPaid: true},
  });
};

export const rejectPayment = async (installmentId: number) => {
  return await db.installments.update({
    where: { id: installmentId },
    data: {statusId: 1 },
  });
};
