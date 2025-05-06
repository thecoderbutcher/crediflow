
interface FormGroupProps {
    children: React.ReactNode
    Icon: React.ElementType
    labelFor: string
    labelText: string
}
const FormGroup = ({children, Icon, labelFor, labelText} : FormGroupProps) => {
  return (
    <div className="flex w-full relative items-center px-2 py-1 bg-darkText text-text/90 shadow-md border border-primary/40 rounded-md group">
        <label htmlFor={labelFor} className="absolute left-2 -top-3 bg-darkText px-1 text-sm">{labelText}</label>
        {children}
        <Icon />
    </div>
  )
}

export default FormGroup

 