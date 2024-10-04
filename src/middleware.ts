import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'am'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en|am)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
