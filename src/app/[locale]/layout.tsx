import { ReactNode } from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

// Lista języków, aby uniknąć dynamicznego wywołania w generateStaticParams
const locales = ['en', 'pl'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generuje metadane na podstawie tłumaczeń
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  unstable_setRequestLocale(locale); // <-- WAŻNA ZMIANA
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale); // <-- WAŻNA ZMIANA

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
