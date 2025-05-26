'use server'
import { db } from "@/lib/db";
import { getLoanByID } from "@/app/(protected)/loans/create/action/create"

interface InstallmentData {
  loanId: number
  value: number
  i_number: number
  expirationDate: Date
}

export const createInstallments = async (loanId: number) => {
  const { id, amountWithInstallments, totalInstallments, paymentDate, paymentFrequencyId } = await getLoanByID(loanId)
  const installmentAmount = Math.ceil(amountWithInstallments / totalInstallments);

  for (let i = 0; i < totalInstallments; i++) {
    let dateExpiration = new Date(paymentDate)
    if (paymentFrequencyId === 1) {
      dateExpiration = new Date(paymentDate.getTime() + (i * 1 * 24 * 60 * 60 * 1000));
    }
    else if (paymentFrequencyId === 2) {
      dateExpiration = new Date(paymentDate.getTime() + (i * 7 * 24 * 60 * 60 * 1000));
    }
    else if (paymentFrequencyId === 3) {
      dateExpiration = new Date(paymentDate.getTime() + (i * 15 * 24 * 60 * 60 * 1000));
    }
    else if (paymentFrequencyId === 4) {
      dateExpiration = new Date(paymentDate.getTime() + (i * 30 * 24 * 60 * 60 * 1000));
    }

    const installmentData: InstallmentData = {
      loanId: id,
      i_number: i + 1,
      value: installmentAmount,
      expirationDate: dateExpiration
    }
    await db.installments.create({
      data: installmentData
    })
  }
}
