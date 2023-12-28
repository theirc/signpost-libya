import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import { DYNAMIC_CONTENT_LOCALES } from './constants';

export { Locale };

export const LOCALES: { [key: string]: Locale } = {
  'en-us': {
    url: 'en-us',
    direction: 'ltr',
    name: 'English',
    directus: 'en-US',
  },
  ar: { url: 'ar', direction: 'rtl', name: 'العربية', directus: 'ar-SA' },
};

export const LOCALE_CODES_TO_CANONICAL_LOCALE_CODES: { [key: string]: string } =
  {
    en: 'en-us',
    'en-us': 'en-us',
    ar: 'ar',
  };

export function getLocaleFromCode(code: string): Locale {
  return LOCALES[code] ?? LOCALES['en-us'];
}

export const getZendeskLocaleId = (currentLocale: Locale): number => {
  return DYNAMIC_CONTENT_LOCALES[currentLocale.url] || 1;
};
