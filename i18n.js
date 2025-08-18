// i18n.js
import { getRequestConfig } from 'next-intl';

export default getRequestConfig(async ({ locale }) => ({ 
  messages: (await import(`./messages/${locale}.json`)).default,
}));

// Konfiguracja i18n
export const locales = ['en', 'pl'];
export const defaultLocale = 'pl';
