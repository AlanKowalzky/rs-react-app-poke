// middleware.ts
import { i18n } from './i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (isMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${i18n.defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}
