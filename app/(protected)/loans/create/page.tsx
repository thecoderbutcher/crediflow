import Header from "../../components/Header"
import FormCreateLoan from "./components/FormCreateLoan"
import { getLoanType, getPaymentType } from "./action/create"

const page = async () => {
  const loanType = await getLoanType()
  const paymentType = await getPaymentType()
  return (
    <div className="flex flex-col">
        <Header title="Agregar prestamos" url="/loans" />
        <FormCreateLoan loanType={loanType} paymentType={paymentType} />
    </div>
  )
}

export default page