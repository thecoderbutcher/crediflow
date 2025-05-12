import React from 'react'
import Header from '@/app/(protected)/components/Header'
import Profile from '../components/Profile'
import { viewCustomers } from '../action/view' 
import ListLoanCustomer from '../components/ListLoanCustomer'
import { listLoanCustomer } from '../action/list-loan-customer'
import { FaMoneyBillTransfer } from "react-icons/fa6";


interface pageProps {
    params: {
        id: string
    }
}
const page = async ({params}: pageProps) => {
    const {id} =  await params
    const customer = await viewCustomers(id) 
    const listloancustomer = await listLoanCustomer(customer?.id || '')
    return (
        <div className='flex flex-col h-screen w-full'>
            <Header title={`Cliente: ${customer?.idperson}` }url='/customers'/>
            {customer && <Profile customer={customer} />}
            {listloancustomer.length > 0
                ? <ListLoanCustomer />
                : <div className='flex gap-4 mt-8 items-center justify-center text-xl text-secondary/50'><FaMoneyBillTransfer className="text-2xl"/> Aun no registra prestamos</div>
            } 
        </div>
    )
}

export default page