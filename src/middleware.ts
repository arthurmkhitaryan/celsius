import createMiddleware from "next-intl/middleware";

export default function middleware(req: any) {
  const intlMiddleware = createMiddleware({
    locales: ["en", "ru", "am"],
    defaultLocale: "am",
    localeDetection: true,
    localePrefix: "always",
  });

  const res = intlMiddleware(req);
  res.headers.set("x-pathname", req.nextUrl.pathname.split("/")[2] || "/");
  return res;
}

export const config = {
  matcher: ["/", "/(ru|en|am)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
