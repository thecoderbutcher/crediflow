import { FaArrowUp, FaArrowDown, FaBan } from 'react-icons/fa6';

const LastestTransactions = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-semibold">Ultimos movimientos</h2>
        <p className="text-base font-light">Ver todo</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between items-center bg-white px-4 py-2 rounded-lg shadow-secondary/20 shadow-md">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <FaArrowUp className='text-success'/>
            </div>
            <div className="flex flex-col">
              <p>Nombre Cliente</p>
              <p className="font-light text-sm">Pago recibido</p>
            </div>
          </div>
          <div>$0000</div>
        </div>

        <div className="flex gap-2 justify-between items-center bg-white px-4 py-2 rounded-lg shadow-secondary/20 shadow-md">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <FaArrowDown className='text-warning'/>
            </div>
            <div className="flex flex-col">
              <p>Nombre Cliente</p>
              <p className="font-light text-sm">Prestamo solicitado</p>
            </div>
          </div>
          <div>$0000</div>
        </div>

        <div className="flex gap-2 justify-between items-center bg-white px-4 py-2 rounded-lg shadow-secondary/20 shadow-md">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <FaBan className='text-danger'/>
            </div>
            <div className="flex flex-col">
              <p>Nombre Cliente</p>
              <p className="font-light text-sm">Prestamo vencido</p>
            </div>
          </div>
          <div>$0000</div>
        </div>
      </div>
    </div>
  );
};

export default LastestTransactions;
