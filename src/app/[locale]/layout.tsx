import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import Providers from '@/lib/Providers';
import GlobalStyles from '@/styles/GlobalStyles';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { getUserFromToken } from '@/services/authService';
import { cookies } from 'next/headers';
import ClientWrapper from '@/store/client-wrapper';

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
  const messages = await getMessages();
  const cookieStore = cookies()
  ;
  const token = cookieStore.get('access_token')?.value;
  const user = await getUserFromToken(token || '');

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <GlobalStyles />
            <div style={{ position: 'fixed', width: '100%', zIndex: 999, background: '#fff', top: 0 }}>
              <Header user={user} />
              <Navbar />
            </div>
            <div style={{ paddingTop: '150px' }} />
            <ClientWrapper user={user}>
              {children}
            </ClientWrapper>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
