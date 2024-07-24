import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import Providers from '@/lib/Providers';
import GlobalStyles from '@/styles/GlobalStyles';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Celsius',
  description: 'Celsius',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <GlobalStyles />
            <Header />
            <Navbar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
