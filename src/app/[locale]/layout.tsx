import { ReactNode } from 'react';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/Header';
import { NextIntlClientProvider } from 'next-intl';
import StoreProvider from '@/components/StoreProvider';
import { locales } from '@/navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generuje metadane na podstawie tłumaczeń
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  console.log(`[layout.tsx] Renderowanie layoutu dla locale: "${locale}"`);
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-background-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              <main className="container mx-auto p-4 flex-grow">
                {children}
              </main>
              <Footer />
            </NextIntlClientProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
