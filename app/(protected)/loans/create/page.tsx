import Header from "../../components/Header"
import FormCreateLoan from "./(components)/FormCreateLoan"

const page = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header title="Agregar prestamos" url="/loans" />
        <FormCreateLoan />
    </div>
  )
}

export default page