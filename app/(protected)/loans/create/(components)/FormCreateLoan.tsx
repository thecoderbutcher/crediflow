'use client'
import FormGroup from "@/app/(protected)/components/FormGroup";
import Link from "next/link"; 
import { FaMoneyBillAlt,FaPercent, FaCalendarDay, FaStickyNote } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi"; 

const FormCreateLoan = () => {
  return (
    <form className="flex flex-col gap-6 px-4 py-8 bg-darkText shadow-md">
        <FormGroup Icon={FaMoneyBillAlt} labelFor="typeinteres" labelText="Tipo de interes"> 
            <select name="typeinteres" className="w-full outline-none focus:outline-none active:outline-none border-none p-2" id="typeinteres"> 
                <option value="">Interes al capital incial</option>
                <option value="">Interes a cada cuota</option>
                <option value="">Interes compuesto bancario</option>
            </select> 
        </FormGroup>
        <FormGroup Icon={FaMoneyBillAlt} labelFor="laonvalue" labelText="Valor">
            <input 
                type="number"  
                name="laonvalue" 
                id="laonvalue" 
                placeholder="Valor del prestamo" 
                className=" w-full outline-none focus:outline-none active:outline-none border-none" />
        </FormGroup> 
        <FormGroup Icon={FaPercent} labelFor="laonvalue" labelText="Intereses"> 
            <input 
                type="text" 
                placeholder="Ingresar porcentaje de intereses" 
                className=" w-full outline-none focus:outline-none active:outline-none border-none" 
            />  
        </FormGroup>
        <FormGroup Icon={GiReceiveMoney} labelFor="laonvalue" labelText="Cuotas"> 
            <input 
                type="number" 
                placeholder="Ingrese cantidad de coutas" 
                className=" w-full outline-none focus:outline-none active:outline-none border-none" 
            />  
        </FormGroup>
        <FormGroup Icon={FaMoneyBillAlt} labelFor="laonvalue" labelText="Frecuencia del pago"> 
            <select name="typeinteres" className="w-full outline-none focus:outline-none active:outline-none border-none py-2" id="typeinteres"> 
                <option value="">Diario</option>
                <option value="">Semanal</option>
                <option value="">Quincenal</option>
                <option value="">Mensual</option>
            </select> 
        </FormGroup>
        <FormGroup Icon={FaCalendarDay} labelFor="laonvalue" labelText="Fecha del pago"> 
            <input 
                type="date"
                placeholder="Ingresar fecha de pago"
                className="w-full outline-none focus:outline-none active:outline-none border-none py-2" /> 
        </FormGroup>
        <FormGroup Icon={FaStickyNote} labelFor="laonvalue" labelText="Notas"> 
            <input type="text" placeholder="Notas" className=" w-full outline-none focus:outline-none active:outline-none border-none"/> 
        </FormGroup>
        <div className='flex w-full items-center gap-2  shadow-md'> 
            <Link href={'/auth/error'} className='bg-primary text-darkText py-2 w-full text-center rounded-md'>
                Guardar
            </Link>  
        </div> 
    </form>
  )
}

export default FormCreateLoan