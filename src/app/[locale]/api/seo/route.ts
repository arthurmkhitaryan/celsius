import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const pathname = searchParams.get("path");
    const locale = searchParams.get("locale") || 'am';

    if (!pathname) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 });
    }

    const encodedPath = encodeURIComponent(pathname);
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[path]=${encodedPath}&populate=metaImage&locale=${strapiLanguageAdapter(locale)}`;

    console.log("🌐 SEO request URL:", url);

    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });

    const seoData = res.data?.data?.[0]?.attributes ?? null;

    if (!seoData) {
      return NextResponse.json({ error: "No SEO data found" }, { status: 404 });
    }

    return NextResponse.json({ seoData });

  } catch (error: any) {
    console.error("❌ SEO API Error:", error?.response?.data || error.message || error);
    return NextResponse.json({ error: "Failed to fetch SEO data" }, { status: 500 });
  }
}
