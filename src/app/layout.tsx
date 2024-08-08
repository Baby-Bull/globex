'use client';

// These styles apply to every route in the application
import NextAuthProvider from '@/app/providers/NextAuthProvider';
import '@/styles/global.scss';
import { Open_Sans, Inter } from 'next/font/google';

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
