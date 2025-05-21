import Header from '../components/Header';
import Topbar from './components/Topbar';
import { listPayments } from './list/action/list-payments';
import ListPayments from './list/components/ListPayments';


const page = async() => {
  const payments = await listPayments();
  return (
    <div className="flex flex-col w-full">
      <Header title="Pagos recibidos" url="/dashboard" />
      <Topbar />
      {payments && <ListPayments payments={payments}/> }
    </div>
  );
};

export default page;
