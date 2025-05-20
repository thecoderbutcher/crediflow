import Header from '@/app/(protected)/components/Header';
import LoanInfo from '../components/LoanInfo'; 
import ListInstallments from '@/app/(protected)/installments/components/ListInstallments';
import { viewInstallments } from '@/app/(protected)/installments/action/installments';
import { viewLoan } from '../action/view';
interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const loans = await viewLoan(Number(id));
  const installments = await viewInstallments(Number(id));

  return (
    <div className="flex flex-col w-full">
      <Header
        title={`Prestamo: ${loans?.customer?.firstName} ${loans?.customer?.lastName}`}
        url={`/customers/view/${loans?.customerId}`}
      />
      {loans && <LoanInfo loan={loans} />}
      {installments && <ListInstallments installments={installments} />}
    </div>
  );
};

export default page;
