import FormGroup from '@/app/(protected)/components/FormGroup';
import Image from 'next/image'
import Link from 'next/link' 
import { FaLocationDot, FaPhoneFlip, FaNoteSticky, FaUser } from "react-icons/fa6";

const FormCreateCustomer = () => {
  return (
    <form className='flex flex-col gap-8 py-8 px-4 bg-darkText shadow-md items-center mt-2'>
        <div className='flex items-center justify-center'>
            <Image src={'/app/default-user.webp'} width={40} height={40} alt='userphoto'/> 
        </div>
        <FormGroup Icon={FaUser} labelFor="name" labelText="Nombre">
            <input type="text" name='name' placeholder='Ingresar nombres' className="flex w-full outline-none focus:outline-none border-none" />
        </FormGroup>
        <FormGroup Icon={FaUser} labelFor="lastname" labelText="Apellido">
            <input type="text" name='lastname' placeholder='Ingresar apellidos' className="flex w-full outline-none focus:outline-none border-none" />
        </FormGroup>
        <FormGroup Icon={FaLocationDot} labelFor="address" labelText="Dirección">
            <input type="text" name='address' placeholder='Ingresar direccion' className="flex w-full outline-none focus:outline-none border-none" />
        </FormGroup> 
        <FormGroup Icon={FaPhoneFlip} labelFor="phone" labelText="Telefono">
            <input type="text" name='phone' placeholder='Ingresar numero de telefono' className="flex w-full outline-none focus:outline-none border-none" />
        </FormGroup> 
        <FormGroup Icon={FaNoteSticky} labelFor="note" labelText="Nota">
            <input type="text" name='note' placeholder='Agregar nota' className="flex w-full outline-none focus:outline-none border-none" />
        </FormGroup>  
       <div className='flex w-full items-center gap-2 shadow-md'> 
            <Link href={'/auth/error'} className='bg-primary text-white py-2 w-full text-center rounded-md'>
                Guardar
            </Link>  
        </div>
    </form>
  )
}

export default FormCreateCustomer