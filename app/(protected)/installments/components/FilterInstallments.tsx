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
        className={`flex gap-1 items-center px-2 py-1 font-extrabold rounded-2xl cursor-pointer shadow-md ${isActive(1) ? 'bg-warning/15 text-warning' : 'bg-mutedText/40 text-secondary/50'}`}
        onClick={() => toggleStatus(1)}
      >
        <FaCircleExclamation />
        Pendientes
      </li>
      <li
        className={`flex gap-1 items-center px-2 py-1 font-extrabold rounded-2xl cursor-pointer shadow-md ${isActive(2) ? 'bg-success/15 text-success' : 'bg-mutedText/40 text-secondary/50'}`}
        onClick={() => toggleStatus(2)}
      >
        <FaCircleCheck />
        Pagadas
      </li>
      <li
        className={`flex gap-1 items-center px-2 py-1 font-extrabold rounded-2xl cursor-pointer shadow-md ${isActive(3) ? 'bg-danger/15 text-danger' : 'bg-mutedText/40 text-secondary/50'}`}
        onClick={() => toggleStatus(3)}
      >
        <FaCircleXmark />
        Vencidas
      </li>
    </ul>
  );
};

export default FilterInstallments;
