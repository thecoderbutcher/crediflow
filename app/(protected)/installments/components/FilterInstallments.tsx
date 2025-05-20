'use client';
import {
  FaCircleCheck,
  FaCircleXmark,
  FaCircleExclamation,
} from 'react-icons/fa6';
import { useInstallmentStore } from '../store/installmentsStore';
const FilterInstallments = () => {
  const { activeStatuses, toggleStatus } = useInstallmentStore();
  const isActive = (status: number) => activeStatuses.includes(status);

  return (
    <ul className="flex gap-4 px-2 py-2 mt-1 items-center justify-center">
      <li
        className={`flex gap-1 items-center px-2 py-1 font-bold border border-secondary/30 rounded-md shadow-md text-secondary/70 ${isActive(1) ? 'bg-warning' : 'bg-darkText'}`}
        onClick={() => toggleStatus(1)}
      >
        <FaCircleExclamation />
        Pendientes
      </li>
      <li
        className={`flex gap-1 items-center px-2 py-1 font-bold border border-secondary/30 rounded-md shadow-md text-secondary/70 ${isActive(2) ? 'bg-success' : 'bg-darkText'}`}
        onClick={() => toggleStatus(2)}
      >
        <FaCircleCheck />
        Pagadas
      </li>
      <li
        className={`flex gap-1 items-center px-2 py-1 font-bold border border-secondary/30 rounded-md shadow-md text-secondary/70 ${isActive(3) ? 'bg-danger' : 'bg-darkText'}`}
        onClick={() => toggleStatus(3)}
      >
        <FaCircleXmark />
        Vencidas
      </li>
    </ul>
  );
};

export default FilterInstallments;
