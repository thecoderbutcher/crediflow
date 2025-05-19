'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoneyBillTransfer, FaWhatsapp } from 'react-icons/fa6';
import { MdModeEdit, MdBlock } from 'react-icons/md';
import { useCustomersStore } from '../../store/customerStore';
import { useEffect } from 'react';

interface Customer {
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    email: string;
  };
}

const Profile = ({ customer }: Customer) => {
  const { customerId, setCustomerId, setCustomerName } = useCustomersStore();

  useEffect(() => {
    setCustomerId(customer.id);
    setCustomerName(`${customer.firstName} ${customer.lastName}`);
  }, [
    customer?.id,
    setCustomerId,
    customerId,
    customer?.firstName,
    customer?.lastName,
    setCustomerName,
  ]);

  return (
    <div className="flex flex-col gap-2 bg-light px-4 py-2 rounded-b-4xl shadow-md">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex items-start gap-2 h-full w-full">
          <div className="bg-gray-300 h-full px-4 py-7 rounded-md">
            <Image
              src="/app/default-user.webp"
              alt="clients"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col text-secondary/90">
            <p className="font-bold text-xl">
              {customer?.firstName} {customer?.lastName}
            </p>
            <p className="text-base font-light">{customer?.phone}</p>
            <p className="text-base font-light">{customer?.address}</p>
            <p className="text-base font-light">{customer?.email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="bg-darkText border border-secondary p-1 rounded-md shadow-md">
            <a href={`https://wa.me/${customer?.phone}`}>
              <FaWhatsapp className="text-success" />
            </a>
          </div>
          <div className="bg-darkText border border-secondary p-1 rounded-md shadow-md">
            <MdModeEdit className=" " />
          </div>
          <div className="bg-darkText border border-secondary p-1 rounded-md shadow-md">
            <MdBlock className="text-danger/80" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        <Link
          href={'/loans/create'}
          className="flex items-center bg-primary gap-1 text-darkText border border-primary px-2 py-1 rounded-lg shadow-md"
        >
          <FaMoneyBillTransfer className="text-2xl font-extrabold" />
          <p>Agregar prestamo</p>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
