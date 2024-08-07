import HomeLayout from '@/components/templates/HomeLayout';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      <div className="main-content pt-100px">{children}</div>
    </HomeLayout>
  );
}
