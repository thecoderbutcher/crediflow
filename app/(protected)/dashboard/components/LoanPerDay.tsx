'use client';
import { Bar } from 'react-chartjs-2';
import { baseBarOptions } from './BaseChartConfig';

interface PrestamosChartProps {
  labels: string[];
  data: number[];
}

export const PrestamosChart: React.FC<PrestamosChartProps> = ({ labels, data }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-3xl mx-auto my-4">
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Préstamos por día',
              data,
              backgroundColor: '#F59E0B',
            },
          ],
        }}
        options={baseBarOptions('Préstamos por Día')}
      />
    </div>
  );
};