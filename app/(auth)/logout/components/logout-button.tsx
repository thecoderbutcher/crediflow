import { signOut } from '@/auth';
import { FaArrowRightToBracket } from "react-icons/fa6";
const LogoutButton = async () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className='flex items-center justify-center gap-2 bg-darkText shadow-md py-2 px-4 rounded-md'>
        <FaArrowRightToBracket/>
        Logout
        </button>
    </form>
  );
};

export default LogoutButton;
