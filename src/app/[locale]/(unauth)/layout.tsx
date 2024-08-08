import AuthWrapper from '@/app/providers/AuthWrapper';
import HomeLayout from '@/components/templates/HomeLayout';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthWrapper>
      <HomeLayout>
        <div className="main-content pt-16">{children}</div>
      </HomeLayout>
    </AuthWrapper>
  );
}
