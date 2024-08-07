import React from 'react';
import HomeHeader from '../molecules/HomeHeader';
import HomeFooter from '../molecules/HomeFooter';

type HomeLayoutProps = {
  children: React.ReactElement;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
