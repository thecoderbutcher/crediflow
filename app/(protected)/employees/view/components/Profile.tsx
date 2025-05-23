import { User } from "@prisma/client";
import Image from "next/image";

const Profile = ({employee}: User) => {
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
              {employee?.firstName} {employee?.lastName}
            </p>
            <p className="text-base font-light">{employee?.phone}</p>
            <p className="text-base font-light">{employee?.address}</p>
            <p className="text-base font-light">{employee?.email}</p>
          </div>
        </div>
      </div>
      <div>Prestamos activos</div>
    </div>
  );
};

export default Profile;
