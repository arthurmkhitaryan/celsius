import React from 'react';

// components
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalStyles from '@/styles/GlobalStyles';
import Providers from '@/lib/Providers';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

// styles
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const poppins = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Celsius',
  description: 'Celsius',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <GlobalStyles />
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
