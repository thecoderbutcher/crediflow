'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { User } from '@prisma/client';
import { FaUserAltSlash } from 'react-icons/fa';
import { useEmployeesStore } from '../../store/employees';

const ListEmployees = ({ listEmployee }: { listEmployee: User[] }) => {
  const { setEmployees, employeesFiltered } = useEmployeesStore();

  useEffect(() => {
    setEmployees(listEmployee);
  }, [listEmployee, setEmployees]);

  const employees = employeesFiltered();

  if (employees.length == 0) {
    return (
      <div className="flex flex-col gap-4 w-full mt-8 justify-center items-center">
        <p className="flex gap-2 items-center justify-center text-xl text-secondary/40">
          <FaUserAltSlash />
          Aun no has registrado clientes
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full pb-2">
      {employees.map((employee, index) => (
        <div key={index} className="px-1 mt-2 w-full">
          <Link
            href={`/employees/view/${employee.id}`}
            className="flex items-center justify-between gap-2 bg-white px-4 py-2 rounded-lg shadow-md"
          >
            <div className="flex gap-2 items-center">
              <div className="bg-gray-300 p-1 rounded-md">
                <Image
                  src="/app/default-user.webp"
                  alt="clients"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col ">
                <p>
                  {employee.firstName} {employee.lastName}
                </p>
                <p className="text-sm font-light">{employee.phone}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListEmployees;
