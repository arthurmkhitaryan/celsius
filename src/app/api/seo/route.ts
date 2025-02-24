import { NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pathname = searchParams.get("path");

    if (!pathname) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 });
    }
  console.log({ pathname, token: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` });
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[path]=${pathname}&populate=metaImage`;

    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });

    const seoData = res.data.data[0].attributes || null;
    return NextResponse.json({ seoData });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch SEO data" }, { status: 500 });
  }
}
