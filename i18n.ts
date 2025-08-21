import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './src/navigation';

export default getRequestConfig(async ({ locale }) => {
  console.log(`[i18n.ts] Konfiguracja dla locale: "${locale}"`);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
