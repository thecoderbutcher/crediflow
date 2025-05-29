import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col w-full items-center gap-4 text-light bg-gradient-to-tl from-[#101b3b] via-[#212d5d] to-[#303d78] px-4 py-8 rounded-b-2xl shadow-secondary/60 shadow-lg mb-8">
      <div className="bg-secondary rounded-full p-4">Pimage</div>
      <div className='flex flex-col text-center'>
        <p className="text-2xl font-semibold">Username and lastname</p>
        <p className='text-base font-light'>example@emaiil.com</p>
        <p className='text-sm font-extralight'>UserRol</p>
      </div>
    </div>
  );
};

export default Profile;
