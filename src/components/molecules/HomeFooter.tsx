import React from 'react';
import ActiveBag from '../atoms/icons/ActiveBag';

const ListMenuItems = [
  {
    inActiveIcon: <ActiveBag />,
    activeIcon: <ActiveBag />,
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
    inActiveIcon: <ActiveBag />,
    activeIcon: <ActiveBag />,
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
    inActiveIcon: <ActiveBag />,
    activeIcon: <ActiveBag />,
    isActivated: false,
    label: 'home',
  },
];

const HomeFooter = () => {
  return (
    <div className="fixed bottom-0 w-full px-7 pb-5 pt-3 [box-shadow:0px_3px_15px_0px_black]">
      <ul class="flex justify-between">
        {ListMenuItems.map((item, index) => {
          return <li class="">{item.activeIcon}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomeFooter;
