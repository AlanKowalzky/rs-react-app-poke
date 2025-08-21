import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './src/navigation';

export default createMiddleware({
  // Lista wszystkich wspieranych języków
  locales,

  // Domyślny język, jeśli żaden nie pasuje
  defaultLocale: 'en',
  localePrefix,
});

export const config = {
  // Dopasuj tylko do ścieżek z internacjonalizacją
  matcher: ['/', '/(pl|en)/:path*'],
};