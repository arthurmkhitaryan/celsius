'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getImageUrl } from '@/utils/getImageFullUrl';

const fetchSEO = async (pathname: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[path]=${pathname.split('/')[2]}&populate=metaImage`,
      {
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        }
      }
    );

    const data = await res.json();

    return data?.data?.[0]?.attributes || null;
  } catch (error) {
    console.error("Ошибка получения SEO:", error);
    return null;
  }
};

const SeoProvider = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const [seoData, setSeoData] = useState<any>(null);

  useEffect(() => {
    const loadSEO = async () => {
      const data = await fetchSEO(pathname);
      setSeoData(data);
    };

    loadSEO();
  }, [pathname]); // Вызываем при изменении пути
  console.log(seoData);
  return (
    <Head>
      <title>{seoData?.metaTitle || "Celsius"}</title>
      <meta name="description" content={seoData?.metaDescription || "Celsius"} />
      <meta name="keywords" content={seoData?.metaKeywords || "default, keywords"} />
      <meta property="og:title" content={seoData?.metaTitle || "Celsius"} />
      <meta property="og:description" content={seoData?.metaDescription || "Celsius"} />
      {seoData?.metaImage?.data?.attributes?.url && (
        <meta property="og:image" content={getImageUrl(seoData.metaImage)} />
      )}
    </Head>
  );
};

export default SeoProvider;
