'use client';

import React from 'react';
import FindIcon from '../atoms/icons/FindIcon';
import COLORS from '@/constants/Colors';
import { useSession } from 'next-auth/react';

export default function HomeHeader() {
  const { data, status } = useSession();
  console.log(data);
  console.log(status);
  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-7 py-3.5 [box-shadow:0px_-4px_17px_-3px_black]">
      <div className="user-info flex items-center">
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={data?.user?.image}
          alt={data?.user?.name}
        />
        <p className="username ml-5 font-semibold">{data?.user?.name}</p>
      </div>
      <div className="search-section">
        <FindIcon width={20} height={20} color={COLORS.black} />
      </div>
    </div>
  );
}
