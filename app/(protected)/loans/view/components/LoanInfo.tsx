import { useEffect, useState } from "react";
import { viewLoan } from "../action/view";

type LoanInfoProps = {
    loanId: string
}
interface Loan{
    id: number,
    amount: number,
    amountWithInstallments: number,
    interest: number,
    loanTypeId: number,
    paymentDate: Date,
    paymentFrequencyId: number,
    totalInstallments: number,
    customerId: string,
    statusId: number
}
const LoanInfo = ({loanId}: LoanInfoProps) => {
    const [loan, setLoan ] = useState<Loan>();

    useEffect(() => {
        const getLoan = async () => {
            const loanData = await viewLoan(Number(loanId));
            if (loanData) {
                setLoan(loanData);
            } else {
                setLoan(undefined);
            }
        }
        getLoan();
    }, [loanId])
    return (
      <div className="flex flex-col gap-2 bg-darkText py-2 px-4 rounded-b-2xl shadow-md">
          <div className="flex items-center justify-between px-4 mt-2 gap-2">
              <div className="flex flex-col">
                  <p className="font-bold text-4xl">${loan?.amount}</p>
                  <p className="text-sm font-extralight text-center">${loan?.amountWithInstallments}</p>   
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-2xl">{loan?.interest}%</p>
                <p className="text-sm font-extralight text-center">Interes</p>    
              </div>
          </div>
          <div className="flex items-center justify-between px-4 text-secondary/60">
              <div className="flex flex-col items-center">
                  <p className="font-light text-sm">Tipo de interes</p>
                  <p className="text-sm">{loan?.loanType.name}</p>
              </div>
              <div className="flex flex-col items-center">
                  <p className="font-light text-sm">Frecuencia de pagos</p>
                  <p className="text-sm">{loan?.paymentFrequency.name}</p> 
              </div>
          </div>
      </div>
    )
  }
  
  export default LoanInfo