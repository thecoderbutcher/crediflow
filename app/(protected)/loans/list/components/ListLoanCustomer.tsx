'use client'
import Link from 'next/link' 
import { IoIosArrowForward } from 'react-icons/io' 
import { listLoanCustomer } from '../action/list-loan-customer'
import { useEffect, useState } from 'react'
import { useCustomersStore } from '@/app/(protected)/customers/store/customerStore'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

interface ListLoanCustomerProps {
  id: number; 
  notes: string; 
  createdAt: Date; 
  updatedAt: Date; 
  amount: number; 
  interest: number; 
  loanTypeId: number; 
  paymentDate: Date; 
  paymentFrequencyId: number; 
  totalInstallments: number; 
  customerId: string; 
  statusId: number; 
}
const ListLoanCustomer = () => {
  const [listLoan, setListLoan] = useState<ListLoanCustomerProps[] | undefined>(undefined)
  const { customerId } = useCustomersStore();

  useEffect(() => {
    console.log(customerId)
    const fetchData = async () => {
      const loanData = await listLoanCustomer(customerId);
      setListLoan(loanData);
    }

    fetchData();
    
  },[customerId])
  
  if(listLoan?.length == 0){
    return (
      <div className='flex gap-4 mt-8 items-center justify-center text-xl text-secondary/50'><FaMoneyBillTransfer className="text-2xl"/> Aun no registra prestamos</div>
    )
  }

  return (
    <div className='flex flex-col gap-3 mt-4'>
        {listLoan?.map((loan, index) => (
          <Link 
            key={index} 
            href={'/loans/quotas'} 
            className={`flex gap-2 items-center justify-between px-4 py-2 bg-white mx-2 rounded-lg shadow-md border-l-4 ${loan.statusId == 1 ? 'border-l-warning' : loan.statusId == 2 ? 'border-l-success' : 'border-l-danger'}`}
          > 
              <div className='flex flex-col w-full'>
                <div className='flex items-center justify-between w-full pr-4'>
                  <p className='text-xl font-semibold'>${loan.amount}</p>
                  <p className='font-light text-xs'>{loan.createdAt.toDateString()}</p>
                </div>
                <p className='font-light text-sm'>
                  Coutas: 1/{loan.totalInstallments} | 
                  Intereses: {loan.interest}</p>
              </div>
              <div>
              <div className="text-xl">
                  <IoIosArrowForward className="text-gray-500"/> 
              </div>
              </div>
          </Link>  
        ))}
        
    </div>
  )
}

export default ListLoanCustomer