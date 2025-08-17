import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata: Metadata = {
  title: 'Pokemon App (Migracja)',
  description: 'A Next.js app to browse Pokemon (Migration in progress)',
};

export default async function RootLayout({
  children,
  params, // Przyjmujemy cały obiekt params
}: {
  children: ReactNode;
  // Nadal oczekujemy obiektu params z polem locale typu string w typowaniu
  params: { locale: string };
}) { 
  // Jawne odczytanie locale
  const locale = params.locale;

  // Pobierz wiadomości do przekazania do ClientProvider
  const messages = useMessages(); // Użyj useMessages w Server Component

  return (
    <html lang={locale}>
      <body>
        {/* Opakowujemy zawartość body w NextIntlClientProvider */}
        <NextIntlClientProvider locale={locale} messages={messages}>
        <header style={{ backgroundColor: 'lightgray', padding: '10px' }}>
          <h1>Nagłówek (Placeholder)</h1>
          <p>Obecny język: {locale}</p>
        </header>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
          <p>Stopka (Placeholder)</p>
        </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}