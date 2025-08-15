import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

export const dynamic = "force-dynamic";

// Fallback metadata when Strapi is not available
const FALLBACK_METADATA = {
  metaTitle: "Celsius - Premium Heating Solutions",
  metaDescription: "Discover top-quality heating solutions and temperature control systems from Celsius",
  metaKeywords: "celsius, heating solutions, temperature control, celsius.am",
  metaImage: {
    data: null
  }
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const pathname = searchParams.get("path");
    const locale = searchParams.get("locale") || 'am';

    if (!pathname) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 });
    }

    // If we're in development and Strapi isn't running, return fallback immediately
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️  Development mode: Using fallback SEO data');
      return NextResponse.json({ seoData: FALLBACK_METADATA });
    }

    const encodedPath = encodeURIComponent(pathname);
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[path]=${encodedPath}&populate=metaImage&locale=${strapiLanguageAdapter(locale)}`;

    console.log("🌐 SEO request URL:", url);

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
        // Add timeout to prevent hanging
        timeout: 3000
      });

      const seoData = res.data?.data?.[0]?.attributes ?? null;

      if (!seoData) {
        console.warn("⚠️ SEO data not found in Strapi, using fallback.");
        return NextResponse.json({ seoData: FALLBACK_METADATA });
      }

      return NextResponse.json({ seoData });
    } catch (error) {
      console.error("❌ SEO API Error:", error instanceof Error ? error.message : 'Unknown error');
      return NextResponse.json({ seoData: FALLBACK_METADATA });
    }
  } catch (error: any) {
    console.error("❌ Unexpected error in SEO route:", error?.message || 'Unknown error');
    return NextResponse.json({ seoData: FALLBACK_METADATA });
  }
}
