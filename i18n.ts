import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'pl'];

export default getRequestConfig(async ({ locale }) => {
  // Sprawdź, czy locale jest obsługiwane, jeśli nie, zwróć 404
  // `locale` jest teraz przekazywane bezpośrednio z middleware.
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
