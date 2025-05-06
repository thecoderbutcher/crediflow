import Image from 'next/image'
import Link from 'next/link' 
import { FaLocationDot, FaPhoneFlip, FaNoteSticky, FaUser } from "react-icons/fa6";


const AddClientForm = () => {
  return (
    <form className='flex flex-col justify-center gap-8 py-8 px-4 bg-darkText shadow-md items-center mt-2'>
        <div className='flex items-center justify-center'>
            <Image src={'/app/default-user.webp'} width={40} height={40} alt='userphoto'/> 
        </div>
        <div className='flex gap-2 px-2 items-center w-full border border-primary shadow-md rounded-md'> 
            <input type="text" placeholder='Nombres' className="w-full focus:outline-none border-none" />
            <FaUser />
        </div>
        <div className='flex gap-2 px-2 items-center w-full border border-primary shadow-md rounded-md'> 
            <input type="text" placeholder='Apellido' className="w-full focus:outline-none border-none"/>
            <FaUser />
        </div>
        <div className='flex gap-2 px-2 items-center w-full border border-primary shadow-md rounded-md'> 
            <input type="text" placeholder='Dirección' className="w-full focus:outline-none border-none"/>
            <FaLocationDot />
        </div>
        <div className='flex gap-2 px-2 items-center w-full border border-primary shadow-md rounded-md'> 
            <input type="text" placeholder='Telefono' className="w-full focus:outline-none border-none"/>
            <FaPhoneFlip />
        </div>
        <div className='flex gap-2 px-2 items-center w-full border border-primary shadow-md rounded-md'> 
            <input type="text" placeholder='Notas' className="w-full focus:outline-none border-none" />
            <FaNoteSticky />
        </div>
       <div className='flex w-full items-center gap-2 shadow-md'> 
            <Link href={'/auth/error'} className='bg-primary text-white py-2 w-full text-center rounded-md'>
                Guardar
            </Link>  
        </div>
    </form>
  )
}

export default AddClientForm