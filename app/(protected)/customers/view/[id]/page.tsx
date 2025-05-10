import React from 'react'
import { viewCustomers } from '../action/view'
import Image from 'next/image'
import { MdBlock, MdModeEdit } from 'react-icons/md'
import Link from 'next/link'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

interface pageProps {
    params: {
        id: string
    }
}
const page = async ({params}: pageProps) => {
    const customer = await viewCustomers(params.id)
    return (
        <div className='flex flex-col gap-4 bg-light px-4 py-2 rounded-b-4xl shadow-lg'>
            <div className='flex gap-2 items-start justify-between'> 
                <div className="flex items-center gap-2 h-full w-full">
                    <div className="bg-gray-300 px-4 py-4 rounded-md">
                        <Image src="/app/default-user.webp" alt="clients" width={40} height={40} />
                    </div>
                    <div className="flex flex-col text-secondary/90">
                        <p className="font-bold">{customer?.firstName} {customer?.lastName}</p>
                        <p className="text-sm font-light">{customer?.address}</p>
                        <p className="text-sm font-light">{customer?.phone}</p>
                        <p className="text-sm font-light">{customer?.email}</p>
                    </div>
                </div>
                <div className="flex gap-4 flex-col text-xl">
                    <div className="bg-darkText border border-secondary p-1 rounded-md shadow-md">
                        <MdModeEdit className=" "/>
                    </div>
                    <div className="bg-darkText border border-secondary p-1 rounded-md shadow-md">
                        <MdBlock className="text-danger/80"/>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10">
                <Link href={'/loans/create'} className="flex items-center bg-primary gap-1 text-darkText border border-primary px-2 py-1 rounded-lg shadow-md">
                    <FaMoneyBillTransfer className="text-2xl"/>
                    <p>Agregar prestamo</p>
                </Link>
            </div>
        </div>
    )
}

export default page