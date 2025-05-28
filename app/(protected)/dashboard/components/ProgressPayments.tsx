import { FaCalendarDay, FaBell } from 'react-icons/fa';
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowRight,
} from 'react-icons/fa6';

const ProgressPayments = () => {
  return (
    <div className="flex flex-col gap-4 text-light bg-gradient-to-tl from-[#101b3b] via-[#212d5d] to-[#303d78] px-4 py-8 rounded-b-2xl shadow-secondary/60 shadow-lg">
      <div className="flex justify-between items-center pb-1">
        <div className="flex flex-col">
          <p className="text-xs font-light">Bienvenido</p>
          <p className="text-sm font-semibold">Nombre de usuario</p>
        </div>
        <div className="flex gap-4">
          <div>
            <FaBell />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <p className='font-semibold text-lg'>Progreso de cobros</p>
        <div className="flex gap-2">
          <div className="text-white">
            <FaCalendarDay />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="text-4xl font-semibold">$0</p>
          <p className="text-base font-light">de $0</p>
        </div>
        <div className="w-full max-w-md">
          <div className="mb-2 text-sm flex justify-between">
            <span>Cobrado: $00</span>
            <span>Total: $00</span>
          </div>
          <div className="w-full h-4 border border-primary/60 bg-neutral rounded-full overflow-hidden">
            <div className="h-full  transition-all duration-300" />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              <FaArrowUp className="text-success text-lg" />
              <div className="flex flex-col">
                <p className="text-xs font-extralight">Ingresos</p>
                <p className="">$000</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FaArrowDown className="text-warning text-lg" />
              <div className="flex flex-col">
                <p className="text-xs font-extralight">Egresos</p>
                <p className="">$000</p>
              </div>
            </div>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <p className='text-sm'>Ver todo</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPayments;
