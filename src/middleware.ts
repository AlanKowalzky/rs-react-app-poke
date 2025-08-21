import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { localePrefix, locales } from './navigation'; // Upewnij się, że ten import jest poprawny

export default function middleware(request: NextRequest) {
  console.log('--- MIDDLEWARE START ---');
  console.log(`[Middleware] Otrzymano żądanie dla: ${request.nextUrl.pathname}`);

  const handle = createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix,
  });

  try {
    const response = handle(request);
    console.log(`[Middleware] Przetworzono żądanie. Status odpowiedzi: ${response.status}`);
    response.headers.forEach((value, key) => console.log(`[Middleware] Nagłówek odpowiedzi: ${key}: ${value}`));
    console.log('--- MIDDLEWARE END ---\n');
    return response;
  } catch (error) {
    console.error('[Middleware] ZŁAPANO BŁĄD WEWNĄTRZ MIDDLEWARE:', error);
    throw error; // Rzuć błąd dalej, aby zobaczyć go w logach serwera
  }
}

export const config = {
  // Dopasuj tylko do ścieżek z internacjonalizacją
  matcher: ['/', '/(pl|en)/:path*'],
};