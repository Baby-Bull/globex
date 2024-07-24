'use client';

// These styles apply to every route in the application
import NextAuthProvoder from '@/app/providers/NextAuthProvoder';
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
        <NextAuthProvoder>{children}</NextAuthProvoder>
      </body>
    </html>
  );
}
