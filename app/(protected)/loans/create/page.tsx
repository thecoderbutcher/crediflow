'use client'
import Header from "../../components/Header"
import FormCreateLoan from "./components/FormCreateLoan"
import { getLoanType, getPaymentType } from "./action/create" 
import { useCustomersStore } from "../../customers/store/customerStore"
import { useEffect, useState } from "react"

const Page = () => { 
  const { customerId } = useCustomersStore();
  const [loanType, setLoanType] = useState<{ name: string; id: number }[] | null>(null);
  const [paymentType, setPaymentType] = useState<{ name: string; id: number }[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const loanTypeData = await getLoanType();
      const paymentTypeData = await getPaymentType();
      setLoanType(loanTypeData);
      setPaymentType(paymentTypeData);
    };

    fetchData();
  }, []);

  if (!loanType || !paymentType) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }
  return (
    <div className="flex flex-col">
        <Header title="Agregar prestamos" url={`/customers/view/${customerId}`} />
        <FormCreateLoan loanType={loanType} paymentType={paymentType} />
    </div>
  )
}

export default Page