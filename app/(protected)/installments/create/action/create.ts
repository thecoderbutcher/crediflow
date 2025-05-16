import { getLoanByCustomerID } from "@/app/(protected)/loans/create/action/create"

export const createInstallments = async (customerId: string ) => {
    const {} = await getLoanByCustomerID(customerId)
}