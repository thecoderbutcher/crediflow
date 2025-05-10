
interface FormGroupProps {
    children: React.ReactNode
    Icon: React.ElementType
    labelFor: string
    labelText: string
    errorMessage?: string
}
const FormGroup = ({children, Icon, labelFor, labelText, errorMessage} : FormGroupProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">

    <div className="flex w-full relative items-center px-2 py-1 bg-darkText text-text/90 shadow-md border border-primary/40 rounded-md group">
        <label htmlFor={labelFor} className="absolute left-2 -top-3 bg-darkText px-1 text-sm">{labelText}</label>
        {children}
        <Icon />
    </div>
    {errorMessage && ( <p className="text-sm text-danger">{errorMessage}</p> )} 
    </div>
  )
}

export default FormGroup

 