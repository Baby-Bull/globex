// /components/AuthWrapper.js
'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthWrapper = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) {
      const callbackUrl = window.location.pathname + window.location.search;
      router.push(`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  }, [session, status, router]);

  if (status === 'loading' || !session) {
    return <div>Loading...</div>; // Show loading state or nothing while redirecting
  }

  return children;
};

export default AuthWrapper;
