// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { StoreProvider } from '@/StoreProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

// Generuje metadane na podstawie tłumaczeń
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

// Generuje statyczne ścieżki dla języków
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    // Język jest już ustawiony w głównym app/layout.tsx, ale możemy go tu nadpisać
    // dla pewności i lepszej semantyki.
    <div lang={locale} className={inter.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto p-4">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </StoreProvider>
      </NextIntlClientProvider>
    </div>
  );
}
