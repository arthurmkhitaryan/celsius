export const strapiLanguageAdapter = (locale: string): string => {
  switch (locale) {
    case 'am':
      return 'hy';
    default:
      return locale;
  }
};
