import { useEffect, useState } from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { viewInstallments } from '../action/installments';

type InstallmentsProps = {
  value: number;
  expirationDate: Date;
  statusId: number;
};

const ListInstallments = () => {
  const [installments, setInstallments] = useState<InstallmentsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await viewInstallments(12);
      setInstallments(data);
    };
    fetchData();
  }, [setInstallments]);
  return (
    <div className='flex flex-col gap-2'>
      {installments.map((installment, index) => (
        <div key={index} className={`flex justify-between items-center bg-darkText py-2 px-4 rounded-lg shadow-md border-l-4 ${installment.statusId == 1 ? "border-l-warning" : installment.statusId == 2 ? "border-l-success" : "border-l-danger"}`}>
          <div className="flex w-full pr-4 items-center justify-between">
            <div className="flex flex-col">
              <p className="font-light text-sm">Saldo a pagar</p>
              <p>${installment.value}</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-light text-xs">Fecha a vencer</p>
              <p className="text-xs">{installment.expirationDate.toLocaleDateString('es-AR')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MdCheckBoxOutlineBlank className="text-2xl" />
          </div>
        </div>
      ))}
  </div>
  );
};

export default ListInstallments;
