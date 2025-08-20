import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  // Lista wszystkich wspieranych języków
  locales: ['en', 'pl'],

  // Domyślny język, jeśli żaden nie pasuje
  defaultLocale: 'en',
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Przekieruj z /en lub /pl do /en/search lub /pl/search
  if (pathname === '/en' || pathname === '/pl') {
    return NextResponse.redirect(new URL(`${pathname}/search`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Dopasuj tylko do ścieżek z internacjonalizacją
  matcher: ['/', '/(pl|en)/:path*'],
};