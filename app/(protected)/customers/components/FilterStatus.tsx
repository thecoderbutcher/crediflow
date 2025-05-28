import { FaTriangleExclamation, FaCircleCheck } from 'react-icons/fa6';

const FilterStatus = () => {
  return (
    <ul className="flex gap-4 px-1">
      <li className="flex gap-1 items-center justify-center border border-secondary/20 bg-darkText px-2 py-1 rounded-lg shadow-secondary/20 shadow-md">
        <FaCircleCheck className="text-success" />
        <p>Pagaron hoy</p>
      </li>
      <li className="flex gap-1 items-center justify-center border border-secondary/20 bg-darkText px-2 py-1 rounded-lg shadow-secondary/20 shadow-md">
        <FaTriangleExclamation className="text-warning" />
        <p>Pendientes para hoy</p>
      </li>
    </ul>
  );
};

export default FilterStatus;
