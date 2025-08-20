import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista wszystkich wspieranych języków
  locales: ['en', 'pl'],

  // Domyślny język, jeśli żaden nie pasuje
  defaultLocale: 'en',
});

export const config = {
  // Dopasuj tylko do ścieżek z internacjonalizacją
  matcher: ['/', '/(pl|en)/:path*'],
};