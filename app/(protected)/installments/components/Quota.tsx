import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Quota = () => {
  return (
    <div className="flex justify-between items-center bg-darkText py-2 px-4 rounded-lg shadow-md border-l-4 border-l-warning">
        <div className="flex w-full pr-4 items-center justify-between">
            <div className="flex flex-col">
                <p className="font-light text-sm">Saldo a pagar</p>
                <p>$0000</p>
            </div>
            <div className="flex flex-col justify-end items-end">
                <p className="font-light text-xs">Fecha a vencer</p>
                <p className="text-xs">00/00/0000</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <MdCheckBoxOutlineBlank className="text-2xl" /> 
        </div>
    </div>
  )
}

export default Quota