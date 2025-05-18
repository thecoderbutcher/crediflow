'use client';
import Header from '@/app/(protected)/components/Header';
import LoanInfo from '../components/LoanInfo';
import FilterQuota from '@/app/(protected)/installments/components/FilterInstallments';
import ListInstallments from '@/app/(protected)/installments/components/ListInstallments';
import { viewInstallments } from '@/app/(protected)/installments/action/installments';
import { Loan, Installments } from '@prisma/client';
import { viewLoan } from '../action/view';
import { useCustomersStore } from '@/app/(protected)/customers/store/customerStore';
import { useEffect, useState } from 'react';
interface pageProps {
  params: { id: string };
}

const Page = ({ params }: pageProps) => {
  const { customerId, customerName } = useCustomersStore();
  const [loan, setLoan] = useState<Loan>();
  const [installments, setInstallments] = useState<Installments[]>([]);

  useEffect(() => {
    const getAsyncData = async () => {
      const loanId = Number((await params).id);

      const loanData = await viewLoan(loanId);
      if (loanData) setLoan(loanData);
      else setLoan(undefined);

      const installmentsData = await viewInstallments(loanId);
      setInstallments(installmentsData);
    };
    getAsyncData();
  }, [params, setLoan]);

  return (
    <div className="flex flex-col h-screen w-full">
      <Header
        title={`Prestamo: ${customerName}`}
        url={`/customers/view/${customerId}`}
      />
      {loan && <LoanInfo loan={loan} />}
      <FilterQuota />
      {installments && <ListInstallments installments={installments} />}
    </div>
  );
};

export default Page;
