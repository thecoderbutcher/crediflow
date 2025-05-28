'use client';
import Link from 'next/link';

import { FaUserPlus } from 'react-icons/fa6';
import {
  LiaSortAlphaDownSolid,
  LiaSortAlphaDownAltSolid,
} from 'react-icons/lia';
import { useState } from 'react';
import Search from '../list/components/Search';

const Topbar = () => {
  const [isAlphaFilter, setIsAlphaFilter] = useState(false);

  const handleToggleOrderName = () => {
    setIsAlphaFilter(!isAlphaFilter);
  };

  return (
    <ul className="flex gap-2 px-2 w-full items-center text-2xl">
      <li className="bg-darkText border border-secondary/20 shadow-secondary/20 shadow-md px-2 py-2 rounded-md">
        <Link href="/employees/create">
          <FaUserPlus />
        </Link>
      </li>
      <li className="w-full">
        <Search />
      </li>
      <li
        className="bg-darkText border border-secondary/20 shadow-secondary/20 shadow-md px-2 py-2 rounded-md"
        onClick={() => handleToggleOrderName()}
      >
        {!isAlphaFilter ? (
          <LiaSortAlphaDownSolid />
        ) : (
          <LiaSortAlphaDownAltSolid />
        )}
      </li>
    </ul>
  );
};

export default Topbar;
