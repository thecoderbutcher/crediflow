import Header from '../components/Header';
import { ClientesChart } from './components/ClientPerDayChart';
import DayPaymentChart from './components/DayPaymentChart';
import FilterDate from './components/FilterDate';
import { GeneralChart } from './components/GeneralChart';
import { PrestamosChart } from './components/LoanPerDay';
import { PagosChart } from './components/PaymentePerDay';
import ProgressPayments from './components/ProgressPayments';

const page = async () => {
  const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  return (
    <div className="flex flex-col gap-4">
      <Header title="Dashboard" />
      <FilterDate />
      <ProgressPayments />
      <GeneralChart
        data={{
          ganancia: 500,
          prestado: 1200,
          capital: 800,
          interes: 300,
          interesMora: 100,
        }}
      />
      <PagosChart labels={labels} data={[4, 7, 5, 8, 6]} />
      <DayPaymentChart />
      <PrestamosChart labels={labels} data={[4, 7, 5, 8, 6]} />
      <ClientesChart labels={labels} data={[4, 7, 5, 8, 6]} />

    </div>
  );
};

export default page;
