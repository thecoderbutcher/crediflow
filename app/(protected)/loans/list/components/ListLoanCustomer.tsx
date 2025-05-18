'use client';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { Loan } from '@prisma/client';

const ListLoanCustomer = ({ listLoan }: { listLoan: Loan[] }) => {
  if (listLoan?.length == 0) {
    return (
      <div className="flex gap-4 mt-8 items-center justify-center text-xl text-secondary/50">
        <FaMoneyBillTransfer className="text-2xl" /> Aun no registra prestamos
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mt-4">
      {listLoan?.map((loan, index) => (
        <Link
          key={index}
          href={`/loans/view/${loan.id}`}
          className={`flex gap-2 items-center justify-between px-4 py-2 bg-white mx-2 rounded-lg shadow-md border-l-4 ${loan.statusId == 1 ? 'border-l-warning' : loan.statusId == 2 ? 'border-l-success' : 'border-l-danger'}`}
        >
          <div className="flex w-full">
            <div className="flex flex-col w-full pr-4">
              <p className="text-xl font-semibold">${loan.amount}</p>
              <p className="font-light text-xs">
                Cuotas: 1/{loan.totalInstallments} | Interes: {loan.interest}%
              </p>
            </div>
            <div className="flex flex-col w-full items-end justify-center">
                <p className="font-light text-xs">Fecha de prestamo</p>
                <p className="font-light text-xs">
                  {loan.createdAt.toLocaleDateString('es-AR')}
                </p>
              </div>
          </div>
          <div>
            <div className="text-xl">
              <IoIosArrowForward className="text-gray-500" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListLoanCustomer;
