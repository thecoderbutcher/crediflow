'use client';
import { useState } from 'react';
import { confirmPayment, rejectPayment } from '../../list/action/list-payments';

interface PaymentInfoProps {
  detail: {
    id: string;
    value: number;
    i_number: number;
    paidDate?: Date;
    expirationDate?: Date;
    loan: {
      amount: number;
      totalInstallments: number;
      customer: {
        firstName: string;
        lastName: string;
        phone: string;
        address: string;
        email: string;
        employee: {
          name: string;
          email: string;
        };
      };
    };
  };
}

const PaymentInfo = ({ detail }: PaymentInfoProps) => {
  const [status, setStatus] = useState(false);

  const handleRejectBtn = async () => {
    await rejectPayment(Number(detail.id));
    setStatus(true);
  };

  const handleConfirmBtn = async () => {
    await confirmPayment(Number(detail.id));
    setStatus(true);
  };
  return (
    <div className="flex flex-col gap-2 bg-darkText py-2 px-4 mb-4 rounded-b-2xl shadow-md">
      <div className="flex flex-col gap-2 w-full pb-4">
        <div className="flex flex-col justify-center items-center gap-4 px-2">
          <p className="text-xl border-b border-secondary/20 w-full">
            Detalles de pago
          </p>
          <div className="flex justify-around w-full">
            <div className="flex flex-col w-full">
              <p className="font-semibold">Pago realizado</p>
              <p className="text-2xl">${detail.value}</p>
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="font-semibold">Detalle de cuota</p>
              <p>
                Nro: {detail.i_number} de {detail.loan.totalInstallments}
              </p>
            </div>
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col w-full">
              <p className="font-semibold">Tipo de pago</p>
              <p className="">Transferencia</p>
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="font-semibold">Fecha de pago</p>
              <p>{detail.paidDate?.toLocaleDateString('es-AR')}</p>
            </div>
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col w-full">
              <p className="font-semibold">Total prestado</p>
              <p className="text-xl">{detail.loan.amount}</p>
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="font-semibold">Fecha de vencimiento</p>
              <p>{detail.expirationDate?.toLocaleDateString('es-AR')}</p>
            </div>
          </div>
          <p className="text-xl border-b border-secondary/20 w-full pt-2">
            Detalles del Cliente
          </p>
          <div className="flex justify-around w-full">
            <div className="flex flex-col w-full">
              <p className="font-semibold">Nombre</p>
              <p className="">
                {detail.loan.customer.firstName} {detail.loan.customer.lastName}
              </p>
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="font-semibold">Telefono</p>
              <p>{detail.loan.customer.phone}</p>
            </div>
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col w-full">
              <p className="font-semibold">Direccion</p>
              <p className="">{detail.loan.customer.address}</p>
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="font-semibold">Email</p>
              <p>{detail.loan.customer.email}</p>
            </div>
          </div>
          <p className="text-xl border-b border-secondary/20 w-full pt-2">
            Detalles del Empleado
          </p>
          <div className="flex justify-around w-full">
            <div className="flex flex-col w-full">
              <p className="font-semibold">Nombre</p>
              <p className="">{detail.loan.customer.employee.name}</p>
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="font-semibold">Telefono</p>
              <p>{detail.loan.customer.employee.email}</p>
            </div>
          </div>
        </div>
      </div>

      {!status ? (
        <div className="flex items-center justify-around border-t py-4 border-gray-200">
          <button
            onClick={handleRejectBtn}
            className="bg-secondary/10 py-2 px-4 rounded-md shadow-md"
          >
            Rechazar pago
          </button>
          <button
            onClick={handleConfirmBtn}
            className="bg-primary text-darkText py-2 px-4 rounded-md shadow-md"
          >
            Confirmar pago
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <p className='py-2 text-secondary/40 text-xl'>Pago cerrado</p>
        </div>
      )}
    </div>
  );
};

export default PaymentInfo;
