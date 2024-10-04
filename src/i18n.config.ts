import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ru', 'am'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'ENG',
  ru: 'RUS',
  am: 'ARM',
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales },
);
