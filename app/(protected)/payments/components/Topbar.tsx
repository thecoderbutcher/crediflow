
import Search from './Search';
import { LuCalendarArrowUp, /* LuCalendarArrowDown */ } from "react-icons/lu";

const Topbar = () => {
  return (
    <ul className="flex gap-2 px-2 py-2 items-center text-2xl">
      <li className="w-full">
        <Search />
      </li>
      <li className="bg-darkText border border-secondary/20 shadow-md px-2 py-2 rounded-md">
        <LuCalendarArrowUp />
      </li>
    </ul>
  );
};

export default Topbar;
