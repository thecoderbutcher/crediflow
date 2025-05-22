import Header from '@/app/(protected)/components/Header';
import PaymentInfo from '../components/PaymentInfo';
import { paymentDetails } from '../../list/action/list-payments';
interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const payment = await paymentDetails(Number(id));
  
  return (
    <div className="flex flex-col w-full">
      <Header title={`Detalle de pago`} url={`/payments/`} />
      {payment ? (
        <PaymentInfo detail={payment} />
      ) : (
        <div>No se encontró el pago.</div>
      )}
    </div>
  );
};

export default page;
