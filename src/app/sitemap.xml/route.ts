// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function fetchStrapiData(endpoint: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${endpoint}`, {
    headers: {
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return res.json();
}

export async function GET() {
  const [news, products, categories] = await Promise.all([
    fetchStrapiData("news"),
    fetchStrapiData("products"),
    fetchStrapiData("categories"),
  ]);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Статическая страница (например, главная)
  xml += `<url>\n`;
  xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/</loc>\n`;
  xml += `<lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += `<changefreq>daily</changefreq>\n`;
  xml += `<priority>1.0</priority>\n`;
  xml += `</url>\n`;

  xml += `<url>\n`;
  xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/careers</loc>\n`;
  xml += `<lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += `<changefreq>daily</changefreq>\n`;
  xml += `<priority>1.0</priority>\n`;
  xml += `</url>\n`;

  xml += `<url>\n`;
  xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/contact-us</loc>\n`;
  xml += `<lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += `<changefreq>daily</changefreq>\n`;
  xml += `<priority>1.0</priority>\n`;
  xml += `</url>\n`;

  xml += `<url>\n`;
  xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/about-us</loc>\n`;
  xml += `<lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += `<changefreq>daily</changefreq>\n`;
  xml += `<priority>1.0</priority>\n`;
  xml += `</url>\n`;

  news.data.forEach((item: { id: number; attributes: { slug: string; updatedAt: string } }) => {
    xml += `<url>\n`;
    xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/newsroom/${item.attributes.slug}</loc>\n`;
    xml += `<lastmod>${new Date(item.attributes.updatedAt).toISOString()}</lastmod>\n`;
    xml += `<changefreq>daily</changefreq>\n`;
    xml += `<priority>0.8</priority>\n`;
    xml += `</url>\n`;
  });

  products.data.forEach((item: { id: number; attributes: { slug: string; updatedAt: string } }) => {
    xml += `<url>\n`;
    xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/${item.attributes.slug}</loc>\n`;
    xml += `<lastmod>${new Date(item.attributes.updatedAt).toISOString()}</lastmod>\n`;
    xml += `<changefreq>weekly</changefreq>\n`;
    xml += `<priority>0.7</priority>\n`;
    xml += `</url>\n`;
  });

  categories.data.forEach((item: { id: number; attributes: { slug: string; updatedAt: string } }) => {
    xml += `<url>\n`;
    xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/categories/${item.attributes.slug}</loc>\n`;
    xml += `<lastmod>${new Date(item.attributes.updatedAt).toISOString()}</lastmod>\n`;
    xml += `<changefreq>weekly</changefreq>\n`;
    xml += `<priority>0.6</priority>\n`;
    xml += `</url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
