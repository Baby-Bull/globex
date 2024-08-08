import { SessionProvider } from 'next-auth/react';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider
      // Re-fetch session every 60 minutes
      refetchInterval={60 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={false}
    >
      {children}
    </SessionProvider>
  );
};

export default NextAuthProvider;
