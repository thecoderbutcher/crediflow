import { BsExclamationTriangle } from "react-icons/bs"

interface FormErrorProps {
    message?: string
}
export const FormError = ({message}: FormErrorProps) => {
    if (!message) return null
    
    return (
        <div className="flex items-center gap-x-2 text-base text-danger bg-danger/10 rounded-md p-2">
            <BsExclamationTriangle className='h-4 w-4'/>
            <p>{message}</p>
        </div>
    )
}
