import FilterInstallments from '@/app/(protected)/installments/components/FilterInstallments';
import { Loan } from '@prisma/client';

const LoanInfo = ({ loan }: { loan: Loan }) => {
  return (
    <div className="flex flex-col gap-2 bg-darkText py-2 px-4 mb-4 rounded-b-2xl shadow-md">
      <div className="flex items-center justify-between px-4 mt-2 gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-sm font-bold">Capital prestado</p>
            <p className="font-light text-3xl">${loan?.amount}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">Capital a devolver</p>
            <p className="flex items-center font-light gap-1 text-xl">
              ${loan?.amountWithInstallments}{' '}
              <span className="text-sm">(Interes: {loan?.interest}%)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <p className="text-base font-semibold">
              Total de cuotas: {loan?.totalInstallments}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Tipo de interes</p>
            <p className="text-sm font-light">{loan?.loanType.name}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Frecuencia de pagos</p>
            <p className="text-sm font-light">{loan?.paymentFrequency.name}</p>
          </div>
        </div>
      </div>
      <div className='flex gap-4 justify-around'>
        <button className='bg-accent px-2 py-1 rounded-md shadow-md'>
          Dar por Perdido
        </button>
        <button className='bg-accent px-2 py-1 rounded-md shadow-md'>
          Aplicar Interes
        </button>
      </div>
      <div className="flex items-center justify-center border-t  border-gray-200">
        <FilterInstallments />
      </div>
    </div>
  );
};

export default LoanInfo;
