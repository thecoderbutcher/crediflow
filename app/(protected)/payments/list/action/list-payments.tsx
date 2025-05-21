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
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

/* export const listPayments = async () => {
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
 */
