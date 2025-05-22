import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaMoneyCheckDollar, FaUserGear, FaUserGroup } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="fixed z-10 bottom-0 p-4 bg-light rounded-t-xl w-full text-3xl">
      {/* Desktop Menu */}
      {/* <ul className="hidden lg:flex gap-12 w-full justify-center">
        <li>
          <Link href="/dashboard">
            <MdDashboard />
          </Link>
        </li>
      </ul> */}
      {/* Mobile Menu */}
      <ul className="flex gap-12 w-full justify-center items-center lg:hidden text-3xl">
        <li>
          <Link href="/dashboard">
            <MdDashboard />
          </Link>
        </li>
        <li>
          <Link href="/customers">
            <FaUserGroup />
          </Link>
        </li>
        <li>
          <Link href="/payments">
            <FaMoneyCheckDollar />
          </Link>
        </li>
        <li>
          <Link href="/employees">
            <FaUserGear />
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <IoSettingsSharp />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
