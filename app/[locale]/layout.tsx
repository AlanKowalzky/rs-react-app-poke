// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// Importujemy komponenty, dostosuj ścieżki jeśli potrzebne
import ThemeSwitcher from '@/app/components/ThemeSwitcher'; 
import { StoreProvider } from '@/StoreProvider'; 

export const metadata: Metadata = {
  title: 'Pokemon App (Migracja)',
  description: 'A Next.js app to browse Pokemon (Migration in progress)',
};

export default async function RootLayout({
  children,
  // Zmień typowanie na Promise
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  // Użyj await na params przed destrukturyzacją
  const { locale } = await params; 
  const messages = await getMessages({ locale }); 

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
           {/* Umieść StoreProvider wewnątrz NextIntlClientProvider */}
           <StoreProvider> 
              <header style={{ backgroundColor: 'lightgray', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> {/* Przykładowe style */}\n              <h1>Nagłówek (Placeholder)</h1> {/* Możesz użyć tłumaczeń tutaj, jeśli header jest komponentem klienckim */}\n              <ThemeSwitcher /> {/* Komponent przełącznika języków i motywu */}\n            </header>\n            <main style={{ padding: '20px' }}>
              {children} 
            </main>
            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
              <p>Stopka (Placeholder)</p>
            </footer>
           </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
