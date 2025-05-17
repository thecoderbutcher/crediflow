import { FaTriangleExclamation, FaCircleCheck } from 'react-icons/fa6';

const FilterStatus = () => {
  return (
    <ul className="flex gap-4 mt-2 px-1">
      <li className="flex gap-1 items-center justify-center border border-primary/60 bg-darkText px-2 py-1 rounded-lg shadow-md">
        <FaCircleCheck className="text-success" />
        Pagaron hoy
      </li>
      <li className="flex gap-1 items-center justify-center border border-primary/60 bg-darkText px-2 py-1 rounded-lg shadow-md">
        <FaTriangleExclamation className="text-danger/80" />
        Pendientes para hoy
      </li>
    </ul>
  );
};

export default FilterStatus;
