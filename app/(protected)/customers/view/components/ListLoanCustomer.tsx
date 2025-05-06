import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io' 

const ListLoanCustomer = () => {
  return (
    <div className='flex flex-col gap-4 mt-2'>
        <Link href={'/loans/quotas'} className='flex gap-2 items-center justify-between px-4 py-2 bg-white mx-2 rounded-lg shadow-md border-l-4 border-l-danger'> 
            <div className='flex flex-col w-full'>
              <div className='flex items-center justify-between w-full pr-4'>
                <p className='text-xl font-semibold'>$1000</p>
                <p className='font-light text-xs'>02/03/2025</p>
              </div>
              <p className='font-light text-sm'>Coutas: 1/6 | Intereses: 20%</p>
            </div>
            <div>
            <div className="text-xl">
                <IoIosArrowForward className="text-gray-500"/> 
            </div>
            </div>
        </Link>
        
    </div>
  )
}

export default ListLoanCustomer