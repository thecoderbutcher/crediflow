'use client'
import { logout } from '../action/logout';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        logout();
      }}
      className="flex items-center justify-center gap-2 bg-darkText shadow-md py-2 px-4 rounded-md"
    >
      <FaArrowRightFromBracket />
      Logout
    </button>
  );
};

export default LogoutButton;
