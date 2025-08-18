// middleware.ts
import i18n, { locales, defaultLocale } from './i18n'; // Explicitly import locales and defaultLocale
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'; // Use named import

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isMissingLocale = locales.every(
    (locale: string) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}` // Fix: Check for exact match as well
  );

  if (isMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}