'use client'
import Header from "@/app/(protected)/components/Header";
import { useCustomersStore } from "@/app/(protected)/customers/store/customerStore";
import { useEffect, useState } from "react";
import LoanInfo from "../components/LoanInfo";
import FilterQuota from "@/app/(protected)/installments/components/FilterQouta";
import ListQuotas from "@/app/(protected)/installments/components/ListInstallments";

interface pageProps {
    params: { id: string }
}

const Page = ({params}:pageProps) => {
    const {customerId, customerName} = useCustomersStore()
    const [loanId, setLoanId] = useState<string>("");

    useEffect(() => {
        const getAsyncData = async () => { setLoanId((await params).id); }
        getAsyncData();

    }, [params, loanId]);

    return (
        <div className='flex flex-col h-screen w-full'>
            <Header title={`Prestamo: ${customerName}`} url={`/customers/view/${customerId}`}/>
            <LoanInfo loanId={loanId}/>
            <FilterQuota />
            <ListQuotas />

        </div>
    )
}

export default Page
