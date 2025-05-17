import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTriangleExclamation, FaCircleCheck } from 'react-icons/fa6';

interface CustomerProps {
  name: string;
  lastname: string;
  totalloan: number;
  img?: string;
  payToday: boolean;
}

const Customer = ({
  name,
  lastname,
  totalloan,
  img,
  payToday,
}: CustomerProps) => {
  return (
    <div className="px-1 mt-2 w-full">
      <Link
        href="/customers/view"
        className="flex items-center justify-between gap-2 bg-white px-4 py-2 rounded-lg shadow-lg"
      >
        <div className="flex gap-2 items-center">
          <div className="bg-gray-300 p-1 rounded-md">
            {img ? (
              <Image src={img} alt="clients" width={30} height={30} />
            ) : (
              <Image
                src="/app/default-user.webp"
                alt="clients"
                width={30}
                height={30}
              />
            )}
          </div>
          <div className="flex flex-col ">
            <p>
              {name} {lastname}
            </p>
            <p className="text-sm font-light">${totalloan}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <ul className="flex gap-2 items-center justify-end text-xl">
            <li className="">
              {payToday ? (
                <FaCircleCheck className="text-success/60 text-base" />
              ) : (
                <FaTriangleExclamation className="text-danger/60 text-base" />
              )}
            </li>
            <li className="">
              <IoIosArrowForward className="text-secondary/50" />
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Customer;
