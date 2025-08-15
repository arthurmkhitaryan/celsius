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

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const headersList = headers();
  const locale = params.locale;
  const fullPath = headersList.get('x-pathname') || '/';
  const pathname = fullPath.replace(new RegExp(`^${locale}/`), "") || "/";

  try {
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const url = `${protocol}://${host}/${locale}/api/seo?path=${encodeURIComponent(
      pathname === locale ? "/" : pathname
    )}&locale=${locale}`;
    console.log('>>>url', url);
    
    const res = await fetch(url, { cache: "no-store" });
    
    if (!res.ok) {
      console.warn(`⚠️ SEO API returned ${res.status}, using fallback metadata`);
      return {
        title: "Celsius",
        description: "Celsius"
      };
    }

    const { seoData } = await res.json();

   return {
    title: seoData?.metaTitle || "Celsius – Կլիմատիկ լուծումներ Հայաստանում",
    description: seoData?.metaDescription || "Celsius — առաջատար կլիմատիկ համակարգերի և օդորակիչների վաճառքի, տեղադրման և սպասարկման ոլորտում Հայաստանում։",
    keywords: seoData?.metaKeywords || "Celsius, Celsius AM, Celsius Armenia, օդորակիչներ, կլիմատիկ համակարգեր Հայաստան",
    openGraph: {
      title: seoData?.metaTitle || "Celsius – Կլիմատիկ լուծումներ Հայաստանում",
      description: seoData?.metaDescription || "Celsius — առաջատար կլիմատիկ համակարգերի և օդորակիչների վաճառքի, տեղադրման և սպասարկման ոլորտում Հայաստանում։"
    }
   };
  } catch (error) {
    console.error("❌ Ошибка получения SEO:", error);
    return {
      title: "Celsius – Կլիմատիկ լուծումներ Հայաստանում",
      description: "Celsius — առաջատար կլիմատիկ համակարգերի և օդորակիչների վաճառքի, տեղադրման և սպասարկման ոլորտում Հայաստանում։",
      keywords: "Celsius, Celsius AM, Celsius Armenia, օդորակիչներ, կլիմատիկ համակարգեր Հայաստան",
      openGraph: {
        title: "Celsius – Կլիմատիկ լուծումներ Հայաստանում",
        description: "Celsius — առաջատար կլիմատիկ համակարգերի և օդորակիչների վաճառքի, տեղադրման և սպասարկման ոլորտում Հայաստանում։",
      }
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
