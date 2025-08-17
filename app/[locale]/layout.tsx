import type { Metadata } from 'next';
import { ReactNode } from 'react';

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
  return (
    <html lang={locale}>
      <body>
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
      </body>
    </html>
  );
}