'use client'
import Image from 'next/image';
import Link from 'next/link'; 
import { FaCircleCheck, FaTriangleExclamation } from 'react-icons/fa6';
import { FaUserAltSlash } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io'; 
import { useCustomersStore } from '../../store/customerStore';
import { useEffect } from 'react';

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  statusPay: boolean;
}
const ListCustomer = ({ listCustomer }: { listCustomer: Customer[] }) => {  
  const { customers, setCustomers } = useCustomersStore();

  useEffect(() => {
    setCustomers(listCustomer);
  }, [listCustomer, setCustomers]); 
  if(customers.length == 0){
    return(
      <div className='flex flex-col gap-4 w-full mt-8 justify-center items-center'>
        <p className='flex gap-2 items-center justify-center text-xl text-secondary/40'>
          <FaUserAltSlash />
          Aun no has registrado clientes
        </p>
        <Link href="/customers/create" className="flex items-center bg-primary gap-1 text-darkText border border-primary px-2 py-1 rounded-lg shadow-md">Agregar cliente</Link>
      </div>
    )
  }
  return (
    <div className='flex flex-col w-full mt-2'>
        {customers.map((customer, index) => (
          <div key={index} className="px-1 mt-2 w-full">
            <Link href={`/customers/view/${customer.id}`} className="flex items-center justify-between gap-2 bg-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex gap-2 items-center">
                <div className="bg-gray-300 p-1 rounded-md"> 
                  <Image src="/app/default-user.webp" alt="clients" width={30} height={30}/>
                </div>
                <div className="flex flex-col ">
                  <p>{customer.firstName} {customer.lastName}</p>
                  <p className="text-sm font-light">$totalloan</p>
                </div>
              </div>
              <div className="flex justify-end">
                <ul className="flex gap-2 items-center justify-end text-xl"> 
                  <li className="">
                    {customer.statusPay ? <FaCircleCheck className="text-success/60 text-base"/> : <FaTriangleExclamation className="text-danger/60 text-base"/> }
                  </li>
                  <li className="">
                  <IoIosArrowForward className="text-secondary/50"/> 
                  </li>
                </ul> 
              </div> 
            </Link>
          </div>
        ))}  
    </div>
  )
}

export default ListCustomer