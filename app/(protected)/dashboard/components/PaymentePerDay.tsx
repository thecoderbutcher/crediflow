'use client';
import { Bar } from 'react-chartjs-2';
import { baseBarOptions } from './BaseChartConfig';

interface PagosChartProps {
  labels: string[];
  data: number[];
}

export const PagosChart: React.FC<PagosChartProps> = ({ labels, data }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-3xl mx-auto my-4">
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Pagos por día',
              data,
              backgroundColor: '#10B981',
            },
          ],
        }}
        options={baseBarOptions('Pagos por Día')}
      />
    </div>
  );
};