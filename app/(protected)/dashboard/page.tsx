import { ClientesChart } from './components/ClientPerDayChart';
import DayPaymentChart from './components/DayPaymentChart';
import { GeneralChart } from './components/GeneralChart';
import LastestTransactions from './components/LastestTransactions';
import { PrestamosChart } from './components/LoanPerDay';
import { PagosChart } from './components/PaymentePerDay';
import ProgressPayments from './components/ProgressPayments';

const page = async () => {
  const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  return (
    <div className="flex flex-col gap-4">
      <ProgressPayments />
      <div className='flex flex-col gap-4 px-4'>
        <LastestTransactions />
        <h2 className="text-lg font-semibold">Metricas</h2>
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
    </div>
  );
};

export default page;
