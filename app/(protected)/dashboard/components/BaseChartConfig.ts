import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const baseBarOptions = (title: string) => ({
  indexAxis: 'y' as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: title },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  },
});
