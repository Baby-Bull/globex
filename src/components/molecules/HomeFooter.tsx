import React from 'react';
import ActiveBag from '../atoms/icons/ActiveBagIcon';
import HomeIcon from '../atoms/icons/HomeIcon';
import ActiveHomeIcon from '../atoms/icons/ActiveHomeIcon';
import FindIcon from '../atoms/icons/FindIcon';
import FavoriteIcon from '../atoms/icons/FavoriteIcon';
import UserIcon from '../atoms/icons/UserIcon';

const ListMenuItems = [
  {
    inActiveIcon: <HomeIcon />,
    activeIcon: <ActiveHomeIcon width={28} height={30} />,
    isActivated: false,
    label: 'home',
  },
  {
    inActiveIcon: <FindIcon />,
    activeIcon: <FindIcon />,
    isActivated: false,
    label: 'home',
  },
  {
    inActiveIcon: <FavoriteIcon />,
    activeIcon: <FavoriteIcon />,
    isActivated: false,
    label: 'home',
  },
  {
    inActiveIcon: <ActiveBag />,
    activeIcon: <ActiveBag />,
    isActivated: false,
    label: 'home',
  },
  {
    inActiveIcon: <UserIcon width={32} height={32} viewBox="0 0 32 32" />,
    activeIcon: <UserIcon width={32} height={32} />,
    isActivated: false,
    label: 'home',
  },
];

const HomeFooter = () => {
  return (
    <div className="fixed bottom-0 w-full px-7 pb-4 pt-3 [box-shadow:0px_3px_15px_0px_black]">
      <ul className="flex justify-between">
        {ListMenuItems.map((item, index) => {
          return (
            <li key={index} className="">
              {item.activeIcon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeFooter;
