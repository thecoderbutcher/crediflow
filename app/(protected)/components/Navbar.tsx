import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { IoPeopleSharp, IoSettingsSharp, IoMenu } from 'react-icons/io5';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="fixed z-10 bottom-0 p-4 bg-light rounded-t-xl w-full text-3xl">
      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-12 w-full justify-center">
        <li>
          <Link href="/dashboard">
            <MdDashboard />
          </Link>
        </li>
      </ul>
      {/* Mobile Menu */}
      <ul className="flex gap-12 w-full justify-center lg:hidden">
        <li>
          <Link href="/dashboard">
            <MdDashboard />
          </Link>
        </li>
        <li>
          <Link href="/customers">
            <IoPeopleSharp />
          </Link>
        </li>
        <li>
          <Link href="/payments">
            <FaMoneyCheckDollar />
          </Link>
        </li>
        <li>
          <Link href="/admin/profile">
            <IoSettingsSharp />
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <IoMenu />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
