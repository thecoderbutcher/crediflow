import Header from "../../components/Header"
import FormCreateLoan from "./(components)/FormCreateLoan"

const page = () => {
  return (
    <div>
        <Header title="Agregar prestamos" url="/loans" />
        <FormCreateLoan />
    </div>
  )
}

export default page