import React from 'react';

export default function HomeHeader() {
  return (
    <div className="fixed top-0 w-full">
      <div className="user-info">
        <img
          class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          alt="Bordered avatar"
        />
      </div>
    </div>
  );
}
