// i18n.ts - Diagnostyka
    import { getRequestConfig } from 'next-intl/server';
    import { notFound } from 'next/navigation';

    const locales = ['en', 'pl'];

    export default getRequestConfig(async ({ locale }) => {
      if (!locales.includes(locale as any)) notFound();

      // Spróbujmy explicitnie await na imporcie
  const messages = (await import(`@/messages/${locale}.json`)).default;

      return { locale, messages };
    });
