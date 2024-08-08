'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: '/en/sign-in' });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

const Homepage = () => {
  return (
    <div>
      Homepage
      {/* <LogoutButton /> */}
    </div>
  );
};

export default Homepage;
