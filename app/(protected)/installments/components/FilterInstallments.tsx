import {
  FaCircleCheck,
  FaCircleXmark,
  FaCircleExclamation,
} from 'react-icons/fa6';

const FilterInstallments = () => {
  return (
    <ul className="flex gap-4 px-2 py-2 mt-1 items-center justify-center">
      <li className="flex gap-1 items-center px-2 py-1 font-bold border border-secondary/30 rounded-md shadow-md text-secondary/70 bg-warning">
        <FaCircleExclamation />
        Pendientes
      </li>
      <li className="flex gap-1 items-center px-2 py-1 font-bold border border-secondary/30 rounded-md shadow-md text-secondary/70 bg-success">
        <FaCircleCheck />
        Pagadas
      </li>
      <li className="flex gap-1 items-center px-2 py-1 font-bold border border-secondary/30 rounded-md shadow-md text-secondary/70 bg-danger">
        <FaCircleXmark />
        Vencidas
      </li>
    </ul>
  );
};

export default FilterInstallments;
