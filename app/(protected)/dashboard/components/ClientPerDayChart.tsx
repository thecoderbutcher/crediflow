'use client';
import { Bar } from 'react-chartjs-2';
import { baseBarOptions } from './BaseChartConfig';

interface ClientesChartProps {
  labels: string[];
  data: number[];
}

export const ClientesChart: React.FC<ClientesChartProps> = ({
  labels,
  data,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-3xl mx-auto my-4">
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Clientes por día',
              data,
              backgroundColor: '#3B82F6',
            },
          ],
        }}
        options={baseBarOptions('Clientes por Día')}
      />
    </div>
  );
};
