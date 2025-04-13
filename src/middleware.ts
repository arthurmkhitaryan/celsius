// middleware.ts
import createMiddleware from "next-intl/middleware";

export default function middleware(req: any) {
  const intlMiddleware = createMiddleware({
    locales: ["en", "ru", "am"],
    defaultLocale: "am",
    localeDetection: true,
    localePrefix: "always",
  });

  const res = intlMiddleware(req);

  const locale = req.nextUrl.locale;
  const pathname = req.nextUrl.pathname;

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pathWithoutLocale = normalizedPath.replace(new RegExp(`^/${locale}`), "") || "/";
  res.headers.set("x-pathname", pathWithoutLocale);

  return res;
}

export const config = {
  matcher: ["/", "/(ru|en|am)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
