import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!['en', 'pl'].includes(locale)) notFound();
  return {
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
