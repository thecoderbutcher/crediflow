import Header from '../components/Header';
import FilterStatus from './components/FilterStatus';
import ListCustomer from './list/components/ListCustomer';
import Topbar from './components/Topbar';
import { auth } from '@/auth';
import { listCustomers } from './list/action/list';

const page = async () => {
  const session = await auth();
  const customerList = (await listCustomers(session?.user.id)).map(
    customer => ({
      ...customer,
      statusPay: customer.statusPay ?? false, // Default to false if null
    })
  );

  return (
    <div className="flex flex-col w-full">
      <Header title="Clientes" url="/dashboard" />
      <Topbar />
      <FilterStatus />
      <ListCustomer listCustomer={customerList} />
    </div>
  );
};

export default page;
