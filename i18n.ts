import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }: { locale?: string | undefined }) => ({
  messages: (await import(`./messages/${locale ?? defaultLocale}.json`)).default,
  locale: locale ?? defaultLocale,
}));

export const locales = ['en', 'pl'];
export const defaultLocale = 'pl';
