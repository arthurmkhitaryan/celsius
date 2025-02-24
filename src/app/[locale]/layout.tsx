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
import { cookies, headers } from 'next/headers';
import ClientWrapper from '@/store/client-wrapper';

const poppins = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { locale: string; slug?: string[] } }): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";

  try {
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'http'; //Change only after live

    const res = await fetch(`${protocol}://${host}/api/seo?path=${pathname}`, {
      cache: 'no-store',
    }).then(res => res.json());

    console.log({ json: res.json(), res });

    const { seoData } = await res.json();

    return {
      title: seoData?.metaTitle || 'Celsius',
      description: seoData?.metaDescription || 'Celsius',
      keywords: seoData?.metaKeywords || 'default, keywords',
      openGraph: {
        title: seoData?.metaTitle || 'Celsius',
        description: seoData?.metaDescription || 'Celsius',
      },
    };
  } catch (error) {
    console.error('❌ Ошибка получения SEO:', error);
    return {
      title: 'Celsius',
      description: 'Celsius',
    };
  }
}


// @ts-ignore
export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  const cookieStore = cookies();
  const token = cookieStore.get('access_token')?.value;
  const user = await getUserFromToken(token || '');

  return (
    <html lang={locale}>
    <body className={poppins.className}>
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <GlobalStyles />
        <div style={{ position: 'fixed', width: '100%', zIndex: 999, background: '#fff', top: 0 }}>
          <Header />
          <Navbar />
        </div>
        <div className={'wrapper'} />
        <ClientWrapper user={user}>{children}</ClientWrapper>
        <Footer />
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
