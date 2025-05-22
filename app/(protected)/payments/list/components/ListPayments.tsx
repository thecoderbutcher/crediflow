'use client';

import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
interface Payment {
  id: number;
  value: number;
  paidDate: Date | null;
  loan: {
    customer: {
      employee: {
        name: string | null;
      };
    };
  };
}

interface ListPaymentsProps {
  payments: Payment[];
}

const ListPayments = ({ payments }: ListPaymentsProps) => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {payments?.map((payment, index) => (
        <Link
          key={index}
          href={`/payments/view/${payment.id}`}
          className="flex gap-2 items-center justify-between px-2 py-2 bg-white mx-2 rounded-lg shadow-md border-l-4 border-success"
        >
          <div className="flex flex-col">
            <p className="flex items-center gap-1 text-2xl font-semibold">
              ${payment.value}
            </p>
            <div className="flex flex-col gap-1 font-light text-xs text-secondary/60">
              <p className="flex items-center gap-1">
                {payment.loan.customer.employee.name}
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="flex flex-col w-full justify-end items-end">
              <p className="font-light text-xs">Fecha de pago:</p>
              <p className="font-light text-xs">
                {payment.paidDate?.toLocaleDateString('es-AR')}
              </p>
            </div>
            <div className="text-xl">
              <IoIosArrowForward className="text-gray-500" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListPayments;
