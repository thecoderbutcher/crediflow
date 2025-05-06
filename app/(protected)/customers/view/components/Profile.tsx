import Image from "next/image"; 
import Link from "next/link";
import { FaMoneyBillTransfer } from "react-icons/fa6"; 
import { MdModeEdit, MdBlock } from "react-icons/md";


const Profile = () => {
  return (
    <div className='flex flex-col gap-4 bg-light px-4 py-2 rounded-b-4xl shadow-lg'>
        <div className='flex gap-2 items-start justify-between'> 
            <div className="flex items-center gap-2 h-full w-full">
                <div className="bg-gray-300 px-4 py-4 rounded-md">
                    <Image src="/app/default-user.webp" alt="clients" width={40} height={40} />
                </div>
                <div className="flex flex-col text-secondary/90">
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm font-light">calle sin numero 1234</p>
                    <p className="text-sm font-light">+54 11 1234 5678</p>
                    <p className="text-sm font-light">example@mail.com.ar</p>
                </div>
            </div>
            <div className="flex gap-4 flex-col text-xl">
                <div className="bg-darkText border border-secondary p-1 rounded-md shadow-md">
                    <MdModeEdit className="text-secondary/80"/>
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

export default Profile